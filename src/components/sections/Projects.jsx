import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionWrapper from '@/components/common/SectionWrapper'
import AnimatedHeading from '@/components/common/AnimatedHeading'
import ProjectCard from '@/components/common/ProjectCard'
import { projects as staticProjects } from '@/data/content'
import { staggerContainer, staggerItem } from '@/utils/animations'

const Projects = () => {
  return (
    <SectionWrapper id="projects">
      <div className="text-center mb-10 space-y-4">
        <p className="text-primary/90 text-sm font-medium tracking-[0.2em] uppercase">Portfolio</p>
        <AnimatedHeading level="h2">
          Selected Works
        </AnimatedHeading>
        <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed font-body">
          A collection of projects showcasing my expertise in modern web development.
        </p>
      </div>

      {/* Projects Grid */}
      <motion.div
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 w-full"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {staticProjects.map((project) => (
          <motion.div
            key={project.id || project.title}
            variants={staggerItem}
            className="perspective-1000"
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </motion.div>

      {/* Empty State */}
      {staticProjects.length === 0 && (
        <div className="text-center py-20 border-2 border-dashed border-white/5 rounded-3xl">
          <p className="text-gray-400 font-medium uppercase tracking-widest text-sm">No projects found.</p>
        </div>
      )}
    </SectionWrapper>
  )
}

export default Projects
