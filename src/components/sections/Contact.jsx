import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Send, CheckCircle, Github, Linkedin, Twitter, Mail } from 'lucide-react'
import SectionWrapper from '@/components/common/SectionWrapper'
import AnimatedHeading from '@/components/common/AnimatedHeading'
import Button from '@/components/common/Button'
import Card from '@/components/common/Card'
import { submitContactForm } from '@/services/api'
import usePersonalInfo from '@/hooks/usePersonalInfo'
import { fadeInUp } from '@/utils/animations'

const iconMap = {
  Github,
  Linkedin,
  Twitter,
  Mail
}

const Contact = () => {
  const { info } = usePersonalInfo()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Contact from Portfolio',
    message: ''
  })
  const [focusedField, setFocusedField] = useState(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState(null)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    try {
      const { sendEmail } = await import('@/services/api');
      await sendEmail(formData);
      
      setIsSubmitted(true);
      setTimeout(() => {
        setFormData({ name: '', email: '', subject: 'Contact from Portfolio', message: '' })
        setIsSubmitted(false)
      }, 3000)
    } catch (error) {
      console.error('Error submitting form:', error);
      setError(`Failed to send message: ${error.message || 'Unknown error'}. Please check console for details.`);
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <SectionWrapper id="contact" className="bg-black-100/50">
      <div className="text-center mb-10 space-y-4">
        <p className="text-primary/90 text-sm font-medium tracking-[0.2em] uppercase">Contact</p>
        <AnimatedHeading level="h2">
          Let's Work Together
        </AnimatedHeading>
        <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed font-body">
          Have a project in mind or just want to chat? Feel free to reach out. 
          I'm always open to discussing new opportunities and ideas.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto w-full">
        {/* Contact Form */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-2xl w-full"
        >
          {/* Background Particles - Contained within parent */}
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
             {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute bg-primary/10 rounded-full blur-xl"
                  style={{
                    width: '100px',
                    height: '100px',
                    top: `${Math.random() * 80 + 10}%`,
                    left: `${Math.random() * 80 + 10}%`,
                  }}
                  animate={{
                    y: [0, -20, 0],
                    x: [0, 10, 0],
                    scale: [1, 1.1, 1],
                    opacity: [0.3, 0.5, 0.3],
                  }}
                  transition={{
                    duration: 5 + Math.random() * 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
             ))}
          </div>

          <Card className="relative z-10 bg-tertiary/80 backdrop-blur-xl border border-white/10 !p-5 sm:!p-8">
            {isSubmitted ? (
                <motion.div
                className="flex flex-col items-center justify-center py-12 text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <CheckCircle className="w-16 h-16 text-primary mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                <p className="text-gray-400">Thank you for reaching out. I'll get back to you soon.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                {error && <p className="text-red-500 text-sm">{error}</p>}
                
                {/* Name Field */}
                <div className="relative group">
                  <div className="relative">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField(null)}
                      required
                      className="w-full px-4 py-3 sm:py-4 bg-black-200/30 border border-white/10 rounded-lg text-white text-sm sm:text-base focus:outline-none focus:border-primary transition-all duration-300 peer relative z-10"
                      placeholder="Your Name"
                    />
                    <label
                      className={`absolute left-4 transition-all duration-200 pointer-events-none z-20 ${
                        focusedField === 'name' || formData.name
                          ? '-top-2 text-[10px] sm:text-xs text-primary bg-[#111] px-2'
                          : 'top-3 sm:top-4 text-sm sm:text-base text-gray-400'
                      }`}
                    >
                      Your Name
                    </label>
                  </div>
                </div>

                {/* Email Field */}
                <div className="relative group">
                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField(null)}
                      required
                      className="w-full px-4 py-3 sm:py-4 bg-black-200/30 border border-white/10 rounded-lg text-white text-sm sm:text-base focus:outline-none focus:border-primary transition-all duration-300 peer relative z-10"
                      placeholder="Your Email"
                    />
                    <label
                      className={`absolute left-4 transition-all duration-200 pointer-events-none z-20 ${
                        focusedField === 'email' || formData.email
                          ? '-top-2 text-[10px] sm:text-xs text-primary bg-[#111] px-2'
                          : 'top-3 sm:top-4 text-sm sm:text-base text-gray-400'
                      }`}
                    >
                      Your Email
                    </label>
                  </div>
                </div>

                {/* Message Field */}
                <div className="relative group">
                  <div className="relative">
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField(null)}
                      required
                      rows={4}
                      className="w-full px-4 py-3 sm:py-4 bg-black-200/30 border border-white/10 rounded-lg text-white text-sm sm:text-base focus:outline-none focus:border-primary transition-all duration-300 resize-none peer relative z-10"
                      placeholder="Your Message"
                    />
                    <label
                      className={`absolute left-4 transition-all duration-200 pointer-events-none z-20 ${
                        focusedField === 'message' || formData.message
                          ? '-top-2 text-[10px] sm:text-xs text-primary bg-[#111] px-2'
                          : 'top-3 sm:top-4 text-sm sm:text-base text-gray-400'
                      }`}
                    >
                      Your Message
                    </label>
                  </div>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  icon={Send}
                  iconPosition="right"
                  loading={isSubmitting}
                  className="w-full relative z-10 py-3 sm:py-4"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            )}
          </Card>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          className="space-y-6 sm:space-y-8 w-full"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <div>
            <h3 className="text-2xl sm:text-3xl font-heading font-bold text-white mb-4">Contact Information</h3>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed font-body">
              Feel free to reach out through any of these channels. I typically respond 
              within 24 hours.
            </p>
          </div>

          {/* Contact Details */}
          <div className="space-y-4">
            <Card hover className="flex items-center gap-4 !p-4 sm:!p-6 overflow-hidden">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                <Mail size={18} className="sm:w-5 sm:h-5" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-xs text-gray-400 uppercase tracking-wider mb-0.5">Email</p>
                <a
                  href={`mailto:${info?.email}`}
                  className="text-white hover:text-primary transition-colors text-sm sm:text-base block truncate break-all"
                  title={info?.email}
                >
                  {info?.email || '...'}
                </a>
              </div>
            </Card>

            <Card hover className="flex items-center gap-4 !p-4 sm:!p-6 overflow-hidden">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-xs text-gray-400 uppercase tracking-wider mb-0.5">Location</p>
                <p className="text-white text-sm sm:text-base truncate">{info?.location || '...'}</p>
              </div>
            </Card>
          </div>

        </motion.div>
      </div>
    </SectionWrapper>
  )
}

export default Contact
