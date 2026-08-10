import { useTranslation } from 'react-i18next'
import { Quote, Award, ShieldCheck } from 'lucide-react'

export const BoardOfDirectorsSection = () => {
  const { t } = useTranslation('recruitment')

  const directors = [
    {
      id: 'tai-nguyen',
      name: 'Nguyễn Đức Tài',
      role: t('bod.role1'),
      quote: t('bod.quote1'),
      imageBg: 'from-amber-500 to-yellow-600',
      initials: 'NĐT',
      badge: 'Chủ Tịch HĐQT',
    },
    {
      id: 'chuan-tran',
      name: 'Trần Tùng Chuẩn',
      role: t('bod.role2'),
      quote: t('bod.quote2'),
      imageBg: 'from-red-600 to-rose-700',
      initials: 'TTC',
      badge: 'CEO & HĐQT',
    },
    {
      id: 'hieu-em-doan',
      name: 'Đoàn Văn Hiểu Em',
      role: t('bod.role3'),
      quote: t('bod.quote3'),
      imageBg: 'from-zinc-700 to-zinc-900',
      initials: 'ĐHE',
      badge: 'HĐQT Độc Lập',
    },
  ]

  return (
    <section id="board-of-directors" className="py-16 bg-white border-b border-zinc-200 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-bold text-[#d4222f] uppercase tracking-wider bg-red-50 px-3 py-1 rounded-full border border-red-100">
            {t('bod.kicker')}
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-zinc-900 leading-tight">
            {t('bod.titlePrefix')}
            <span className="text-[#d4222f]">{t('bod.titleHighlight')}</span>
          </h2>
          <p className="text-sm text-zinc-600 leading-relaxed max-w-2xl mx-auto">
            {t('bod.subtitle')}
          </p>
        </div>

        {/* Directors Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {directors.map((member) => (
            <div
              key={member.id}
              className="group bg-white rounded-2xl p-6 border border-zinc-200/80 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 relative overflow-hidden"
            >
              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#ffd400] to-[#d4222f] opacity-0 group-hover:opacity-100 transition-opacity" />

              <div>
                {/* Profile Header */}
                <div className="flex items-center gap-4 mb-5">
                  <div
                    className={`w-14 h-14 rounded-full bg-gradient-to-br ${member.imageBg} text-white font-bold text-lg flex items-center justify-center shadow-md shrink-0 border-2 border-white`}
                  >
                    {member.initials}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-zinc-900 group-hover:text-[#d4222f] transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-xs font-medium text-zinc-500 mt-0.5">{member.role}</p>
                    <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full mt-1 border border-amber-200/60">
                      <ShieldCheck className="w-3 h-3 text-amber-600" />
                      {member.badge}
                    </span>
                  </div>
                </div>

                {/* Quote Box */}
                <div className="relative bg-zinc-50 p-4 rounded-xl border border-zinc-100 mb-4">
                  <Quote className="w-5 h-5 text-zinc-300 absolute top-2 right-2 rotate-180 opacity-60" />
                  <p className="text-xs text-zinc-600 italic leading-relaxed relative z-10">
                    "{member.quote}"
                  </p>
                </div>
              </div>

              {/* Bottom Info Tag */}
              <div className="flex items-center justify-between pt-3 border-t border-zinc-100 text-xs text-zinc-400">
                <span className="flex items-center gap-1 font-medium">
                  <Award className="w-3.5 h-3.5 text-[#ffd400]" /> Tập đoàn MWG
                </span>
                <span className="text-[11px] font-semibold text-zinc-500">Thành viên HĐQT</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
