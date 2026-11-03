import React from 'react';
import { motion } from 'framer-motion';
import Section from './ui/Section';
import { reveal } from './ui/reveal';
import { certifications, education } from '../data/content';

// Certifications and education answer the same question, so they share a section.
const Credentials = () => (
  <Section
    id="credentials"
    tone="deep"
    eyebrow="Credentials"
    title="Training and education"
  >
    <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-16">
      <motion.div
        {...reveal()}
        className="lg:col-span-7"
      >
        <h3 className="eyebrow">Certifications</h3>
        <ul className="mt-6 divide-y divide-lapis/40 border-y border-lapis/40">
          {certifications.map((cert) => (
            <li
              key={cert.title}
              className="flex items-baseline justify-between gap-6 py-4"
            >
              <div>
                <p className="text-glaze">{cert.title}</p>
                {cert.issuer && (
                  <p className="mt-1 text-sm text-muted">{cert.issuer}</p>
                )}
              </div>
              <span className="shrink-0 font-mono text-xs text-tile">
                {cert.year}
              </span>
            </li>
          ))}
        </ul>
      </motion.div>

      <motion.div
        {...reveal(0.12)}
        className="lg:col-span-5"
      >
        <h3 className="eyebrow">Education</h3>
        <ul className="mt-6 space-y-8">
          {education.map((item) => (
            <li
              key={item.qualification}
              className="border-l border-lapis pl-5"
            >
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-tile">
                {item.period}
              </p>
              <p className="mt-2 font-display text-xl font-bold tracking-tight text-glaze">
                {item.qualification}
              </p>
              <p className="mt-1 text-muted">{item.school}</p>
              {item.note && (
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {item.note}
                </p>
              )}
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  </Section>
);

export default Credentials;
