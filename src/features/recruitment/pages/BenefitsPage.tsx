import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Home,
  ChevronRight,
  DollarSign,
  Users,
  HeartPulse,
  X,
  CheckCircle2,
  ExternalLink,
  Sparkles,
  ShieldCheck,
  Gift,
  Smile,
} from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { motion, AnimatePresence, type Variants } from 'framer-motion'

interface BenefitCard {
  id: 'basic' | 'engagement' | 'healthcare'
  icon: typeof DollarSign
  titleKey: string
  descKey: string
  detailTitleKey: string
  highlightKeys: string[]
}

const BENEFIT_CARDS: BenefitCard[] = [
  {
    id: 'basic',
    icon: DollarSign,
    titleKey: 'benefitsPage.basicBenefitsTitle',
    descKey: 'benefitsPage.basicBenefitsDesc',
    detailTitleKey: 'benefitsPage.basicDetailTitle',
    highlightKeys: [
      'benefitsPage.basicHighlight1',
      'benefitsPage.basicHighlight2',
      'benefitsPage.basicHighlight3',
      'benefitsPage.basicHighlight4',
      'benefitsPage.basicHighlight5',
    ],
  },
  {
    id: 'engagement',
    icon: Users,
    titleKey: 'benefitsPage.engagementProgramsTitle',
    descKey: 'benefitsPage.engagementProgramsDesc',
    detailTitleKey: 'benefitsPage.engagementDetailTitle',
    highlightKeys: [
      'benefitsPage.engagementHighlight1',
      'benefitsPage.engagementHighlight2',
      'benefitsPage.engagementHighlight3',
      'benefitsPage.engagementHighlight4',
      'benefitsPage.engagementHighlight5',
    ],
  },
  {
    id: 'healthcare',
    icon: HeartPulse,
    titleKey: 'benefitsPage.healthcareTitle',
    descKey: 'benefitsPage.healthcareDesc',
    detailTitleKey: 'benefitsPage.healthcareDetailTitle',
    highlightKeys: [
      'benefitsPage.healthcareHighlight1',
      'benefitsPage.healthcareHighlight2',
      'benefitsPage.healthcareHighlight3',
      'benefitsPage.healthcareHighlight4',
      'benefitsPage.healthcareHighlight5',
    ],
  },
]

// Animation Variants
const heroContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.05,
    },
  },
}

const fadeInSlideUpVariants: Variants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
}

const cardsGridVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
}

const cardItemVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
}

const featuresContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
}

const featureItemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: 'easeOut' },
  },
}

const backdropVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.25 } },
  exit: { opacity: 0, transition: { duration: 0.2 } },
}

const modalVariants: Variants = {
  hidden: { opacity: 0, scale: 0.92, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 350, damping: 25 },
  },
  exit: {
    opacity: 0,
    scale: 0.94,
    y: 15,
    transition: { duration: 0.18, ease: 'easeIn' },
  },
}

