import { Link } from 'react-router-dom';
import { ChevronDown, Play, Star, Users, MapPin } from 'lucide-react';
import Culture from '../components/Culture';
import TravelTips from '../components/TravelTips';
import SEOHead from '../components/SEOHead';

const HomePage = () => {
  const stats = [
    { icon: MapPin, label: 'Destinations', value: '50+' },
    { icon: Users, label: 'Happy Visitors', value: '2M+' },
    { icon: Star, label: 'Rating', value: '4.8' },
  ];

  return (
    <>
      <SEOHead 
        title="Incredible India Tourism - Discover Heritage, Culture & Natural Beauty"
        description="Explore India's rich heritage, vibrant culture, and stunning destinations. Visit Taj Mahal, Kerala Backwaters, Rajasthan Palaces and more tourist attractions across India."
        keywords="India tourism, Taj Mahal, Kerala backwaters, Rajasthan palaces, Goa beaches, Himalayas, heritage tourism, cultural tourism, incredible India"
        image="https://images.unsplash.com/photo-1477587458883-47145ed94245?q=80&w=2070"
        url="https://incredibleindia.org"
      />
      
      {/* Hero Section */}
      <header className="relative min-h-screen pt-20 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20 z-10" />
          <img
            src="https://images.unsplash.com/photo-1477587458883-47145ed94245?q=80&w=2070&auto=format&fit=crop"
            alt="Hawa Mahal - Incredible India Heritage"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-20 container-padding h-full flex items-center">
          <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
            {/* Left Content */}
            <div className="text-white space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium">
                  🏛️ Official Tourism Portal
                </div>
                
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif leading-tight">
                  Discover
                  <span className="block gradient-text bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
                    Incredible India
                  </span>
                  <span className="block text-3xl md:text-4xl lg:text-5xl mt-2 text-white/90">
                    Unity in Diversity
                  </span>
                </h1>
                
                <p className="text-lg md:text-xl text-white/80 max-w-xl leading-relaxed">
                  Experience the land of ancient heritage, vibrant traditions, and timeless stories. From the majestic Taj Mahal to serene Kerala backwaters.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/destinations" className="btn-primary text-lg px-8 py-4">
                  Explore Destinations
                </Link>
                <button className="flex items-center justify-center space-x-3 px-8 py-4 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white rounded-lg font-medium transition-all duration-300 group">
                  <Play size={20} className="group-hover:scale-110 transition-transform" />
                  <span>Watch Video</span>
                </button>
              </div>

              {/* Stats */}
              <div className="flex flex-wrap gap-8 pt-8">
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center">
                        <Icon size={20} className="text-white" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-white">{stat.value}</div>
                        <div className="text-sm text-white/70">{stat.label}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Content - Featured Card */}
            <div className="hidden lg:block">
              <div className="card p-8 bg-white/95 backdrop-blur-sm">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-serif text-foreground mb-2">Plan Your Journey</h3>
                    <p className="text-muted-foreground">Discover the best of India with our curated experiences</p>
                  </div>
                  
                  <div className="space-y-4">
                    {[
                      { name: 'Taj Mahal', type: 'Wonder of World', image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?w=100&h=100&fit=crop&crop=center' },
                      { name: 'Kerala Backwaters', type: 'God\'s Own Country', image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=100&h=100&fit=crop&crop=center' },
                      { name: 'Rajasthan Palaces', type: 'Royal Heritage', image: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?w=100&h=100&fit=crop&crop=center' },
                    ].map((dest, index) => (
                      <div key={index} className="flex items-center space-x-4 p-3 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer">
                        <img src={dest.image} alt={dest.name} className="w-12 h-12 rounded-lg object-cover" />
                        <div className="flex-1">
                          <div className="font-medium text-foreground">{dest.name}</div>
                          <div className="text-sm text-muted-foreground">{dest.type}</div>
                        </div>
                        <ChevronDown size={16} className="text-muted-foreground rotate-[-90deg]" />
                      </div>
                    ))}
                  </div>
                  
                  <Link to="/destinations" className="btn-primary w-full text-center block">
                    View All Destinations
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
          <div className="animate-bounce-slow">
            <ChevronDown size={32} className="text-white/60" />
          </div>
        </div>
      </header>

      <main>
        {/* Featured Destinations */}
        <section className="section-padding bg-muted/30" aria-labelledby="featured-destinations">
          <div className="container-padding">
            <div className="text-center mb-16 space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                ✨ Featured Destinations
              </div>
              <h2 id="featured-destinations" className="text-4xl md:text-5xl font-serif text-foreground">
                Explore India's Treasures
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                From ancient temples to natural wonders, discover the diverse attractions that make India an incredible destination
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {[
                {
                  name: 'Taj Mahal, Agra',
                  description: 'Eternal symbol of love and UNESCO World Heritage Site',
                  image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=800&auto=format&fit=crop',
                  category: 'Wonder of the World',
                  rating: 4.9,
                  visitors: '8M+'
                },
                {
                  name: 'Kerala Backwaters',
                  description: 'Serene network of lagoons and lakes in God\'s Own Country',
                  image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=800&auto=format&fit=crop',
                  category: 'Nature & Serenity',
                  rating: 4.8,
                  visitors: '1M+'
                },
                {
                  name: 'Rajasthan Palaces',
                  description: 'Majestic forts and royal heritage of the desert state',
                  image: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?q=80&w=800&auto=format&fit=crop',
                  category: 'Royal Heritage',
                  rating: 4.7,
                  visitors: '3M+'
                },
              ].map((dest, index) => (
                <article
                  key={index}
                  className="card group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={dest.image}
                      alt={`${dest.name} - ${dest.description} in India`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-xs font-medium text-foreground rounded-full">
                        {dest.category}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4 flex items-center space-x-1 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full">
                      <Star size={12} className="text-yellow-500 fill-current" />
                      <span className="text-xs font-medium">{dest.rating}</span>
                    </div>
                  </div>
                  <div className="p-6 space-y-4">
                    <div>
                      <h3 className="text-xl font-serif text-foreground mb-2 group-hover:text-primary transition-colors">
                        {dest.name}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{dest.description}</p>
                    </div>
                    
                    <div className="flex items-center justify-between pt-2">
                      <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                        <Users size={12} />
                        <span>{dest.visitors} visitors</span>
                      </div>
                      <Link
                        to="/destinations"
                        className="text-primary hover:text-primary/80 font-medium text-sm transition-colors flex items-center space-x-1 group/link"
                      >
                        <span>Explore</span>
                        <ChevronDown size={14} className="rotate-[-90deg] group-hover/link:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="text-center">
              <Link to="/destinations" className="btn-primary text-lg px-8 py-4">
                View All Destinations
              </Link>
            </div>
          </div>
        </section>

        <Culture />
        <TravelTips />
      </main>
    </>
  );
};

export default HomePage;