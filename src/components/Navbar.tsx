import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const menuItems = [
  { label: "Home", href: "/" },
  {
    label: "About",
    href: "#",
    submenu: [
      { label: "Our Story", href: "/about" },
      { label: "Chairman Vision & Mission", href: "/about" },
      { label: "Director's Message", href: "/about" },
      { label: "Principal Message", href: "/about" }, 
    ],
  },
  {
    label: "Academics",
    href: "#",
    submenu: [
      { label: "Early Years", href: "/" },
      { label: "Primary School", href: "/" },
      { label: "Middle & Senior School", href: "/" },
    ],
  },
  {
    label: "Admissions",
    href: "#",
    submenu: [
      { label: "Apply Now", href: "/" },
      { label: "Admission Process", href: "/" },
      { label: "Scholarships", href: "/" },
    ],
  },
  { label: "Facilities", href: "/" },
  { label: "Gallery", href: "/" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
 const [openDropdown, setOpenDropdown] = useState<string | null>(null);


  // ✅ scroll fix
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* NAVBAR */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-white shadow-md py-2" : "bg-white shadow-none py-6"
        }`}
      >
        <div className="mx-auto md:px-6 md:py-2 flex items-center justify-between">
          {/* LOGO */}
          <Link to="/" className="flex items-center gap-2">
            <img
              src="/images/home-logo2.png"
              alt="Global School Logo"
              className={`transition-all duration-300 ${
                scrolled ? "h-12 md:h-14" : "h-16 md:h-14"
              }`}
            />
            <span className="md:hidden xl:block text-black flex flex-col font-bold text-sm md:text-2xl">
              <span>Ravindera Global Academy</span> <br />
              <span>Manauli, Sonepat</span>
            </span>
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-1">
            {menuItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() =>
                  item.submenu && setOpenDropdown(item.label)
                }
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  to={item.href}
                  className={`px-4 cursor-pointer text-gray-700 font-medium hover:text-yellow-500 transition-all duration-300 flex items-center gap-1 ${
                    scrolled ? "py-1 text-sm" : "py-2 text-base"
                  }`}
                >
                  {item.label}
                  {item.submenu && (
                    <ChevronDown size={16} className="mt-0.5" />
                  )}
                </Link>

                {/* DESKTOP DROPDOWN */}
                {item.submenu && openDropdown === item.label && (
                  <div className="absolute top-full left-0 bg-white shadow-xl w-48 border-t-2 border-yellow-400">
                    {item.submenu.map((sub) => (
                      <Link
                        key={sub.label}
                        to={sub.href}
                        className="block px-6 py-3 text-gray-700 hover:text-yellow-500 hover:bg-gray-50 transition-all"
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* DESKTOP BUTTON */}
          <button className="hidden md:inline-block bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold px-6 py-3 rounded-full transition-all duration-300">
            Inquiry
          </button>

          {/* MOBILE TOGGLE */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-900"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute top-20 left-0 right-0 bg-white shadow-xl max-h-96 overflow-y-auto">
            <div className="flex flex-col p-6 space-y-4">
              {menuItems.map((item) => (
                <div key={item.label}>
                  <Link
                    to={item.href}
                    className="flex justify-between items-center text-gray-700 font-medium py-2"
                    onClick={(e) => {
                      if (item.submenu) {
                        e.preventDefault();
                        setOpenDropdown(
                          openDropdown === item.label ? null : item.label
                        );
                      } else {
                        setIsOpen(false);
                      }
                    }}
                  >
                    {item.label}
                    {item.submenu && (
                      <ChevronDown
                        size={16}
                        className={`transition-transform ${
                          openDropdown === item.label ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </Link>

                  {/* MOBILE SUBMENU */}
                  {item.submenu && openDropdown === item.label && (
                    <div className="ml-4 mt-2 space-y-2 border-l-2 border-yellow-400 pl-4">
                      {item.submenu.map((sub) => (
                        <Link
                          key={sub.label}
                          to={sub.href}
                          className="block text-gray-600 hover:text-yellow-500"
                          onClick={() => setIsOpen(false)}
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-3 rounded-full mt-6">
                Inquiry
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
