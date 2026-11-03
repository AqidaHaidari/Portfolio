import React from 'react';
import { motion } from 'framer-motion';
import Section from './ui/Section';
import { reveal } from './ui/reveal';
import { about } from '../data/content';

const About = () => (
  <Section
    id="about"
    tone="deep"
    eyebrow="About"
    title="Backends by day, classrooms by evening"
  >
    <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-16">
      <motion.div
        {...reveal()}
        className="space-y-6 lg:col-span-7"
      >
        {about.paragraphs.map((paragraph, index) => (
          <p
            key={paragraph.slice(0, 24)}
            className={`leading-relaxed ${
              index === 0
                ? 'text-xl text-glaze sm:text-2xl sm:leading-relaxed'
                : 'text-muted'
            }`}
          >
            {paragraph}
          </p>
        ))}
      </motion.div>

      <motion.dl
        {...reveal(0.12)}
        className="divide-y divide-lapis/50 border-y border-lapis/50 lg:col-span-5"
      >
        {about.facts.map((fact) => (
          <div key={fact.label} className="py-5">
            <dt className="eyebrow">{fact.label}</dt>
            <dd className="mt-2 text-glaze">{fact.value}</dd>
          </div>
        ))}
      </motion.dl>
    </div>
  </Section>
);

export default About;
