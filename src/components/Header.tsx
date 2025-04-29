import Image from 'next/image';

export default function Header() {
  return (
    <header className="flex justify-between items-center p-4 sm:p-6">
      <Image
      src="/netflix-logo.svg"
      alt="Netflix Logo"
      width={148} // Adjust width as needed
      height={40} // Adjust height as needed
      />
      <button className="bg-gray-700 text-white px-4 py-2 rounded">
      Sign In
      </button>
    </header>
  );
}
