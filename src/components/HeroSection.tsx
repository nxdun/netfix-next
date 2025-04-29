import Image from "next/image";

// Simple ChevronRight icon component (or import from a library like react-icons)
const ChevronRightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-5 h-5 sm:w-6 sm:h-6"> {/* Adjusted strokeWidth */}
    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
  </svg>
);


export default function HeroSection() {
  return (
    <section className="bg-black relative text-center text-white h-screen flex flex-col justify-center items-center overflow-hidden"> {/* Changed bg-transparent to bg-black as base */}
      {/* Background Image Container */}
      <div className="absolute inset-0 opacity-50"> {/* Added opacity to image container */}
        <Image
          src="/netflix-hero-bg.jpg" 
          alt="Netflix Hero Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
        />
      </div>
      {/* Overlay (z-10) - Adjusted gradient for stronger top/bottom fade */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black z-10"></div> 
      
      {/* Content Container (z-20) */}
      <div className="relative z-20 px-4 flex flex-col items-center w-full"> 
        {/* Constrained width for text content */}
        <div className="max-w-xl md:max-w-3xl text-center mb-6"> {/* Adjusted max-width and margin */}
          <h1 className="text-3xl sm:text-5xl font-bold mb-4"> 
            Unlimited movies, TV shows, and more
          </h1>
          {/* Combined paragraphs for closer spacing */}
          <p className="text-lg sm:text-xl"> 
            Starts at USD 2.99. Cancel anytime.
          </p>
           <p className="text-lg sm:text-xl mt-4"> {/* Added margin top */}
            Ready to watch? Enter your email to create or restart your membership.
          </p>
        </div>
        {/* Input and Button Group */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-2 w-full max-w-lg md:max-w-xl"> {/* Adjusted max-width */}
          <input
            type="email"
            placeholder="Email address"
            // Adjusted styles: larger padding, slightly different bg/border
            className="px-4 py-3.5 rounded bg-black/70 border border-gray-500/70 text-white placeholder-gray-400 w-full sm:flex-1" // Use flex-1 for better sizing
          />
          <button className="bg-red-600 hover:bg-red-700 text-white px-4 sm:px-6 py-3.5 rounded flex items-center justify-center gap-1 text-lg sm:text-xl font-medium w-full sm:w-auto mt-2 sm:mt-0 whitespace-nowrap"> {/* Added whitespace-nowrap */}
            <span>Get Started</span>
            <ChevronRightIcon />
          </button>
        </div>
      </div>

      {/* Refined Curve/Glow Implementation (z-10) */}
      <div 
        // Adjusted height and bottom position slightly if needed
        className="absolute bottom-[-6px] h-14 w-[200%] left-[-50%] sm:w-[180%] sm:left-[-40%] md:w-[150%] md:left-[-25%] lg:w-[130%] lg:left-[-15%] z-10 pointer-events-none 
                   rounded-tl-[50%_100%] rounded-tr-[50%_100%] 
                   // Adjusted ::before for thicker line and refined gradient
                   before:content-[''] before:absolute before:inset-0 before:z-[-1] before:mt-[-6px] // Made thicker (smaller negative margin)
                   before:rounded-[inherit] 
                   // Refined gradient colors - adjust these hex codes precisely
                   before:bg-gradient-to-r before:from-[#50102c] before:via-[#b82869] before:to-[#e50914] 
                   " 
        // Inline style for the refined blue glow radial gradient
        style={{ 
          // Adjusted gradient: stronger, wider blue/purple glow
          background: 'radial-gradient(50% 500% at 50% -400%, rgba(75, 85, 220, 0.45) 75%, rgba(0, 0, 0, 0.0) 100%)', 
          backgroundClip: 'padding-box', 
          boxSizing: 'border-box'
        }} 
      >
        {/* The main div now primarily provides the blue glow via background */}
        {/* The red line is handled by the ::before pseudo-element */}
      </div>
    </section>
  );
}
