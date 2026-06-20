import { motion } from "framer-motion";

export default function FloatingClouds() {
  return (
    <>
      {/* Left Cloud */}
      <motion.img
        src="/cloud1.png"
        alt=""
        className="
        absolute
        top-16
        left-0
        w-[320px]
        opacity-25
        pointer-events-none
        select-none
        "
        animate={{
          x: [0, 40, 0],
          y: [0, -10, 0],
        }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Upper Right Cloud */}
      <motion.img
  src="/cloud2.png"
  alt=""
  className="
  absolute
  top-32
  right-[-120px]
  w-[420px]
  opacity-20
  mix-blend-screen
  pointer-events-none
  select-none
  "
  animate={{
    x: [0, -30, 0],
    y: [0, 8, 0],
  }}
  transition={{
    duration: 40,
    repeat: Infinity,
    ease: 'easeInOut',
  }}
/>

      {/* Globe Cloud */}
      <motion.img
        src="/cloud3.png"
        alt=""
        className="
        absolute
        bottom-24
        left-[45%]
        w-[300px]
        opacity-15
        blur-[1px]
        pointer-events-none
        select-none
        "
        animate={{
          x: [0, 30, 0],
          y: [0, -15, 0],
        }}
        transition={{
          duration: 45,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </>
  );
}