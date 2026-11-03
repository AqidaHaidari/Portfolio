import React from 'react';
import { GirihMark } from './ui/Girih';
import { profile } from '../data/content';

const Footer = () => (
  <footer className="border-t border-lapis/50 bg-ink">
    <div className="mx-auto flex w-full max-w-page flex-col gap-4 px-6 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-10">
      <p className="flex items-center gap-3 font-mono text-xs text-muted">
        <GirihMark className="h-3 w-3 text-saffron" />
        {profile.name} — built in Herat with React and Tailwind
      </p>
      <p className="font-mono text-xs text-muted">
        © {new Date().getFullYear()}
      </p>
    </div>
  </footer>
);

export default Footer;
