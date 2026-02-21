import { motion } from 'framer-motion'

const Card = ({ 
  children, 
  className = '', 
  hover = true,
  glow = false,
  ...props 
}) => {
  const baseStyles = 'glass rounded-xl p-6'
  const hoverStyles = hover ? 'glass-hover' : ''
  const glowStyles = glow ? 'glow-hover' : ''

  return (
    <motion.div
      className={`${baseStyles} ${hoverStyles} ${glowStyles} ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={hover ? { y: -5 } : {}}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export default Card
