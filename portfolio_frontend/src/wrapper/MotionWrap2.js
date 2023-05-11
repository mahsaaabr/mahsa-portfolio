import React from 'react';
import { motion } from 'framer-motion';

const MotionWrap2 = (Component, classNames) => function HOC() {
  return (
    <motion.div
      whileInView={{ x: [200, 50, 0], opacity: [0, 0.5, 1] }}
      transition={{ duration: 1.0 }}
      className={`${classNames} app__flex`}
    >
      <Component />
    </motion.div>
  );
};

export default MotionWrap2;