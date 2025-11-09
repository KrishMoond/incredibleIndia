import { Music, Palette, UtensilsCrossed, Trophy } from 'lucide-react';

const culturalElements = [
  {
    icon: Music,
    title: 'Classical Arts',
    description: 'Bharatanatyam, Kathak, Carnatic & Hindustani music traditions',
  },
  {
    icon: Palette,
    title: 'Handicrafts',
    description: 'Silk weaving, pottery, jewelry, and regional art forms',
  },
  {
    icon: UtensilsCrossed,
    title: 'Diverse Cuisine',
    description: 'From spicy South Indian to rich Mughlai delicacies',
  },
  {
    icon: Trophy,
    title: 'Festivals',
    description: 'Diwali, Holi, Eid, Christmas - celebrating unity in diversity',
  },
];

const Culture = () => {
  return (
    <section id="culture" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-[#333333] mb-4">
            Culture & Heritage
          </h2>
          <div className="w-24 h-1 bg-[#D4A017] mx-auto mb-6"></div>
          <p className="text-lg text-[#666666] max-w-3xl mx-auto">
            India's rich cultural tapestry is woven with ancient traditions, diverse languages,
            and a spirit that celebrates unity in diversity across 28 states and 8 union territories
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {culturalElements.map((element, index) => {
            const Icon = element.icon;
            return (
              <div
                key={index}
                className="text-center p-8 rounded-lg bg-[#F7F3E9] hover:bg-[#D4A017] transition-all duration-300 transform hover:-translate-y-2 group"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 mb-6 rounded-full bg-[#1B4D3E] group-hover:bg-white transition-colors duration-300">
                  <Icon className="text-white group-hover:text-[#D4A017]" size={36} />
                </div>
                <h3 className="text-xl font-serif text-[#333333] group-hover:text-white mb-3 transition-colors duration-300">
                  {element.title}
                </h3>
                <p className="text-[#666666] group-hover:text-white/90 transition-colors duration-300">
                  {element.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-20 bg-gradient-to-r from-[#1B4D3E] to-[#2A6B52] rounded-2xl p-12 text-center text-white">
          <h3 className="text-3xl font-serif mb-4">Experience Incredible India</h3>
          <p className="text-lg mb-6 max-w-3xl mx-auto">
            From the snow-capped Himalayas to tropical beaches, ancient temples to modern cities,
            India offers an unparalleled journey through time, culture, and natural beauty.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Culture;