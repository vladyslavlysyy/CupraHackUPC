import React, { useEffect, useRef } from 'react';
import { ChevronRight } from 'lucide-react';

const HeroSection: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Play video when component mounts
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.error("Video autoplay failed:", error);
      });
    }
  }, []);

  return (
    <section className="relative h-screen min-h-[600px] flex items-center">
      {/* Video Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video 
          ref={videoRef}
          className="w-full h-full object-cover"
          autoPlay 
          muted 
          loop 
          playsInline
        >
          <source src="/assets/videos/cupra-video(1920x1080).mp4" type="video/mp4" media="(min-width: 1200px)" />
          <source src="/assets/videos/cupra-video(1280x720).mp4" type="video/mp4" media="(min-width: 768px)" />
          <source src="/assets/videos/cupra-video(640x360).mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 uppercase animate-fade-in-up">
            CUPRA Experience
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 animate-fade-in-up animation-delay-300">
           Discover the new generation of Cupra vehicles          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-600">
            <a 
              href="#models" 
              className="inline-flex items-center bg-red-600 text-white px-8 py-3 rounded-full font-bold uppercase text-sm hover:bg-red-700 transition-all transform hover:-translate-y-1 hover:shadow-lg"
            >
              See models
              <ChevronRight className="ml-2" size={16} />
            </a>
            <a 
              href="#compare" 
              className="inline-flex items-center bg-transparent text-white px-8 py-3 rounded-full font-bold uppercase text-sm border-2 border-white hover:bg-white hover:bg-opacity-10 transition-all transform hover:-translate-y-1 hover:shadow-lg"
            >
              Compare
              <ChevronRight className="ml-2" size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;