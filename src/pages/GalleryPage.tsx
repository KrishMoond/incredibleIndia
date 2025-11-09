import Gallery from '../components/Gallery';

const galleryImages = [
  {
    url: 'https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=2076',
    alt: 'Traditional dance performance',
  },
  {
    url: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=2071',
    alt: 'Cultural heritage',
  },
  {
    url: 'https://images.unsplash.com/photo-1609137144813-7d9921338f24?q=80&w=2087',
    alt: 'Handicrafts',
  },
  {
    url: 'https://images.unsplash.com/photo-1605649487212-47bdab064df7?q=80&w=2069',
    alt: 'Rural landscape',
  },
  {
    url: 'https://images.unsplash.com/photo-1587974928442-77dc3e0dba72?q=80&w=2068',
    alt: 'Historic gardens',
  },
  {
    url: 'https://images.unsplash.com/photo-1569163139394-de4798aa62b6?q=80&w=2070',
    alt: 'Cultural festival',
  },
  {
    url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070',
    alt: 'Mountain landscape',
  },
  {
    url: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=2070',
    alt: 'Sacred monuments',
  },
];

const GalleryPage = () => {
  return (
    <div className="pt-20">
      <section className="py-16 bg-gradient-to-r from-[#D4A017] to-[#1B4D3E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-5xl font-serif mb-4">Gallery</h1>
          <p className="text-xl">
            Visual stories from the heart of Haryana
          </p>
        </div>
      </section>

      <Gallery />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-serif text-[#333333] mb-6 text-center">
            More from Haryana
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-lg shadow-lg group cursor-pointer h-64"
              >
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white font-serif">{image.alt}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#F7F3E9]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-serif text-[#333333] mb-6">Share Your Haryana Moments</h2>
          <p className="text-lg text-[#666666] mb-8">
            Have you captured amazing moments in Haryana? Share your photos with us on social
            media using #HaryanaMemories
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <button className="bg-[#D4A017] hover:bg-[#C49316] text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
              Share on Instagram
            </button>
            <button className="bg-[#1B4D3E] hover:bg-[#0f332f] text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
              Share on Facebook
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GalleryPage;
