"use client";

import Image from "next/image";
import mockData from "@/data/mockData.json";
import { useState } from "react";

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
    <section className="p-8 sm:p-16">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6">Trending Now</h2>
      <div className="relative">
        {/* Left Scroll Button */}
        <button
          onClick={() => handleScroll("left")}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full z-10"
          disabled={currentIndex === 0}
        >
          &#8249;
        </button>

        {/* Scrollable Movies Container */}
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-300"
            style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }}
          >
            {mockData.movies.map((movie, index) => (
              <div
                key={index}
                className="relative min-w-[16.66%] flex-shrink-0 p-2"
              >
                <Image
                  src={movie.image}
                  alt={movie.title}
                  width={300}
                  height={450}
                  className="w-full h-[400px] object-cover rounded-lg" // Adjusted height and rounded edges
                />
                <div
                  className="absolute bottom-2 left-2 text-white text-2xl font-bold" // Reduced number size
                >
                  {index + 1}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Scroll Button */}
        <button
          onClick={() => handleScroll("right")}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full z-10"
          disabled={currentIndex >= totalItems - itemsPerView}
        >
          &#8250;
        </button>
      </div>
    </section>
  );
}