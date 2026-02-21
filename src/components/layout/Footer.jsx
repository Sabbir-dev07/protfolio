import { motion } from 'framer-motion'
import { Github, Linkedin, Twitter, Mail, Facebook, Instagram, Youtube, Globe, Triangle } from 'lucide-react'
import { socialLinks, personalInfo } from '@/data/content'
import usePersonalInfo from '@/hooks/usePersonalInfo'
import fiverrIcon from '@/assets/images.png'

const Fiverr = ({ size = 20, ...props }) => (
  <img 
    src={fiverrIcon} 
    alt="Fiverr" 
    width={size} 
    height={size} 
    className="object-contain rounded-full grayscale group-hover:grayscale-0 transition-all duration-300"
    {...props}
  />
)

const iconMap = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
  mail: Mail,
  facebook: Facebook,
  instagram: Instagram,
  youtube: Youtube,
  website: Globe,
  fiverr: Fiverr,
  vercel: Triangle
}

const Footer = () => {
  const { info } = usePersonalInfo()
  const links = info.socialLinks || socialLinks
  const name = info.name || personalInfo.name

  return (
    <footer className="relative bg-dark px-4 sm:px-10 py-12 border-t border-white/5">
      <div className="container-custom flex flex-col items-center gap-8">
        {/* Social Links restored */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 px-4">
          {links.map((link, idx) => {
            const Icon = iconMap[link.icon?.toLowerCase()] || Mail;
            return (
              <motion.a
                key={link.name || idx}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full glass flex items-center justify-center text-gray-400 hover:text-primary glow-hover transition-colors"
                whileHover={{ y: -5, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label={link.name}
              >
                <Icon size={18} className="sm:w-5 sm:h-5" />
              </motion.a>
            )
          })}
        </div>
        
        {/* Text & Back to Top Group restored */}
        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-white/5">
          <motion.p
            className="text-gray-500 text-xs sm:text-sm tracking-[0.2em] uppercase font-medium text-center md:text-left"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Made by {name || 'MD Sabbir Hossen'}
          </motion.p>

          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="group flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-primary hover:bg-primary/10 hover:border-primary/30 transition-all duration-300 shadow-lg hover:shadow-primary/10"
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-sm font-bold tracking-wider uppercase">Back to Top</span>
            <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
              <svg 
                className="w-4 h-4 text-primary transform group-hover:-translate-y-1 transition-transform" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 15l7-7 7 7" />
              </svg>
            </div>
          </motion.button>
        </div>
      </div>
    </footer>
  )
}

export default Footer
