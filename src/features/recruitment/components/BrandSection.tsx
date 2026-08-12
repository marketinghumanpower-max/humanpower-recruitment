import { useTranslation } from 'react-i18next'
import { motion, type Variants } from 'framer-motion'

const BRANDS = [
  { id: 'tgdd', name: 'TGĐĐ', label: 'Thế Giới Di Động', bg: 'bg-[#ffd400]', textColor: 'text-black' },
  { id: 'dmx', name: 'ĐIỆN MÁY XANH', label: 'Điện Máy Xanh', bg: 'bg-[#0088d6]', textColor: 'text-white' },
  { id: 'bhx', name: 'BÁCH HÓA XANH', label: 'Bách Hóa Xanh', bg: 'bg-[#008848]', textColor: 'text-white' },
  { id: 'ankhang', name: 'AN KHANG', label: 'Nhà Thuốc An Khang', bg: 'bg-[#007038]', textColor: 'text-white' },
  { id: 'avakids', name: 'AVAKids', label: 'AVAKids', bg: 'bg-[#e91e63]', textColor: 'text-white' },
  { id: 'topzone', name: 'TopZone', label: 'TopZone Apple Reseller', bg: 'bg-black', textColor: 'text-white' },
  { id: 'tantam', name: 'TẬN TÂM', label: 'Dịch Vụ Tận Tâm', bg: 'bg-[#ff6f00]', textColor: 'text-white' },
  { id: 'erablue', name: 'erablue', label: 'Erablue Electronics', bg: 'bg-[#002f6c]', textColor: 'text-white' },
]

const gridVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.04,
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

export const BrandSection = () => {
  const { t } = useTranslation('recruitment')

  return (
    <section className="py-12 bg-white overflow-hidden">
      <motion.div
        variants={gridVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.05 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 transform-gpu"
      >
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
          {t('brand.titlePrefix')}
          <span className="text-[#d70018]">{t('brand.titleHighlight')}</span>
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
          {BRANDS.map((brand) => (
            <motion.div
              key={brand.id}
              variants={cardVariants}
              whileHover={{ y: -4, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 400, damping: 25 }}
              className="group border border-slate-200 rounded-xl p-4 flex flex-col items-center justify-center gap-2 hover:shadow-lg hover:border-slate-300 transition-shadow duration-200 cursor-pointer bg-white"
            >
              <div
                className={`w-full h-12 rounded-lg ${brand.bg} ${brand.textColor} flex items-center justify-center font-extrabold text-xs tracking-tight shadow-xs group-hover:scale-105 transition-transform duration-300`}
              >
                {brand.name}
              </div>
              <span className="text-[11px] font-semibold text-slate-500 group-hover:text-slate-900 transition-colors text-center line-clamp-1">
                {brand.label}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}


