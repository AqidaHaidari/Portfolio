import React from 'react';
import { motion } from 'framer-motion';
import Section from './ui/Section';
import { GirihMark } from './ui/Girih';
import { reveal } from './ui/reveal';
import { experience } from '../data/content';

// A real timeline: the order is the information, so it gets a rail and nodes.
const Experience = () => (
  <Section
    id="experience"
    eyebrow="Experience"
    title="Where the work happened"
    standfirst="Five roles, all remote, across commerce backends, open source and the classroom."
  >
    <ol className="relative border-l border-lapis/50 pl-8 sm:pl-12">
      {experience.map((role, index) => (
        <motion.li
          key={`${role.company}-${role.period}`}
          {...reveal()}
          className="relative pb-14 last:pb-0"
        >
          <GirihMark
            className={`absolute -left-[2.4375rem] top-1 h-3.5 w-3.5 sm:-left-[3.4375rem] ${
              index === 0 ? 'text-saffron' : 'text-lapis'
            }`}
          />

          <p className="font-mono text-xs uppercase tracking-[0.16em] text-tile">
            {role.period}
          </p>

          <h3 className="mt-3 font-display text-2xl font-bold tracking-tight text-glaze sm:text-3xl">
            {role.role}
          </h3>

          <p className="mt-1.5 text-muted">
            <span className="text-glaze">{role.company}</span>
            <span className="px-2 text-lapis">/</span>
            {role.mode}
          </p>

          <ul className="mt-5 space-y-2.5">
            {role.points.map((point) => (
              <li key={point} className="flex gap-3 leading-relaxed text-muted">
                <span aria-hidden="true" className="mt-2.5 h-px w-4 shrink-0 bg-lapis" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </motion.li>
      ))}
    </ol>
  </Section>
);

export default Experience;
