import Image from 'next/image';

export default function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-30 flex justify-between items-center py-4 sm:py-6 section-padding-x">
      {/* ! Netflix logo */}
      <Image
        src="/netflix-logo.svg"
        alt="Netflix Logo"
        width={90}
        height={25}
        className="sm:w-[148px] sm:h-[40px]"
      />
      {/* 🔥 Sign-in button */}
      <button className="bg-red-600 hover:bg-red-700 text-white px-2 py-1 sm:px-4 sm:py-1.5 text-sm font-medium rounded">
        Sign In
      </button>
    </header>
  );
}
