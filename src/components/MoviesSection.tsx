"use client";

import Image from "next/image";
import mockData from "@/data/mockData.json";
import { useState, useEffect, useRef } from "react";

export default function MoviesSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(6);
  const totalItems = mockData.movies.length;
  const maxIndex = Math.max(0, Math.ceil(totalItems / itemsPerView) - 1);
  
  // Touch handling
  const carouselRef = useRef<HTMLDivElement>(null);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  
  useEffect(() => {
    const handleResize = () => {
      setItemsPerView(window.innerWidth < 640 ? 3 : window.innerWidth < 1024 ? 4 : 6);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleScroll = (direction: "left" | "right") => {
    setCurrentIndex(prev => 
      direction === "left" ? Math.max(0, prev - 1) : Math.min(maxIndex, prev + 1)
    );
  };
  
  const handleTouch = {
    start: (e: React.TouchEvent) => setTouchStart(e.targetTouches[0].clientX),
    move: (e: React.TouchEvent) => setTouchEnd(e.targetTouches[0].clientX),
    end: () => {
      if (!touchStart || !touchEnd) return;
      const distance = touchStart - touchEnd;
      if (Math.abs(distance) > 50) {
        handleScroll(distance > 0 ? "right" : "left");
      }
      setTouchStart(null);
      setTouchEnd(null);
    }
  };

  return (
    <section className="section-padding py-12">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6">Trending Now</h2>
      <div className="relative group">
        {/* Navigation arrow - left */}
        {currentIndex > 0 && (
          <button
            onClick={() => handleScroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 rounded-full z-10 flex items-center justify-center group-hover:opacity-100 transition-opacity duration-300"
            style={{ opacity: 0.7 }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-8 h-8">
              <path d="M15.75 19.5L8.25 12l7.5-7.5" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        )}

        {/* Carousel container */}
        <div 
          className="overflow-hidden"
          ref={carouselRef}
          onTouchStart={handleTouch.start}
          onTouchMove={handleTouch.move}
          onTouchEnd={handleTouch.end}
        >
          <div
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {Array.from({ length: Math.ceil(totalItems / itemsPerView) }).map((_, groupIndex) => (
              //single carousel
              <div key={groupIndex} className="flex min-w-full mx-3">
                {mockData.movies.slice(
                  groupIndex * itemsPerView, 
                  Math.min((groupIndex + 1) * itemsPerView, totalItems)
                ).map((movie, index) => (
                  <div
                    key={groupIndex * itemsPerView + index}
                    className={`relative min-w-[calc(100%/${itemsPerView})] flex-shrink-0 px-3`}
                  >
                    <div className="relative w-full px-2 py-0 overflow-hidden rounded-lg">
                      {/* Movie image with more rounded corners */}
                      <Image
                        src={movie.image}
                        alt={movie.title}
                        width={200}
                        height={170}
                        className="w-full h-auto object-cover rounded-lg"
                      />
                      
                    </div>
                    {/* Movie ranking number */}
                        <div
                        className="absolute bottom-[10px] left-[-8px] text-black text-8xl sm:text-9xl font-bold"
                        style={{ 
                          WebkitTextStroke: '3px #dddddd',
                          textShadow: 'none'
                        }}
                        >
                        {groupIndex * itemsPerView + index + 1}
                        </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Navigation arrow - right */}
        {currentIndex < maxIndex && (
          <button
            onClick={() => handleScroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 rounded-full z-10 flex items-center justify-center group-hover:opacity-100 transition-opacity duration-300"
            style={{ opacity: 0.7 }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-8 h-8">
              <path d="M8.25 4.5l7.5 7.5-7.5 7.5" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        )}
      </div>
    </section>
  );
}