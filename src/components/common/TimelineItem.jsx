import { motion } from 'framer-motion'
import Card from './Card'

const TimelineItem = ({ item, index }) => {
  const { company, position, period, description, technologies } = item
  const isEven = index % 2 === 0

  const slideVariant = {
    hidden: { opacity: 0, x: isEven ? -20 : 20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }

  return (
    <motion.div
      className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 md:mb-0"
      variants={slideVariant}
    >
      {/* Spacer for alternating layout */}
      <div className={`hidden md:block ${isEven ? 'order-1' : 'order-2'}`} />
      
      {/* Timeline dot */}
      <div className="absolute left-8 md:left-1/2 top-0 w-4 h-4 rounded-full bg-dark border-2 border-primary shadow-[0_0_10px_rgba(192,132,252,0.5)] z-20 -translate-x-1/2 translate-y-7 md:translate-y-6" />

      {/* Content */}
      <div className={`pl-12 md:pl-0 ${isEven ? 'md:order-2 md:pl-12' : 'md:order-1 md:pr-12 md:text-right'}`}>
        <Card className="relative group hover:border-primary/40 transition-colors">
          {/* Arrow pointer */}
          <div className={`absolute top-6 w-4 h-4 bg-dark-800/40 border-t border-l border-white/10 rotate-45 transform group-hover:border-primary/40 transition-colors hidden md:block ${
            isEven ? '-left-2.5 -scale-100' : '-right-2.5 scale-100'
          }`} />

          <div className="space-y-3">
            <div className={`flex flex-col gap-1 ${isEven ? 'md:items-start' : 'md:items-end'}`}>
              <h3 className="text-xl font-bold text-white">{position}</h3>
              <p className="text-primary font-medium">{company}</p>
              <span className="text-sm text-gray-400 font-mono bg-white/5 px-2 py-1 rounded">{period}</span>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed">
              {description}
            </p>

            {/* Technologies */}
            <div className={`flex flex-wrap gap-2 pt-2 ${isEven ? 'justify-start' : 'md:justify-end justify-start'}`}>
              {technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-2 py-1 text-xs bg-primary/10 text-primary rounded border border-primary/20"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </Card>
      </div>
    </motion.div>
  )
}

export default TimelineItem
