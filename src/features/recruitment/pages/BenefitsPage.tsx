import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Home,
  ChevronRight,
  DollarSign,
  BadgePercent,
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
        {/* Background Image Banner with Dark Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=1920&q=80"
            alt="MWG Team Building & Benefits Banner"
            className="w-full h-full object-cover object-center opacity-40 filter brightness-75 contrast-110"
          />
          {/* Subtle gradient overlay to match dark aesthetic */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/75 to-black/85"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] via-transparent to-black/50"></div>
        </div>

        {/* Hero Section Content */}
        <div className="max-w-7xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Big Title */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-yellow-500/10 border border-[#ffd400]/30 text-[#ffd400] text-xs font-bold uppercase tracking-wider backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-[#ffd400]" />
              <span>{t('benefitsPage.badgeText', 'Chính sách đãi ngộ MWG')}</span>
            </div>

            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
                {t('benefitsPage.heroTitlePrefix', 'Chế độ')}
              </h1>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#ffd400] leading-tight">
                {t('benefitsPage.heroTitleHighlight', 'Phúc Lợi')}
              </h1>
            </div>

            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed max-w-md font-normal">
              {t(
                'benefitsPage.heroSubtitle',
                'Tại Tập đoàn MWG, chúng tôi cam kết mang lại môi trường làm việc hạnh phúc, an tâm cống hiến với chính sách phúc lợi toàn diện và đãi ngộ vượt trội cho mọi thành viên.',
              )}
            </p>

            <div className="pt-2 flex items-center gap-4">
              <Link
                to="/jobs"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#ffd400] text-black font-extrabold text-sm hover:bg-yellow-400 transition-all duration-200 shadow-lg shadow-yellow-500/20 hover:scale-[1.02]"
              >
                <span>{t('benefitsPage.applyNowBtn', 'Ứng tuyển ngay')}</span>
                <ChevronRight className="w-4 h-4 stroke-[2.5]" />
              </Link>
            </div>
          </div>

          {/* Right Column: 3 Grid Welfare Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
            {BENEFIT_CARDS.map((card) => {
              const IconComp = card.icon
              return (
                <div
                  key={card.id}
                  onClick={() => setSelectedBenefit(card)}
                  className="group relative bg-[#18181d]/85 hover:bg-[#202028]/95 backdrop-blur-md border border-white/10 hover:border-[#ffd400]/50 rounded-2xl p-6 sm:p-8 flex flex-col justify-between items-center text-center cursor-pointer transition-all duration-300 hover:shadow-2xl hover:shadow-yellow-500/10 hover:-translate-y-1.5 min-h-[220px]"
                >
                  {/* Subtle Top Accent Indicator */}
                  <div className="w-12 h-1 bg-gradient-to-r from-transparent via-[#ffd400]/40 to-transparent rounded-full mb-4 group-hover:via-[#ffd400] transition-colors"></div>

                  {/* Icon */}
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 group-hover:bg-[#ffd400] group-hover:border-[#ffd400] flex items-center justify-center text-white group-hover:text-black transition-all duration-300 shadow-inner mb-4 group-hover:scale-110">
                    <IconComp className="w-7 h-7 stroke-[2.2]" />
                  </div>

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
                    <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Welfare Feature Overview Highlights Section */}
      <section className="bg-[#121216] border-t border-zinc-800/80 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#1a1a22] border border-zinc-800 p-6 rounded-2xl flex items-start gap-4">
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
          </div>

          <div className="bg-[#1a1a22] border border-zinc-800 p-6 rounded-2xl flex items-start gap-4">
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
          </div>

          <div className="bg-[#1a1a22] border border-zinc-800 p-6 rounded-2xl flex items-start gap-4">
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
          </div>
        </div>
      </section>

      {/* Benefit Detail Modal */}
      {selectedBenefit && (
        <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#18181f] rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl border border-zinc-700 animate-in fade-in zoom-in-95 duration-200 text-white">
            {/* Modal Header */}
            <div className="relative p-6 bg-gradient-to-r from-zinc-900 to-[#22222c] border-b border-zinc-800 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#ffd400] text-black flex items-center justify-center font-bold">
                  <selectedBenefit.icon className="w-5 h-5" />
                </div>
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
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-zinc-300 leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-[#ffd400] shrink-0 mt-0.5" />
                    <span>{t(key)}</span>
                  </div>
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
          </div>
        </div>
      )}
    </div>
  )
}
