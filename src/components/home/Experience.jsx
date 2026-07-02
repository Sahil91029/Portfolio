import { motion } from "framer-motion";
import { FaBriefcase } from "react-icons/fa";

import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";

const experiences = [
  {
    year: "Aug 2024 – Oct 2024",
    role: "Web Development Intern",
    company: "Cognifyz Technologies",
    description:
      "Worked on client-side UI components using HTML, CSS, JavaScript & React.js. Built responsive layouts, improved user interfaces, and collaborated on frontend development tasks.",
  },
  {
    year: "Nov 2024 – Dec 2024",
    role: "C/C++ Programming Trainee",
    company: "Cognifyz Technologies",
    description:
      "Strengthened problem-solving skills by working on C and C++ programming concepts, algorithms, and logical thinking through hands-on assignments.",
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-24 bg-slate-950 text-white"
    >
      <Container>
        <SectionTitle
          title="Experience"
          subtitle="My learning journey and practical experience."
        />

        <div className="relative mt-16 max-w-4xl mx-auto">

          <div className="absolute left-5 top-0 h-full w-1 bg-violet-500 rounded-full"></div>

          {experiences.map((item, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                x: -50,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
              }}
              viewport={{
                once: true,
              }}
              className="relative pl-20 mb-16"
            >
              <div className="absolute left-0 w-10 h-10 rounded-full bg-violet-600 flex items-center justify-center shadow-lg">
                <FaBriefcase />
              </div>

              <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800 hover:border-violet-500 transition">

                <span className="text-violet-400 font-semibold">
                  {item.year}
                </span>

                <h3 className="text-2xl font-bold mt-2">
                  {item.role}
                </h3>

                <h4 className="text-slate-400 mb-4">
                  {item.company}
                </h4>

                <p className="text-slate-300 leading-7">
                  {item.description}
                </p>

              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Experience;