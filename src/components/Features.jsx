import React, { useState } from 'react';

const Features = () => {
  const images = [
    "/asset/course 1.png",
    "/asset/course 2.png",
    "/asset/course 3.png"
  ];

  const [startIndex, setStartIndex] = useState(0);

  const nextSlide = () => {
    setStartIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setStartIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const visiblesSlides = [
    images[startIndex],
    images[(startIndex + 1) % images.length],
    images[(startIndex + 2) % images.length]
  ];

  return (
    <section className="bg-white py-16 px-6 flex flex-col items-center space-y-6">
      {/* Slider */}
      <div className="flex gap-6">
        {visiblesSlides.map((img, index) => (
          <div
            key={index}
            className="w-[477px] h-[445px] rounded-md overflow-hidden shadow"
          >
            <img
              src={img}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Buttons */}
      <div className="flex space-x-4">
        <button
          onClick={prevSlide}
          className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
        >
          ←
        </button>
        <button
          onClick={nextSlide}
          className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
        >
          →
        </button>
      </div>
    </section>
  );
};

export default Features;
