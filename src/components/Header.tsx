import Image from 'next/image';

export default function Header() {
  return (
    // Ensure header is above other elements
    <header className="absolute top-0 left-0 right-0 z-30 flex justify-between items-center p-4 sm:p-6">
      <Image
      src="/netflix-logo.svg"
      alt="Netflix Logo"
      width={148} // Adjust width as needed
      height={40} // Adjust height as needed
      />
      {/* Updated button styles to match reference */}
      <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-1.5 text-sm font-medium rounded">
        Sign In
      </button>
    </header>
  );
}
