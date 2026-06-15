import { motion } from "framer-motion";

export default function SustainabilityNode({
  icon,
  title,
  value,
  className = "",
}) {
  return (
    <motion.div
      className={`absolute z-20 group ${className}`}
      animate={{
        y: [0, -8, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {/* ICON */}
      <div
        className="
        w-14
        h-14
        rounded-full
        border
        bg-green-400/15
        border-green-300/30
        backdrop-blur-md
        flex
        items-center
        justify-center
        text-2xl
        shadow-[0_0_25px_rgba(56,189,248,0.4)]
        cursor-pointer
        "
      >
        {icon}
      </div>

      {/* TOOLTIP */}
      <div
        className="
        absolute
        left-16
        top-1/2
        -translate-y-1/2
        bg-slate-900/90
        backdrop-blur-lg
        border
        border-cyan-300/20
        rounded-xl
        px-4
        py-3
        min-w-[140px]
        text-white
        opacity-0
        group-hover:opacity-100
        transition-all
        duration-300
        pointer-events-none
        "
      >
        <div className="text-lime-400 text-2xl font-bold">
          {value}
        </div>

        <div className="text-white text-sm">
          {title}
        </div>
      </div>
    </motion.div>
  );
}