import { FlaskConical, Microscope, Atom, Calculator, BookOpen, Trees, Home, Bus } from 'lucide-react';

const facilities = [
  { name: 'Chemistry Lab', icon: FlaskConical },
  { name: 'Biology Lab', icon: Microscope },
  { name: 'Physics Lab', icon: Atom },
  { name: 'Math Lab', icon: Calculator },
  { name: 'Social Science Lab', icon: BookOpen },
  { name: 'Green Campus', icon: Trees },
  { name: 'Campus', icon: Home },
  { name: 'Transport', icon: Bus },
];

 


export default function Facilities() {
  return (
    <section className="py-10 md:py-24 bg-[linear-gradient(45deg,#084e91,#017eb1)]">
      <div className="  mx-auto px-6">
        <h2 className="text-xl md:text-6xl font-bold  mb-10 md:mb-20 text-white">
        | World-Class Facilities
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {facilities.map((facility) => {
            const Icon = facility.icon;
            return (
              <div
                key={facility.name}
                className="cursor-pointer bg-white/10 backdrop-blur-sm rounded-2xl px-1 py-4 md:p-8 text-center hover:bg-white/20 transition-all duration-300 border border-white/10"
              >
                <Icon className="w-6 h-6 md:w-12 md:h-12 text-yellow-400 mx-auto mb-4"   strokeWidth={1.5} />
                <h3 className="text-white font-semibold text-lg">{facility.name}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
