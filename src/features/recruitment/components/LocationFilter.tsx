import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

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

export const LocationFilter = () => {
  const { t } = useTranslation('recruitment')
  const navigate = useNavigate()

  const handleLocationClick = (loc: string) => {
    navigate(`/jobs?province=${encodeURIComponent(loc)}`)
  }

  return (
    <section className="py-8 bg-slate-50 border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
        <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
          {t('locations.allLocations')}
        </h3>

        <div className="flex flex-wrap items-center gap-2">
          {LOCATIONS.map((loc) => (
            <button
              key={loc}
              onClick={() => handleLocationClick(loc)}
              className="px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer border bg-white text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-slate-100/80 active:scale-95"
            >
              {loc}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}

