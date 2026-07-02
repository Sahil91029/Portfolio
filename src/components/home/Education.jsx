import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";

import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";

const education = [
  {
    year: "2022 – 2026",
    degree: "Bachelor of Technology (Computer Science Engineering)",
    institute: "Bansal Group of Institutes, Bhopal",
    score: "CGPA: 7.70",
  },
  {
    year: "2020 – 2022",
    degree: "Higher Secondary Education",
    institute: "SSPS, Bhagalpur, Bihar",
    score: "75%",
  },
  {
    year: "2020",
    degree: "Secondary Education",
    institute: "DAV Public School, Bhagalpur, Bihar",
    score: "70%",
  },
];

const Education = () => {
  return (
    <section
      id="education"
      className="py-24 bg-slate-900 text-white"
    >
      <Container>
        <SectionTitle
          title="Education"
          subtitle="My academic background."
        />

        <div className="grid md:grid-cols-3 gap-8 mt-16">

          {education.map((item, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.2,
              }}
              viewport={{
                once: true,
              }}
              className="bg-slate-950 rounded-2xl p-8 border border-slate-800 hover:border-violet-500 transition"
            >
              <FaGraduationCap className="text-4xl text-violet-400 mb-6" />

              <p className="text-violet-400 mb-2">
                {item.year}
              </p>

              <h3 className="text-xl font-bold">
                {item.degree}
              </h3>

              <p className="text-slate-400 mt-3">
                {item.institute}
              </p>

              <p className="mt-4 font-semibold">
                {item.score}
              </p>

            </motion.div>
          ))}

        </div>
      </Container>
    </section>
  );
};

export default Education;