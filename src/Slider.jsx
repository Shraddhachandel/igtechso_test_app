import React, { useState } from 'react'

const Slider = () => {

    const images = [
        {src: "/asset/course 2.png", alt: "upper image"},
        {src: "/asset/course 3.png", alt: "upper image"},
    ];

    const [current, setCurrent] = useState(0);

    const nextImage = () => {
        setCurrent((prev) => (prev +1) % images.length);
    }

    const prevImage = () => {
        setCurrent((prev) => (prev - 1 + images.length) % images.length);
    }

  return (
    <>
      <section className='bg-white py-20 px-6 flex flex justify-center'>
        <div className='flex gap-6 items-start'>
            <div className='w-[500px] h-[500px] flex flex-col items-center space-y-4' >
                <div className='w-[477px] h-[445px] rounded-md overflow-hidden'>
                    <img src={images[current].src} alt={images[current].alt}/>
                </div>

                <div className='flex space-x-4'>
                    <button onClick={prevImage} className='px-4 py-2 gray-200 rounded hover:bg-gray-300' >
                        ←
                    </button>
                    <button onClick={nextImage} className='px-4 py-2 gray-200 rounded hover:bg-gray-300' >
                        →
                    </button>
                </div>
            </div>

            {/* Right image */}
            <div className="w-[475px] h-[391px] bg-white-50 rounded-md p-6 flex flex-col justify-center space-y-4">
          <div className="text-sm text-[9px] text-orange-500 uppercase tracking-wide">
          Free tutorial 
          </div>
          <h3 className="text-2xl font-bold text-gray-800 leading-relaxed">
          More than  thousand
of free tutorial upload
every weeks
          </h3>
          <p className="text-gray-600 text-sm">
            Get your tests delivered at let home collect sample from the victory
            of the managements that supplies best design system guidelines ever.
            Get your tests delivered at let home collect sample.
          </p>
          <button className="self-start bg-transparent border border-orange-300 text-orange-500 py-2 px-4 rounded-md hover:bg-orange-100 hover:border-orange-500">
            Explore Details
          </button>
        </div>
        </div>
      </section>
    </>
  )
}

export default Slider
