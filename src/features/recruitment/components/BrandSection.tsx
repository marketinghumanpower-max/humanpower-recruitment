import { useTranslation } from 'react-i18next'

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

export const BrandSection = () => {
  const { t } = useTranslation('recruitment')

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
          {t('brand.titlePrefix')}
          <span className="text-[#d70018]">{t('brand.titleHighlight')}</span>
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
          {BRANDS.map((brand) => (
            <div
              key={brand.id}
              className="group border border-slate-200 rounded-xl p-4 flex flex-col items-center justify-center gap-2 hover:shadow-md hover:border-slate-300 transition-all duration-200 cursor-pointer bg-white"
            >
              <div
                className={`w-full h-12 rounded-lg ${brand.bg} ${brand.textColor} flex items-center justify-center font-extrabold text-xs tracking-tight shadow-xs group-hover:scale-105 transition-transform`}
              >
                {brand.name}
              </div>
              <span className="text-[11px] font-semibold text-slate-500 group-hover:text-slate-900 transition-colors text-center line-clamp-1">
                {brand.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