export const BenefitsPage = () => {
  const { t } = useTranslation('recruitment')
  const [selectedBenefit, setSelectedBenefit] = useState<BenefitCard | null>(null)

  return (
    <div className="w-full bg-[#0a0a0c] text-white min-h-screen">
      {/* Breadcrumb Navigation Bar */}
      <div className="bg-[#121215] border-b border-zinc-800/80 py-3.5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs font-medium text-zinc-400">
          <Link
            to="/"
            className="flex items-center gap-1.5 hover:text-white transition-colors"
          >
            <Home className="w-3.5 h-3.5 text-zinc-400" />
            <span>{t('benefitsPage.breadcrumbHome', 'Trang chủ')}</span>
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-zinc-600" />
          <span className="text-zinc-400">
            {t('benefitsPage.breadcrumbLife', 'Life at MWG')}
          </span>
          <ChevronRight className="w-3.5 h-3.5 text-zinc-600" />
          <span className="text-[#ffd400] font-semibold">
            {t('benefitsPage.breadcrumbCurrent', 'Phúc Lợi')}
          </span>
        </div>
      </div>

      {/* Main Hero & Welfare Grid Container */}
      <div className="relative min-h-[calc(100vh-120px)] flex items-center py-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Image Banner with Dark Overlay & Floating Ambient Glow */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=1920&q=80"
            alt="MWG Team Building & Benefits Banner"
            className="w-full h-full object-cover object-center opacity-40 filter brightness-75 contrast-110"
          />
          {/* Animated Background Glowing Orbs */}
          <motion.div
            animate={{
              opacity: [0.15, 0.3, 0.15],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute -top-32 -left-32 w-96 h-96 bg-[#ffd400]/20 rounded-full blur-3xl pointer-events-none"
          />
          <motion.div
            animate={{
              opacity: [0.1, 0.25, 0.1],
              scale: [1, 1.15, 1],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 2,
            }}
            className="absolute -bottom-32 -right-32 w-96 h-96 bg-amber-600/20 rounded-full blur-3xl pointer-events-none"
          />

          {/* Subtle gradient overlay to match dark aesthetic */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/75 to-black/85"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] via-transparent to-black/50"></div>
        </div>

        {/* Hero Section Content */}
        <div className="max-w-7xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Big Title & Intro */}
          <motion.div
            variants={heroContainerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-5 space-y-6"
          >
            <motion.div
              variants={fadeInSlideUpVariants}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-yellow-500/10 border border-[#ffd400]/30 text-[#ffd400] text-xs font-bold uppercase tracking-wider backdrop-blur-md shadow-sm"
            >
              <motion.div
                animate={{ rotate: [0, 15, -15, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              >
                <Sparkles className="w-3.5 h-3.5 text-[#ffd400]" />
              </motion.div>
              <span>{t('benefitsPage.badgeText', 'Chính sách đãi ngộ MWG')}</span>
            </motion.div>

            <motion.div variants={fadeInSlideUpVariants} className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
                {t('benefitsPage.heroTitlePrefix', 'Chế độ')}
              </h1>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#ffd400] leading-tight">
                {t('benefitsPage.heroTitleHighlight', 'Phúc Lợi')}
              </h1>
            </motion.div>

            <motion.p
              variants={fadeInSlideUpVariants}
              className="text-sm sm:text-base text-zinc-300 leading-relaxed max-w-md font-normal"
            >
              {t(
                'benefitsPage.heroSubtitle',
                'Tại Tập đoàn MWG, chúng tôi cam kết mang lại môi trường làm việc hạnh phúc, an tâm cống hiến với chính sách phúc lợi toàn diện và đãi ngộ vượt trội cho mọi thành viên.',
              )}
            </motion.p>

            <motion.div variants={fadeInSlideUpVariants} className="pt-2 flex items-center gap-4">
              <motion.div
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: 'spring', stiffness: 400, damping: 20 }}
              >
                <Link
                  to="/jobs"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#ffd400] text-black font-extrabold text-sm hover:bg-yellow-400 transition-all duration-200 shadow-lg shadow-yellow-500/20"
                >
                  <span>{t('benefitsPage.applyNowBtn', 'Ứng tuyển ngay')}</span>
                  <ChevronRight className="w-4 h-4 stroke-[2.5]" />
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Column: 3 Grid Welfare Cards */}
          <motion.div
            variants={cardsGridVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5"
          >
            {BENEFIT_CARDS.map((card) => {
              const IconComp = card.icon
              return (
                <motion.div
                  key={card.id}
                  variants={cardItemVariants}
                  whileHover={{ y: -8, scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: 'spring', stiffness: 350, damping: 22 }}
                  onClick={() => setSelectedBenefit(card)}
                  className="group relative bg-[#18181d]/85 hover:bg-[#202028]/95 backdrop-blur-md border border-white/10 hover:border-[#ffd400]/50 rounded-2xl p-6 sm:p-8 flex flex-col justify-between items-center text-center cursor-pointer transition-colors duration-300 hover:shadow-2xl hover:shadow-yellow-500/10 min-h-[220px]"
                >
                  {/* Subtle Top Accent Indicator */}
                  <div className="w-12 h-1 bg-gradient-to-r from-transparent via-[#ffd400]/40 to-transparent rounded-full mb-4 group-hover:via-[#ffd400] transition-colors"></div>

                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 4 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 18 }}
                    className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 group-hover:bg-[#ffd400] group-hover:border-[#ffd400] flex items-center justify-center text-white group-hover:text-black transition-all duration-300 shadow-inner mb-4"
                  >
                    <IconComp className="w-7 h-7 stroke-[2.2]" />
                  </motion.div>

                  {/* Title & Action Prompt */}
                  <div className="space-y-2">
                    <h2 className="text-lg sm:text-xl font-extrabold text-white group-hover:text-[#ffd400] transition-colors">
                      {t(card.titleKey)}
                    </h2>
                    <p className="text-xs text-zinc-400 line-clamp-2 leading-relaxed px-2 font-medium">
                      {t(card.descKey)}
                    </p>
                  </div>

                  {/* Hover detail indicator */}
                  <div className="mt-4 inline-flex items-center gap-1 text-[11px] font-bold text-zinc-400 group-hover:text-[#ffd400] transition-colors">
                    <span>{t('benefitsPage.viewDetails', 'Xem chi tiết')}</span>
                    <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200" />
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>

      {/* Welfare Feature Overview Highlights Section */}
      <section className="bg-[#121216] border-t border-zinc-800/80 py-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <motion.div
          variants={featuresContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <motion.div
            variants={featureItemVariants}
            whileHover={{ y: -4, scale: 1.01 }}
            transition={{ type: 'spring', stiffness: 350, damping: 25 }}
            className="bg-[#1a1a22] border border-zinc-800 p-6 rounded-2xl flex items-start gap-4 hover:border-amber-500/40 transition-colors duration-300"
          >
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-[#ffd400] flex items-center justify-center shrink-0 border border-amber-500/20">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <h3 className="text-sm font-bold text-white">
                {t('benefitsPage.feature1Title', 'Cam kết Đảm bảo')}
              </h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                {t(
                  'benefitsPage.feature1Desc',
                  'Thực hiện đầy đủ 100% chính sách theo quy định Luật Lao động & quyền lợi mở rộng.',
                )}
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={featureItemVariants}
            whileHover={{ y: -4, scale: 1.01 }}
            transition={{ type: 'spring', stiffness: 350, damping: 25 }}
            className="bg-[#1a1a22] border border-zinc-800 p-6 rounded-2xl flex items-start gap-4 hover:border-emerald-500/40 transition-colors duration-300"
          >
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-500/20">
              <Gift className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <h3 className="text-sm font-bold text-white">
                {t('benefitsPage.feature2Title', 'Thưởng nóng & Đãi ngộ')}
              </h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                {t(
                  'benefitsPage.feature2Desc',
                  'Chính sách thưởng hiệu quả vượt trội, ghi nhận đóng góp tích cực của từng cá nhân.',
                )}
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={featureItemVariants}
            whileHover={{ y: -4, scale: 1.01 }}
            transition={{ type: 'spring', stiffness: 350, damping: 25 }}
            className="bg-[#1a1a22] border border-zinc-800 p-6 rounded-2xl flex items-start gap-4 hover:border-rose-500/40 transition-colors duration-300"
          >
            <div className="w-10 h-10 rounded-xl bg-rose-500/10 text-rose-400 flex items-center justify-center shrink-0 border border-rose-500/20">
              <Smile className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <h3 className="text-sm font-bold text-white">
                {t('benefitsPage.feature3Title', 'Môi trường Hạnh phúc')}
              </h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                {t(
                  'benefitsPage.feature3Desc',
                  'Nơi làm việc chan hòa, đồng đội sẻ chia, hướng tới sự gắn kết lâu dài.',
                )}
              </p>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Benefit Detail Modal with AnimatePresence */}
      <AnimatePresence>
        {selectedBenefit && (
          <motion.div
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={() => setSelectedBenefit(null)}
            className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
              className="bg-[#18181f] rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl border border-zinc-700 text-white"
            >
              {/* Modal Header */}
              <div className="relative p-6 bg-gradient-to-r from-zinc-900 to-[#22222c] border-b border-zinc-800 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <motion.div
                    initial={{ rotate: -15, scale: 0.8 }}
                    animate={{ rotate: 0, scale: 1 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                    className="w-10 h-10 rounded-xl bg-[#ffd400] text-black flex items-center justify-center font-bold shadow-md shadow-yellow-500/20"
                  >
                    <selectedBenefit.icon className="w-5 h-5" />
                  </motion.div>
                  <div>
                    <h3 className="text-base font-extrabold text-white">
                      {t(selectedBenefit.titleKey)}
                    </h3>
                    <span className="text-xs text-[#ffd400] font-medium">
                      {t('benefitsPage.modalPolicyTag', 'Chính sách MWG Care')}
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => setSelectedBenefit(null)}
                  className="w-8 h-8 rounded-full bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
                  aria-label="Đóng modal"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Modal Content Body */}
              <div className="p-6 space-y-5">
                <h4 className="text-sm font-bold text-zinc-200">
                  {t(selectedBenefit.detailTitleKey)}
                </h4>

                <div className="space-y-2.5">
                  {selectedBenefit.highlightKeys.map((key, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.06 + 0.1 }}
                      className="flex items-start gap-2.5 text-xs text-zinc-300 leading-relaxed"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#ffd400] shrink-0 mt-0.5" />
                      <span>{t(key)}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="pt-4 border-t border-zinc-800 flex items-center justify-between gap-3">
                  <button
                    onClick={() => setSelectedBenefit(null)}
                    className="px-4 py-2.5 rounded-xl border border-zinc-700 text-xs font-semibold text-zinc-300 hover:bg-zinc-800 transition-colors cursor-pointer"
                  >
                    {t('benefitsPage.modalClose', 'Đóng')}
                  </button>
                  <Link
                    to="/jobs"
                    onClick={() => setSelectedBenefit(null)}
                    className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-[#ffd400] text-black font-extrabold text-xs hover:bg-yellow-400 transition-colors cursor-pointer shadow-md shadow-yellow-500/10"
                  >
                    <span>{t('benefitsPage.modalExploreJobs', 'Khám phá công việc phù hợp')}</span>
                    <ExternalLink className="w-3.5 h-3.5 stroke-[2.5]" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

