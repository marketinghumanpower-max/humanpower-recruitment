import heroImg from '@/assets/hero.png'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { JobSearchBar } from './JobSearchBar'

export const HeroSection = () => {
  const { t } = useTranslation('recruitment')

  return (
    <section className="relative bg-[#d70018] text-white pt-10 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Subtle Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/20 pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="relative max-w-7xl mx-auto text-center space-y-6"
      >
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight drop-shadow-sm"
        >
          {t('hero.title')}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-sm sm:text-base md:text-lg text-white/90 font-medium"
        >
          {t('hero.subtitle')}
        </motion.p>

        {/* Banner Image Showcase */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
          className="pt-2 pb-6 max-w-4xl mx-auto"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20 bg-black/20 group">
            <img
              src={heroImg}
              alt="MWG Store Workplace"
              className="w-full h-auto max-h-[380px] object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
            />
          </div>
        </motion.div>

        {/* Search Bar Container */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="pt-2"
        >
          <JobSearchBar />
        </motion.div>
      </motion.div>
    </section>
  )
}


