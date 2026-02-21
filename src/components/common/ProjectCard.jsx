import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'
import Card from './Card'
import TiltCard from '@/components/common/TiltCard'

const ProjectCard = ({ project }) => {
  const { title, description, image, tags, liveUrl, githubUrl } = project

  return (
    <TiltCard className="h-full">
      <Card className="group h-full bg-dark-800/40 border border-white/5 hover:border-primary/20 transition-all duration-500 overflow-hidden flex flex-col">
        {/* Project Image - Subtle zoom on hover */}
        <div className="relative h-48 overflow-hidden">
          {liveUrl ? (
            <motion.img
              src={`https://s.wordpress.com/mshots/v1/${encodeURIComponent(liveUrl)}?w=800`}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          ) : image && (
            <motion.img
              src={image}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          )}
          <div className="absolute inset-0 bg-dark/20 group-hover:bg-dark/0 transition-colors duration-500" />
        </div>

        {/* Project Info */}
        <div className="p-6 flex flex-col flex-grow">
          <div className="mb-4">
            <h3 className="text-xl font-heading font-semibold text-slate-100 mb-2 group-hover:text-primary transition-colors">
              {title}
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed line-clamp-2">
              {description}
            </p>
          </div>

          {/* Tech Stack - Minimal list */}
          <div className="flex flex-wrap gap-2 mb-6 mt-auto">
            {Array.isArray(tags) && tags.slice(0, 3).map((tag, index) => (
              <span
                key={index}
                className="text-xs font-mono text-slate-500"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Action Buttons - Clean & Simple */}
          <div className="flex gap-4 pt-4 border-t border-white/5">
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-medium text-slate-300 hover:text-primary transition-colors"
              >
                <ExternalLink size={16} />
                Live Demo
              </a>
            )}
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-medium text-slate-300 hover:text-white transition-colors"
              >
                <Github size={16} />
                Code
              </a>
            )}
          </div>
        </div>
      </Card>
    </TiltCard>
  )
}

export default ProjectCard
