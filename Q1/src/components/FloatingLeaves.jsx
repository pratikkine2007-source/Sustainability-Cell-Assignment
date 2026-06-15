import { FaLeaf } from "react-icons/fa";
import { motion } from "framer-motion";

const leaves = [
  { top: "15%", left: "20%" },
  { top: "40%", left: "80%" },
  { top: "70%", left: "10%" },
  { top: "80%", left: "60%" },
];

export default function FloatingLeaves() {
  return (
    <>
      {leaves.map((leaf, index) => (
        <motion.div
          key={index}
          className="absolute text-green-300"
          style={leaf}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 6 + index,
          }}
        >
          <FaLeaf size={18} />
        </motion.div>
      ))}
    </>
  );
}