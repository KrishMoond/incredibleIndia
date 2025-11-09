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
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-24 bg-[#F7F3E9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-[#333333] mb-4">
            Visual Journey
          </h2>
          <div className="w-24 h-1 bg-[#D4A017] mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-lg group cursor-pointer h-80"
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-white text-lg font-serif">{image.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
