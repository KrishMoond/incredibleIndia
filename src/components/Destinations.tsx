import { MapPin } from 'lucide-react';

const destinations = [
  {
    name: 'Taj Mahal, Agra',
    description: 'Eternal symbol of love and UNESCO World Heritage Site',
    image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=2070',
    highlight: 'Wonder of the World',
  },
  {
    name: 'Kerala Backwaters',
    description: 'Serene network of lagoons and lakes',
    image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=2070',
    highlight: 'God\'s Own Country',
  },
  {
    name: 'Rajasthan Palaces',
    description: 'Majestic forts and royal heritage',
    image: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?q=80&w=2070',
    highlight: 'Royal Heritage',
  },
  {
    name: 'Goa Beaches',
    description: 'Golden sands and vibrant beach culture',
    image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=2070',
    highlight: 'Beach Paradise',
  },
  {
    name: 'Himalayas, Ladakh',
    description: 'Breathtaking mountain landscapes and monasteries',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070',
    highlight: 'Mountain Adventure',
  },
  {
    name: 'Golden Temple, Amritsar',
    description: 'Sacred Sikh shrine and spiritual center',
    image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=2070',
    highlight: 'Spiritual Heritage',
  },
];

const Destinations = () => {
  return (
    <section id="destinations" className="py-24 bg-[#F7F3E9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-[#333333] mb-4">
            Gems of India
          </h2>
          <div className="w-24 h-1 bg-[#D4A017] mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination, index) => (
            <div
              key={index}
              className="group bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white text-sm font-semibold">Know More →</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center text-[#D4A017] mb-2">
                  <MapPin size={18} className="mr-2" />
                  <span className="text-sm font-semibold">{destination.highlight}</span>
                </div>
                <h3 className="text-2xl font-serif text-[#333333] mb-2">
                  {destination.name}
                </h3>
                <p className="text-[#666666]">{destination.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Destinations;