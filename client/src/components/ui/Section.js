import React from 'react';
import { motion } from 'framer-motion';
import { GirihRule } from './Girih';
import { reveal } from './reveal';

const tones = {
  dark: 'bg-ink text-glaze',
  deep: 'bg-ink-2 text-glaze',
  light: 'on-glaze bg-glaze text-ink',
};

// Shared shell: rule, eyebrow, title, optional standfirst. Every section opens
// the same way so the page reads as one document rather than stacked blocks.
const Section = ({
  id,
  eyebrow,
  title,
  standfirst,
  tone = 'dark',
  children,
}) => {
  const light = tone === 'light';

  return (
    <section id={id} className={`${tones[tone]} py-24 sm:py-32`}>
      <div className="mx-auto w-full max-w-page px-6 sm:px-10">
        <GirihRule tone={light ? 'light' : 'dark'} />

        <motion.header
          {...reveal()}
          className="mt-8 max-w-3xl"
        >
          <p className={`eyebrow ${light ? 'text-lapis' : ''}`}>{eyebrow}</p>
          <h2 className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-5xl">
            {title}
          </h2>
          {standfirst && (
            <p
              className={`mt-5 max-w-2xl text-lg leading-relaxed ${light ? 'text-lapis/80' : 'text-muted'}`}
            >
              {standfirst}
            </p>
          )}
        </motion.header>

        <div className="mt-14">{children}</div>
      </div>
    </section>
  );
};

export default Section;
