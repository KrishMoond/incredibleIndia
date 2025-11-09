import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, MapPin, Clock, MapPinIcon } from 'lucide-react';

const destinations = [
  {
    id: 'kurukshetra',
    name: 'Kurukshetra',
    description: 'The sacred land of the Bhagavad Gita',
    fullDescription: 'Kurukshetra is one of the most sacred pilgrimage sites in Hinduism, known as the land where the Bhagavad Gita was recited. Home to numerous temples and the holy Brahma Sarovar lake, this historic city attracts millions of devotees annually. The city is steeped in mythology and holds immense spiritual significance for Hindus worldwide.',
    image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=2070',
    highlight: 'Spiritual & Historical',
    attractions: ['Brahma Sarovar', 'Krishna Museum', 'Gita Mandap', 'Shahi Jor Mandir'],
    bestTime: 'October to March',
    distance: '160 km from Delhi',
    activities: 'Pilgrimage, Temple visits, Photography, Spiritual meditation',
  },
  {
    id: 'morni-hills',
    name: 'Morni Hills',
    description: 'Serene hill station with twin lakes',
    fullDescription: 'Morni Hills is a picturesque destination featuring twin lakes surrounded by lush green hills. It\'s an ideal spot for trekking, birdwatching, and nature lovers seeking tranquility away from city chaos. The landscape offers breathtaking views, especially during sunrise and sunset.',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070',
    highlight: 'Nature & Adventure',
    attractions: ['Twin Lakes', 'Trekking Trails', 'Birdwatching', 'Picnic Spots'],
    bestTime: 'September to May',
    distance: '75 km from Delhi',
    activities: 'Trekking, Birdwatching, Photography, Camping',
  },
  {
    id: 'sultanpur-bird-sanctuary',
    name: 'Sultanpur Bird Sanctuary',
    description: 'Haven for migratory birds',
    fullDescription: 'This protected wetland sanctuary is a paradise for bird enthusiasts and photographers. Over 250 species of birds can be spotted here, making it one of Asia\'s most important bird sanctuaries. The sanctuary is best visited during the winter months when migratory birds arrive.',
    image: 'https://images.unsplash.com/photo-1580982172477-e5aaf44e9daf?q=80&w=2070',
    highlight: 'Wildlife & Photography',
    attractions: ['Bird Watching', 'Photography', 'Nature Trails', 'Observation Tower'],
    bestTime: 'November to February',
    distance: '45 km from Delhi',
    activities: 'Birdwatching, Photography, Nature walks, Research',
  },
  {
    id: 'pinjore-gardens',
    name: 'Pinjore Gardens',
    description: 'Mughal-era terraced gardens',
    fullDescription: 'Built in the 17th century, Pinjore Gardens is an architectural marvel featuring terraced lawns, fountains, and pavilions set against the backdrop of the Shivalik hills. The gardens span 35 acres and showcase exquisite Mughal landscape design.',
    image: 'https://images.unsplash.com/photo-1587974928442-77dc3e0dba72?q=80&w=2068',
    highlight: 'Architecture & Beauty',
    attractions: ['Terraced Gardens', 'Mughal Architecture', 'Yadavindra Gardens', 'Royal Pavilions'],
    bestTime: 'October to March',
    distance: '120 km from Delhi',
    activities: 'Sightseeing, Photography, Picnicking, Nature walks',
  },
  {
    id: 'surajkund',
    name: 'Surajkund',
    description: 'Home to the famous crafts mela',
    fullDescription: 'Surajkund is renowned for hosting Asia\'s largest crafts fair held annually in February. The lake is a popular picnic spot and hosts numerous cultural events throughout the year. The area is rich in cultural heritage and showcases traditional Indian crafts.',
    image: 'https://images.unsplash.com/photo-1569163139394-de4798aa62b6?q=80&w=2070',
    highlight: 'Crafts & Culture',
    attractions: ['Surajkund Mela', 'Crafts Fair', 'Lake Activities', 'Heritage Trail'],
    bestTime: 'February (Mela), October to May (general)',
    distance: '35 km from Delhi',
    activities: 'Shopping, Cultural programs, Boating, Photography',
  },
  {
    id: 'badkhal-lake',
    name: 'Badkhal Lake',
    description: 'Peaceful lake surrounded by hills',
    fullDescription: 'Badkhal Lake is a serene destination perfect for picnics, boating, and relaxation. Surrounded by picturesque hills, it offers a perfect escape from urban life. The scenic beauty and peaceful atmosphere make it ideal for family outings.',
    image: 'https://images.unsplash.com/photo-1439066615861-d1af74d74000?q=80&w=2073',
    highlight: 'Relaxation & Picnics',
    attractions: ['Boating', 'Picnicking', 'Water Sports', 'Lakeside Walks'],
    bestTime: 'October to March',
    distance: '60 km from Delhi',
    activities: 'Boating, Picnicking, Swimming, Photography',
  },
];

const DestinationDetailPage = () => {
  const { id } = useParams();
  const destination = destinations.find((d) => d.id === id);

  if (!destination) {
    return (
      <div className="pt-32 text-center">
        <h1 className="text-3xl font-serif text-[#333333] mb-4">Destination not found</h1>
        <Link to="/destinations" className="text-[#D4A017] hover:text-[#C49316]">
          Back to destinations
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-20">
      <Link
        to="/destinations"
        className="inline-flex items-center text-[#D4A017] hover:text-[#C49316] mx-4 mt-4 font-semibold"
      >
        <ArrowLeft size={20} className="mr-2" />
        Back to Destinations
      </Link>

      <section className="relative h-96 mt-4">
        <img
          src={destination.image}
          alt={destination.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-8 text-white">
          <h1 className="text-5xl font-serif mb-2">{destination.name}</h1>
          <p className="text-xl text-white/90">{destination.description}</p>
        </div>
      </section>

      <section className="py-16 bg-[#F7F3E9]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-serif text-[#333333] mb-6">About</h2>
            <p className="text-lg text-[#666666] leading-relaxed mb-8">
              {destination.fullDescription}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-start">
                <MapPin className="text-[#D4A017] mr-4 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-semibold text-[#333333] mb-1">Location</h3>
                  <p className="text-[#666666]">{destination.distance}</p>
                </div>
              </div>
              <div className="flex items-start">
                <Clock className="text-[#D4A017] mr-4 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-semibold text-[#333333] mb-1">Best Time to Visit</h3>
                  <p className="text-[#666666]">{destination.bestTime}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-serif text-[#333333] mb-6">Main Attractions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {destination.attractions.map((attraction, index) => (
                <div key={index} className="flex items-center">
                  <MapPinIcon className="text-[#D4A017] mr-3 flex-shrink-0" size={20} />
                  <span className="text-[#666666]">{attraction}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-serif text-[#333333] mb-4">Activities</h2>
            <p className="text-lg text-[#666666]">{destination.activities}</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DestinationDetailPage;
