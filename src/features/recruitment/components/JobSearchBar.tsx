import { useState } from 'react'
import { Briefcase, MapPin, Search } from 'lucide-react'
import { useTranslation } from 'react-i18next'

export const JobSearchBar = () => {
  const { t } = useTranslation('recruitment')
  const [industry, setIndustry] = useState('')
  const [location, setLocation] = useState('')
  const [keyword, setKeyword] = useState('')

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Search:', { industry, location, keyword })
  }

  return (
    <form
      onSubmit={handleSearch}
      className="bg-white rounded-xl shadow-xl p-3 sm:p-4 grid grid-cols-1 md:grid-cols-12 gap-3 border border-slate-100 max-w-5xl mx-auto text-slate-700"
    >
      {/* Field 1: Industry */}
      <div className="md:col-span-3 flex items-center gap-3 px-3 py-2 bg-slate-50 md:bg-white rounded-lg border border-slate-200 md:border-r md:border-y-0 md:border-l-0 md:border-slate-200">
        <Briefcase className="w-5 h-5 text-slate-400 shrink-0" />
        <select
          value={industry}
          onChange={(e) => setIndustry(e.target.value)}
          className="w-full bg-transparent text-sm text-slate-800 font-medium focus:outline-none cursor-pointer"
        >
          <option value="">{t('search.industry')}</option>
          <option value="ban-hang">{t('search.industries.sales')}</option>
          <option value="kho-trung-tam">{t('search.industries.warehouse')}</option>
          <option value="it-phan-mem">{t('search.industries.it')}</option>
          <option value="hanh-chinh-hr">{t('search.industries.hr')}</option>
          <option value="marketing">{t('search.industries.marketing')}</option>
          <option value="ky-thuat">{t('search.industries.technical')}</option>
        </select>
      </div>

      {/* Field 2: Location */}
      <div className="md:col-span-3 flex items-center gap-3 px-3 py-2 bg-slate-50 md:bg-white rounded-lg border border-slate-200 md:border-r md:border-y-0 md:border-l-0 md:border-slate-200">
        <MapPin className="w-5 h-5 text-slate-400 shrink-0" />
        <select
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full bg-transparent text-sm text-slate-800 font-medium focus:outline-none cursor-pointer"
        >
          <option value="">{t('search.location')}</option>
          <option value="hcm">{t('search.locations.hcm')}</option>
          <option value="hanoi">{t('search.locations.hanoi')}</option>
          <option value="danang">{t('search.locations.danang')}</option>
          <option value="cantho">{t('search.locations.cantho')}</option>
          <option value="binhduong">{t('search.locations.binhduong')}</option>
          <option value="dongnai">{t('search.locations.dongnai')}</option>
          <option value="haiphong">{t('search.locations.haiphong')}</option>
        </select>
      </div>

      {/* Field 3: Position Keyword */}
      <div className="md:col-span-4 flex items-center gap-3 px-3 py-2 bg-slate-50 md:bg-white rounded-lg border border-slate-200">
        <Search className="w-5 h-5 text-slate-400 shrink-0" />
        <input
          type="text"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          placeholder={t('search.positionPlaceholder')}
          className="w-full bg-transparent text-sm text-slate-800 font-medium focus:outline-none placeholder:text-slate-400"
        />
      </div>

      {/* Button: Submit */}
      <div className="md:col-span-2">
        <button
          type="submit"
          className="w-full h-full min-h-[44px] bg-[#d70018] hover:bg-[#b80015] text-white font-bold text-sm rounded-lg shadow-sm transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer active:scale-[0.98]"
        >
          <span>{t('search.searchBtn')}</span>
        </button>
      </div>
    </form>
  )
}

