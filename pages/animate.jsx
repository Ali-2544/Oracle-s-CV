// components/Layout.js
import { motion } from 'framer-motion';

const Animate = ({ children }) => {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.5 }}
      className="flex justify-center items-center min-h-screen"
    >
      {children}
    </motion.div>
  );
};

export default Animate;
