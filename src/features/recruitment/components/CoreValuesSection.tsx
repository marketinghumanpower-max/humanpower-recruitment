import { Flame, Heart, Lightbulb, ShieldCheck, UserCheck, Users } from 'lucide-react'
import { useTranslation } from 'react-i18next'

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
    <section className="py-14 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <h2 className="text-xl sm:text-2xl font-bold text-center text-slate-900">
          {t('coreValues.titlePrefix')}
          <span className="text-[#d70018]">{t('coreValues.titleHighlight')}</span>
          {t('coreValues.titleSuffix')}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coreValues.map((item, idx) => {
            const Icon = item.icon
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-slate-100 shadow-xs hover:shadow-md transition-all duration-200 space-y-3"
              >
                <div className="w-10 h-10 rounded-full bg-red-50 text-[#d70018] flex items-center justify-center">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900">{item.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{item.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

