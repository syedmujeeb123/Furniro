import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import GirlOne from "../Images/g-1.png";
import GirlTwo from "../Images/girl-2.png";
import GirlThree from "../Images/shopping-1.jpg";
// import GirlFour from "../Images/shopping-2.jpg";

const carouselItems = [
  {
    id: 1,
    image: GirlOne,
    tagline: "Premium Collection",
    title: "Summer Essentials 2025",
    description: "Discover our latest arrivals for the season",
    actionText: "EXPLORE NOW",
  },

  {
    id: 2,
    image: GirlTwo,
    tagline: "Limited Edition",
    title: "Exclusive Designer Pieces",
    description: "Curated selection for the fashion-forward",
    actionText: "VIEW COLLECTION",
  },
  {
    id: 3,
    image: GirlThree,
    tagline: "Special Offer",
    title: "Save up to 40% Off",
    description: "Premium quality at unbeatable prices",
    actionText: "SHOP THE SALE",
  },
];

const EnhancedCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Navigate to next slide with animation handling
  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev + 1) % carouselItems.length);
    setTimeout(() => setIsAnimating(false), 700);
  };

  // Navigate to previous slide with animation handling
  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide(
      (prev) => (prev - 1 + carouselItems.length) % carouselItems.length
    );
    setTimeout(() => setIsAnimating(false), 700);
  };

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 6000); // Slightly longer duration for better user experience

    return () => clearInterval(interval);
  }, [isAnimating]);

  // For manual navigation using indicators
  const goToSlide = (index) => {
    if (isAnimating || index === currentSlide) return;
    setIsAnimating(true);
    setCurrentSlide(index);
    setTimeout(() => setIsAnimating(false), 700);
  };

  return (
    <div className="relative w-full bg-gradient-to-r from-purple-50 to-blue-50 overflow-hidden">
      {/* Main carousel container */}
      <div className="relative h-screen max-h-[600px] w-full">
        {/* Carousel items */}
        {carouselItems.map((item, index) => (
          <div
            key={item.id}
            className={`absolute top-0 left-0 w-full h-full transition-all duration-700 ease-in-out ${
              index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 h-full">
              {/* Text content - Updated with more right padding and adjusted alignment */}
              <div className="flex flex-col justify-center pl-8 pr-4 sm:pl-12 sm:pr-6 md:pl-24 md:pr-8 lg:pl-32 z-20">
                <span className="text-xs sm:text-sm md:text-base text-indigo-600 font-medium mb-2">
                  {item.tagline}
                </span>
                <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-6xl font-bold mb-4 text-gray-900 leading-tight">
                  {item.title}
                </h2>
                <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-8">
                  {item.description}
                </p>
                <div>
                  <button className="px-6 py-2 sm:px-8 sm:py-3 bg-black text-white text-sm sm:text-base font-medium shadow-lg hover:bg-white hover:text-black hover:font-bold transform hover:scale-105 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] delay-100">
                    {item.actionText}
                  </button>
                </div>
              </div>

              {/* Image container */}
              <div className="hidden md:block relative h-full">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-50 to-transparent z-10"></div>
                <img
                  src={item.image}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>

            {/* Mobile image (shown only on small screens) */}
            <div className="absolute inset-0 -z-10 md:hidden">
              <div className="absolute inset-0 bg-black/30 z-10"></div>
              <img
                src={item.image}
                alt={`Slide ${index + 1} (mobile)`}
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
        ))}

        {/* Navigation arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full shadow-lg transition-all duration-300 group"
          aria-label="Previous slide"
        >
          <ChevronLeft
            size={30}
            className="text-black transition-transform duration-300 group-hover:scale-125 relative overflow-hidden before:content-[''] before:absolute before:top-0 before:left-[-100%] before:w-full before:h-full before:bg-white/40 before:skew-x-12 before:animate-shine"
          />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full shadow-lg transition-all duration-300 group"
          aria-label="Next slide"
        >
          <ChevronRight
            size={30}
            className="text-black transition-transform duration-300 group-hover:scale-125 relative overflow-hidden before:content-[''] before:absolute before:top-0 before:left-[-100%] before:w-full before:h-full before:bg-white/40 before:skew-x-12 before:animate-shine"
          />
        </button>

        {/* Slide indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex space-x-2">
          {carouselItems.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? "bg-black w-6" : "bg-gray-400"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EnhancedCarousel;
