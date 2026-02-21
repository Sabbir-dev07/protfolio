import { motion } from 'framer-motion'
import { staggerContainer } from '@/utils/animations'

const SectionWrapper = ({ 
  children, 
  id,
  className = '',
  containerClassName = ''
}) => {
  return (
    <section 
      id={id}
      className={`py-12 md:py-16 relative ${className}`}
    >
      <motion.div
        className={`container-custom relative ${containerClassName}`}
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {children}
      </motion.div>
    </section>
  )
}

export default SectionWrapper
