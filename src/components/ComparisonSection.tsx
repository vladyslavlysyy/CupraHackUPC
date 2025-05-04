import React, { useState } from 'react';
import { useModels } from '../context/ModelsContext';
import { Model } from '../types/models';
import { AlertCircle, BarChart3 } from 'lucide-react';

const ComparisonSection: React.FC = () => {
  const { models } = useModels();
  const [model1Id, setModel1Id] = useState<string>('');
  const [model2Id, setModel2Id] = useState<string>('');
  const [comparisonResults, setComparisonResults] = useState<Model[]>([]);
  const [showResults, setShowResults] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const handleCompare = () => {
    if (!model1Id || !model2Id) {
      setError('Por favor selecciona dos modelos para comparar');
      setShowResults(false);
      return;
    }

    if (model1Id === model2Id) {
      setError('Por favor selecciona dos modelos diferentes');
      setShowResults(false);
      return;
    }

    const selectedModel1 = models.find(m => m.id === model1Id);
    const selectedModel2 = models.find(m => m.id === model2Id);

    if (selectedModel1 && selectedModel2) {
      setComparisonResults([selectedModel1, selectedModel2]);
      setShowResults(true);
      setError('');
    }
  };

  // Helper function to determine if values are different
  const isDifferent = (value1: string, value2: string): boolean => value1 !== value2;

  return (
    <section id="compare" className="py-16 bg-neutral-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold uppercase mb-4">Compara Modelos</h2>
          <p className="text-xl text-gray-300">Selecciona dos modelos para comparar sus características</p>
        </div>
        
        <div className="max-w-4xl mx-auto bg-black rounded-xl shadow-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div>
              <label htmlFor="model1" className="block text-sm font-medium text-gray-300 mb-2">
                Primer modelo
              </label>
              <select
                id="model1"
                value={model1Id}
                onChange={(e) => setModel1Id(e.target.value)}
                className="w-full bg-neutral-800 border border-neutral-700 text-white py-3 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
              >
                <option value="">Selecciona primer modelo</option>
                {models.map(model => (
                  <option key={model.id} value={model.id}>
                    {model.name}
                  </option>
                ))}
              </select>
            </div>
            
            <div>
              <label htmlFor="model2" className="block text-sm font-medium text-gray-300 mb-2">
                Segundo modelo
              </label>
              <select
                id="model2"
                value={model2Id}
                onChange={(e) => setModel2Id(e.target.value)}
                className="w-full bg-neutral-800 border border-neutral-700 text-white py-3 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
              >
                <option value="">Selecciona segundo modelo</option>
                {models.map(model => (
                  <option key={model.id} value={model.id}>
                    {model.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
          
          <button
            onClick={handleCompare}
            className="flex items-center justify-center mx-auto bg-red-600 text-white px-8 py-3 rounded-full font-bold uppercase text-sm hover:bg-red-700 transition-all transform hover:-translate-y-1 hover:shadow-lg mb-6"
          >
            <BarChart3 className="mr-2" size={18} />
            Comparar modelos
          </button>
          
          {error && (
            <div className="flex items-center gap-2 text-red-500 mb-4 bg-red-500 bg-opacity-10 p-3 rounded-lg">
              <AlertCircle size={20} />
              <p>{error}</p>
            </div>
          )}
          
          {showResults && comparisonResults.length === 2 && (
            <div className="mt-8 animate-fade-in">
              <div className="flex justify-between items-center mb-10 flex-wrap md:flex-nowrap">
                <div className="text-center flex-1 min-w-[200px] mb-4 md:mb-0">
                  <h3 className="text-2xl font-bold mb-1">{comparisonResults[0].name}</h3>
                  <p className="text-red-600 font-bold">{comparisonResults[0].price}</p>
                </div>
                
                <div className="hidden md:block">
                  <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center font-bold text-xl">
                    VS
                  </div>
                </div>
                
                <div className="md:hidden w-full flex justify-center my-4">
                  <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center font-bold text-xl">
                    VS
                  </div>
                </div>
                
                <div className="text-center flex-1 min-w-[200px] mb-4 md:mb-0">
                  <h3 className="text-2xl font-bold mb-1">{comparisonResults[1].name}</h3>
                  <p className="text-red-600 font-bold">{comparisonResults[1].price}</p>
                </div>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr>
                      <th className="text-left py-4 px-4 bg-neutral-800 rounded-tl-lg">Especificación</th>
                      <th className="text-left py-4 px-4 bg-neutral-800">{comparisonResults[0].name}</th>
                      <th className="text-left py-4 px-4 bg-neutral-800 rounded-tr-lg">{comparisonResults[1].name}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className={isDifferent(comparisonResults[0].year.toString(), comparisonResults[1].year.toString()) ? 'bg-red-900 bg-opacity-20' : ''}>
                      <td className="py-3 px-4 border-b border-neutral-700">Año</td>
                      <td className={`py-3 px-4 border-b border-neutral-700 ${isDifferent(comparisonResults[0].year.toString(), comparisonResults[1].year.toString()) ? 'font-bold text-red-500' : ''}`}>
                        {comparisonResults[0].year}
                      </td>
                      <td className={`py-3 px-4 border-b border-neutral-700 ${isDifferent(comparisonResults[0].year.toString(), comparisonResults[1].year.toString()) ? 'font-bold text-red-500' : ''}`}>
                        {comparisonResults[1].year}
                      </td>
                    </tr>
                    
                    <tr className={isDifferent(comparisonResults[0].power, comparisonResults[1].power) ? 'bg-red-900 bg-opacity-20' : ''}>
                      <td className="py-3 px-4 border-b border-neutral-700">Potencia</td>
                      <td className={`py-3 px-4 border-b border-neutral-700 ${isDifferent(comparisonResults[0].power, comparisonResults[1].power) ? 'font-bold text-red-500' : ''}`}>
                        {comparisonResults[0].power}
                      </td>
                      <td className={`py-3 px-4 border-b border-neutral-700 ${isDifferent(comparisonResults[0].power, comparisonResults[1].power) ? 'font-bold text-red-500' : ''}`}>
                        {comparisonResults[1].power}
                      </td>
                    </tr>
                    
                    <tr className={isDifferent(comparisonResults[0].acceleration, comparisonResults[1].acceleration) ? 'bg-red-900 bg-opacity-20' : ''}>
                      <td className="py-3 px-4 border-b border-neutral-700">Aceleración (0-100 km/h)</td>
                      <td className={`py-3 px-4 border-b border-neutral-700 ${isDifferent(comparisonResults[0].acceleration, comparisonResults[1].acceleration) ? 'font-bold text-red-500' : ''}`}>
                        {comparisonResults[0].acceleration}
                      </td>
                      <td className={`py-3 px-4 border-b border-neutral-700 ${isDifferent(comparisonResults[0].acceleration, comparisonResults[1].acceleration) ? 'font-bold text-red-500' : ''}`}>
                        {comparisonResults[1].acceleration}
                      </td>
                    </tr>
                    
                    {/* Specs comparison - merge all unique keys from both models */}
                    {Object.keys({
                      ...comparisonResults[0].specs,
                      ...comparisonResults[1].specs
                    }).map((specKey) => {
                      const value1 = comparisonResults[0].specs[specKey] || '-';
                      const value2 = comparisonResults[1].specs[specKey] || '-';
                      
                      return (
                        <tr key={specKey} className={isDifferent(value1, value2) ? 'bg-red-900 bg-opacity-20' : ''}>
                          <td className="py-3 px-4 border-b border-neutral-700">{specKey}</td>
                          <td className={`py-3 px-4 border-b border-neutral-700 ${isDifferent(value1, value2) ? 'font-bold text-red-500' : ''}`}>
                            {value1}
                          </td>
                          <td className={`py-3 px-4 border-b border-neutral-700 ${isDifferent(value1, value2) ? 'font-bold text-red-500' : ''}`}>
                            {value2}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;