import { ArrowRight } from 'lucide-react';

const images = [
  '/images/Gallery/rg1.jpg',
  '/images/Gallery/rg2.jpg',
  '/images/Gallery/rg3.jpg',
  '/images/Gallery/rg4.jpg',
  '/images/Gallery/rg5.jpg',
  '/images/Gallery/rg6.jpg',
  '/images/Gallery/rg7.jpg',
  '/images/Gallery/rg8.jpg',
];

export default function Gallery() {
  return (
    <section className="py-10 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-5xl md:text-6xl font-bold mb-10 md:mb-20 text-gray-900">
        | Our Gallery
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 ">
          {images.map((image, index) => (
            <div
              key={index}
              className="aspect-square rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              <img
                src={image}
                alt={`Gallery ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold px-10 py-2 md:py-4 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center gap-1  md:gap-2">
            View All Photos
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
