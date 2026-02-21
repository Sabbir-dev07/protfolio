import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

const StarBackground = () => {
    const canvasRef = useRef(null)
    const mouseRef = useRef({ x: 0, y: 0 })
    const targetRef = useRef({ x: 0, y: 0 })

    useEffect(() => {
        const canvas = canvasRef.current
        const ctx = canvas.getContext('2d')
        let animationFrameId
        let stars = []

        // Mouse position tracking
        const handleMouseMove = (e) => {
            // Normalize mouse position relative to center
            targetRef.current.x = (e.clientX - window.innerWidth / 2) / window.innerWidth
            targetRef.current.y = (e.clientY - window.innerHeight / 2) / window.innerHeight
        }

        // Touch support for mobile
        const handleTouchMove = (e) => {
            if (e.touches.length > 0) {
                targetRef.current.x = (e.touches[0].clientX - window.innerWidth / 2) / window.innerWidth
                targetRef.current.y = (e.touches[0].clientY - window.innerHeight / 2) / window.innerHeight
            }
        }

        const resizeCanvas = () => {
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
            initStars()
        }

        const initStars = () => {
            stars = []
            const starCount = Math.floor((canvas.width * canvas.height) / 2500)
            
            for (let i = 0; i < starCount; i++) {
                const depth = Math.random() // Depth factor for parallax (0 = far, 1 = close)
                stars.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    baseX: Math.random() * canvas.width,
                    baseY: Math.random() * canvas.height,
                    radius: Math.random() * 1.5 + 0.3 * depth, // Closer stars appear larger
                    vx: (Math.random() - 0.5) * 0.02,
                    vy: (Math.random() - 0.5) * 0.02,
                    depth: depth, // Depth affects responsiveness to mouse
                    alpha: Math.random() * 0.6 + 0.3,
                    twinkleSpeed: Math.random() * 0.008 + 0.002,
                    twinkleDir: Math.random() > 0.5 ? 1 : -1,
                    color: Math.random() > 0.7 ? `hsl(${270 + Math.random() * 30}, 80%, ${85 + Math.random() * 15}%)` : '#ffffff' // Some stars have slight purple tint
                })
            }
        }

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height)
            
            // Smooth mouse following with easing
            mouseRef.current.x += (targetRef.current.x - mouseRef.current.x) * 0.05
            mouseRef.current.y += (targetRef.current.y - mouseRef.current.y) * 0.05
            
            stars.forEach(star => {
                // Update base position with slow drift
                star.x += star.vx
                star.y += star.vy

                // Wrap around screen
                if (star.x < 0) star.x = canvas.width
                if (star.x > canvas.width) star.x = 0
                if (star.y < 0) star.y = canvas.height
                if (star.y > canvas.height) star.y = 0

                // Apply parallax effect based on mouse position and star depth
                // Deeper stars (smaller) move less, closer stars move more
                const parallaxStrength = star.depth * 30
                const offsetX = -mouseRef.current.x * parallaxStrength
                const offsetY = -mouseRef.current.y * parallaxStrength

                const drawX = star.x + offsetX
                const drawY = star.y + offsetY

                // Twinkle effect
                star.alpha += star.twinkleSpeed * star.twinkleDir
                if (star.alpha >= 1 || star.alpha <= 0.2) {
                    star.twinkleDir *= -1
                }

                // Draw star with glow effect for closer stars
                ctx.beginPath()
                if (star.depth > 0.6) {
                    // Add glow to closer stars with purple tint
                    const gradient = ctx.createRadialGradient(
                        drawX, drawY, 0,
                        drawX, drawY, star.radius * 2
                    )
                    gradient.addColorStop(0, `rgba(255, 255, 255, ${Math.abs(star.alpha)})`)
                    gradient.addColorStop(0.5, `rgba(192, 132, 252, ${Math.abs(star.alpha) * 0.3})`)
                    gradient.addColorStop(1, 'rgba(192, 132, 252, 0)')
                    ctx.fillStyle = gradient
                    ctx.arc(drawX, drawY, star.radius * 2, 0, Math.PI * 2)
                } else {
                    ctx.arc(drawX, drawY, star.radius, 0, Math.PI * 2)
                    ctx.fillStyle = star.color === '#ffffff' 
                        ? `rgba(255, 255, 255, ${Math.abs(star.alpha)})`
                        : star.color.replace(')', `, ${Math.abs(star.alpha)})`).replace('hsl', 'hsla')
                }
                ctx.fill()
            })

            animationFrameId = requestAnimationFrame(animate)
        }

        window.addEventListener('resize', resizeCanvas)
        window.addEventListener('mousemove', handleMouseMove)
        window.addEventListener('touchmove', handleTouchMove)
        
        // Initialize mouse at center
        mouseRef.current = { x: 0, y: 0 }
        targetRef.current = { x: 0, y: 0 }
        
        resizeCanvas()
        animate()

        return () => {
            window.removeEventListener('resize', resizeCanvas)
            window.removeEventListener('mousemove', handleMouseMove)
            window.removeEventListener('touchmove', handleTouchMove)
            cancelAnimationFrame(animationFrameId)
        }
    }, [])

    return (
        <motion.canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full pointer-events-none z-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            transition={{ duration: 2 }}
        />
    )
}

export default StarBackground
