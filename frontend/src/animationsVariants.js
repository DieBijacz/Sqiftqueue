export const pageTransition = {
  hidden: { x: '-100%', transition: { duration: 0.1 } },
  show: { x: 0, transition: { duration: 0.1 } },
  exit: { x: window.innerWidth, transition: { duration: 0.1 } },
}

export const fromRight = {
  hidden: { opacity: 0, x: '100%' },
  show: { opacity: 1, x: 0, transition: { duration: 2, ease: 'easeOut' } }
}

export const fromLeft = {
  hidden: { opacity: 0, x: '-100%' },
  show: { opacity: 1, x: 0, transition: { duration: 2, ease: 'easeOut' } }
}

export const fromBottom = {
  hidden: { opacity: 0, y: '100%' },
  show: { opacity: 1, y: 0, transition: { duration: 2, ease: 'easeOut' } }
}