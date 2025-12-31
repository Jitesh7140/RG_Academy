import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Welcome from '../components/Welcome';
import AcademicPrograms from '../components/AcademicPrograms';
import Facilities from '../components/Facilities';
import AcademicExcellence from '../components/SocialMediaSection';
import AdmissionProcess from '../components/AdmissionProcess';
import Gallery from '../components/Gallery'; 
// import InjunctionNotice from './components/InjunctionNotice';
import MessagesSection from '../components/MessagesSection';
import { FaWhatsapp } from 'react-icons/fa';

import ScrollReveal from '../components/ScrollReveal';

function App1() {
  return (
    <div className="min-h-screen relative overflow-x-hidden">
      <Navbar />

      <ScrollReveal>
        <Hero />
      </ScrollReveal>

      <ScrollReveal delay={100}>
        <Welcome />
      </ScrollReveal>

      <ScrollReveal delay={150}>
        <AcademicPrograms />
      </ScrollReveal>

      <ScrollReveal delay={200}>
        <Facilities />
      </ScrollReveal>

      <ScrollReveal delay={250}>
        <AcademicExcellence />
      </ScrollReveal>

      <ScrollReveal delay={300}>
        <AdmissionProcess />
      </ScrollReveal>

      <ScrollReveal delay={350}>
        <Gallery />
      </ScrollReveal>

      <ScrollReveal delay={400}>
        <MessagesSection />
      </ScrollReveal>

       

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/918278787878"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg z-50"
      >
        <FaWhatsapp size={28} />
      </a>
    </div>
  );
}

export default App1;
