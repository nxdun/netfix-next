export default function HeroSection() {
  return (
    <section className="text-center p-8 sm:p-16 bg-cover bg-center">
      <h1 className="text-3xl sm:text-5xl font-bold mb-4">
        Unlimited movies, TV shows, and more
      </h1>
      <p className="text-lg sm:text-xl mb-6">Watch anywhere. Cancel anytime.</p>
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <input
          type="email"
          placeholder="Email address"
          className="p-3 rounded w-full sm:w-auto"
        />
        <button className="bg-gray-700 text-white px-6 py-3 rounded">
          Get Started
        </button>
      </div>
    </section>
  );
}
