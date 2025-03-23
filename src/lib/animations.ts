
// Animation variants for framer-motion like animations
export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.6 } },
  exit: { opacity: 0, transition: { duration: 0.4 } }
};

export const slideUp = {
  initial: { y: 20, opacity: 0 },
  animate: { y: 0, opacity: 1, transition: { duration: 0.6 } },
  exit: { y: 20, opacity: 0, transition: { duration: 0.4 } }
};

export const slideDown = {
  initial: { y: -20, opacity: 0 },
  animate: { y: 0, opacity: 1, transition: { duration: 0.6 } },
  exit: { y: -20, opacity: 0, transition: { duration: 0.4 } }
};

export const staggerContainer = (staggerChildren: number, delayChildren: number) => ({
  animate: {
    transition: {
      staggerChildren,
      delayChildren
    }
  }
});

export function getAnimationDelay(index: number): string {
  return `${(index + 1) * 0.1}s`;
}
