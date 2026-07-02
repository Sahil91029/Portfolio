import { motion } from "framer-motion";

import {
  FaReact,
  FaLaptopCode,
  FaGraduationCap,
  FaBriefcase,
  FaCode,
  FaDownload,
} from "react-icons/fa";

import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import Card from "../ui/Card";
import Button from "../ui/Button";

import profile from "../../data/profile";
import profileImage from "../../assets/images/profile.jpg";

const About = () => {
  return (
    <section
      id="about"
      className="bg-slate-950 py-24"
    >
      <Container>

        <SectionTitle
          title="About"
          highlight="Me"
          subtitle="Frontend-focused Computer Science Engineering graduate passionate about building modern, responsive and scalable web applications using React.js."
        />

        {/* Main Content */}

        <div className="grid md:grid-cols-2 gap-16 items-center">

          


          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="w-[320px] h-[320px] rounded-3xl bg-cyan-500/10 border border-cyan-400 flex items-center justify-center text-8xl">
              👨‍💻
            </div>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-4xl font-bold mb-6">
              Frontend React Developer
            </h3>

            <p className="text-gray-300 leading-8 mb-8">
              I am a passionate Frontend Developer focused on building clean,
              responsive, and interactive web applications using React.js,
              JavaScript, Tailwind CSS, and REST APIs.

              <br /><br />

              I enjoy solving real-world problems through code and continuously
              learning modern frontend technologies.
            </p>

            <div className="grid grid-cols-2 gap-5">

              <div className="bg-slate-900 p-5 rounded-xl border border-slate-700">
                <FaGraduationCap className="text-cyan-400 text-3xl mb-3" />
                <h4 className="font-semibold">Education</h4>
                <p className="text-gray-400 text-sm">
                  B.Tech CSE Graduate
                </p>
              </div>

              <div className="bg-slate-900 p-5 rounded-xl border border-slate-700">
                <FaReact className="text-cyan-400 text-3xl mb-3" />
                <h4 className="font-semibold">React.js</h4>
                <p className="text-gray-400 text-sm">
                  Building modern UI
                </p>
              </div>

              <div className="bg-slate-900 p-5 rounded-xl border border-slate-700">
                <FaCode className="text-cyan-400 text-3xl mb-3" />
                <h4 className="font-semibold">JavaScript</h4>
                <p className="text-gray-400 text-sm">
                  ES6+, DOM, APIs
                </p>
              </div>

              <div className="bg-slate-900 p-5 rounded-xl border border-slate-700">
                <FaLaptopCode className="text-cyan-400 text-3xl mb-3" />
                <h4 className="font-semibold">Responsive Design</h4>
                <p className="text-gray-400 text-sm">
                  Mobile First Approach
                </p>
              </div>

            </div>
          </motion.div>

             </div>
      </Container>
    </section>
  );
};

export default About;