import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { motion, type Variants } from 'framer-motion'

const LOCATIONS = [
  'Thành phố Hồ Chí Minh',
  'Thành phố Hà Nội',
  'Thành phố Đà Nẵng',
  'Thành phố Cần Thơ',
  'Tỉnh Bình Dương',
  'Tỉnh Đồng Nai',
  'Thành phố Hải Phòng',
  'Tỉnh Khánh Hoà',
  'Tỉnh Bắc Ninh',
  'Tỉnh Thanh Hoá',
  'Tỉnh Nghệ An',
  'Tỉnh Lâm Đồng',
]

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.04,
      delayChildren: 0.1,
    },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 15, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.35, ease: 'easeOut' },
  },
}

export const LocationFilter = () => {
  const { t } = useTranslation('recruitment')
  const navigate = useNavigate()

  const handleLocationClick = (loc: string) => {
    navigate(`/jobs?province=${encodeURIComponent(loc)}`)
  }

  return (
    <section className="py-8 bg-slate-50 border-b border-slate-200/60 overflow-hidden">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.05 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3 transform-gpu"
      >
        <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
          {t('locations.allLocations')}
        </h3>

        <div className="flex flex-wrap items-center gap-2">
          {LOCATIONS.map((loc) => (
            <motion.button
              key={loc}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleLocationClick(loc)}
              className="px-3.5 py-1.5 rounded-full text-xs font-medium transition-colors duration-200 cursor-pointer border bg-white text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-slate-100/80 active:scale-95 shadow-2xs"
            >
              {loc}
            </motion.button>
          ))}
        </div>
      </motion.div>
    </section>
  )
}


