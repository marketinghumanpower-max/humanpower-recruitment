import { Flame, Heart, Lightbulb, ShieldCheck, UserCheck, Users } from 'lucide-react'
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

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: 'easeOut' },
  },
}

export const CoreValuesSection = () => {
  const { t } = useTranslation('recruitment')

  const coreValues = [
    {
      icon: Heart,
      title: t('coreValues.item1.title'),
      description: t('coreValues.item1.desc'),
    },
    {
      icon: ShieldCheck,
      title: t('coreValues.item2.title'),
      description: t('coreValues.item2.desc'),
    },
    {
      icon: UserCheck,
      title: t('coreValues.item3.title'),
      description: t('coreValues.item3.desc'),
    },
    {
      icon: Users,
      title: t('coreValues.item4.title'),
      description: t('coreValues.item4.desc'),
    },
    {
      icon: Flame,
      title: t('coreValues.item5.title'),
      description: t('coreValues.item5.desc'),
    },
    {
      icon: Lightbulb,
      title: t('coreValues.item6.title'),
      description: t('coreValues.item6.desc'),
    },
  ]

  return (
    <section id="life-mwg" className="py-14 bg-white scroll-mt-16 overflow-hidden">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.05 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 transform-gpu"
      >
        <h2 className="text-xl sm:text-2xl font-bold text-center text-slate-900">
          {t('coreValues.titlePrefix')}
          <span className="text-[#d70018]">{t('coreValues.titleHighlight')}</span>
          {t('coreValues.titleSuffix')}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coreValues.map((item, idx) => {
            const Icon = item.icon
            return (
              <motion.div
                key={idx}
                variants={cardVariants}
                whileHover={{ y: -4, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                className="p-6 rounded-2xl bg-white border border-slate-100 shadow-xs hover:shadow-lg transition-shadow duration-300 space-y-3 group cursor-pointer"
              >
                <div className="w-10 h-10 rounded-full bg-red-50 text-[#d70018] flex items-center justify-center group-hover:bg-[#d70018] group-hover:text-white transition-colors duration-300">
                  <Icon className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                </div>
                <h3 className="text-base font-bold text-slate-900 group-hover:text-[#d70018] transition-colors">{item.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{item.description}</p>
              </motion.div>
            )
          })}
        </div>
      </motion.div>
    </section>
  )
}


