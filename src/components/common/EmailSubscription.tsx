import ChevronRightIcon from "../icons/ChevronRightIcon";

export default function EmailSubscription() {
  return (
    <div className="flex flex-col sm:flex-row justify-center items-center gap-3 w-full">
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
  );
}
