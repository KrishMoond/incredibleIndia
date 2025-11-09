import { Cloud, Calendar, Coffee, AlertCircle } from 'lucide-react';

const tips = [
  {
    icon: Cloud,
    title: 'Weather',
    content: 'Hot summers (40°C+), pleasant winters (5-20°C). Monsoon: July-September',
  },
  {
    icon: Calendar,
    title: 'Best Season',
    content: 'October to March offers pleasant weather perfect for sightseeing',
  },
  {
    icon: Coffee,
    title: 'Must-Try Food',
    content: 'Bajra roti with jaggery, thick lassi, malpua, besan masala roti, kadhi',
  },
  {
    icon: AlertCircle,
    title: 'Local Etiquette',
    content: 'Dress modestly at religious sites. Remove shoes before entering temples',
  },
];

const TravelTips = () => {
  return (
    <section id="tips" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-[#333333] mb-4">
            Travel Tips
          </h2>
          <div className="w-24 h-1 bg-[#D4A017] mx-auto mb-6"></div>
          <p className="text-lg text-[#666666] max-w-2xl mx-auto">
            Essential information to make your Haryana journey comfortable and memorable
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {tips.map((tip, index) => {
            const Icon = tip.icon;
            return (
              <div
                key={index}
                className="flex items-start p-8 bg-[#F7F3E9] rounded-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex-shrink-0 w-16 h-16 bg-[#D4A017] rounded-full flex items-center justify-center mr-6">
                  <Icon className="text-white" size={28} />
                </div>
                <div>
                  <h3 className="text-2xl font-serif text-[#333333] mb-2">{tip.title}</h3>
                  <p className="text-[#666666]">{tip.content}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-[#1B4D3E] text-white rounded-2xl p-10 text-center">
          <h3 className="text-2xl font-serif mb-4">Getting Around</h3>
          <p className="text-lg max-w-3xl mx-auto">
            Haryana is well-connected by road and rail. The state has excellent highway
            infrastructure. Local buses, taxis, and app-based cabs are readily available.
            Major cities like Gurugram and Faridabad have metro connectivity to Delhi.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TravelTips;
