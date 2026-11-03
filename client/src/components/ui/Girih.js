import React from 'react';

// The khatam — the eight-pointed star cut into Timurid tilework across Herat.
// Two squares at 45 degrees, an octagon, a circle. It is the one ornament on
// this site, and everything else stays plain so it can carry the page.
export const GirihStar = ({ className = '', strokeWidth = 1 }) => (
  <svg viewBox="0 0 100 100" fill="none" aria-hidden="true" className={className}>
    <g
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinejoin="round"
      vectorEffect="non-scaling-stroke"
    >
      <rect x="15.5" y="15.5" width="69" height="69" />
      <rect
        x="15.5"
        y="15.5"
        width="69"
        height="69"
        transform="rotate(45 50 50)"
      />
      <polygon points="80,50 71.2,71.2 50,80 28.8,71.2 20,50 28.8,28.8 50,20 71.2,28.8" />
      <circle cx="50" cy="50" r="12" />
    </g>
  </svg>
);

// Solid version, used where the star is a marker rather than ornament:
// the nav mark and the nodes down the experience timeline.
export const GirihMark = ({ className = '' }) => (
  <svg viewBox="0 0 100 100" aria-hidden="true" className={className}>
    <g fill="currentColor">
      <rect x="18" y="18" width="64" height="64" />
      <rect x="18" y="18" width="64" height="64" transform="rotate(45 50 50)" />
    </g>
  </svg>
);

// A hairline rule interrupted by the star. Marks the top of every section.
export const GirihRule = ({ tone = 'dark' }) => (
  <div className="flex items-center gap-3" aria-hidden="true">
    <GirihMark
      className={`h-2.5 w-2.5 shrink-0 ${tone === 'dark' ? 'text-saffron' : 'text-lapis'}`}
    />
    <span
      className={`h-px flex-1 ${tone === 'dark' ? 'bg-lapis/60' : 'bg-lapis/20'}`}
    />
  </div>
);
