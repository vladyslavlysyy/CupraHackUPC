import React, { useState, useEffect } from 'react';
import { Model } from '../types/models';

interface ModelHeroProps {
  model: Model;
}

const ModelHero: React.FC<ModelHeroProps> = ({ model }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slides, setSlides] = useState<string[]>([]);
  const slideCount = 1;

  useEffect(() => {
    // Generate slide images
    const slideImages = Array.from({ length: slideCount }, (_, i) => 
      `/assets/images/${model.id}_${i + 1}.jpg`
    );
    setSlides(slideImages);
  }, [model.id]);



  // Auto-advance slides every 5 seconds
  useEffect(() => {
  }, [currentSlide]);

  return (
    <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div 
          className="relative h-full w-full"
          style={{
            transform: `translateX(-${currentSlide * 100}%)`,
            transition: 'transform 0.5s ease-in-out',
            display: 'flex',
          }}
        >
          {slides.map((slide, index) => (
            <div 
              key={index} 
              className="min-w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${slide})` }}
            />
          ))}
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>



      <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black to-transparent z-10">
        <div className="container mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-2 uppercase">{model.name}</h1>
          <p className="text-2xl md:text-3xl font-bold text-red-600">{model.price}</p>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-6 left-0 w-full flex justify-center z-20">
        <div className="flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                currentSlide === index ? 'bg-red-600 w-6' : 'bg-white bg-opacity-50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ModelHero;