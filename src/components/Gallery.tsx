import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface GalleryProps {
  modelId: string;
}

const Gallery: React.FC<GalleryProps> = ({ modelId }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [modalInfo, setModalInfo] = useState<string | null>(null);
  const [showInfoPoints, setShowInfoPoints] = useState(false); // Estado para controlar la visibilidad de los puntos

  // Datos de las imágenes y sus puntos de información
  const images = [
    {
      src: `/assets/images/models/${modelId}_gallery_1.jpg`,
      infoPoints: [
        { top: '38%', left: '65%', text: 'Levels control -> Brake fluid - Battery' },
        { top: '42%', left: '70%', text: 'Front compartment -> Unlocking lever - Open/close - Jump start' },
        { top: '61%', left: '63%', text: 'Towing the vehicle -> Towing - Towline anchorage' },
        { top: '53%', left: '70%', text: 'Front radar' },
        { top: '58%', left: '72%', text: '“Top View Camera” front camera' },
        { top: '68%', left: '78%', text: 'Park distance control sensors' },
        { top: '57%', left: '52%', text: 'Park assist sensor' },
        { top: '22%', left: '54%', text: 'Front multifunction camera' },
        { top: '32%', left: '40%', text: '“Top View Camera” side cameras' },
      ],
    },
    {
      src: `/assets/images/models/${modelId}_gallery_2.jpg`,
      infoPoints: [
        { top: '57%', left: '70%', text: 'Rear lid -> Opening from outside' },
        { top: '78%', left: '82%', text: 'Towing the vehicle -> Towline anchorage' },
        { top: '35%', left: '40%', text: 'Charging socket -> Charging process display - Emergency unlocking' },
        { top: '37%', left: '26%', text: 'Opening and closing -> Doors - Central locking' },
        { top: '90%', left: '20%', text: 'Action in the event of a puncture' },
        { top: '58%', left: '74%', text: 'Rear view camera' },
        { top: '80%', left: '63%', text: 'Park distance control sensors' },
        { top: '62%', left: '48%', text: 'Rear radars' },
        { top: '62%', left: '42%', text: 'Park assist sensor' },
      ],
    },
    {
      src: `/assets/images/models/${modelId}_gallery_3.jpg`,
      infoPoints: [
        { top: '32%', left: '47%', text: 'Infotainment system' },
        { top: '38%', left: '57%', text: 'Turn signal and main beam lever' },
        { top: '45%', left: '57%', text: 'Multifunction steering wheel control panels' },
        { top: '30%', left: '65%', text: 'Digital Cockpit -> Control lamps' },
        { top: '40%', left: '75%', text: 'Gear selector -> Electronic parking brake' },
        { top: '58%', left: '83%', text: 'Lighting control ' },
        { top: '65%', left: '90%', text: 'Central locking -> Exterior mirror adjustment - Power windows' },
        { top: '50%', left: '92%', text: 'Door handle' },
        { top: '55%', left: '30%', text: 'Fuses' },
        { top: '70%', left: '43%', text: 'Hazard warning lights' },
        { top: '62%', left: '60%', text: 'Steering wheel adjustment' },
        { top: '50%', left: '65%', text: 'Steering wheel with horn and driver front airbag' },
        { top: '85%', left: '82%', text: 'Open bonnet lever' },
      ],
    },
    {
      src: `/assets/images/models/${modelId}_gallery_4.jpg`,
      infoPoints: [
        { top: '19%', left: '71%', text: 'Seat belts' },
        { top: '70%', left: '55%', text: 'Drink holder with emergency starter housing ' },
        { top: '50%', left: '42%', text: 'Start button' },
        { top: '75%', left: '40%', text: 'Connectivity Box / Wireless Charger' },
        { top: '40%', left: '5%', text: 'Front passenger airbag' },
        { top: '68%', left: '25%', text: 'Glove compartment' },
        { top: '95%', left: '66%', text: 'Isofix anchor' },
      ],
    },
  ];

  const totalSlides = images.length;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const openModal = (info: string) => {
    setModalInfo(info);
  };

  const closeModal = () => {
    setModalInfo(null);
  };

  return (
    <div className="py-16 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 uppercase">CAR MANUAL</h2>

        {/* Mostrar botón y puntos solo si el modelo es "cupra-tavascan" */}
        {modelId === 'tavascan' && (
          <>
            {/* Botón para mostrar/ocultar puntos de información */}
            <div className="mb-4 text-center">
              <button
                onClick={() => setShowInfoPoints((prev) => !prev)}
                className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
              >
                {showInfoPoints ? 'Ocultar puntos de información' : 'Mostrar puntos de información'}
              </button>
            </div>
          </>
        )}

        <div className="relative">
          {/* Controles de la galería */}
          <div className="absolute top-1/2 left-0 right-0 transform -translate-y-1/2 flex justify-between px-4 z-10">
            <button
              onClick={prevSlide}
              className="bg-black bg-opacity-50 text-white w-8 h-10 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={nextSlide}
              className="bg-black bg-opacity-50 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
              aria-label="Next image"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Imágenes de la galería */}
          <div className="overflow-hidden rounded-lg">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {images.map((image, idx) => (
                <div key={idx} className="min-w-full relative">
                  <img
                    src={image.src}
                    alt={`Gallery image ${idx + 1}`}
                    className="w-full h-[500px] object-cover"
                    loading="lazy"
                  />
                  {/* Puntos de información */}
                  {modelId === 'tavascan' && showInfoPoints && (
                    <div className="absolute top-0 left-0 w-full h-full">
                      {image.infoPoints.map((point, pointIdx) => (
                        <div
                          key={pointIdx}
                          className="absolute bg-red-600 text-white p-1.5 rounded-full cursor-pointer"
                          style={{
                            top: point.top,
                            left: point.left,
                            transform: 'translate(-50%, -50%)',
                          }}
                          onClick={() => openModal(point.text)}
                        >
                          <div className="flex items-center justify-center w-5 h-5 bg-white text-black rounded-full text-xs">
                            {pointIdx + 1}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {modalInfo && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-black bg-gray-200 rounded-full w-8 h-8 flex items-center justify-center"
            >
              ✕
            </button>
            <p className="text-lg text-black">{modalInfo}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;