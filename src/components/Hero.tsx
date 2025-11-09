import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToDestinations = () => {
    const element = document.getElementById('destinations');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-screen">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1477587458883-47145ed94245?q=80&w=2070)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div>
      </div>

      <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-5xl md:text-7xl font-serif text-white mb-6 animate-fade-in">
          Incredible India: Unity in Diversity
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-2xl">
          Discover the land of ancient heritage, vibrant traditions, and timeless stories across 28 states
        </p>
        <button
          onClick={scrollToDestinations}
          className="bg-[#D4A017] hover:bg-[#C49316] text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl"
        >
          Explore Destinations
        </button>

        <div className="absolute bottom-8 animate-bounce">
          <ChevronDown size={40} className="text-white/80" />
        </div>
      </div>
    </section>
  );
};

export default Hero;