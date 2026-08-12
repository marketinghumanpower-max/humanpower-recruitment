import React from 'react'
import { motion, useReducedMotion } from 'framer-motion'

interface ScrollRevealProps {
  children: React.ReactNode
  className?: string
  direction?: 'up' | 'down' | 'left' | 'right' | 'zoom' | 'fade'
  delay?: number
  duration?: number
  distance?: number
  once?: boolean
  viewportAmount?: number
  staggerChildren?: number
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  className = '',
  direction = 'up',
  delay = 0,
  duration = 0.4,
  distance = 16,
  once = true,
  viewportAmount = 0.05,
}) => {
  const shouldReduceMotion = useReducedMotion()

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>
  }

  const getInitialPosition = () => {
    switch (direction) {
      case 'up':
        return { opacity: 0, y: distance, x: 0, scale: 1 }
      case 'down':
        return { opacity: 0, y: -distance, x: 0, scale: 1 }
      case 'left':
        return { opacity: 0, x: distance, y: 0, scale: 1 }
      case 'right':
        return { opacity: 0, x: -distance, y: 0, scale: 1 }
      case 'zoom':
        return { opacity: 0, y: 0, x: 0, scale: 0.96 }
      case 'fade':
      default:
        return { opacity: 0, y: 0, x: 0, scale: 1 }
    }
  }

  return (
    <motion.div
      initial={getInitialPosition()}
      whileInView={{
        opacity: 1,
        y: 0,
        x: 0,
        scale: 1,
      }}
      viewport={{ once, amount: viewportAmount }}
      transition={{
        duration,
        delay,
        ease: 'easeOut',
      }}
      className={`${className} transform-gpu`}
    >
      {children}
    </motion.div>
  )
}
