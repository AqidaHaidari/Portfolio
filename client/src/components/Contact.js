import React from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiArrowUpRight } from 'react-icons/fi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { GirihStar } from './ui/Girih';
import { reveal, revealViewport } from './ui/reveal';
import { profile } from '../data/content';

const details = [
  {
    icon: FiMail,
    label: 'Email',
    value: profile.email,
    href: `mailto:${profile.email}`,
  },
  {
    icon: FiPhone,
    label: 'Phone',
    value: profile.phone,
    href: `tel:${profile.phoneHref}`,
  },
  { icon: FiMapPin, label: 'Location', value: profile.location },
];

const socialIcons = {
  GitHub: FaGithub,
  LinkedIn: FaLinkedin,
};

const Contact = () => (
  <section
    id="contact"
    className="relative isolate overflow-hidden bg-ink py-24 sm:py-32"
  >
    <GirihStar
      className="animate-spin-slow pointer-events-none absolute -right-24 top-1/2 hidden h-[34rem] w-[34rem] -translate-y-1/2 text-lapis/40 md:block"
      strokeWidth={1}
    />
    <div className="pointer-events-none absolute -left-24 bottom-0 h-96 w-96 rounded-full bg-lapis/20 blur-[120px]" />

    <div className="relative mx-auto w-full max-w-page px-6 sm:px-10">
      <motion.div
        {...reveal()}
      >
        <p className="eyebrow">Contact</p>
        <h2 className="mt-5 max-w-3xl font-display text-4xl font-bold tracking-tight text-glaze sm:text-6xl">
          Hiring, or want a second pair of hands on a backend?
        </h2>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
          Write to me directly. I read everything and usually reply within a
          day.
        </p>

        <a
          href={`mailto:${profile.email}`}
          className="group mt-10 inline-flex max-w-full items-start gap-3 break-words font-display text-[clamp(1.05rem,4.4vw,3.25rem)] font-extrabold tracking-tight text-saffron transition-colors hover:text-glaze"
        >
          {profile.email}
          <FiArrowUpRight
            aria-hidden="true"
            className="mt-2 hidden shrink-0 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 sm:block"
          />
        </a>
      </motion.div>

      <motion.div
        {...reveal(0.15)}
        className="mt-16 grid grid-cols-1 gap-x-10 gap-y-8 border-t border-lapis/50 pt-10 sm:grid-cols-2 lg:grid-cols-4"
      >
        {details.map(({ icon: Icon, label, value, href }) => (
          <div key={label}>
            <p className="eyebrow flex items-center gap-2">
              <Icon aria-hidden="true" className="h-3.5 w-3.5" />
              {label}
            </p>
            {href ? (
              <a
                href={href}
                className="mt-3 block text-glaze transition-colors hover:text-saffron"
              >
                {value}
              </a>
            ) : (
              <p className="mt-3 text-glaze">{value}</p>
            )}
          </div>
        ))}

        <div>
          <p className="eyebrow">Elsewhere</p>
          <ul className="mt-3 space-y-2">
            {profile.links.map((link) => {
              const Icon = socialIcons[link.label] || FiArrowUpRight;
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 text-glaze transition-colors hover:text-saffron"
                  >
                    <Icon aria-hidden="true" className="h-4 w-4" />
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </motion.div>

      <motion.a
        href={profile.resume}
        download={profile.resumeFilename}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={revealViewport}
        transition={{ duration: 0.6, delay: 0.25 }}
        className="mt-14 inline-flex items-center gap-2 rounded-full border border-lapis px-7 py-3.5 font-mono text-xs uppercase tracking-[0.16em] text-glaze transition-colors hover:border-saffron hover:text-saffron"
      >
        Download resume (PDF)
      </motion.a>
    </div>
  </section>
);

export default Contact;
