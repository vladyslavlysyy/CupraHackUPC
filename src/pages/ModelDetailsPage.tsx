import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useModels } from '../context/ModelsContext';
import ModelHero from '../components/ModelHero';
import ModelSpecs from '../components/ModelSpecs';
import ModelViewer from '../components/ModelViewer';
import Gallery from '../components/Gallery';
import Footer from '../components/Footer';

const ModelDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { models } = useModels();
  const navigate = useNavigate();
  
  // Find the model with the matching ID
  const model = models.find(m => m.id === id);
  
  useEffect(() => {
    // If model doesn't exist, redirect to home page
    if (!model && models.length > 0) {
      navigate('/');
    }
    
    // Set page title
    if (model) {
      document.title = `CupraViewer | ${model.name}`;
    }
  }, [model, models.length, navigate]);
  
  if (!model) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p>Loading...</p>
      </div>
    );
  }
  
  return (
    <div>
      <ModelHero model={model} />
      <ModelSpecs model={model} />
      
      <div className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 uppercase">CUPRA 360°</h2>
          <ModelViewer modelPath={model.model3D} modelName={model.name} />
        </div>
      </div>
      
      <Gallery modelId={model.id} />
      <Footer />
    </div>
  );
};

export default ModelDetailsPage;