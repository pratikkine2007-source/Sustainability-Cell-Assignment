import { motion } from "framer-motion";

export default function Navbar() {
  const navItems = [
    "About",
    "Events",
    "Implementations",
    "Contact",
  ];

  return (
    <nav className="absolute top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-10 py-6 flex items-center justify-between">

        {/* Logo Section */}
        <div className="flex items-center gap-3">

          <motion.img
            src="/logo.svg"
            alt="Sustainability Cell Logo"
            className="h-12 w-auto"
            initial={{
              opacity: 0,
              x: -40,
              rotate: -20,
            }}
            animate={{
              opacity: 1,
              x: 0,
              rotate: 0,
            }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
          />

          <motion.div
            initial={{
              opacity: 0,
              y: -10,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.4,
              duration: 0.6,
            }}
          >
            <h1 className="text-white text-xl font-bold tracking-wide">
              Sustainability Cell
            </h1>
          </motion.div>

        </div>

        {/* Navigation */}
        <div className="flex gap-10 text-white font-medium">

          {navItems.map((item, index) => (
            <motion.a
              key={item}
              href="#"
              initial={{
                opacity: 0,
                y: -20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.5 + index * 0.1,
                duration: 0.4,
              }}
              className="
                relative
                group
                transition-all
                duration-300
              "
            >
              {item}

              <span
                className="
                absolute
                left-0
                -bottom-1
                h-[2px]
                w-0
                bg-blue-300
                transition-all
                duration-300
                group-hover:w-full
              "
              />
            </motion.a>
          ))}

        </div>

      </div>
    </nav>
  );
}