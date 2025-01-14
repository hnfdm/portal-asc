"use client";
import { motion } from "framer-motion";
import ResearchLayout from "./ResearchLayout";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 1.5,
    },
  },
};

const ResearchList = ({ research }) => {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="w-full max-w-auto  xl:max-w-4xl px-4 mx-auto lg:px-16 space-y-6 md:space-y-8 flex flex-col items-center"
    >
      {research.map((research, index) => {
        return <ResearchLayout key={index} {...research} />;
      })}
    </motion.div>
  );
};

export default ResearchList;
