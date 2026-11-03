import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowUpRight } from 'react-icons/fi';
import Section from './ui/Section';
import { GirihMark } from './ui/Girih';
import { reveal } from './ui/reveal';
import { projects, openSource } from '../data/content';

// Project copy lives in src/data/content.js. Adding a `live` or `repo` URL
// there makes the matching link appear on the card.
const ProjectCard = ({ project, index }) => (
  <motion.article
    {...reveal((index % 3) * 0.08)}
    className="group relative flex flex-col border border-lapis/20 bg-white p-7 transition-colors duration-300 hover:border-lapis/50"
  >
    <span className="absolute inset-x-0 top-0 h-0.5 scale-x-0 bg-saffron transition-transform duration-300 ease-out group-hover:scale-x-100" />

    <div className="flex items-center justify-between gap-4">
      <p className="eyebrow text-lapis">{project.kind}</p>
      <p className="font-mono text-xs text-lapis/50">{project.year}</p>
    </div>

    <h3 className="mt-5 font-display text-2xl font-bold tracking-tight text-ink">
      {project.title}
    </h3>

    <p className="mt-4 flex-1 leading-relaxed text-lapis/80">
      {project.description}
    </p>

    <ul className="mt-6 flex flex-wrap gap-2">
      {project.stack.map((tech) => (
        <li
          key={tech}
          className="border border-lapis/20 px-2.5 py-1 font-mono text-[0.7rem] text-lapis"
        >
          {tech}
        </li>
      ))}
    </ul>

    {(project.live || project.repo) && (
      <div className="mt-6 flex flex-wrap gap-5 border-t border-lapis/15 pt-5">
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-[0.14em] text-ink underline decoration-saffron decoration-2 underline-offset-4 hover:text-lapis"
          >
            Live site <FiArrowUpRight aria-hidden="true" />
          </a>
        )}
        {project.repo && (
          <a
            href={project.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-[0.14em] text-lapis/70 hover:text-ink"
          >
            Source <FiArrowUpRight aria-hidden="true" />
          </a>
        )}
      </div>
    )}
  </motion.article>
);

const Projects = () => (
  <Section
    id="work"
    tone="light"
    eyebrow="Selected work"
    title="Things I have shipped"
    standfirst="Client systems, school tooling and storefronts — built end to end, from data model to the screen someone actually uses."
  >
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project, index) => (
        <ProjectCard key={project.title} project={project} index={index} />
      ))}
    </div>

    {/* Open source sits apart: this is other people's code, not mine. */}
    <motion.div
      {...reveal()}
      className="mt-6 border border-lapis/20 bg-ink p-8 text-glaze sm:p-10"
    >
      <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-md">
          <p className="eyebrow">Open source, via GitStart</p>
          <h3 className="mt-4 font-display text-2xl font-bold tracking-tight sm:text-3xl">
            Features and fixes merged into codebases I do not own
          </h3>
          <p className="mt-4 leading-relaxed text-muted">
            Two years of working to someone else’s review standards, test suite
            and release schedule.
          </p>
        </div>

        <ul className="grid shrink-0 grid-cols-2 gap-x-10 gap-y-3 sm:grid-cols-3 lg:grid-cols-2">
          {openSource.map((name) => (
            <li key={name} className="flex items-center gap-2.5">
              <GirihMark className="h-2 w-2 shrink-0 text-tile" />
              <span className="font-mono text-sm text-glaze">{name}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  </Section>
);

export default Projects;
