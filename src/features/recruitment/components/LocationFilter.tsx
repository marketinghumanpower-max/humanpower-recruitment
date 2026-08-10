import { useState } from 'react'
import { useTranslation } from 'react-i18next'

const LOCATIONS = [
  'Hồ Chí Minh',
  'Hà Nội',
  'Đà Nẵng',
  'Cần Thơ',
  'Bình Dương',
  'Đồng Nai',
  'Hải Phòng',
  'Khánh Hòa',
  'Bà Rịa - Vũng Tàu',
  'Bắc Ninh',
  'Thanh Hóa',
  'Nghệ An',
  'Kiên Giang',
  'Lâm Đồng',
  'Tiền Giang',
]

export const LocationFilter = () => {
  const { t } = useTranslation('recruitment')
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null)

  return (
    <section className="py-8 bg-slate-50 border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
        <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
          {t('locations.allLocations')}
        </h3>

        <div className="flex flex-wrap items-center gap-2">
          {LOCATIONS.map((loc) => {
            const isSelected = selectedLocation === loc
            return (
              <button
                key={loc}
                onClick={() => setSelectedLocation(isSelected ? null : loc)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer border ${
                  isSelected
                    ? 'bg-[#d70018] text-white border-[#d70018] shadow-xs'
                    : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-slate-100/80'
                }`}
              >
                {loc}
              </button>
            )
          })}
        </div>
      </div>
    </section>
  )
}

