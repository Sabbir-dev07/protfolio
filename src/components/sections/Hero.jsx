import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Sparkles, Code2, Palette, Zap } from 'lucide-react'
import usePersonalInfo from '@/hooks/usePersonalInfo'

const Hero = () => {
  const { info } = usePersonalInfo()
  const [displayText1, setDisplayText1] = useState('');
  const [displayText2, setDisplayText2] = useState('');
  const [displayText3, setDisplayText3] = useState('');
  const [phase, setPhase] = useState('greeting'); // 'greeting' | 'name' | 'role'
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);
  const [bounceHeight, setBounceHeight] = useState(-10);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 480) setBounceHeight(-5);
      else if (width < 1024) setBounceHeight(-8);
      else setBounceHeight(-12);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const greeting = "Hi, I'm ";
  const nameValue = info?.name || 'MD Sabbir Hossen';
  const roles = info?.roles || [];

  useEffect(() => {
    if (!info) return;

    const handleTyping = () => {
      if (phase === 'greeting') {
        if (displayText1.length < greeting.length) {
          setDisplayText1(greeting.substring(0, displayText1.length + 1));
          setTypingSpeed(100);
        } else {
          setTimeout(() => setPhase('name'), 500);
        }
      } else if (phase === 'name') {
        if (displayText2.length < nameValue.length) {
          setDisplayText2(nameValue.substring(0, displayText2.length + 1));
          setTypingSpeed(100);
        } else {
          setTimeout(() => setPhase('role'), 1000);
        }
      } else if (phase === 'role') {
        const currentRole = roles[roleIndex];
        if (!currentRole) return;

        if (!isDeleting) {
          if (displayText3.length < currentRole.length) {
            setDisplayText3(currentRole.substring(0, displayText3.length + 1));
            setTypingSpeed(100);
          } else {
            setTimeout(() => setIsDeleting(true), 1500);
          }
        } else {
          if (displayText3.length > 0) {
            setDisplayText3(currentRole.substring(0, displayText3.length - 1));
            setTypingSpeed(50);
          } else {
            setIsDeleting(false);
            setRoleIndex((roleIndex + 1) % roles.length);
            setTypingSpeed(200);
          }
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText1, displayText2, displayText3, phase, roleIndex, isDeleting, typingSpeed, info, greeting, nameValue, roles]);



  const floatingIcons = [
    { Icon: Code2, delay: 0.5, position: 'top-1/4 left-[10%]' },
    { Icon: Palette, delay: 0.7, position: 'top-1/3 right-[12%]' },
    { Icon: Zap, delay: 0.9, position: 'bottom-1/3 left-[15%]' },
  ]

  // Animation Variants
  const heroVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  }

  const childVariants = {
    hidden: { opacity: 0, y: 30, filter: 'blur(10px)' },
    visible: { 
      opacity: 1, 
      y: 0, 
      filter: 'blur(0px)',
      transition: { duration: 0.8, ease: "easeOut" }
    }
  }

  // Calculate longest role for stable width
  const longestRole = roles.reduce((a, b) => a.length > b.length ? a : b, "");

  return (
    <section id="home" className="relative w-full flex flex-col items-center justify-start pt-24 min-[480px]:pt-32 md:pt-40 pb-12 overflow-hidden bg-dark">
      {/* Realistic Space Background remains in App.jsx */}
      
      {/* Enhanced Purple Gradient Overlays */}
      <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-primary/15 rounded-full blur-[150px] pointer-events-none z-0" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-primary/10 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="absolute top-[30%] right-[20%] w-[30%] h-[30%] bg-primary/5 rounded-full blur-[100px] pointer-events-none z-0" />

      {/* Floating Icons */}
      {floatingIcons.map(({ Icon, delay, position }, index) => (
        <motion.div
          key={index}
          className={`absolute ${position} hidden lg:block`}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: 0.15, 
            scale: 1,
            y: [0, -20, 0]
          }}
          transition={{ 
            opacity: { delay, duration: 0.5 },
            scale: { delay, duration: 0.5 },
            y: { delay: delay + 1, duration: 4, repeat: Infinity, ease: "easeInOut" }
          }}
        >
          <Icon className="w-16 h-16 text-primary" strokeWidth={1} />
        </motion.div>
      ))}

      <div className="container-custom relative z-10 w-full flex flex-col items-center">
        <motion.div 
          className="w-full max-w-5xl mx-auto text-center space-y-6 px-4"
          variants={heroVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Greeting with sparkle */}
          <motion.div
            className="flex items-center justify-center gap-3 mb-6"
            variants={childVariants}
          >
            <Sparkles className="w-5 h-5 text-primary shrink-0" />
            <p className="text-primary text-[10px] sm:text-xs md:text-sm font-medium tracking-[0.2em] md:tracking-[0.3em] uppercase whitespace-nowrap">
              Welcome to my portfolio
            </p>
            <Sparkles className="w-5 h-5 text-primary shrink-0" />
          </motion.div>

          {/* Name with gradient text */}
          <motion.h1
            className="text-lg min-[375px]:text-xl min-[480px]:text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight mb-3"
            variants={childVariants}
          >
            <span className="grid place-items-center mb-2">
              <span className="invisible col-start-1 row-start-1 text-slate-100 font-medium whitespace-nowrap uppercase">{greeting}</span>
              <span className="col-start-1 row-start-1 text-slate-100 font-medium whitespace-nowrap uppercase">{displayText1}</span>
            </span>
            <motion.span 
              className="grid place-items-center px-2"
              animate={{ y: [0, bounceHeight, 0] }}
              transition={{ 
                duration: 2, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
            >
              <span className="invisible col-start-1 row-start-1 text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-400 to-primary font-display font-extrabold tracking-tighter leading-none sm:leading-tight animate-gradient-x bg-[length:200%_auto] whitespace-nowrap uppercase">{nameValue}</span>
              <span className="col-start-1 row-start-1 text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-400 to-primary font-display font-extrabold tracking-tighter leading-none sm:leading-tight animate-gradient-x bg-[length:200%_auto] whitespace-nowrap uppercase">{displayText2}</span>
            </motion.span>
          </motion.h1>

          {/* Role with animated underline */}
          <motion.div
            className="flex flex-col items-center justify-center w-full"
            variants={childVariants}
          >
            <div className="grid place-items-center w-full mb-2">
              <h2 className="invisible col-start-1 row-start-1 text-xs min-[375px]:text-sm sm:text-xl md:text-2xl lg:text-4xl font-orbitron font-medium text-slate-300 tracking-[0.01em] sm:tracking-[0.05em] uppercase whitespace-nowrap">
                {longestRole}
              </h2>
              <h2 className="col-start-1 row-start-1 text-xs min-[375px]:text-sm sm:text-xl md:text-2xl lg:text-4xl font-orbitron font-medium text-slate-300 tracking-[0.01em] sm:tracking-[0.05em] uppercase whitespace-nowrap">
                {displayText3}
                {phase === 'role' && <span className="text-primary animate-pulse ml-1">|</span>}
              </h2>
            </div>
            <motion.div
              className="h-1 w-16 sm:w-24 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full"
              initial={{ width: 0 }}
              animate={{ width: '4rem' }}
              transition={{ delay: 1.5, duration: 0.8 }}
            />
          </motion.div>

          {/* Description - Premium Refinement */}
          <motion.div
            className="relative w-full max-w-2xl mx-auto mt-5 md:mt-10 p-1"
            variants={childVariants}
          >
            {/* Subtle glow behind text */}
            <div className="absolute inset-0 bg-primary/5 blur-3xl rounded-full" />
            
            <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 p-4 sm:p-5 md:p-8 rounded-2xl shadow-2xl">
              <p className="text-slate-300 text-[13px] sm:text-sm md:text-lg leading-relaxed font-body text-center">
                {info ? info.bio : '...'}
                <span className="block mt-2 text-primary italic font-medium text-xs sm:text-sm">
                  Let's create something amazing together.
                </span>
              </p>
            </div>
          </motion.div>

          {/* Enhanced Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-5 pt-4 w-full sm:w-auto mx-auto px-4"
            variants={childVariants}
          >
            <motion.a
              href="#projects"
              className="group relative px-6 py-3.5 sm:px-8 sm:py-4 bg-primary border-2 border-primary text-white font-semibold rounded-xl overflow-hidden w-full sm:w-auto text-center tracking-wide shadow-lg shadow-primary/25 transition-all duration-300 hover:bg-transparent hover:text-primary"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10 text-sm sm:text-base">View Selected Works</span>
            </motion.a>
            <motion.a
              href="#contact"
              className="group relative px-6 py-3.5 sm:px-8 sm:py-4 bg-transparent border-2 border-primary/50 text-primary font-semibold rounded-xl hover:border-primary hover:text-white transition-all duration-300 w-full sm:w-auto text-center tracking-wide overflow-hidden"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10 group-hover:text-white transition-colors text-sm sm:text-base">Hire Me</span>
              <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
            </motion.a>
          </motion.div>

        </motion.div>
      </div>
    </section>
  )
}

export default Hero
