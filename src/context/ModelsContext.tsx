import React, { createContext, useContext, ReactNode } from 'react';
import { Model } from '../types/models';
import { modelData } from '../data/models';

interface ModelsContextType {
  models: Model[];
}

const ModelsContext = createContext<ModelsContextType | undefined>(undefined);

export const useModels = (): ModelsContextType => {
  const context = useContext(ModelsContext);
  if (!context) {
    throw new Error('useModels must be used within a ModelsProvider');
  }
  return context;
};

interface ModelsProviderProps {
  children: ReactNode;
}

export const ModelsProvider: React.FC<ModelsProviderProps> = ({ children }) => {
  return (
    <ModelsContext.Provider value={{ models: modelData }}>
      {children}
    </ModelsContext.Provider>
  );
};