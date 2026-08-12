import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Home,
  ChevronRight,
  UserCheck,
  Award,
  Crown,
  CheckCircle2,
  TrendingUp,
  ShieldCheck,
  GraduationCap,
  Sparkles,
  ArrowRight,
  Briefcase,
  Target,
  Medal,
} from 'lucide-react'
import { useTranslation } from 'react-i18next'

interface AdvancementStage {
  id: 'staff' | 'manager' | 'senior'
  titleKey: string
  subtitleKey: string
  flagColor: string
  badgeText: string
  timeline: string
  criteria: string[]
  trainings: string[]
  rewards: string
}

const ADVANCEMENT_STAGES: AdvancementStage[] = [
  {
    id: 'staff',
    titleKey: 'advancementPage.levelStaff',
    subtitleKey: 'advancementPage.levelStaffDesc',
    flagColor: 'bg-amber-400 text-slate-900 border-amber-500',
    badgeText: 'Khởi đầu sự nghiệp',
    timeline: '6 - 12 tháng',
    criteria: [
      'Thái độ phục vụ tận tâm với khách hàng',
      'Nắm vững kiến thức sản phẩm & quy trình làm việc',
      'Đạt và vượt chỉ tiêu KPI hiệu suất cá nhân hàng tháng',
      'Tinh thần ham học hỏi, sẵn sàng hỗ trợ đồng đội',
    ],
    trainings: [
      'Đào tạo hội nhập & văn hóa MWG',
      'Kỹ năng tư vấn bán hàng & chăm sóc khách hàng chuyên nghiệp',
      'Kiến thức chuyên môn theo từng ngành hàng',
    ],
    rewards: 'Mức lương cạnh tranh + Thưởng doanh số hấp dẫn + Thưởng hiệu quả làm việc',
  },
  {
    id: 'manager',
    titleKey: 'advancementPage.levelManager',
    subtitleKey: 'advancementPage.levelManagerDesc',
    flagColor: 'bg-sky-500 text-white border-sky-600',
    badgeText: 'Quản lý Siêu thị / Cửa hàng / Trưởng nhóm',
    timeline: '1 - 3 năm',
    criteria: [
      'Vượt qua kỳ thi Thăng cấp Quản lý công khai của Tập đoàn',
      'Khả năng quản trị doanh thu, chi phí & hàng hóa siêu thị',
      'Kỹ năng truyền cảm hứng, đào tạo và phát triển đội ngũ',
      'Tư duy giải quyết vấn đề và chủ động trong vận hành',
    ],
    trainings: [
      'Chương trình Quản lý Tập sự (Management Trainee MWG)',
      'Kỹ năng quản trị nhân sự & nghệ thuật lãnh đạo đội ngũ',
      'Tư duy phân tích số liệu kinh doanh & lập kế hoạch hành động',
    ],
    rewards: 'Lương Quản lý + Thưởng % Doanh thu siêu thị + Thưởng ESOP / Cổ phiếu ưu đãi',
  },
  {
    id: 'senior',
    titleKey: 'advancementPage.levelSeniorManager',
    subtitleKey: 'advancementPage.levelSeniorManagerDesc',
    flagColor: 'bg-blue-700 text-white border-blue-800',
    badgeText: 'Giám đốc Vùng / Giám đốc Khối / HĐQT',
    timeline: '3 - 5+ năm',
    criteria: [
      'Tầm nhìn chiến lược mở rộng thị phần & phát triển thương hiệu',
      'Quản lý quy mô hàng chục siêu thị hoặc khối phòng ban tập đoàn',
      'Thành tích tăng trưởng doanh thu & tối ưu lợi nhuận đột phá',
      'Định hình văn hóa doanh nghiệp & xây dựng thế hệ lãnh đạo kế thừa',
    ],
    trainings: [
      'Chương trình Lãnh đạo Cấp cao MWG Executive Academy',
      'Quản trị chiến lược kinh doanh toàn cầu & Đổi mới sáng tạo',
      'Quản trị tài chính doanh nghiệp quy mô lớn',
    ],
    rewards: 'Thu nhập Giám đốc vượt trội + Gói cổ phiếu thưởng ESOP hàng năm + Đặc quyền Lãnh đạo',
  },
]

