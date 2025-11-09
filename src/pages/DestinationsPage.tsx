import { Link } from 'react-router-dom';
import { MapPin, Star, Clock, Camera, Users, Filter } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import Breadcrumb from '../components/Breadcrumb';
import { useState } from 'react';

const destinations = [
  {
    id: 'taj-mahal',
    name: 'Taj Mahal, Agra',
    description: 'Eternal symbol of love and UNESCO World Heritage Site',
    fullDescription: 'The Taj Mahal is an ivory-white marble mausoleum built by Mughal emperor Shah Jahan in memory of his wife Mumtaz Mahal. This UNESCO World Heritage Site attracts millions of visitors annually.',
    image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=800&auto=format&fit=crop',
    category: 'Wonder of the World',
    rating: 4.9,
    visitors: '8M+',
    duration: '2-3 hours',
    bestTime: 'Oct-Mar',
    attractions: ['Main Mausoleum', 'Gardens', 'Mosque'],
    featured: true,
  },
  {
    id: 'kerala-backwaters',
    name: 'Kerala Backwaters',
    description: 'Serene network of lagoons and lakes',
    fullDescription: 'Kerala backwaters are a network of brackish lagoons and lakes lying parallel to the Arabian Sea coast. Experience houseboat cruises through palm-fringed waterways.',
    image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=800&auto=format&fit=crop',
    category: 'Nature & Serenity',
    rating: 4.8,
    visitors: '1M+',
    duration: '2-3 days',
    bestTime: 'Sep-Mar',
    attractions: ['Houseboat Cruise', 'Village Tours', 'Ayurveda Spas'],
    featured: true,
  },
  {
    id: 'rajasthan-palaces',
    name: 'Rajasthan Palaces',
    description: 'Majestic forts and royal heritage',
    fullDescription: 'Rajasthan palaces showcase the grandeur of royal India with magnificent architecture, intricate carvings, and rich history spanning centuries.',
    image: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?q=80&w=800&auto=format&fit=crop',
    category: 'Royal Heritage',
    rating: 4.7,
    visitors: '3M+',
    duration: '3-5 days',
    bestTime: 'Oct-Mar',
    attractions: ['Hawa Mahal', 'City Palace', 'Amber Fort'],
    featured: false,
  },
  {
    id: 'goa-beaches',
    name: 'Goa Beaches',
    description: 'Golden sands and vibrant beach culture',
    fullDescription: 'Goa beaches offer pristine coastline, water sports, vibrant nightlife, and Portuguese colonial architecture creating a perfect tropical paradise.',
    image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=800&auto=format&fit=crop',
    category: 'Beach Paradise',
    rating: 4.6,
    visitors: '2M+',
    duration: '3-7 days',
    bestTime: 'Nov-Feb',
    attractions: ['Water Sports', 'Beach Shacks', 'Churches'],
    featured: false,
  },
  {
    id: 'himalayas-ladakh',
    name: 'Himalayas, Ladakh',
    description: 'Breathtaking mountain landscapes and monasteries',
    fullDescription: 'Ladakh offers stunning high-altitude desert landscapes, ancient Buddhist monasteries, and adventure activities in the mighty Himalayas.',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=800&auto=format&fit=crop',
    category: 'Mountain Adventure',
    rating: 4.8,
    visitors: '500K+',
    duration: '5-7 days',
    bestTime: 'May-Sep',
    attractions: ['Monasteries', 'Trekking', 'High Passes'],
    featured: false,
  },
  {
    id: 'golden-temple',
    name: 'Golden Temple, Amritsar',
    description: 'Sacred Sikh shrine and spiritual center',
    fullDescription: 'The Golden Temple is the holiest Sikh shrine, known for its stunning golden architecture and the largest free kitchen in the world.',
    image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=800&auto=format&fit=crop',
    category: 'Spiritual Heritage',
    rating: 4.9,
    visitors: '1M+',
    duration: '1-2 days',
    bestTime: 'Oct-Mar',
    attractions: ['Golden Temple', 'Langar Hall', 'Jallianwala Bagh'],
    featured: false,
  },
];

const categories = [
  'All Destinations',
  'Wonder of the World',
  'Nature & Serenity',
  'Royal Heritage',
  'Beach Paradise',
  'Mountain Adventure',
  'Spiritual Heritage',
];

const DestinationsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All Destinations');
  const [showFilters, setShowFilters] = useState(false);

  const filteredDestinations = selectedCategory === 'All Destinations' 
    ? destinations 
    : destinations.filter(dest => dest.category === selectedCategory);

  const featuredDestinations = destinations.filter(dest => dest.featured);

  return (
    <div className="pt-20">
      <SEOHead 
        title="India Tourist Destinations - Places to Visit in Incredible India"
        description="Explore top tourist destinations in India including Taj Mahal, Kerala Backwaters, Rajasthan Palaces, Goa Beaches, and more incredible places."
        keywords="India destinations, places to visit India, Taj Mahal, Kerala backwaters, Rajasthan palaces, Goa beaches, India attractions"
        image="https://images.unsplash.com/photo-1477587458883-47145ed94245?q=80&w=2070"
        url="https://incredibleindia.com/destinations"
      />
      
      <Breadcrumb items={[{ label: 'Destinations' }]} />

      {/* Hero Section */}
      <header className="relative py-20 bg-gradient-to-br from-primary via-primary/90 to-accent overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1477587458883-47145ed94245?q=80&w=2070')] bg-cover bg-center opacity-10" />
        <div className="relative container-padding text-center text-white space-y-6">
          <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-4">
            🗺️ Discover Amazing Places
          </div>
          <h1 className="text-4xl md:text-6xl font-serif">
            Incredible India Destinations
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            From ancient monuments to scenic landscapes, explore the diverse attractions that showcase India's rich heritage and natural beauty
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <MapPin size={16} />
              <span className="text-sm">{destinations.length}+ Destinations</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <Star size={16} />
              <span className="text-sm">4.8 Average Rating</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <Users size={16} />
              <span className="text-sm">15M+ Annual Visitors</span>
            </div>
          </div>
        </div>
      </header>

      <main>
        {/* Featured Destinations */}
        <section className="section-padding bg-muted/30">
          <div className="container-padding">
            <div className="text-center mb-12 space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                ⭐ Must Visit
              </div>
              <h2 className="text-3xl md:text-4xl font-serif text-foreground">
                Featured Destinations
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our top recommended destinations that showcase the best of India's culture and natural beauty
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
              {featuredDestinations.map((destination) => (
                <Link
                  key={destination.id}
                  to={`/destinations/${destination.id}`}
                  className="card group hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 overflow-hidden"
                >
                  <div className="md:flex">
                    <div className="md:w-1/2 relative h-64 md:h-auto overflow-hidden">
                      <img
                        src={destination.image}
                        alt={`${destination.name} - ${destination.description}`}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        loading="lazy"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                          Featured
                        </span>
                      </div>
                      <div className="absolute top-4 right-4 flex items-center space-x-1 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full">
                        <Star size={12} className="text-yellow-500 fill-current" />
                        <span className="text-xs font-medium">{destination.rating}</span>
                      </div>
                    </div>
                    <div className="md:w-1/2 p-6 space-y-4">
                      <div>
                        <div className="flex items-center space-x-2 text-primary text-sm font-medium mb-2">
                          <MapPin size={14} />
                          <span>{destination.category}</span>
                        </div>
                        <h3 className="text-2xl font-serif text-foreground group-hover:text-primary transition-colors">
                          {destination.name}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">{destination.fullDescription}</p>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div className="flex items-center space-x-2 text-muted-foreground">
                          <Clock size={14} />
                          <span>{destination.duration}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-muted-foreground">
                          <Users size={14} />
                          <span>{destination.visitors}</span>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-2">
                        {destination.attractions.slice(0, 3).map((attraction, index) => (
                          <span key={index} className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-md">
                            {attraction}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* All Destinations */}
        <section className="section-padding">
          <div className="container-padding">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12 space-y-4 lg:space-y-0">
              <div>
                <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-2">
                  All Destinations
                </h2>
                <p className="text-muted-foreground">
                  Explore all {destinations.length} destinations across India
                </p>
              </div>
              
              {/* Filters */}
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="lg:hidden flex items-center space-x-2 px-4 py-2 bg-muted rounded-lg"
                >
                  <Filter size={16} />
                  <span>Filters</span>
                </button>
                
                <div className={`${showFilters ? 'block' : 'hidden'} lg:block`}>
                  <div className="flex flex-wrap gap-2">
                    {categories.map((category) => (
                      <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                          selectedCategory === category
                            ? 'bg-primary text-primary-foreground'
                            : 'bg-muted hover:bg-muted/80 text-muted-foreground hover:text-foreground'
                        }`}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredDestinations.map((destination) => (
                <Link
                  key={destination.id}
                  to={`/destinations/${destination.id}`}
                  className="card group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={destination.image}
                      alt={`${destination.name} - ${destination.description}`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-xs font-medium text-foreground rounded-full">
                        {destination.category}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4 flex items-center space-x-1 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full">
                      <Star size={12} className="text-yellow-500 fill-current" />
                      <span className="text-xs font-medium">{destination.rating}</span>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="flex items-center justify-between text-white">
                          <div className="flex items-center space-x-2">
                            <Camera size={16} />
                            <span className="text-sm">View Gallery</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Users size={14} />
                            <span className="text-xs">{destination.visitors}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6 space-y-4">
                    <div>
                      <h3 className="text-xl font-serif text-foreground mb-2 group-hover:text-primary transition-colors">
                        {destination.name}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{destination.description}</p>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center space-x-2 text-muted-foreground">
                        <Clock size={14} />
                        <span>{destination.duration}</span>
                      </div>
                      <div className="text-primary font-medium">
                        Best: {destination.bestTime}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default DestinationsPage;