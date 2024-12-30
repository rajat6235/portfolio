import React from "react";
import { motion } from "framer-motion";

const staggerContainer = (staggerChildren: number, delayChildren: number = 0) => {
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren,
        delayChildren,
      },
    },
  };
};

interface SectionWrapperProps {
  idName: string;
}

const SectionWrapper = <P extends object>(
  Component: React.ComponentType<P>,
  idName: string
): React.FC<P & SectionWrapperProps> => {
  const HOC: React.FC<P & SectionWrapperProps> = (props) => {
    return (
      <motion.div
        variants={staggerContainer(0.1, 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="tech-icons"
        id={idName}
      >
        <Component {...props} />
      </motion.div>
    );
  };

  return HOC;
};

export default SectionWrapper;