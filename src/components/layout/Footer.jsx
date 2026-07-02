import {
  FaGithub,
  FaLinkedin,
  FaHeart,
  FaArrowUp,
} from "react-icons/fa";

import Container from "../ui/Container";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-slate-900 border-t border-slate-800 text-white">

      <Container>

        <div className="py-16 grid lg:grid-cols-3 gap-10">

          {/* Left */}

          <div>

            <h2 className="text-3xl font-bold text-violet-400">
              Sahil.
            </h2>

            <p className="text-slate-400 mt-5 leading-7">
              Frontend React Developer passionate about
              building beautiful, responsive and scalable
              web applications.
            </p>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="text-xl font-semibold mb-6">
              Quick Links
            </h3>

            <div className="flex flex-col gap-3 text-slate-400">

              <a href="#home" className="hover:text-violet-400 transition">
                Home
              </a>

              <a href="#about" className="hover:text-violet-400 transition">
                About
              </a>

              <a href="#skills" className="hover:text-violet-400 transition">
                Skills
              </a>

              <a href="#projects" className="hover:text-violet-400 transition">
                Projects
              </a>

              <a href="#contact" className="hover:text-violet-400 transition">
                Contact
              </a>

            </div>

          </div>

          {/* Social */}

          <div>

            <h3 className="text-xl font-semibold mb-6">
              Connect
            </h3>

            <div className="flex gap-5">

              <a
                href="https://github.com/Sahil91029"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-full bg-slate-800 hover:bg-violet-600 transition flex items-center justify-center text-xl"
              >
                <FaGithub />
              </a>

              <a
                href="https://linkedin.com/in/md-sahil-raza-khan-1a544b3a9"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-full bg-slate-800 hover:bg-violet-600 transition flex items-center justify-center text-xl"
              >
                <FaLinkedin />
              </a>

            </div>

            <a
              href="/resume.pdf"
              download
              className="inline-block mt-8 px-6 py-3 rounded-xl bg-violet-600 hover:bg-violet-700 transition"
            >
              Download Resume
            </a>

          </div>

        </div>

        <div className="border-t border-slate-800 py-6 flex flex-col md:flex-row justify-between items-center">

          <p className="text-slate-400 flex items-center gap-2">

            © {new Date().getFullYear()} Md Sahil Raza Khan

            <FaHeart className="text-red-500" />

          </p>

          <button
            onClick={scrollToTop}
            className="mt-5 md:mt-0 w-12 h-12 rounded-full bg-violet-600 hover:bg-violet-700 transition flex items-center justify-center"
          >
            <FaArrowUp />
          </button>

        </div>

      </Container>

    </footer>
  );
};

export default Footer;