export const AdvancementPage = () => {
  const { t } = useTranslation('recruitment')
  const [activeStageId, setActiveStageId] = useState<'staff' | 'manager' | 'senior'>('manager')

  const currentStage = ADVANCEMENT_STAGES.find((s) => s.id === activeStageId) || ADVANCEMENT_STAGES[1]

  return (
    <div className="w-full bg-[#f8fafc] text-slate-800 min-h-screen">
      {/* Top Breadcrumb Navigation Bar */}
      <div className="bg-white border-b border-slate-200 py-3.5 px-4 sm:px-6 lg:px-8 shadow-xs">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs font-medium text-slate-500">
          <Link to="/" className="flex items-center gap-1.5 hover:text-slate-900 transition-colors">
            <Home className="w-3.5 h-3.5 text-slate-500" />
            <span>{t('advancementPage.breadcrumbHome', 'Trang chủ')}</span>
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-slate-500">{t('advancementPage.breadcrumbLife', 'Life at MWG')}</span>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-[#d4222f] font-semibold">{t('advancementPage.breadcrumbCurrent', 'Thăng tiến')}</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-12">
        {/* Main Infographic Banner Section matching Screenshot */}
        <div className="bg-white rounded-2xl border border-slate-200/90 shadow-xl overflow-hidden relative">
          {/* Top Banner Graphics Container */}
          <div className="relative w-full bg-gradient-to-b from-amber-50/60 via-yellow-50/30 to-white p-6 sm:p-10 lg:p-12">
            {/* Header branding on top left of graphic */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 sm:mb-8 border-b border-slate-100 pb-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-[#ffd400] flex items-center justify-center text-black font-black text-xl shadow-md border-2 border-black/10">
                  <div className="w-6 h-6 rounded-full border-2 border-black flex items-center justify-center text-xs">
                    🏃
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-extrabold text-lg sm:text-xl text-slate-900 tracking-tight">MWG</span>
                    <span className="bg-amber-100 text-amber-900 text-[11px] font-bold px-2.5 py-0.5 rounded-full border border-amber-200">
                      Career Pathway
                    </span>
                  </div>
                  <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mt-0.5">
                    {t('advancementPage.title', 'Phát triển nhân tài')}
                  </h1>
                </div>
              </div>

              <div className="hidden md:flex items-center gap-2 bg-white/80 backdrop-blur-md px-4 py-2 rounded-xl border border-slate-200 text-xs font-semibold text-slate-700 shadow-xs">
                <Sparkles className="w-4 h-4 text-amber-500" />
                <span>100% Thăng tiến từ Nội bộ</span>
              </div>
            </div>

            {/* Winding Yellow Roadmap Visual (Recreating exact artwork in screenshot) */}
            <div className="relative w-full min-h-[320px] sm:min-h-[420px] bg-gradient-to-tr from-yellow-100/40 via-amber-50/80 to-sky-50/60 rounded-2xl border border-yellow-200/80 p-4 sm:p-8 flex flex-col justify-between overflow-hidden shadow-inner">
              {/* Background clouds & decorative shapes */}
              <div className="absolute top-4 right-10 opacity-30 text-sky-400">
                <svg className="w-24 h-16" viewBox="0 0 100 60" fill="currentColor">
                  <path d="M10 40 Q25 20 40 30 Q55 10 75 25 Q90 20 95 40 Z" />
                </svg>
              </div>

              {/* Interactive S-Curved Yellow Path Illustration */}
              <div className="relative w-full h-[280px] sm:h-[360px]">
                <svg
                  className="w-full h-full drop-shadow-md"
                  viewBox="0 0 900 360"
                  preserveAspectRatio="none"
                  fill="none"
                >
                  {/* Yellow Road Body */}
                  <path
                    d="M 50 320 C 250 320, 280 200, 480 180 C 680 160, 680 60, 850 50 L 870 90 C 700 100, 640 210, 480 230 C 280 250, 220 360, 50 360 Z"
                    fill="#ffd400"
                    stroke="#f59e0b"
                    strokeWidth="3"
                  />
                  {/* Dashed Center Road Line */}
                  <path
                    d="M 50 340 C 250 340, 270 215, 480 205 C 690 195, 670 75, 860 70"
                    stroke="#ffffff"
                    strokeWidth="4"
                    strokeDasharray="12 12"
                    strokeLinecap="round"
                  />
                </svg>

                {/* Milestone 1: Running Person & "Nhân viên" Label (Bottom Left) */}
                <div
                  onClick={() => setActiveStageId('staff')}
                  className={`absolute left-[4%] sm:left-[8%] bottom-[5%] sm:bottom-[10%] flex flex-col items-center cursor-pointer transition-transform duration-300 hover:scale-105 group ${
                    activeStageId === 'staff' ? 'scale-110 z-20' : 'z-10 opacity-90'
                  }`}
                >
                  {/* Runner Icon Figure */}
                  <div className="relative mb-2">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-slate-900 text-[#ffd400] border-4 border-[#ffd400] flex items-center justify-center shadow-lg group-hover:bg-amber-400 group-hover:text-slate-950 transition-colors">
                      <UserCheck className="w-6 h-6 sm:w-7 sm:h-7 stroke-[2.5]" />
                    </div>
                    <span className="absolute -top-1 -right-1 flex h-4 w-4">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-4 w-4 bg-amber-500"></span>
                    </span>
                  </div>

                  {/* Milestone Banner Tag: "Nhân viên" */}
                  <div
                    className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-xl font-extrabold text-sm sm:text-base tracking-wide shadow-lg border-2 transition-all ${
                      activeStageId === 'staff'
                        ? 'bg-amber-400 text-slate-950 border-amber-500 ring-4 ring-amber-400/30'
                        : 'bg-white text-slate-900 border-amber-300 hover:border-amber-500'
                    }`}
                  >
                    <span>Nhân viên</span>
                  </div>
                </div>

                {/* Milestone 2: Blue Flag & "Quản lý" Label (Middle Curve) */}
                <div
                  onClick={() => setActiveStageId('manager')}
                  className={`absolute left-[46%] sm:left-[50%] top-[38%] sm:top-[35%] transform -translate-x-1/2 flex flex-col items-center cursor-pointer transition-transform duration-300 hover:scale-105 group ${
                    activeStageId === 'manager' ? 'scale-110 z-20' : 'z-10 opacity-90'
                  }`}
                >
                  {/* Flag Pole Visual */}
                  <div className="relative flex flex-col items-center mb-1">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-sky-500 text-white border-2 border-sky-300 flex items-center justify-center shadow-lg group-hover:bg-sky-600 transition-colors">
                      <Award className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.5]" />
                    </div>
                    <div className="w-1 h-6 bg-sky-600 rounded-full mt-1"></div>
                  </div>

                  {/* Milestone Flag Tag: "Quản lý" */}
                  <div
                    className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-xl font-extrabold text-sm sm:text-base tracking-wide shadow-lg border-2 transition-all ${
                      activeStageId === 'manager'
                        ? 'bg-sky-500 text-white border-sky-600 ring-4 ring-sky-500/30'
                        : 'bg-white text-sky-950 border-sky-300 hover:border-sky-500'
                    }`}
                  >
                    <span>Quản lý</span>
                  </div>
                </div>

                {/* Milestone 3: Peak Flag & "Quản lý cấp cao" Label (Top Right) */}
                <div
                  onClick={() => setActiveStageId('senior')}
                  className={`absolute right-[4%] sm:right-[8%] top-[5%] sm:top-[8%] flex flex-col items-center cursor-pointer transition-transform duration-300 hover:scale-105 group ${
                    activeStageId === 'senior' ? 'scale-110 z-20' : 'z-10 opacity-90'
                  }`}
                >
                  {/* Peak Crown Flag */}
                  <div className="relative flex flex-col items-center mb-1">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-blue-700 text-white border-2 border-blue-400 flex items-center justify-center shadow-lg group-hover:bg-blue-800 transition-colors">
                      <Crown className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.5]" />
                    </div>
                    <div className="w-1 h-6 bg-blue-800 rounded-full mt-1"></div>
                  </div>

                  {/* Milestone Flag Tag: "Quản lý cấp cao" */}
                  <div
                    className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-xl font-extrabold text-sm sm:text-base tracking-wide shadow-lg border-2 transition-all ${
                      activeStageId === 'senior'
                        ? 'bg-blue-700 text-white border-blue-800 ring-4 ring-blue-700/30'
                        : 'bg-white text-blue-950 border-blue-300 hover:border-blue-700'
                    }`}
                  >
                    <span>Quản lý cấp cao</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Detail Panel for Selected Stage */}
          <div className="bg-slate-900 text-white p-6 sm:p-8 lg:p-10 border-t border-slate-800">
            <div className="max-w-5xl mx-auto space-y-6">
              {/* Header & Stage Switcher Pills */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-6">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-400/10 border border-amber-400/30 text-amber-400 text-xs font-bold uppercase tracking-wider mb-2">
                    <Target className="w-3.5 h-3.5" />
                    <span>Chi tiết nấc thang sự nghiệp</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-white flex items-center gap-3">
                    <span>{t(currentStage.titleKey)}</span>
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-800 text-amber-300 border border-slate-700">
                      {currentStage.badgeText}
                    </span>
                  </h2>
                  <p className="text-sm text-slate-400 mt-1 max-w-2xl">{t(currentStage.subtitleKey)}</p>
                </div>

                {/* Stage Selector Buttons */}
                <div className="flex items-center gap-2 bg-slate-800/90 p-1.5 rounded-xl border border-slate-700/80 self-start md:self-auto">
                  {ADVANCEMENT_STAGES.map((s) => (
                    <button
                      key={s.id}
                      onClick={() => setActiveStageId(s.id)}
                      className={`px-3.5 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                        activeStageId === s.id
                          ? 'bg-[#ffd400] text-slate-950 shadow-md'
                          : 'text-slate-300 hover:text-white hover:bg-slate-700/60'
                      }`}
                    >
                      {t(s.titleKey)}
                    </button>
                  ))}
                </div>
              </div>

              {/* 3 Columns: Requirements, Training & Compensation */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
                {/* 1. Standard Requirements */}
                <div className="bg-slate-800/60 border border-slate-700/60 rounded-2xl p-5 space-y-3">
                  <div className="flex items-center gap-2.5 text-amber-400 font-extrabold text-sm">
                    <ShieldCheck className="w-5 h-5" />
                    <span>Tiêu chí Đánh giá</span>
                  </div>
                  <ul className="space-y-2 text-xs text-slate-300 leading-relaxed">
                    {currentStage.criteria.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* 2. Training Roadmap */}
                <div className="bg-slate-800/60 border border-slate-700/60 rounded-2xl p-5 space-y-3">
                  <div className="flex items-center gap-2.5 text-sky-400 font-extrabold text-sm">
                    <GraduationCap className="w-5 h-5" />
                    <span>Lộ trình Đào tạo MWG</span>
                  </div>
                  <ul className="space-y-2 text-xs text-slate-300 leading-relaxed">
                    {currentStage.trainings.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <ArrowRight className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* 3. Compensation & Timeline */}
                <div className="bg-slate-800/60 border border-slate-700/60 rounded-2xl p-5 space-y-4 flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2.5 text-emerald-400 font-extrabold text-sm">
                      <Medal className="w-5 h-5" />
                      <span>Thu nhập & Đãi ngộ</span>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed font-medium">
                      {currentStage.rewards}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-700/80 flex items-center justify-between text-xs">
                    <span className="text-slate-400">Thời gian kỳ vọng:</span>
                    <span className="font-extrabold text-amber-400 bg-amber-400/10 px-2.5 py-1 rounded-md border border-amber-400/20">
                      {currentStage.timeline}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Core Pillars of Advancement at MWG */}
        <div className="space-y-8">
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-[#d4222f] bg-red-50 px-3 py-1 rounded-full border border-red-100">
              Văn hóa Thăng tiến
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              {t('advancementPage.pillarsTitle', '4 Trụ cột Thăng tiến tại MWG')}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              MWG trao cơ hội bình đẳng cho mọi thành viên có khát vọng và năng lực bứt phá.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Pillar 1 */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-3 hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center border border-amber-500/20">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-base font-extrabold text-slate-900">
                {t('advancementPage.pillar1Title', 'Minh bạch 100%')}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {t(
                  'advancementPage.pillar1Desc',
                  'Kỳ thi thăng cấp công khai, đánh giá dựa trên năng lực và kết quả thực tế, không phân biệt thâm niên.',
                )}
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-3 hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-sky-500/10 text-sky-600 flex items-center justify-center border border-sky-500/20">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h3 className="text-base font-extrabold text-slate-900">
                {t('advancementPage.pillar2Title', 'Cơ hội rộng mở')}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {t(
                  'advancementPage.pillar2Desc',
                  'Hàng nghìn vị trí Quản lý mới mở ra mỗi năm cùng tốc độ mở rộng liên tục của tập đoàn.',
                )}
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-3 hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center border border-emerald-500/20">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h3 className="text-base font-extrabold text-slate-900">
                {t('advancementPage.pillar3Title', 'Đào tạo thực chiến')}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {t(
                  'advancementPage.pillar3Desc',
                  'Hệ thống MWG Academy đồng hành huấn luyện kỹ năng quản trị, lãnh đạo & tư duy kinh doanh.',
                )}
              </p>
            </div>

            {/* Pillar 4 */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-3 hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-rose-500/10 text-rose-600 flex items-center justify-center border border-rose-500/20">
                <Crown className="w-6 h-6" />
              </div>
              <h3 className="text-base font-extrabold text-slate-900">
                {t('advancementPage.pillar4Title', 'Thu nhập bứt phá')}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {t(
                  'advancementPage.pillar4Desc',
                  'Thu nhập tăng trưởng vượt bậc tương ứng với quy mô trách nhiệm và hiệu quả đóng góp.',
                )}
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action Box */}
        <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 rounded-2xl p-8 sm:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl border border-slate-700 relative overflow-hidden">
          <div className="absolute top-0 right-0 -mt-8 -mr-8 w-48 h-48 bg-[#ffd400]/10 rounded-full blur-2xl pointer-events-none"></div>

          <div className="space-y-2 text-center md:text-left relative z-10 max-w-xl">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              {t('advancementPage.ctaTitle', 'Sẵn sàng chinh phục nấc thang thăng tiến cùng MWG?')}
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Khám phá hàng nghìn cơ hội việc làm hấp dẫn và gia nhập đội ngũ MWG ngay hôm nay!
            </p>
          </div>

          <div className="relative z-10 shrink-0">
            <Link
              to="/jobs"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#ffd400] text-black font-black text-sm hover:bg-yellow-400 transition-all duration-200 shadow-xl shadow-yellow-500/20 hover:scale-105"
            >
              <Briefcase className="w-4 h-4 stroke-[2.5]" />
              <span>{t('advancementPage.ctaBtn', 'Tìm việc & Ứng tuyển ngay')}</span>
              <ChevronRight className="w-4 h-4 stroke-[2.5]" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
