import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin, GraduationCap } from 'lucide-react';

const quickLinks = [ 
  'About Us',
  'Academics',
  'Admissions',
  'Facilities',
  'Gallery',
  'Contact',
];

const socialMedia = [
  { icon: Facebook, label: 'Facebook' },
  { icon: Twitter, label: 'Twitter' },
  { icon: Instagram, label: 'Instagram' },
  { icon: Linkedin, label: 'LinkedIn' },
];

export default function Footer() {
  return (
    <footer className="bg-[linear-gradient(45deg,#084e91,#017eb1)] pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <GraduationCap size={40} className="text-yellow-400" />
              <span className="text-xl md:text-2xl font-bold">Ravindera Global Academy</span>
            </div>
            <p className="text-sm md:text-base text-blue-200 leading-relaxed mb-6">
              Empowering students with knowledge, skills, and values to excel in a global
              society while remaining rooted in their cultural heritage.
            </p>
            <div className="flex gap-4">
              {socialMedia.map((social) => {
                const Icon = social.icon;
                return (
                  <button
                    key={social.label}
                    className="bg-white/10 hover:bg-yellow-400 hover:text-gray-900 p-3 rounded-full transition-all duration-300"
                    aria-label={social.label}
                  >
                    <Icon size={20} />
                  </button>
                );
              })}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="grid grid-cols-2 md:grid-cols-1 gap-3">

  {quickLinks.map((link) => (
    <li key={link}>
      <a
        href={`#${link.toLowerCase().replace(' ', '-')}`}
        className="text-blue-200 hover:text-yellow-400 transition-colors"
      >
        {link}
      </a>
    </li>
  ))}
</ul>

          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-yellow-400 flex-shrink-0 mt-1" size={20} />
                <span className="text-blue-200 break-words">
                  W55H+8QM, Manouli, Sonipat, Haryana 131023
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-yellow-400 flex-shrink-0" size={20} />
                <span className="text-blue-200 break-words">0145 263 1190</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-yellow-400 flex-shrink-0" size={20} />
                <span className="text-blue-200 break-words overflow-hidden">
                  rgacademymanauli@gmail.com
                </span>
              </li>
            </ul>
          </div>


          <div >
            <h4 className="mb-4 text-xl font-bold   text-gray-900">
              Location
            </h4>

            <div className="w-16 h-1 mb-4 bg-yellow-500 rounded" />

            <div className="overflow-hidden rounded-xl shadow-md">
              <iframe
                title="School Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d317.36284865493565!2d77.17903706442128!3d28.908252147137617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390daba1f788623b%3A0xfbb348ae22c6a1f7!2sRG%20ACADEMY!5e1!3m2!1sen!2sin!4v1767159667563!5m2!1sen!2sin"

                className="w-full h-[250px] border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 text-center text-blue-300">
          <p>&copy;  2018–{new Date().getFullYear()} RG Academy. All Rights Reserved. | Powered by : Jitesh Kumar</p>
        </div>
      </div>
    </footer>
  );
}
