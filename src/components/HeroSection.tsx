import Image from "next/image";
import EmailSubscription from "./common/EmailSubscription";


export default function HeroSection() {
  return (
    <section className="bg-black relative text-center text-white h-screen flex flex-col justify-center items-center overflow-hidden">
      {/* ! Background Image */}
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
      {/* ! Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black z-10"></div> 
      
      {/* ! Content */}
      <div className="relative z-20 flex flex-col items-center w-full hero-padding-x">
          <div className="max-w-xl md:max-w-3xl text-center mb-8">
            {/* 🔥 Hero heading */}
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
          {/* 🔥 Reusable EmailSubscription Component */}
          <div className="w-full max-w-3xl">
            <EmailSubscription />
          </div>
        </div>

      {/* 🔥 Decorative Glow */}
      <div 
        className="absolute left-[-50%] bottom-0 z-20 box-border h-20 w-[200%] border-b-4 border-x-0 border-t-0 border-transparent pointer-events-none"
        style={{ 
          background: 'radial-gradient(50% 500% at 50% -400%, rgba(64, 97, 231, 0.4) 80%, rgba(0, 0, 0, 0.1) 100%), black', 
          backgroundClip: 'padding-box', 
        }} 
      >
        {/* Decorative gradient */}
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
        {/* Decorative border */}
      </div>
    </section>
  );
}
