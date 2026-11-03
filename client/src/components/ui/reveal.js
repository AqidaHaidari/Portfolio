// One reveal for the whole page. `amount` is deliberately small and there is no
// negative root margin: a tall section still trips the observer as soon as its
// top edge lands, so nothing can get stranded at opacity 0.
export const revealViewport = { once: true, amount: 0.12 };

export const reveal = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: revealViewport,
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
});
