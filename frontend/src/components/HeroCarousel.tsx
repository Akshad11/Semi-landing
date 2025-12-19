import React, { useState, useEffect, useCallback, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Slide } from '../types';

interface HeroCarouselProps {
  slides: Slide[];
}

export const HeroCarousel: React.FC<HeroCarouselProps> = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const resetAnimating = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setIsAnimating(false), 900);
  };

  const handleNext = useCallback(() => {
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % slides.length);
    resetAnimating();
  }, [slides.length]);

  const handlePrev = useCallback(() => {
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
    resetAnimating();
  }, [slides.length]);

  const handleDotClick = (index: number) => {
    if (index === currentIndex) return;
    setIsAnimating(true);
    setCurrentIndex(index);
    resetAnimating();
  };

  // ✅ Stable auto-play
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 4000);

    return () => clearInterval(interval);
  }, [handleNext]);

  if (!slides.length) return null;

  return (
    <div className="relative w-full h-full overflow-hidden bg-gray-900 group">
      {slides.map((slide, index) => {
        const isActive = index === currentIndex;

        return (
          <div
            key={slide.id}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out
            ${isActive ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
          >
            {/* Background */}
            <div className="absolute inset-0 overflow-hidden">
              <img
                src={slide.imageUrl}
                alt={slide.title}
                className={`w-full h-full object-cover transform transition-transform duration-[5000ms] ease-linear
                ${isActive ? 'scale-110' : 'scale-100'}`}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/90 via-black/60 to-black/20" />
            </div>

            {/* Content */}
            <div className="absolute inset-0 flex items-center">
              <div className="container mx-auto px-6 md:px-12 lg:px-20">
                <div className="max-w-2xl text-white">

                  {/* Subtitle – slide up */}
                  <div
                    className={`mb-4 inline-block bg-brand-accent/90 text-white text-xs font-bold px-3 py-1 uppercase tracking-widest rounded-sm backdrop-blur-sm
                    transform transition-all duration-700 delay-200
                    ${isActive ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                  >
                    {slide.subtitle}
                  </div>

                  {/* ✅ Title – different animation (zoom + fade) */}
                  <h1
                    className={`text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 tracking-tight drop-shadow-md
                    transform transition-all duration-700 delay-300
                    ${isActive ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}
                  >
                    {slide.title}
                  </h1>

                  {/* Description – slide up */}
                  <p
                    className={`text-lg md:text-xl text-gray-200 mb-8 font-light leading-relaxed max-w-xl drop-shadow-sm
                    transform transition-all duration-700 delay-500
                    ${isActive ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
                  >
                    {slide.description}
                  </p>

                  {/* Buttons – slide up */}
                  <div
                    className={`flex flex-col sm:flex-row gap-4
                    transform transition-all duration-700 delay-700
                    ${isActive ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
                  >
                    <button className="bg-brand-accent hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded transition-all duration-300 transform hover:scale-105 shadow-lg">
                      {slide.ctaText}
                    </button>
                    <button className="bg-transparent hover:bg-white/10 text-white font-semibold py-3 px-8 rounded transition-all duration-300 border-2 border-white/30 hover:border-white backdrop-blur-sm">
                      View Solutions
                    </button>
                  </div>

                </div>
              </div>
            </div>
          </div>
        );
      })}

      {/* Controls */}
      <div className="absolute bottom-10 left-0 right-0 z-20 container mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex items-center justify-between">
          {/* Dots */}
          <div className="flex space-x-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`h-1 rounded-full transition-all duration-500
                ${index === currentIndex ? 'w-12 bg-brand-accent' : 'w-6 bg-white/40 hover:bg-white/70'}`}
              />
            ))}
          </div>

          {/* Arrows */}
          <div className="hidden md:flex space-x-2">
            <button
              onClick={handlePrev}
              className="p-3 rounded-full border border-white/20 text-white hover:bg-brand-accent bg-black/20 backdrop-blur-sm transition"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={handleNext}
              className="p-3 rounded-full border border-white/20 text-white hover:bg-brand-accent bg-black/20 backdrop-blur-sm transition"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
