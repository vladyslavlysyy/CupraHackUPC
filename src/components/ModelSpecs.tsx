import React from 'react';
import { Model } from '../types/models';
import { Battery, Calendar, Gauge, Zap } from 'lucide-react';

interface ModelSpecsProps {
  model: Model;
}

const ModelSpecs: React.FC<ModelSpecsProps> = ({ model }) => {
  // Helper function to get the right icon for each key spec
  const getIconForSpec = (specKey: string) => {
    switch (specKey) {
      case 'power':
        return <Gauge size={24} className="text-red-600" />;
      case 'acceleration':
        return <Zap size={24} className="text-red-600" />;
      case 'year':
        return <Calendar size={24} className="text-red-600" />;
      default:
        return <Battery size={24} className="text-red-600" />;
    }
  };

  // Key specs to highlight
  const keySpecs = [
    { key: 'power', label: 'Potencia', value: model.power },
    { key: 'acceleration', label: '0-100 km/h', value: model.acceleration },
    { key: 'year', label: 'Año', value: model.year.toString() },
  ];

  return (
    <div className="py-16 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4 uppercase">Description</h2>
        <p className="text-lg text-gray-300 mb-12 max-w-4xl">{model.description}</p>
        
        {/* Key Specs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {keySpecs.map((spec) => (
            <div 
              key={spec.key}
              className="bg-neutral-900 p-6 rounded-lg flex items-center gap-4 transform hover:-translate-y-1 transition-transform duration-300"
            >
              {getIconForSpec(spec.key)}
              <div>
                <div className="text-2xl font-bold">{spec.value}</div>
                <div className="text-sm uppercase text-gray-400">{spec.label}</div>
              </div>
            </div>
          ))}
        </div>
        
        {/* All Specs */}
        <div>
          <h2 className="text-3xl font-bold mb-8 uppercase">Technical specifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(model.specs).map(([key, value]) => (
              <div key={key} className="bg-neutral-900 p-6 rounded-lg">
                <h3 className="text-red-600 text-lg font-semibold mb-2 uppercase">{key}</h3>
                <p className="text-white">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModelSpecs;