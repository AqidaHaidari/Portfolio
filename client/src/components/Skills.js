import React from 'react';
import { motion } from 'framer-motion';
import Section from './ui/Section';
import { reveal } from './ui/reveal';
import { skills } from '../data/content';

// Grouped the way the work is actually divided, not as one undifferentiated grid.
const Skills = () => (
  <Section
    id="skills"
    tone="light"
    eyebrow="Toolkit"
    title="What I build with"
    standfirst="Grouped by where each tool sits in the stack, rather than ranked by how well I know it."
  >
    <dl className="divide-y divide-lapis/20 border-y border-lapis/20">
      {skills.map((group, index) => (
        <motion.div
          key={group.group}
          {...reveal(index * 0.06)}
          className="grid grid-cols-1 gap-4 py-7 md:grid-cols-12 md:gap-8"
        >
          <dt className="eyebrow pt-1 text-lapis md:col-span-4">
            {group.group}
          </dt>
          <dd className="md:col-span-8">
            <ul className="flex flex-wrap gap-x-6 gap-y-3">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="font-display text-lg font-semibold tracking-tight text-ink"
                >
                  {item}
                </li>
              ))}
            </ul>
          </dd>
        </motion.div>
      ))}
    </dl>
  </Section>
);

export default Skills;
