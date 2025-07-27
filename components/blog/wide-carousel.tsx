"use client";

import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";

const WideCarousel = ({ slides }: { slides: any }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [slideSpeed, setSlideSpeed] = useState(4000); // Control speed from code

  const nextSlide = () => {
    setCurrentIndex((prev) => {
      const nextIndex = prev + 1;
      return nextIndex >= slides.length ? 0 : nextIndex;
    });
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => {
      const prevIndex = prev - 1;
      return prevIndex < 0 ? slides.length - 1 : prevIndex;
    });
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Function to control slide speed (accessible only in code)
  const changeSlideSpeed = (speed: number) => {
    setSlideSpeed(speed);
  };

  // Auto-play functionality with restart from beginning
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const nextIndex = prev + 1;
        return nextIndex >= slides.length ? 0 : nextIndex;
      });
    }, slideSpeed);

    return () => clearInterval(interval);
  }, [isAutoPlaying, slideSpeed, slides.length]);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8">
      <div
        className="relative w-full h-96 rounded-2xl overflow-hidden shadow-2xl bg-gray-900"
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
        {/* Slides Container */}
        <div
          className="flex transition-transform duration-500 ease-in-out h-full"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {slides.map((slide: any) => (
            <div
              key={slide.id}
              className="min-w-full h-full relative flex items-center"
            >
              {/* Background Image */}
              <div
                className={`absolute inset-0 bg-cover bg-center bg-no-repeat`}
                style={{
                  backgroundImage: `url(${slide.img})`,
                }}
              >
                <div className="absolute inset-0 bg-black opacity-20"></div>
              </div>

              {/* Content */}
              <div className="relative z-10 text-center text-white px-8 max-w-4xl flex flex-col items-center mx-auto">
                <h2 className="text-3xl md:text-5xl font-bold mb-4 drop-shadow-lg bg-gray-900/50 p-4 rounded-2xl">
                  {slide.title}
                </h2>
                <p className="text-xl mt-10 mb-8 drop-shadow-md opacity-90 hidden lg:block bg-gray-900/60 p-4 rounded-2xl">
                  {slide.description}
                </p>
                <div>
                  <Button
                    className="bg-white text-gray-900 px-8 py-3font-semibold hover:bg-gray-100 transition-colors duration-200 shadow-lg"
                    asChild
                  >
                    <Link href={`/blog/${slide.id}`}>Read More</Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-400/20 hover:bg-opacity-30 text-white p-3 rounded-full transition-all duration-200 backdrop-blur-sm"
        >
          <ChevronLeft size={24} />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-400/20 hover:bg-opacity-30 text-white p-3 rounded-full transition-all duration-200 backdrop-blur-sm"
        >
          <ChevronRight size={24} />
        </button>

        {/* Progress Bar */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20">
          <div
            className="h-full bg-white transition-all duration-500 ease-out"
            style={{
              width: `${((currentIndex + 1) / slides.length) * 100}%`,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default WideCarousel;
