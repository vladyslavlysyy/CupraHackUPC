import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { Model } from '../types/models';

interface ModelCardProps {
  model: Model;
}

const ModelCard: React.FC<ModelCardProps> = ({ model }) => {
  return (
    <div className="bg-neutral-900 rounded-lg overflow-hidden group hover:transform hover:-translate-y-2 transition-all duration-300 shadow-md hover:shadow-xl">
      <div className="h-56 overflow-hidden">
        <img 
          src={model.image} 
          alt={model.name} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2">{model.name}</h3>
        <p className="text-gray-300 mb-4 line-clamp-2">{model.description}</p>
        
        <div className="flex justify-between mb-6">
          <div className="text-center">
            <div className="text-red-600 font-bold">{model.power}</div>
            <div className="text-xs uppercase text-gray-400">Potencia</div>
          </div>
          <div className="text-center">
            <div className="text-red-600 font-bold">{model.acceleration}</div>
            <div className="text-xs uppercase text-gray-400">0-100 km/h</div>
          </div>
        </div>
        
        <Link 
          to={`/model/${model.id}`}
          className="inline-flex items-center bg-red-600 text-white px-6 py-2 rounded-full text-sm uppercase font-bold hover:bg-red-700 transition-colors w-full justify-center"
        >
          Explorar
          <ChevronRight className="ml-1" size={16} />
        </Link>
      </div>
    </div>
  );
};

export default ModelCard;