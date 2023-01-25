import React from 'react';
import { motion } from 'framer-motion';
import { pageVariants, pageTransition } from '../utils/FramerAnimation.js';

function About() {
  return (
    <div>
      <motion.div
        initial='init'
        animate='anim'
        exit='last'
        variants={pageVariants}
        transition={pageTransition}
      >
      About bffdbfbfbfbbfbfbffbbfbfbf
      </motion.div>
    </div>

  )
}

export default About