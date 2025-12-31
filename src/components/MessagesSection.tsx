 

type Message = {
  role: string;
  text: string;
  image: string;
};

const messages: Message[] = [
  {
    role: "Chairman Vision & Mission",
    text: "R.G. Academy is all set to commitment of providing quality education for the holistic development of young learners. I look forward to engage with students, educators families...",
    image:
      "/images/staff/found.jpg",
  },
  {
    role: "Director's Message",
    text: "We strongly believe, “Children must be taught how to think and what not to think. At RG Academy our focus is not just on the approved syllabus but also on 360 degree ..",
    image:
    "/images/staff/direc.jpeg",
  },
  {
    role: "Principal",
    text: "Real meaning of education is to create an environment which not only helps children learn well but also inspires them to recognize and explore their own potential.",
    image:
      "/images/staff/prin.jpg",
  },
];

export default function MessagesSection() {
  return (
    <section className="relative py-10 md:py-24 bg-[linear-gradient(45deg,#084e91,#017eb1)] bg-cover bg-center">
      <div className="relative max-w-7xl mx-auto px-6 text-center text-white">
        <h2 className="text-xl md:text-4xl md:text-5xl font-bold mb-10 md:mb-12">Messages</h2>
        <div className="flex flex-col md:flex-row justify-center gap-12 md:gap-6">
          {messages.map((msg, idx) => (
            <div key={idx} className="flex flex-col items-center">
              {/* Speech Bubble */}
              <div className="bg-white text-gray-800 rounded-xl p-6 shadow-lg relative max-w-xs">
                <p className="text-sm text-justify">{msg.text}</p>
                <a
                  href="#"
                  className="mt-4 inline-block bg-blue-900 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                  ReadMore
                </a>
                {/* Pointer */}
                <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-white"></div>
              </div>

              {/* Profile Image */}
              <div className="mt-8">
                <img
                  src={msg.image}
                  alt={msg.role}
                  className="w-36 h-36 rounded-full border-4 border-white shadow-md"
                />
                <div className="mt-2 text-sm font-semibold">{msg.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
