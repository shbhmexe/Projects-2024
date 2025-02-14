"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function UseNowButton() {
  return (
    <Link href="/cgpa">
      <motion.button
        className="relative bg-blue-500 text-white px-6 py-3 rounded-md text-lg font-semibold shadow-lg overflow-hidden transition-all"
        whileHover={{
          scale: 1.1, // Slight scaling on hover
          boxShadow: "0px 10px 20px rgba(59, 130, 246, 0.5)", // Glow effect
        }}
        whileTap={{ scale: 0.95 }} // Slight shrink when clicked
      >
        USE NOW

        {/* Light reflection animation */}
        <motion.div
          className="absolute top-0 left-0 w-full h-full bg-white opacity-10"
          animate={{
            x: ["-100%", "100%"],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      </motion.button>
    </Link>
  );
}
