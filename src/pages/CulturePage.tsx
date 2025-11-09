import Culture from '../components/Culture';
import SEOHead from '../components/SEOHead';
import Breadcrumb from '../components/Breadcrumb';

const CulturePage = () => {
  return (
    <div className="pt-20">
      <SEOHead 
        title="India Culture & Heritage - Traditional Arts, Crafts & Festivals"
        description="Explore India's rich cultural heritage including classical arts, traditional crafts, diverse cuisine, and major festivals across 28 states."
        keywords="India culture, Indian traditions, classical arts, handicrafts, Indian festivals, diverse cuisine, cultural heritage"
        image="https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=2070"
        url="https://incredibleindia.org/culture"
      />
      <Breadcrumb items={[{ label: 'Culture & Heritage' }]} />
      <header className="py-16 bg-gradient-to-r from-[#1B4D3E] to-[#D4A017]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-5xl font-serif mb-4">India Culture & Heritage</h1>
          <p className="text-xl">
            Experience the vibrant traditions, classical arts, and rich cultural heritage of Incredible India
          </p>
        </div>
      </header>

      <main>
        <Culture />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-serif text-[#333333] mb-12 text-center">
            Indian Traditions
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-[#F7F3E9] rounded-lg p-8">
              <h3 className="text-2xl font-serif text-[#333333] mb-4">Classical Arts</h3>
              <p className="text-[#666666] leading-relaxed mb-4">
                India's classical arts include ancient dance forms like Bharatanatyam, Kathak, and music traditions
                like Carnatic and Hindustani that have been preserved for centuries.
              </p>
              <ul className="space-y-2 text-[#666666]">
                <li>• Bharatanatyam - Tamil Nadu classical dance</li>
                <li>• Kathak - North Indian classical dance</li>
                <li>• Carnatic Music - South Indian classical</li>
                <li>• Hindustani Music - North Indian classical</li>
              </ul>
            </div>

            <div className="bg-[#F7F3E9] rounded-lg p-8">
              <h3 className="text-2xl font-serif text-[#333333] mb-4">Handicrafts</h3>
              <p className="text-[#666666] leading-relaxed mb-4">
                India is renowned for its diverse handicrafts including silk weaving, pottery,
                jewelry making, and regional art forms that vary from state to state.
              </p>
              <ul className="space-y-2 text-[#666666]">
                <li>• Silk Weaving - Banarasi, Kanchipuram</li>
                <li>• Pottery - Blue pottery, Terracotta</li>
                <li>• Jewelry - Kundan, Meenakari</li>
                <li>• Textiles - Block printing, Embroidery</li>
              </ul>
            </div>

            <div className="bg-[#F7F3E9] rounded-lg p-8">
              <h3 className="text-2xl font-serif text-[#333333] mb-4">Diverse Cuisine</h3>
              <p className="text-[#666666] leading-relaxed mb-4">
                Indian cuisine varies dramatically across regions, from spicy South Indian dishes
                to rich Mughlai delicacies, offering an incredible diversity of flavors.
              </p>
              <ul className="space-y-2 text-[#666666]">
                <li>• South Indian - Dosa, Sambar, Rasam</li>
                <li>• Mughlai - Biryani, Kebabs, Korma</li>
                <li>• Gujarati - Dhokla, Thali, Sweets</li>
                <li>• Bengali - Fish curry, Sweets, Rice</li>
              </ul>
            </div>

            <div className="bg-[#F7F3E9] rounded-lg p-8">
              <h3 className="text-2xl font-serif text-[#333333] mb-4">Festivals</h3>
              <p className="text-[#666666] leading-relaxed mb-4">
                India celebrates numerous festivals throughout the year including Diwali, Holi,
                Eid, Christmas, showcasing the country's unity in diversity.
              </p>
              <ul className="space-y-2 text-[#666666]">
                <li>• Diwali - Festival of lights</li>
                <li>• Holi - Festival of colors</li>
                <li>• Eid - Islamic celebration</li>
                <li>• Christmas - Christian festival</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#F7F3E9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-serif text-[#333333] mb-12 text-center">
            Major Festivals
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Diwali',
                month: 'October-November',
                description: 'Festival of lights celebrated across India with lamps, fireworks, and sweets.',
              },
              {
                name: 'Holi',
                month: 'March',
                description: 'Festival of colors marking the arrival of spring with vibrant celebrations.',
              },
              {
                name: 'Durga Puja',
                month: 'September-October',
                description: 'Bengali festival celebrating Goddess Durga with elaborate pandals and cultural programs.',
              },
            ].map((festival, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-2xl font-serif text-[#D4A017] mb-2">{festival.name}</h3>
                <p className="text-sm font-semibold text-[#1B4D3E] mb-4">{festival.month}</p>
                <p className="text-[#666666]">{festival.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      </main>
    </div>
  );
};

export default CulturePage;