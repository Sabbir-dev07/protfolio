// Framer Motion animation variants library

export const fadeIn = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { duration: 0.6, ease: 'easeOut' }
    }
}

export const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: 'easeOut' }
    }
}

export const fadeInDown = {
    hidden: { opacity: 0, y: -20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: 'easeOut' }
    }
}

export const slideInLeft = {
    hidden: { opacity: 0, x: -30 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.6, ease: 'easeOut' }
    }
}

export const slideInRight = {
    hidden: { opacity: 0, x: 30 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.6, ease: 'easeOut' }
    }
}

export const scaleIn = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.4, ease: 'easeOut' }
    }
}

export const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2
        }
    }
}

export const staggerItem = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: 'easeOut' }
    }
}

export const hoverScale = {
    rest: { scale: 1 },
    hover: {
        scale: 1.05,
        transition: { duration: 0.3, ease: 'easeInOut' }
    }
}

export const hoverGlow = {
    rest: {
        boxShadow: '0 0 20px rgba(192, 132, 252, 0.3)'
    },
    hover: {
        boxShadow: '0 0 30px rgba(192, 132, 252, 0.5), 0 0 60px rgba(192, 132, 252, 0.2)',
        transition: { duration: 0.3 }
    }
}

export const whileHoverTap = {
    whileHover: {
        scale: 1.05,
        boxShadow: '0 0 20px rgba(192, 132, 252, 0.3)'
    },
    whileTap: {
        scale: 0.95,
        boxShadow: '0 0 30px rgba(192, 132, 252, 0.5), 0 0 60px rgba(192, 132, 252, 0.2)',
    },
    transition: { duration: 0.3 }
}

export const pageTransition = {
    initial: { opacity: 0, y: 20 },
    animate: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: 'easeOut' }
    },
    exit: {
        opacity: 0,
        y: -20,
        transition: { duration: 0.4, ease: 'easeIn' }
    }
}
