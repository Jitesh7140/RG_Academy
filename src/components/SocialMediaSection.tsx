import { Globe, Instagram, Youtube } from "lucide-react";

const socialMedia = [
  {
  title: "Facebook",
  icon: Globe,
  embed: (
    <div className="w-full h-[420px]">
      <iframe
        src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FRGAcademymanaulisonipat&tabs=timeline&width=500&height=420&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true"
        className="w-full h-full border-0 overflow-hidden"
        scrolling="no"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  ),
}
,
  {
    title: "Instagram",
    icon: Instagram, 
    embed: (
      <iframe
        src="https://www.instagram.com/rgacademy_ncr/embed"
        className="w-full h-[420px] rounded-xl"


      />
    ),
  },
  {
    title: "YouTube",
    icon: Youtube,
    embed: (
      <iframe
        src="https://www.youtube.com/embed/f0YoU4Fe8H8?si=WvlgULboo-qDF6Tu&amp;start=2"
        title="YouTube video player"
        className="w-full h-[420px] rounded-xl"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    ),
  },
];

export default function SocialMediaSection() {
  return (
    <section className="py-10 md:py-24  bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-xl md:text-6xl font-bold  mb-10 md:mb-20 text-gray-900">
          | Social-Link _@ RG Academy
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {socialMedia.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="cursor-pointer bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-6">
                  <Icon
                     
                    className="text-yellow-500 w-6 h-6 md:w-12 md:h-12"
                    strokeWidth={1.5}
                  />
                  <h3 className="text-lg md:text-2xl font-bold text-gray-900">
                    {item.title}
                  </h3>
                </div>

                <div className="overflow-hidden rounded-xl">
                  {item.embed}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
