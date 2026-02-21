import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import SectionWrapper from '@/components/common/SectionWrapper'
import TiltCard from '@/components/common/TiltCard'
import AnimatedHeading from '@/components/common/AnimatedHeading'
import usePersonalInfo from '@/hooks/usePersonalInfo'
import { stats as staticStats } from '@/data/content'
import { staggerItem } from '@/utils/animations'

const StatCounter = ({ stat, inView }) => {
  const [count, setCount] = useState(0)
  const { value, label, suffix } = stat

  useEffect(() => {
    if (!inView || typeof value !== 'number') {
      if (!inView) return;
      if (typeof value !== 'number') {
        setCount(value); // Fallback for string stats
        return;
      }
    }

    let start = 0
    const end = value
    const duration = 2000
    const increment = end / (duration / 16)

    const timer = setInterval(() => {
      start += increment
      if (start >= end) {
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)

    return () => clearInterval(timer)
  }, [inView, value])

  return (
    <motion.div
      variants={staggerItem}
      className="text-center p-3 sm:p-4 rounded-lg bg-white/5 border border-white/5 hover:bg-white/10 transition-colors duration-300"
      whileHover={{ scale: 1.05 }}
    >
      <div className="text-xl sm:text-2xl xl:text-4xl font-display font-bold text-slate-100 mb-0.5">
        {count}{suffix}
      </div>
      <div className="text-primary/80 text-[10px] sm:text-xs xl:text-sm font-medium tracking-wide uppercase">{label}</div>
    </motion.div>
  )
}

const About = () => {
  const [inView, setInView] = useState(false)
  const { info } = usePersonalInfo()
  const statsData = info?.stats || staticStats
  const statsRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
        }
      },
      { threshold: 0.3 }
    )

    if (statsRef.current) {
      observer.observe(statsRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <SectionWrapper id="about">
      {/* Mobile Heading - Visible only on mobile/tablet */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-10 lg:mb-16"
      >
        <p className="text-primary font-semibold mb-2 text-lg tracking-wide uppercase">About Me</p>
        <AnimatedHeading 
          level="h2" 
          gradient 
          className="justify-center text-3xl sm:text-4xl lg:text-5xl xl:text-6xl"
        >
          Crafting Digital Experiences
        </AnimatedHeading>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
        {/* Left: Image/Icon with 3D Tilt */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative perspective-1000 max-w-md mx-auto lg:max-w-none w-full"
        >
          <TiltCard className="perspective-1000">
            <div className="glass rounded-2xl p-2 bg-gradient-to-br from-white/5 to-white/0 border border-white/10 shadow-xl">
              <div className="aspect-square flex items-center justify-center relative overflow-hidden group rounded-xl">
                {/* Profile Image */}
                <img 
                  src="/assets/images/profile.png" 
                  alt="Profile" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Animated overlay */}
                <motion.div
                  className="absolute inset-0 bg-primary/10 mix-blend-overlay"
                  animate={{
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                  }}
                />
              </div>
            </div>
          </TiltCard>
        </motion.div>

        {/* Right: Content */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: { 
              opacity: 1, 
              x: 0,
              transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
              }
            }
          }}
          className="flex flex-col justify-center lg:justify-center space-y-6 lg:space-y-8 text-center lg:text-left h-full"
        >


          <motion.p 
            variants={staggerItem}
            className="text-gray-300 text-sm sm:text-base xl:text-lg leading-relaxed font-body"
          >
            {info ? info.bio : '...'}
          </motion.p>

          <motion.p 
            variants={staggerItem}
            className="text-gray-300 text-sm sm:text-base xl:text-lg leading-relaxed font-body"
          >
            With a passion for clean code and beautiful design, I transform ideas into 
            reality through modern web technologies. I believe in writing code that is 
            not only functional but also maintainable and scalable.
          </motion.p>

          {/* Stats */}
          <motion.div
            variants={staggerItem}
            ref={statsRef}
            className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 xl:gap-6 pt-6"
          >
            {statsData.map((stat, index) => (
              <StatCounter key={index} stat={stat} inView={inView} />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}

export default About
