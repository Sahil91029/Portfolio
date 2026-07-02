import { motion } from "framer-motion";
import Card from "../ui/Card";
import profile from "../../data/profile";

const stats = [
  {
    value: profile.projects,
    label: "Projects",
  },
  {
    value: profile.cgpa,
    label: "CGPA",
  },
  {
    value: "Intern",
    label: profile.company,
  },
];

const HeroStats = () => {
  return (
    <div className="grid grid-cols-3 gap-6 mt-4">
      {stats.map((item) => (
        <motion.div
          key={item.label}
          whileHover={{
            y: -6,
          }}
        >
          <Card className="text-center">
            <h2 className="text-3xl font-bold text-cyan-400">
              {item.value}
            </h2>

            <p className="text-slate-400 mt-2">
              {item.label}
            </p>
          </Card>
        </motion.div>
      ))}
    </div>
  );
};

export default HeroStats;