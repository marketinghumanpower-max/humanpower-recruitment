import { useState } from 'react'
import { Play, Square } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { motion, type Variants } from 'framer-motion'
import heroImg from '@/assets/hero.png'

const listVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: 'easeOut' },
  },
}

export const AboutSection = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const { t } = useTranslation('recruitment')

  const highlights = [
    t('about.point1'),
    t('about.point2'),
    t('about.point3'),
    t('about.point4'),
    t('about.point5'),
  ]

  return (
    <section id="about" className="py-14 bg-slate-50 border-y border-slate-200/80 scroll-mt-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Vision & Strengths */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.05 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="lg:col-span-7 space-y-5 transform-gpu"
          >
            <span className="text-xs font-bold text-[#d70018] uppercase tracking-wider">
              {t('about.kicker')}
            </span>

            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 leading-snug">
              <span className="text-[#d70018]">{t('about.title')}</span>
            </h2>

            <motion.ul
              variants={listVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.05 }}
              className="space-y-3.5 pt-2"
            >
              {highlights.map((point, index) => (
                <motion.li key={index} variants={itemVariants} className="flex items-start gap-3">
                  <Square className="w-2.5 h-2.5 text-[#d70018] fill-[#d70018] mt-1.5 shrink-0" />
                  <span className="text-sm font-medium text-slate-700 leading-relaxed">
                    {point}
                  </span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Right Column: Video Showcase Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.05 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="lg:col-span-5 transform-gpu"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-200 bg-slate-900 group aspect-video">
              {!isPlaying ? (
                <>
                  <img
                    src={heroImg}
                    alt="MWG Video Preview"
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-90 group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <motion.button
                      whileHover={{ scale: 1.15 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setIsPlaying(true)}
                      className="w-16 h-16 rounded-full bg-white/90 text-[#d70018] flex items-center justify-center shadow-2xl hover:bg-white transition-colors cursor-pointer"
                      aria-label="Play video"
                    >
                      <Play className="w-7 h-7 fill-[#d70018] ml-1" />
                    </motion.button>
                  </div>
                </>
              ) : (
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1"
                  title="MWG Introduction"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}


