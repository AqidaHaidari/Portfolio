import React from 'react';
import { motion } from 'framer-motion';
import { GirihStar, GirihMark } from './ui/Girih';
import { profile, heroFacts } from '../data/content';

// Page-load sequence: the name arrives first, everything else follows it.
const sequence = {
  hidden: {},
  show: { transition: { staggerChildren: 0.11, delayChildren: 0.15 } },
};

const step = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
  },
};

const Hero = () => (
  <section
    id="top"
    className="relative isolate flex min-h-screen flex-col justify-center overflow-hidden bg-ink pb-16 pt-32 sm:pt-36"
  >
    <div className="bg-lattice pointer-events-none absolute inset-0 opacity-50" />
    <div className="pointer-events-none absolute -right-40 top-0 h-[42rem] w-[42rem] rounded-full bg-lapis/25 blur-[140px]" />
    <div className="pointer-events-none absolute -left-32 bottom-0 h-[30rem] w-[30rem] rounded-full bg-tile/10 blur-[130px]" />

    <div className="relative mx-auto grid w-full max-w-page grid-cols-1 gap-16 px-6 sm:px-10 lg:grid-cols-12 lg:items-center lg:gap-10">
      <motion.div
        variants={sequence}
        initial="hidden"
        animate="show"
        className="lg:col-span-7"
      >
        <motion.p
          variants={step}
          className="eyebrow flex items-center gap-3"
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-saffron opacity-70" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-saffron" />
          </span>
          {profile.availability}
        </motion.p>

        <motion.h1
          variants={step}
          className="mt-7 font-display text-[clamp(3rem,11vw,7rem)] font-extrabold uppercase leading-[1] tracking-[-0.03em]"
        >
          <span className="block text-glaze">Aqida</span>
          {/* Outlined to echo the hairline tile-cutting of the girih motif. */}
          <span
            className="block text-transparent"
            style={{ WebkitTextStroke: '1.5px #E9A13B' }}
          >
            Haidari
          </span>
        </motion.h1>

        <motion.p
          variants={step}
          className="mt-8 font-mono text-sm uppercase tracking-[0.18em] text-tile"
        >
          {profile.role}
        </motion.p>

        <motion.p
          variants={step}
          className="mt-5 max-w-xl text-lg leading-relaxed text-muted sm:text-xl"
        >
          {profile.pitch}
        </motion.p>

        <motion.div variants={step} className="mt-10 flex flex-wrap gap-4">
          <a
            href={profile.resume}
            download={profile.resumeFilename}
            className="rounded-full bg-saffron px-7 py-3.5 font-mono text-xs uppercase tracking-[0.16em] text-ink transition-colors hover:bg-glaze"
          >
            Download resume
          </a>
          <a
            href="#contact"
            className="rounded-full border border-lapis px-7 py-3.5 font-mono text-xs uppercase tracking-[0.16em] text-glaze transition-colors hover:border-tile hover:text-tile"
          >
            Get in touch
          </a>
        </motion.div>
      </motion.div>

      {/* The signature: layered khatam stars, turning against each other. */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.3, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="relative mx-auto aspect-square w-full max-w-sm lg:col-span-5"
        aria-hidden="true"
      >
        <GirihStar className="animate-spin-slow absolute inset-0 h-full w-full text-tile/35" />
        <GirihStar className="animate-spin-slower absolute inset-[14%] text-saffron/45" />
        <GirihStar className="absolute inset-[30%] text-glaze/25" />
        <GirihMark className="animate-drift absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 text-saffron" />
      </motion.div>
    </div>

    {/* Three facts, the way a spec sheet reads. */}
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 0.8 }}
      className="relative mx-auto mt-20 w-full max-w-page px-6 sm:px-10"
    >
      <dl className="grid grid-cols-1 border-t border-lapis/50 sm:grid-cols-3 sm:divide-x sm:divide-lapis/50">
        {heroFacts.map((fact) => (
          <div
            key={fact.label}
            className="border-b border-lapis/50 py-6 sm:border-b-0 sm:px-6 sm:first:pl-0 sm:last:pr-0"
          >
            <dt className="eyebrow">{fact.label}</dt>
            <dd className="mt-2 font-display text-lg font-semibold text-glaze">
              {fact.value}
            </dd>
          </div>
        ))}
      </dl>
    </motion.div>
  </section>
);

export default Hero;
