// Hero.js
import React, { useState } from 'react';

const images = [{ src: 'https://big-trader.netlify.app/static/media/carasoul_img.1aa55198a5d469aac26a.png', alt: 'Best Deals', caption: 'Best Deals of the Day!' },
{ src: 'https://m.media-amazon.com/images/I/61lwJy4B8PL._SX3000_.jpg', alt: 'Exclusive Offers', caption: 'Exclusive Offers Just for You!' },
{ src: 'https://m.media-amazon.com/images/I/81KkrQWEHIL._SX3000_.jpg', alt: 'Trending Products', caption: 'Trending Products You Can\'t Miss!' },
];

const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prevSlide) =>
            (prevSlide - 1 + images.length) % images.length
        );
    };

    return (
        <div className="relative w-full h-[600px] overflow-hidden">
            {/* Image and Caption */}
            <div className="absolute inset-0 transition-opacity duration-700 ease-in-out">
                <img
                    src={images[currentSlide].src}
                    alt={images[currentSlide].alt}
                    className="w-full h-full object-cover"
                />
                
            </div>
            {/* Back Button */}
            <button
                className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white rounded-full shadow-md p-2 z-10"
                onClick={prevSlide}
            >
                &#9664; {/* Left arrow symbol */}
            </button>
            {/* Next Button */}
            <button
                className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white rounded-full shadow-md p-2 z-10"
                onClick={nextSlide}
            >
                &#9654; {/* Right arrow symbol */}
            </button>
            {/* Navigation Dots */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {images.map((_, index) => (
                    <button
                        key={index}
                        className={`w-2 h-2 rounded-full ${currentSlide === index ? 'bg-white' : 'bg-gray-500'}`}
                        onClick={() => setCurrentSlide(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default Hero;
