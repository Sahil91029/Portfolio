import { motion } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaCheckCircle,
} from "react-icons/fa";

import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import Card from "../ui/Card";

import studyPlanner from "../../assets/images/study-planner.png";

const project = {
  title: "Smart Study Planner",

  subtitle:
    "A modern productivity platform designed to help students manage study tasks, stay focused, and improve consistency through analytics and smart scheduling.",

  image: studyPlanner,

  github: "https://github.com/Sahil91029/study-planner",

  live: "https://study-planner-ten-mocha.vercel.app/",

  tech: [
    "React.js",
    "Vite",
    "Tailwind CSS",
    "Context API",
    "React Calendar",
    "Framer Motion",
    "Local Storage",
  ],

  features: [
    "Task Creation & Management",
    "Calendar Scheduling",
    "Pomodoro Focus Mode",
    "Productivity Analytics",
    "Priority-based Tasks",
    "Dark / Light Theme",
    "XP & Level Progress",
    "Responsive Design",
    "Local Storage Persistence",
  ],
};

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-28 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950"
    >
      <Container>

        <SectionTitle
          title="Featured"
          highlight="Project"
          subtitle="A project that reflects my frontend development skills, problem-solving approach, and passion for building user-centric web applications."
        />

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
          }}
        >

          <Card
            padding="lg"
            className="overflow-hidden"
          >

            <div className="grid lg:grid-cols-2 gap-12 items-center">

              {/* LEFT */}

              <motion.div
                whileHover={{
                  scale: 1.02,
                }}
                transition={{
                  duration: 0.3,
                }}
              >

                <div className="rounded-2xl overflow-hidden border border-slate-700 shadow-2xl">

                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full object-cover"
                  />

                </div>

              </motion.div>

              {/* RIGHT */}

              <div>

                <span className="inline-block px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-400 text-cyan-400 text-sm font-semibold">

                  React Application

                </span>

                <h2 className="text-4xl font-bold text-white mt-6">

                  {project.title}

                </h2>

                <p className="text-slate-400 leading-8 mt-6">

                  {project.subtitle}

                </p>

                <div className="mt-10">

                  <h3 className="text-xl font-semibold text-white mb-5">

                    Key Features

                  </h3>

                  <div className="grid sm:grid-cols-2 gap-4">

                    {project.features.map((feature) => (

                      <motion.div
                        key={feature}
                        whileHover={{
                          x: 6,
                        }}
                        className="flex items-center gap-3"
                      >

                        <FaCheckCircle
                          className="text-cyan-400 text-lg"
                        />

                        <span className="text-slate-300">

                          {feature}

                        </span>

                      </motion.div>

                    ))}

                  </div>

                </div>

                <div className="mt-10">

                  <h3 className="text-xl font-semibold text-white mb-5">

                    Tech Stack

                  </h3>

                  <div className="flex flex-wrap gap-3">

                    {project.tech.map((item) => (

                      <span
                        key={item}
                        className="px-4 py-2 rounded-full bg-slate-800 border border-slate-700 text-slate-300 hover:border-cyan-400 transition"
                      >

                        {item}

                      </span>

                    ))}

                  </div>

                </div>

                                <div className="mt-12 flex flex-wrap gap-5">

                  <motion.a
                    whileHover={{
                      scale: 1.05,
                    }}
                    whileTap={{
                      scale: 0.95,
                    }}
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-3 px-7 py-4 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-cyan-400 transition-all duration-300 text-white font-semibold"
                  >
                    <FaGithub className="text-xl" />

                    GitHub Repository

                  </motion.a>

                  <motion.a
                    whileHover={{
                      scale: 1.05,
                    }}
                    whileTap={{
                      scale: 0.95,
                    }}
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-3 px-7 py-4 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-bold transition-all duration-300"
                  >
                    <FaExternalLinkAlt />

                    Live Demo

                  </motion.a>

                </div>

                {/* Bottom Stats */}

                <div className="grid grid-cols-3 gap-5 mt-14">

                  <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-5 text-center">

                    <h4 className="text-3xl font-bold text-cyan-400">

                      9+

                    </h4>

                    <p className="text-slate-400 mt-2">

                      Features

                    </p>

                  </div>

                  <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-5 text-center">

                    <h4 className="text-3xl font-bold text-cyan-400">

                      7

                    </h4>

                    <p className="text-slate-400 mt-2">

                      Technologies

                    </p>

                  </div>

                  <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-5 text-center">

                    <h4 className="text-3xl font-bold text-cyan-400">

                      100%

                    </h4>

                    <p className="text-slate-400 mt-2">

                      Responsive

                    </p>

                  </div>

                </div>

              </div>

            </div>

          </Card>

        </motion.div>

      </Container>

    </section>
  );
};

export default Projects;