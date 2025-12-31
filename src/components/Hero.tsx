import { ArrowRight } from 'lucide-react';
import heroBg from "../Images/rgacademy1.jpeg";


export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center text-white">
        <h1 className="text-2xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight">
          Ravindera Global Academy
        </h1>
        <p className="text-sm md:text-2xl lg:text-3xl mb-12 font-light tracking-wide">
          Shaping Confident Learners For a Global Future
        </p>
        <div className="flex flex-row sm:flex-row gap-6 justify-center items-center">
          <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold px-4 py-2 md:px-10 md:py-4 rounded-full text-base md:text-lg transition-all duration-300 transform hover:scale-105 shadow-xl">
            Apply Now
          </button>
          <button className="border-2 border-white hover:bg-white hover:text-gray-900 text-white font-semibold px-[10px] py-2 md:px-10 md:py-4 rounded-full text-base md:text-lg  transition-all duration-300 flex items-center gap-2">
            Discover More
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
