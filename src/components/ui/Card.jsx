import { motion } from "framer-motion";
import clsx from "clsx";

const Card = ({
  children,
  className = "",
  hover = true,
  padding = "md",
}) => {
  const paddings = {
    sm: "p-5",
    md: "p-7",
    lg: "p-9",
  };

  return (
    <motion.div
      whileHover={
        hover
          ? {
              y: -8,
              scale: 1.02,
            }
          : {}
      }
      transition={{
        duration: 0.3,
      }}
      className={clsx(
        "relative overflow-hidden",
        "rounded-3xl",
        "border border-slate-700/70",
        "bg-slate-900/70",
        "backdrop-blur-xl",
        "shadow-xl",
        "transition-all duration-300",
        hover &&
          "hover:border-cyan-400/70 hover:shadow-cyan-500/20",
        paddings[padding],
        className
      )}
    >
      {children}
    </motion.div>
  );
};

export default Card;