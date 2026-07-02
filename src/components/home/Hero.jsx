import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import HeroStats from "./HeroStats";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaDownload,
} from "react-icons/fa";

import Button from "../ui/Button";
import profile from "../../data/profile";
import profileImage from "../../assets/images/profile.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-slate-950"
    >
      {/* Background Blur */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-500/20 rounded-full blur-[120px]" />

      <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-500/20 rounded-full blur-[150px]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-36 lg:pt-40 pb-24">

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >

            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 backdrop-blur-sm text-cyan-300 font-medium mb-6">
             <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse"></span>
              Available for Frontend Opportunities
            </div>

            <h1 className="text-5xl md:text-7xl font-black text-white leading-tight">
              MD SAHIL
              <br />

              <span className="text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text">
                RAZA KHAN
              </span>
            </h1>

            <TypeAnimation
              sequence={[
                "Frontend React Developer",
                2000,
                "JavaScript Developer",
                2000,
                "React Enthusiast",
                2000,
                "Problem Solver",
                2000,
              ]}
              speed={45}
              repeat={Infinity}
              className="block text-2xl md:text-3xl font-semibold text-cyan-400 mt-8"
            />

            <p  className="mt-6 max-w-xl text-slate-400 text-lg leading-relaxed">
              Frontend-focused Computer Science Engineering student passionate about building modern, responsive and scalable web applications using React.js, JavaScript and Tailwind CSS. I enjoy creating clean user interfaces and continuously improving my frontend development skills.
            </p>

            {/* Buttons */}

             <div className="flex flex-wrap gap-4 mt-8">

              <Button variant="primary">
                Let's Talk
              </Button>

              <Button
                variant="outline"
                href={profile.resume}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaDownload />
                Download CV
              </Button>

            </div>

            {/* Social */}

            <div className="flex gap-4 mt-8">

              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center hover:border-cyan-400 transition"
              >
                <FaGithub size={22} />
              </a>

              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center hover:border-cyan-400 transition"
              >
                <FaLinkedin size={22} />
              </a>

              <a
               href={`mailto:${profile.email}`}
                className="w-12 h-12 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center hover:border-cyan-400 transition"
              >
                <FaEnvelope size={22} />
              </a>

            </div>

            <div className="mt-10">
             <HeroStats />
             </div>

          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="flex justify-center"
          >

            <motion.div
              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
              className="relative"
            >

              <div  className="absolute -inset-8 rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 blur-[90px] opacity-30" /> 

              <img
                src={profileImage}
                alt={profile.name}
                className="relative w-[360px] md:w-[480px] lg:w-[520px] rounded-full border-4 border-cyan-400 shadow-2xl"
              />

            </motion.div>

          </motion.div>

        </div>

      </div>
      <motion.a
  href="#about"
  animate={{ y: [0, 8, 0] }}
  transition={{ repeat: Infinity, duration: 2 }}
  className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-slate-400 hover:text-cyan-400 transition"
>
  <span className="text-xs uppercase tracking-[3px]">Scroll</span>

  <div className="mt-2 w-[2px] h-10 bg-slate-700 rounded-full overflow-hidden">
    <motion.div
      animate={{ y: [-20, 40] }}
      transition={{ repeat: Infinity, duration: 1.5 }}
      className="w-full h-5 bg-cyan-400 rounded-full"
    />
  </div>
</motion.a>

    </section>
  );
};

export default Hero;