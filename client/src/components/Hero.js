import React from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';

const Hero = () => {
  return (
    <section
      id="hero"
      className="h-screen bg-gradient-to-br from-indigo-950 via-purple-900 to-pink-700
 relative flex items-center justify-center text-white overflow-hidden"
    >
      <div className="absolute inset-0 bg-hero-pattern pointer-events-none opacity-10" />

      <div className="container mx-auto px-12 md:flex md:items-center md:justify-between z-10">
        <motion.div
          className="text-center md:text-left md:w-1/2"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-6xl md:text-7xl font-extrabold font-primary">
            Hi, I’m{' '}
            <span className="text-yellow-400 drop-shadow-md">
              Aqida Haidari
            </span>
          </h1>

          <p className="mt-4 text-2xl md:text-3xl font-light font-secondary">
            <span className="text-yellow-300">
              <Typewriter
                words={[
                  'Creative Web Developer',
                  'Innovative Problem Solver',
                  'Design Enthusiast',
                ]}
                loop
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </p>

          <motion.a
            href="/Aqida-Haidari.pdf"
            download="Aqida_Haidari_Resume.pdf"
            className="mt-8 inline-block px-8 py-4 bg-yellow-400 text-black font-semibold rounded-full shadow-lg hover:bg-yellow-500 hover:scale-110 transition-transform"
            whileHover={{ scale: 1.1 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            Download My Resume
          </motion.a>
        </motion.div>

        <motion.div
          className="mt-12 md:mt-0 md:w-1/2 flex justify-center md:justify-end"
          initial={{ y: -10 }}
          animate={{ y: 10 }}
          transition={{
            repeat: Infinity,
            repeatType: 'reverse',
            duration: 2,
            ease: 'easeInOut',
          }}
        >
          <img
            src="/profile2.svg"
            alt="Aqida Haidari"
            className="w-64 h-64 md:w-80 md:h-80   object-cover"
          />
        </motion.div>
      </div>

      <motion.div
        className="absolute top-10 left-10 w-16 h-16 bg-yellow-300 rounded-full opacity-80"
        animate={{ y: [0, -20, 0], x: [0, 20, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
      />

      <motion.div
        className="absolute bottom-20 right-20 w-24 h-24 bg-pink-400 rounded-full opacity-50"
        animate={{ x: [0, -30, 0], y: [0, 30, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      />

      <motion.div
        className="absolute top-1/2 right-1/3 w-8 h-8 bg-blue-300 rounded-full opacity-75"
        animate={{ y: [-15, 15, -15] }}
        transition={{ duration: 2.5, repeat: Infinity }}
      />
    </section>
  );
};

export default Hero;
