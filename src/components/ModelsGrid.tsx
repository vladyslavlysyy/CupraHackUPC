import React from 'react';
import ModelCard from './ModelCard';
import { useModels } from '../context/ModelsContext';

const ModelsGrid: React.FC = () => {
  const { models } = useModels();

  return (
    <section id="models" className="py-16 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold uppercase mb-4">Nuestra Gama</h2>
          <p className="text-xl text-gray-300">Selecciona un modelo para explorar</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {models.map(model => (
            <ModelCard key={model.id} model={model} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ModelsGrid;