import { ArrowRight } from 'lucide-react';

const programs = [
  {
    title: 'School Activities',
    description: 'Nurturing creativity, curiosity, and confidence through a wide range of co-curricular activities such as art, music, debates, quizzes, and hands-on learning experiences that support overall personality development.',
    image: '/images/sc1.jpg',
  },
  {
    title: 'Sports',
    description: 'Promoting physical fitness, teamwork, and sportsmanship through regular sports activities, athletics, yoga, and outdoor games that help students build strength, discipline, and a healthy lifestyle.',
    image: '/images/sc2.jpg',
  },
  {
    title: 'School Clubs',
    description: 'Encouraging leadership, collaboration, and special interests through various clubs such as science club, eco club, cultural club, and literary club, helping students explore their talents beyond academics.',
    image: '/images/sc3.jpg',
  },
  {
    title: 'School Events',
    description: 'Creating memorable learning experiences through cultural programs, annual functions, festivals, competitions, and celebrations that foster confidence, creativity, and active participation among students.',
    image: '/images/sc4.jpg',
  },
];

export default function AcademicPrograms() {
  return (
    <section className="py-10 md:py-24 bg-gray-50">
      <div className="  mx-auto px-6">
        <h2 className="text-xl md:text-6xl font-bold md:font-medium mb-10   mb-10 md:mb-20 text-gray-900">
         | Our Academic Pathways
        </h2>

        <div className="grid md:grid-cols-4 gap-8">
          {programs.map((program) => (
            <div
              key={program.title}
              className="cursor-pointer bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="h-64 overflow-hidden">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-4 md:p-8">
                <h3 className="text-base md:text-2xl font-bold mb-4 text-gray-900">{program.title}</h3>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-6">{program.description}</p>
                <button className="text-yellow-500 font-semibold hover:text-yellow-600 transition-colors flex items-center gap-2 group">
                  Explore Pathway
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
