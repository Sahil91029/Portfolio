import clsx from "clsx";

const Button = ({
  children,
  variant = "primary",
  size = "md",
  onClick,
  href,
  target,
  rel,
  disabled = false,
  className = "",
}) => {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 rounded-2xl font-semibold transition-all duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-cyan-400 disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    primary:
      "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:-translate-y-1",

    outline:
      "border border-cyan-400 text-cyan-400 bg-transparent hover:bg-cyan-400 hover:text-slate-950 hover:-translate-y-1",

    ghost:
      "text-cyan-400 hover:bg-slate-800",
  };

  const sizes = {
    sm: "px-5 py-2.5 text-sm",
    md: "px-7 py-3 text-base",
    lg: "px-9 py-4 text-lg",
  };

  const styles = clsx(
    baseStyles,
    variants[variant],
    sizes[size],
    className
  );

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        className={styles}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={styles}
    >
      {children}
    </button>
  );
};

export default Button;git ls-files