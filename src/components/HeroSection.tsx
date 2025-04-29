import Image from "next/image";

// Simple ChevronRight icon component (or import from a library like react-icons)
const ChevronRightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4 sm:w-6 sm:h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
  </svg>
);

export default function HeroSection() {
  return (
    <section className="bg-black relative text-center text-white h-screen flex flex-col justify-center items-center overflow-hidden">
      {/* Background Image Container */}
      <div className="absolute inset-0 opacity-50">
        <Image
          src="/netflix-hero-bg.jpg" 
          alt="Netflix Hero Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
        />
      </div>
      {/* Overlay (z-10) */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black z-10"></div> 
      
      {/* Content Container (z-20) */}
      <div className="relative z-20 flex flex-col items-center w-full hero-padding-x">
        {/* Constrained width for text content */}
        <div className="max-w-xl md:max-w-3xl text-center mb-8">
          <h1 className="text-3xl sm:text-6xl font-extrabold mb-5">
            Unlimited movies, 
          </h1>
          <h1 className="text-3xl sm:text-6xl font-extrabold mb-5">
            TV shows, and 
          </h1>
          <h1 className="text-3xl sm:text-6xl font-extrabold mb-6">
           more
          </h1>
          <p className="text-xl sm:text-3xl mb-5">
            Starts at USD 2.99. Cancel anytime.
          </p>
          <p className="text-lg sm:text-2xl mt-5">
            Ready to watch? Enter your email to create or restart your membership.
          </p>
        </div>
        {/* Input and Button Group */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-3 w-full max-w-lg md:max-w-[600px]">
          <input
            type="email"
            placeholder="Email address"
            className="px-4 py-4 rounded bg-black/70 border border-gray-500/70 text-white placeholder-gray-400 w-full sm:flex-1 text-lg"
          />
          <button className="bg-red-600 hover:bg-red-700 text-white px-5 sm:px-7 py-4 rounded flex items-center justify-center gap-2 text-xl sm:text-2xl font-medium w-full sm:w-auto mt-2 sm:mt-0 whitespace-nowrap">
            <span>Get Started</span>
            <ChevronRightIcon />
          </button>
        </div>
      </div>

      {/*Blue Glow Div */}
      <div 
        className="absolute left-[-50%] bottom-0 z-20 box-border h-20 w-[200%] border-b-4 border-x-0 border-t-0 border-transparent pointer-events-none"
        style={{ 
          background: 'radial-gradient(50% 500% at 50% -400%, rgba(64, 97, 231, 0.4) 80%, rgba(0, 0, 0, 0.1) 100%), black', 
          backgroundClip: 'padding-box', 
        }} 
      >
        {/* gradient line div*/}
      </div>
      <div 
        className="absolute left-[-50%] bottom-19 z-20 box-border h-20 w-[200%] pointer-events-none"
        style={{
          borderImageSource: 'linear-gradient(to right, rgba(33, 13, 22, 1) 16%, rgba(184, 40, 105, 1), rgba(229, 9, 20, 1), rgba(184, 40, 105, 1), rgba(33, 13, 22, 1) 84%)',
          borderImageSlice: 1,
          borderBottomWidth: '3px',
          borderStyle: 'solid',
          borderColor: 'transparent',
        }}
      >
        {/* The border-image provides the red line */}
      </div>
    </section>
  );
}
