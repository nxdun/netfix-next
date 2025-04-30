"use client";

import Image from "next/image";
import mockData from "@/data/mockData.json";
import { useState, useRef, useEffect, TouchEvent } from "react";

export default function MoviesSection() {
  // State to track the current index of the visible items
  const [currentIndex, setCurrentIndex] = useState(0);

  // State to determine if the screen is mobile-sized
  const [isMobile, setIsMobile] = useState(false);

  // Number of items visible per view based on screen size
  const itemsPerView = isMobile ? 2 : 6;

  // Total number of items in the mock data
  const totalItems = mockData.movies.length;

  // Reference to the container element for scrolling
  const containerRef = useRef<HTMLDivElement>(null);

  // States to track touch start and end positions for swipe gestures
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  // Effect to handle screen resizing and update `isMobile` state
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // Set initial state
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Scroll step determines how many items to scroll at a time
  const scrollStep = Math.max(Math.floor(itemsPerView * 0.67), 1);

  // Function to handle scrolling left or right
  const handleScroll = (direction: "left" | "right") => {
    if (direction === "left") {
      // Scroll left by `scrollStep`, but don't go below 0
      setCurrentIndex(Math.max(currentIndex - scrollStep, 0));
    } else if (direction === "right") {
      // Scroll right by `scrollStep`, but don't exceed max position
      setCurrentIndex(
        Math.min(currentIndex + scrollStep, totalItems - itemsPerView)
      );
    }
  };

  // Handle touch start event for swipe gestures
  const handleTouchStart = (e: TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  // Handle touch move event for swipe gestures
  const handleTouchMove = (e: TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  // Handle touch end event to determine swipe direction
  const handleTouchEnd = () => {
    // Decrease threshold from 75 to 50 for more responsive swiping
    if (touchStart - touchEnd > 50) {
      // Swipe left
      handleScroll("right");
    } else if (touchStart - touchEnd < -50) {
      // Swipe right
      handleScroll("left");
    }
  };

  // Function to render the scroll buttons (left and right)
  const renderButton = (direction: "left" | "right") => {
    const isLeft = direction === "left";

    // Determine if the button should be hidden
    const isHidden =
      (isLeft && currentIndex === 0) ||
      (!isLeft && currentIndex >= totalItems - itemsPerView);

    return (
      <>
        {/* Animated vertical background for the button */}
        <div
          className={`absolute ${
            isLeft ? "left-0" : "right-0"
          } top-0 bottom-0 w-16 bg-black z-[5] transition-all duration-300 ${
            isHidden ? "opacity-0" : "opacity-100"
          } md:block hidden`}
          style={{
            transform: isHidden
              ? `translateX(${isLeft ? "-100%" : "100%"})`
              : "translateX(0)",
          }}
        ></div>

        {/* Scroll button */}
        <button
          onClick={() => handleScroll(direction)}
          className={`absolute ${
            isLeft ? "left-0" : "right-0"
          } top-1/2 -translate-y-1/2 w-8 h-40 bg-white/20 rounded-[8px] z-10 flex items-center justify-center transition-opacity duration-300 ${
            isHidden ? "opacity-0 cursor-default" : "opacity-70"
          } md:flex hidden`}
        >
          {/* SVG icon for the button */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="white"
            className="w-8 h-8"
          >
            <path
              d={
                isLeft
                  ? "M15.75 19.5L8.25 12l7.5-7.5"
                  : "M8.25 4.5l7.5 7.5-7.5 7.5"
              }
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </>
    );
  };

  return (
    <section className="section-padding py-12">
      {/* Section title */}
      <h2 className="text-2xl sm:text-3xl font-bold mb-6">Trending Now</h2>

      <div className="relative group">
        {/* Render left scroll button */}
        {renderButton("left")}

        {/* Container for the movie items */}
        <div className="overflow-hidden">
          <div
            ref={containerRef}
            className="flex transition-transform duration-300"
            style={{
              transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
            }}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {/* Render movie items */}
            {mockData.movies.map((movie, index) => (
              <div
                key={index}
                className={`relative flex-shrink-0 px-1 ${
                  isMobile ? "w-1/2" : "w-1/6"
                }`}
                style={{ flexBasis: isMobile ? "50%" : "16.666%" }}
              >
                <div className="relative w-full px-2 py-0">
                  {/* Movie image */}
                  <Image
                    src={movie.image}
                    alt={movie.title}
                    width={200}
                    height={170}
                    className="w-full h-auto object-cover rounded p-2"
                  />
                  {/* Movie index overlay */}
                  <div
                    className="absolute bottom-[20px] left-[0px] text-black text-6xl sm:text-8xl font-bold"
                    style={{
                      WebkitTextStroke: "2px #e4e4e4",
                      textShadow: "none",
                    }}
                  >
                    {index + 1}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Render right scroll button */}
        {renderButton("right")}
      </div>
    </section>
  );
}