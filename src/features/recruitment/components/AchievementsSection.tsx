import { ArrowRight, Trophy } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { motion, type Variants } from 'framer-motion'

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.05,
    },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: 'easeOut' },
  },
}

export const AchievementsSection = () => {
  const { t } = useTranslation('recruitment')

  const achievements = [
    {
      title: t('achievements.item1.title'),
      subtitle: t('achievements.item1.sub'),
    },
    {
      title: t('achievements.item2.title'),
      subtitle: t('achievements.item2.sub'),
    },
    {
      title: t('achievements.item3.title'),
      subtitle: t('achievements.item3.sub'),
    },
    {
      title: t('achievements.item4.title'),
      subtitle: t('achievements.item4.sub'),
    },
    {
      title: t('achievements.item5.title'),
      subtitle: t('achievements.item5.sub'),
    },
  ]

  return (
    <section className="py-14 bg-slate-50 border-t border-slate-200/60 overflow-hidden">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.05 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 transform-gpu"
      >
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
          {t('achievements.titlePrefix')}
          <span className="text-[#d70018]">{t('achievements.titleHighlight')}</span>
        </h2>

        <div className="bg-white rounded-2xl border border-slate-200 divide-y divide-slate-100 shadow-xs overflow-hidden">
          {achievements.map((item, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ backgroundColor: 'rgba(248, 250, 252, 0.9)', x: 4 }}
              transition={{ duration: 0.2 }}
              className="p-5 flex items-center justify-between transition-colors group cursor-pointer"
            >
              <div className="flex items-center gap-4">
                <div className="w-9 h-9 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center shrink-0 group-hover:bg-amber-100 group-hover:scale-110 transition-all duration-300">
                  <Trophy className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900 group-hover:text-[#d70018] transition-colors">{item.title}</h3>
                  <p className="text-xs text-slate-500 mt-0.5">{item.subtitle}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Link */}
        <div className="flex justify-end pt-2">
          <a
            href="#achievements"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#d70018] hover:underline group"
          >
            <span>{t('achievements.viewMore')}</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </motion.div>
    </section>
  )
}


