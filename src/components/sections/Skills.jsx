import { motion } from 'framer-motion'
import SectionWrapper from '@/components/common/SectionWrapper'
import AnimatedHeading from '@/components/common/AnimatedHeading'
import Card from '@/components/common/Card'
import { skills as staticSkills } from '@/data/content'
import { fadeInUp } from '@/utils/animations'

const SkillCategory = ({ title, skills, delay }) => {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ delay }}
      className="h-full"
    >
      <Card className="h-full p-8 hover:border-primary/30 transition-colors duration-500 bg-dark-800/50">
        <h3 className="text-xl font-heading font-medium text-slate-200 mb-6 pb-4 border-b border-white/5 tracking-wide">
          {title}
        </h3>
        
        <div className="space-y-6">
          {skills.map((skill, index) => (
            <div key={index} className="group">
              <div className="flex items-center gap-4 mb-2">
                <motion.div
                  className="p-2 rounded-lg bg-white/5 group-hover:bg-primary/10 transition-colors"
                  animate={{ y: [0, -5, 0] }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    delay: index * 0.1 
                  }}
                >
                  <div className="w-8 h-8 flex items-center justify-center grayscale group-hover:grayscale-0 transition-all duration-300">
                    {skill.icon && skill.icon.startsWith('http') || skill.icon.startsWith('/') ? (
                      <img src={skill.icon} alt={skill.name} className="w-6 h-6 object-contain" />
                    ) : (
                      <span className="text-xl">{skill.icon || '💻'}</span>
                    )}
                  </div>
                </motion.div>
                <span className="text-sm font-mono font-medium text-slate-400 group-hover:text-primary transition-colors">
                  {skill.name}
                </span>
                <span className="ml-auto text-xs text-slate-500 font-mono">
                  {skill.level}%
                </span>
              </div>
              
              {/* Progress Bar */}
              <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-primary/50 to-primary rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5 + (index * 0.1) }}
                />
              </div>
            </div>
          ))}
        </div>
      </Card>
    </motion.div>
  )
}

const Skills = () => {
  return (
    <SectionWrapper id="skills" className="bg-dark/50">
      <div className="text-center mb-10 space-y-4">
        <p className="text-primary/90 text-sm font-medium tracking-[0.2em] uppercase">Expertise</p>
        <AnimatedHeading level="h2">
          Technical Arsenal
        </AnimatedHeading>
        <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed font-body">
          A curated list of technologies I use to build scalable, high-performance applications.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8">
        <SkillCategory 
          title="Frontend Development" 
          skills={staticSkills.frontend || []} 
          delay={0}
        />
        <SkillCategory 
          title="Backend Infrastructure" 
          skills={staticSkills.backend || []} 
          delay={0.2} 
        />
        <SkillCategory 
          title="Developer Tools" 
          skills={staticSkills.tools || []} 
          delay={0.4} 
        />
      </div>
    </SectionWrapper>
  )
}

export default Skills
