"use client";

import Image from "next/image";
import mockData from "@/data/mockData.json";
import { useState } from "react";

// Chevron icons for arrows
const ChevronLeftIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 sm:w-10 sm:h-10">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
  </svg>
);

const ChevronRightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 sm:w-10 sm:h-10">
    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
  </svg>
);

export default function MoviesSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerView = 6; // Number of items visible at a time
  const totalItems = mockData.movies.length;

  const handleScroll = (direction: "left" | "right") => {
    if (direction === "left" && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else if (direction === "right" && currentIndex < totalItems - itemsPerView) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <section className="section-padding py-12">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6">Trending Now</h2>
      <div className="relative group">
        <button
          onClick={() => handleScroll("left")}
          className={`absolute left-0 top-0 bottom-0 w-16 bg-black bg-opacity-50 text-white z-10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${currentIndex === 0 ? 'hidden' : ''}`}
        >
          <ChevronLeftIcon />
        </button>

        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-300"
            style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }}
          >
            {mockData.movies.map((movie, index) => (
              <div
                key={index}
                className="relative min-w-[calc(100%/6)] flex-shrink-0 px-1"
              >
                <div className="relative w-full px-2 py-0">
                  <Image
                    src={movie.image}
                    alt={movie.title}
                    width={200}
                    height={170}
                    className="w-full h-auto object-cover rounded"
                  />
                  <div
                    className="absolute bottom-[50px] left-[10px] text-black text-6xl sm:text-8xl font-bold"
                    style={{ 
                      WebkitTextStroke: '2px white',
                      textShadow: 'none'
                    }}
                  >
                    {index + 1}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={() => handleScroll("right")}
          className={`absolute right-0 top-0 bottom-0 w-16 bg-black bg-opacity-50 text-white z-10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${currentIndex >= totalItems - itemsPerView ? 'hidden' : ''}`}
        >
          <ChevronRightIcon />
        </button>
      </div>
    </section>
  );
}