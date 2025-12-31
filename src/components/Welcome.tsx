import { Eye, Heart } from 'lucide-react';
import { useState } from 'react';
import { motion } from "framer-motion";



export default function Welcome() {
  const fadeUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };


  const [showMore, setShowMore] = useState(false);
  return (
    <section className="py-12 md:py-24 bg-white">
      <div className="  mx-auto px-6">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-base md:text-6xl font-bold mb-10 md:mb-20 text-gray-900"
        >
          | WELCOME TO RG ACADEMY
        </motion.h2>


        <div className="grid md:grid-cols-2 gap-16 mb-16">
          <div className="space-y-6">
            {/* First paragraph – ALWAYS visible */}
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-xs md:text-lg text-gray-700 leading-relaxed"
            >

              <strong>Ravindera Global Academy</strong>, located in
              <strong> Village Manauli, Sonepat</strong>, is a reputed
              <strong> co-educational institution</strong> spread across a
              <strong> 7-acre lush, green, and pollution-free campus</strong>.
              Known as a <strong>Living Legend</strong>, the school offers a
              peaceful and inspiring environment that supports quality learning
              for both boys and girls.

            </motion.p>

            {/* Remaining paragraphs */}
            <div className={`${showMore ? 'block' : 'hidden'} md:block space-y-6`}>
              <motion.p
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-xs md:text-lg text-gray-700 leading-relaxed"
              >
                Managed by the <strong>Shri Inder Singh Educational and Charitable Trust</strong>
                and <strong>established in 2021</strong>, the academy is founded on
                the core values of <strong>truth, knowledge, and wisdom</strong>.
                It provides <strong>world-class education from Nursery to Class X</strong>,
                with a strong focus on academic excellence and moral development.
              </motion.p>

              <motion.p
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-xs md:text-lg text-gray-700 leading-relaxed"
              >
                The school emphasizes the <strong>overall development of students</strong>
                through various <strong>co-curricular activities</strong> such as
                <strong> music, dance, art, and sports</strong>. Equipped with
                <strong> modern infrastructure</strong> including
                <strong> digital classrooms</strong>, a <strong>well-stocked library</strong>,
                <strong> advanced computer and science labs</strong>, and
                <strong> spacious playgrounds</strong>, Ravindera Global Academy
                nurtures students into <strong>confident and responsible individuals</strong>.
              </motion.p>
            </div>

            {/* Read More button – ONLY mobile */}
            <button
              onClick={() => setShowMore(!showMore)}
              className="md:hidden text-[10px] text-blue-600 underline"
            >
              {showMore ? 'Read less' : 'Read more'}
            </button>
          </div>



          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden shadow-2xl"
          >
            <img
              src="/images/staff/school.jpg "
              alt="Teacher with students"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

        <div className="grid  md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 md:p-10 rounded-2xl shadow-lg">
            <span className='flex gap-6' >
              <Eye className="text-yellow-500 mb-4 w-6 h-6 md:w-12 md:h-12" />

              <h3 className="text-lg md:text-2xl font-bold mb-4 text-gray-900">Our Vision</h3>
            </span>


            <p className="text-xs md:text-base text-gray-700 leading-relaxed">
              To prepare and inspire students for a <strong className="text-gray-900">
                rapidly changing world</strong> by developing <strong className="text-gray-900">
                critical thinking</strong>, a global outlook, and strong core values such as
              honesty, loyalty, perseverance, and compassion—empowering them to achieve
              success today and reach their highest potential.
            </p>
          </div>


          <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-4 md:p-10 rounded-2xl shadow-lg">
            <span className='flex gap-6' >
              <Heart className="text-yellow-500 mb-4 w-6 h-6 md:w-12 md:h-12" />
              <h3 className="text-lg md:text-2xl font-bold mb-4 text-gray-900">Core Values</h3>

            </span>

            <p className="text-sm md:text-base text-gray-700 leading-relaxed">
              Guided by <strong className="text-gray-900">Excellence</strong>,
              <strong className="text-gray-900"> Integrity</strong>, Innovation, Inclusivity,
              and Empowerment, our values define our curriculum, enrich our teaching practices,
              and nurture a positive school culture.
            </p>
          </div>

        </div>
      </div>
    </section >
  );
}
