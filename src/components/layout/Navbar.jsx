import { useEffect, useState } from "react";
import { FaBars, FaTimes, FaDownload } from "react-icons/fa";

import Button from "../ui/Button";
import Container from "../ui/Container";
import { navLinks } from "../../data/navLinks";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      const sections = navLinks.map((item) =>
        document.querySelector(item.href)
      );

      sections.forEach((section) => {
        if (!section) return;

        const top = section.offsetTop - 120;
        const bottom = top + section.offsetHeight;

        if (window.scrollY >= top && window.scrollY < bottom) {
          setActive(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-slate-950/80 backdrop-blur-xl border-b border-slate-800 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <Container>
        <nav className="h-[74px] flex items-center justify-between">

          {/* Logo */}

          <a
            href="#home"
            className="text-3xl font-black tracking-tight text-white transition hover:scale-105"
          >
            
            <span className="text-cyan-400"></span>
          </a>

          {/* Desktop */}

          <ul className="hidden lg:flex items-center gap-10">

            {navLinks.map((link) => (

              <li key={link.id}>

                <a
                  href={link.href}
                  className={`relative text-[15px] font-medium transition-all duration-300 ${
                    active === link.id
                      ? "text-cyan-400"
                      : "text-slate-300 hover:text-white"
                  }`}
                >
                  {link.name}

                  <span
                    className={`absolute left-0 -bottom-2 h-[2px] bg-cyan-400 transition-all duration-300 ${
                      active === link.id ? "w-full" : "w-0"
                    }`}
                  />
                </a>

              </li>

            ))}

          </ul>

          {/* Resume */}

          <div className="hidden lg:block">

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="primary">

                <FaDownload />

                Resume

              </Button>
            </a>

          </div>

          {/* Mobile Button */}

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-white text-2xl"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>

        </nav>
      </Container>

      {/* Mobile Menu */}

      {isMenuOpen && (

        <div className="lg:hidden bg-slate-950/95 backdrop-blur-xl border-t border-slate-800">

          <Container>

            <ul className="py-8 flex flex-col gap-6">

              {navLinks.map((link) => (

                <li key={link.id}>

                  <a
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-slate-300 hover:text-cyan-400 transition"
                  >
                    {link.name}
                  </a>

                </li>

              ))}

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="w-full">

                  <FaDownload />

                  Download Resume

                </Button>
              </a>

            </ul>

          </Container>

        </div>

      )}

    </header>
  );
};

export default Navbar;