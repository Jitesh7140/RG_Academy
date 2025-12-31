import { Target, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';





export default function AboutUs() {

  return (
    <div className="pt-10 md:pt-24">
      <section className="pt-24 pb-8 md:py-24 bg-gradient-to-br from-blue-900 to-blue-950 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-xl md:text-7xl font-bold mb-4 md:mb-6">About Ravindera Global Academy</h1>

        </div>
      </section>

      <section className=" ">
        <div className="pt-0 md:pt-24 bg-gray-100">
          <div className="max-w-7xl mx-auto px-6 py-10">
            <div className="grid md:grid-cols-3 gap-10">


              {/* LEFT SIDE NAVIGATION */}
              <div className="md:col-span-2 bg-white p-10 shadow-lg">
                <h2 className="text-xl md:text-3xl font-bold mb-6">Our Story</h2>
                <p className="text-xs md:text-sm text-gray-700 leading-relaxed">
                  Founded with a vision to deliver quality education, our institution
                  has consistently evolved to meet the needs of modern learners.
                  We believe in holistic development and lifelong learning.
                </p>
              </div>


              {/* RIGHT SIDE CONTENT */}
              <div className="space-y-4">
                {[
                  { label: "Our Story", path: "/about" },
                  { label: "Vision", path: "/about" },
                  { label: "Chairman Message", path: "/about" },
                  { label: "Director Message", path: "/about" },
                  { label: "Principal Message", path: "/about" },
                ].map((item) => (
                  <Link
                    key={item.label}
                    to={item.path}
                    className="block bg-blue-900 text-white px-6 py-4 font-semibold hover:bg-blue-600 rounded transition"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>



            </div>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl md:text-5xl font-bold text-center mb-5 md:mb-20 text-gray-900">Our Mission & Vision</h2>
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div className="bg-white p-10 rounded-2xl shadow-lg">
              <span className='flex gap-6' >
                <Target className="text-blue-900 mb-4 w-6 h-6 md:w-12 md:h-12" size={48} strokeWidth={1.5} />
                <h3 className="text-lg md:text-3xl font-bold mb-4 text-gray-900">Mission</h3>
              </span>
              <p className="text-gray-700 leading-relaxed text-xs md:text-lg">
                To provide a transformative educational experience that nurtures intellectual curiosity, develops
                critical thinking skills, and instills values of integrity, responsibility, and global citizenship,
                preparing students to excel academically and make meaningful contributions to society.
              </p>
            </div>
            <div className="bg-white p-10 rounded-2xl shadow-lg">
              <span className='flex gap-6' >
                <Globe className="text-yellow-500 mb-4 w-6 h-6 md:w-12 md:h-12" size={48} strokeWidth={1.5} />
                <h3 className="text-lg md:text-3xl font-bold mb-4 text-gray-900">Vision</h3>
              </span>
              <p className="text-gray-700 leading-relaxed text-xs md:text-lg">
                To be a globally recognized institution that empowers students with knowledge, skills, and values to
                excel in an interconnected world while remaining rooted in their cultural heritage and contributing to
                a more just and sustainable future.
              </p>
            </div>
          </div>
        </div>
      </section>

   

      <section className="py-10 md:py-24 bg-gradient-to-br from-blue-900 to-blue-950 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl md:text-5xl font-bold text-center mb-10 md:mb-20">By The Numbers</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '2,500+', label: 'Students' },
              { number: '250+', label: 'Faculty Members' },
              { number: '30+', label: 'Years of Excellence' },
              { number: '95%', label: 'University Placement' },
            ].map((stat, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl">
                <div className="text-base md:text-5xl font-bold text-yellow-400 mb-3">{stat.number}</div>
                <div className="text-sm md:text-xl text-blue-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
