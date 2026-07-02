import { motion } from "framer-motion";

const SectionTitle = ({
  title,
  highlight,
  subtitle,
  align = "center",
}) => {
  const alignment =
    align === "center"
      ? "text-center items-center"
      : "text-left items-start";

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className={`flex flex-col ${alignment} mb-20`}
    >
      {/* Heading */}
      <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
        {title}{" "}
        <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          {highlight}
        </span>
      </h2>

      {/* Decorative Line */}
      <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mt-5" />

      {/* Subtitle */}
      {subtitle && (
        <p
          className={`mt-6 text-lg text-slate-400 leading-relaxed max-w-3xl ${
            align === "center" ? "mx-auto" : ""
          }`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};

export default SectionTitle;