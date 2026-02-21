import { motion } from 'framer-motion'
import { fadeInUp } from '@/utils/animations'

const AnimatedHeading = ({ 
  children, 
  level = 'h2',
  gradient = false,
  className = '',
  ...props 
}) => {
  const Tag = motion[level]
  
  const baseStyles = {
    h1: 'text-4xl sm:text-6xl md:text-8xl font-display font-bold text-slate-100',
    h2: 'text-3xl sm:text-4xl md:text-6xl font-display font-bold text-slate-100',
    h3: 'text-2xl sm:text-3xl md:text-5xl font-display font-bold text-slate-100',
    h4: 'text-xl sm:text-2xl md:text-4xl font-display font-semibold text-slate-100'
  }

  const gradientClass = gradient ? 'gradient-text' : 'text-white'

  return (
    <Tag
      className={`${baseStyles[level]} ${gradientClass} ${className}`}
      variants={fadeInUp}
      {...props}
    >
      {children}
    </Tag>
  )
}

export default AnimatedHeading
