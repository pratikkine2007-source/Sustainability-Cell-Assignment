import { motion } from "framer-motion";
import FloatingClouds from "./FloatingClouds";
import FloatingLeaves from "./FloatingLeaves";
import Globe from "./Globe";
import StatsCard from "./StatsCard";
import SustainabilityNode from "./SustainabilityNode";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.25,
      delayChildren: 0.4,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 60,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.2,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">

      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 70% 15%, #bfe8ff 0%, #82c8ff 18%, #4f8fe6 40%, #1c4da8 70%, #0b2b6b 100%)",
        }}
      />
      <div
        className="
        absolute
        top-[-300px]
        right-[-250px]
        w-[800px]
        h-[800px]
        rounded-full
        pointer-events-none
        "
        style={{
          background:
            "radial-gradient(circle, rgba(255,245,210,0.18) 0%, rgba(255,245,210,0.06) 35%, transparent 70%)",
          filter: "blur(120px)",
        }}
/>
      {/* Light Glow */}
      <div
        className="
        absolute
        top-[-20%]
        right-[-10%]
        w-[900px]
        h-[900px]
        bg-blue-200/15
        blur-[250px]
        rounded-full
      "
      />
      {/*additional lighting*/}
      <div
        className="
        absolute
        bottom-[-200px]
        left-[20%]
        w-[700px]
        h-[700px]
        rounded-full
        bg-cyan-300/20
        blur-[220px]
        "
/>
      

      <FloatingClouds />
      <FloatingLeaves />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-8 min-h-screen flex items-center">

        <motion.div
          className="w-1/2"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >

        <motion.h1
          className="text-7xl font-bold text-white"
          variants={itemVariants}
        >
            Sustainability Cell
          </motion.h1>

          <motion.h2
            variants={itemVariants}
            className="
              text-6xl
              font-bold
              mt-2
              leading-[1.3]
              bg-gradient-to-r
              from-green-300
              via-emerald-400
              to-cyan-300
              bg-clip-text
              text-transparent
  "
>
            IIT Bombay
          </motion.h2>

          <motion.p
            className="text-white/80 text-xl mt-8 max-w-xl"
            variants={itemVariants}
          >
            Empowering sustainable practices and environmental
            consciousness through innovation, education,
            and action.
          </motion.p>


<div className="flex items-center gap-5 mt-10">

  <motion.button
  variants={itemVariants}
  whileHover={{
    scale: 1.05,
    y: -4,
    boxShadow: "0px 20px 40px rgba(59,130,246,0.35)",
  }}
  whileTap={{
    scale: 0.97,
  }}
  transition={{
    duration: 0.25,
  }}
    className="
    px-8
    py-4
    rounded-full
    bg-blue-500
    hover:bg-blue-400
    text-white
    font-semibold
    shadow-lg
    "
  >
    Explore Initiatives

  <span
    className="
    transition-transform
    duration-300
    group-hover:translate-x-2
    "
  >
    →
  </span>
  </motion.button>

  <motion.button
  variants={itemVariants}
  whileHover={{
    scale: 1.05,
    y: -4,
    backgroundColor: "rgba(255,255,255,0.18)",
  }}
  whileTap={{
    scale: 0.97,
  }}
  transition={{
    duration: 0.25,
  }}
    className="
    px-8
    py-4
    rounded-full
    bg-white/10
    backdrop-blur-md
    border
    border-white/20
    text-white
    font-semibold
    hover:bg-white/20
    "
  >
    Join Us
  </motion.button>

</div>

{/* STATS PANEL */}

<div
  className="
  mt-12
  p-6
  rounded-3xl
  bg-white/12
  backdrop-blur-md
  border
  border-white/20
  shadow-[0_8px_40px_rgba(0,0,0,0.15)]
  flex
  justify-between
  gap-6
  "
>
  <StatsCard
    icon="👥"
    value="20"
    label="Active Members"
  />

  <StatsCard
    icon="📅"
    value="15"
    label="Events Organized"
  />

  <StatsCard
    icon="🌱"
    value="10"
    label="Projects Completed"
  />

  <StatsCard
    icon="🎓"
    value="1000"
    label="Students Impacted"
  />
</div>

</motion.div>

     {/* Globe Placeholder */}
<div className="w-1/2 flex justify-end items-center relative">

        {/* Globe Glow */}
        <div
            className="
            absolute
            w-[800px]
            h-[800px]
            rounded-full
            bg-cyan-300/20
            blur-[140px]
            "
        />
        
        {/* ORBIT RING */}

        <div
            className="
            absolute
            w-[580px]
            h-[580px]
            rounded-full
            border
            border-dashed
            border-white/20
            "
        />

        {/* TREE */}

            <SustainabilityNode
            icon="🌳"
            value="1500+"
            title="Trees Planted"
            className="top-36 left-44"
            />

            {/* RECYCLE */}

            <SustainabilityNode
            icon="♻️"
            value="20 Tonnes+"
            title="Waste Recycled"
            className="bottom-28 right-28"
            />

            {/* WATER */}

            <SustainabilityNode
            icon="💧"
            value="2L+"
            title="Water Saved"
            className="top-80 right-10"
            />

            {/* ENERGY */}

            <SustainabilityNode
            icon="⚡"
            value="35%"
            title="Energy Saved"
            className="top-36 right-40"
            />

            {/* SOLAR */}

            <SustainabilityNode
            icon="☀️"
            value="Clean Energy"
            title="Promoted"
            className="bottom-28 left-44"
         />
         {/* ORBIT DOTS */}

        <div className="absolute top-8 left-1/2 w-2 h-2 rounded-full bg-cyan-300 shadow-lg" />

        <div className="absolute top-32 right-10 w-2 h-2 rounded-full bg-cyan-300 shadow-lg" />

        <div className="absolute top-1/2 right-0 w-2 h-2 rounded-full bg-cyan-300 shadow-lg" />

        <div className="absolute bottom-32 right-10 w-2 h-2 rounded-full bg-cyan-300 shadow-lg" />

        <div className="absolute bottom-8 left-1/2 w-2 h-2 rounded-full bg-cyan-300 shadow-lg" />

        <div className="absolute bottom-32 left-10 w-2 h-2 rounded-full bg-cyan-300 shadow-lg" />

        <div className="absolute top-1/2 left-0 w-2 h-2 rounded-full bg-cyan-300 shadow-lg" />

        <div className="absolute top-32 left-10 w-2 h-2 rounded-full bg-cyan-300 shadow-lg" />
        
        <div
        className="
        absolute
        top-24
        left-1/2
        -translate-x-1/2
        w-[700px]
        h-[250px]
        rounded-full
        bg-white/10
        blur-[120px]
        "
      />
      {/* Sustainability Green Aura */}
      <div
        className="
        absolute
        right-[100px]
        top-[100px]
        w-[500px]
        h-[500px]
        rounded-full
        pointer-events-none
        "
        style={{
          background:
            "radial-gradient(circle, rgba(140,255,140,0.15) 0%, transparent 70%)",
          filter: "blur(180px)",
        }}
      />


        <Globe />

        </div>
        


      </div>
    </section>
  );
}