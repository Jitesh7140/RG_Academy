import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', subject: '', message: '' });
    alert('Thank you for your message. We will get back to you soon!');
  };

  return (
    <div className="pt-10 md:pt-24">
      <section className="pt-24 pb-10 md:py-24 bg-gradient-to-br from-blue-900 to-blue-950 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-xl md:text-7xl  font-bold mb-2 md:mb-6">Get In Touch</h1>
          <p className="text-sm md:text-2xl font-light">We'd love to hear from you. Reach out to us anytime.</p>
        </div>
      </section>

      <section className="py-10 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-xl md:text-4xl font-bold mb-12 text-gray-900">| Contact Information</h2>

              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="bg-yellow-100 p-4 rounded-full h-fit">
                    <MapPin className="text-blue-900  w-6 h-6 md:w-12 md:h-12"   strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-base md:text-2xl font-bold mb-2 text-gray-900">Address</h3>
                    <p className="text-gray-700 text-xs md:text-lg leading-relaxed">
                      W55H+8QM,<br />
                       Manouli,Sonipat, Haryana 131023
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="bg-yellow-100 p-4 rounded-full h-fit">
                    <Phone className="text-blue-900  w-6 h-6 md:w-12 md:h-12" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-base md:text-2xl  font-bold mb-2 text-gray-900">Phone</h3>
                    <p className="text-gray-700 text-xs md:text-lg">
                      Main: 0145 263 1190<br />
                      Admissions:  0145 263 1190
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="bg-yellow-100 p-4 rounded-full h-fit">
                    <Mail className="text-blue-900  w-6 h-6 md:w-12 md:h-12" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-base md:text-2xl  font-bold mb-2 text-gray-900">Email</h3>
                    <p className="text-gray-700 text-xs md:text-lg">
                      General: rgacademymanauli@gmail.com<br />
                       
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="bg-yellow-100 p-4 rounded-full h-fit">
                    <Clock className="text-blue-900  w-6 h-6 md:w-12 md:h-12" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-base md:text-2xl  font-bold mb-2 text-gray-900">Office Hours</h3>
                    <p className="text-gray-700 text-xs md:text-lg">
                      Monday - Friday: 8:00 AM - 5:00 PM<br />
                      Saturday: 9:00 AM - 2:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl md:text-4xl font-bold mb-8 text-gray-900">| Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-yellow-400 transition-colors"
                    placeholder="Your Name"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-yellow-400 transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-yellow-400 transition-colors"
                    placeholder="How can we help?"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-6 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-yellow-400 transition-colors resize-none"
                    placeholder="Your message here..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
                >
                  <Send size={20} />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl md:text-4xl font-bold mb-12 text-center text-gray-900">Visit Us</h2>
          <div className="w-full h-96 rounded-2xl overflow-hidden shadow-xl">
            <iframe
              width="100%"
              height="100%"
              frameBorder="0"
              title="School Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d317.36284865493565!2d77.17903706442128!3d28.908252147137617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390daba1f788623b%3A0xfbb348ae22c6a1f7!2sRG%20ACADEMY!5e1!3m2!1sen!2sin!4v1767159667563!5m2!1sen!2sin"
              
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-xl md:text-4xl font-black mb-6 text-gray-900">Frequently Asked Questions</h2>
          <p className="text-gray-700 text-xs md:text-lg mb-6 md:mb-12">Find answers to common questions about admissions and school life</p>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                q: 'What are the admission requirements?',
                a: 'We accept applications from students of all nationalities. Requirements include past academic records, entrance exams, and an interview.',
              },
              {
                q: 'Do you offer scholarships?',
                a: 'Yes, we offer merit-based and need-based scholarships. Contact our admissions office for detailed information.',
              },
              {
                q: 'What is the student-teacher ratio?',
                a: 'Our average student-teacher ratio is 12:1, ensuring personalized attention for each student.',
              },
              {
                q: 'Are there extracurricular activities?',
                a: 'Yes, we offer over 50 clubs, sports, and cultural activities for our students.',
              },
            ].map((faq, index) => (
              <div key={index} className="bg-gray-50 p-4 md:p-8 rounded-2xl text-left">
                <h3 className="text-sm md:text-xl font-bold mb-3 text-gray-900">Q. {faq.q}</h3>
                <p className="text-xs md:text-base text-gray-700 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
