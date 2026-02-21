import { motion } from 'framer-motion'
import SectionWrapper from '@/components/common/SectionWrapper'
import AnimatedHeading from '@/components/common/AnimatedHeading'
import TimelineItem from '@/components/common/TimelineItem'
import { experience as staticExperience } from '@/data/content'
import { staggerContainer } from '@/utils/animations'

const Experience = () => {
  return (
    <SectionWrapper id="experience" className="bg-dark-100/50">
      <div className="text-center mb-10">
        <p className="text-primary font-semibold mb-2">My Journey</p>
        <AnimatedHeading level="h2" gradient>
          Work Experience
        </AnimatedHeading>
        <motion.p
          className="text-gray-400 mt-4 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          A timeline of my professional journey, showcasing the roles and experiences that have shaped my career in web development.
        </motion.p>
      </div>

      <div className="relative space-y-8 max-w-5xl mx-auto w-full">
        {/* Static Timeline Line (desktop) */}
        <div className="absolute left-[19px] md:left-1/2 top-4 bottom-0 w-0.5 bg-white/10 z-0 hidden md:block" />

        {/* Animated overlay line — grows in as section enters view */}
        <motion.div
          className="absolute left-[19px] md:left-1/2 top-4 bottom-0 w-0.5 bg-primary origin-top z-0 hidden md:block"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />

        {/* Mobile Line (Static/Simple) */}
        <div className="absolute left-8 top-4 bottom-0 w-0.5 bg-white/10 md:hidden" />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {staticExperience.map((item, index) => (
            <TimelineItem key={item.id} item={item} index={index} />
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  )
}

export default Experience
