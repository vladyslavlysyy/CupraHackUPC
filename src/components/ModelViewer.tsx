import React, { useEffect, useRef } from 'react';

interface ModelViewerProps {
  modelPath: string;
  modelName: string;
}

const ModelViewer: React.FC<ModelViewerProps> = ({ modelPath, modelName }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // We need to dynamically import the @google/model-viewer script
    // since it's not a React component and needs to be loaded at runtime
    const container = containerRef.current;
    
    if (container) {
      const modelViewer = document.createElement('model-viewer');
      modelViewer.src = modelPath;
      modelViewer.alt = `3D view of ${modelName}`;
      modelViewer.setAttribute('auto-rotate', '');
      modelViewer.setAttribute('camera-controls', '');
      modelViewer.setAttribute('shadow-intensity', '1');
      modelViewer.style.width = '100%';
      modelViewer.style.height = '100%';
      
      container.appendChild(modelViewer);
      
      return () => {
        if (container.contains(modelViewer)) {
          container.removeChild(modelViewer);
        }
      };
    }
  }, [modelPath, modelName]);
  
  return (
    <div 
      ref={containerRef} 
      className="h-[500px] w-full rounded-lg overflow-hidden bg-neutral-900 shadow-lg"
    ></div>
  );
};

export default ModelViewer;