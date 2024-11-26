import { motion } from "framer-motion";

export const AnimatedSection = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay,
      },
    }}
    viewport={{ once: true, margin: "-50px" }}
  >
    {children}
  </motion.div>
);
