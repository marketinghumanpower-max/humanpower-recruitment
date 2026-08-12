import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

interface AppFooterProps {
  companyName?: string
}

const BRANDS = [
  { name: 'thegioididong.com', bg: 'bg-[#ffd400]', text: 'text-black font-bold' },
  { name: 'ĐIỆN MÁY XANH', bg: 'bg-[#0088d6]', text: 'text-white font-bold' },
  { name: 'BÁCH HÓA XANH', bg: 'bg-[#008848]', text: 'text-white font-bold' },
  { name: 'NHÀ THUỐC AN KHANG', bg: 'bg-[#007038]', text: 'text-white font-semibold' },
  { name: 'AVAKids', bg: 'bg-[#e91e63]', text: 'text-white font-bold' },
  { name: 'TopZone', bg: 'bg-black border border-zinc-700', text: 'text-white font-bold' },
  { name: 'Tận Tâm', bg: 'bg-[#ff6f00]', text: 'text-white font-bold' },
  { name: 'erablue', bg: 'bg-[#002f6c]', text: 'text-white font-bold' },
]

export const AppFooter = ({ companyName = 'MWG' }: AppFooterProps) => {
  const { t } = useTranslation('recruitment')

  return (
    <footer className="bg-[#111111] text-zinc-400 text-xs border-t border-zinc-800 pt-10 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Main Grid Info */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Details */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-600"></span>
              <h3 className="text-sm font-bold text-white uppercase tracking-wide">
                {t('footer.companyName')}
              </h3>
            </div>
            <p className="text-zinc-400 leading-relaxed">
              <strong className="text-zinc-300">{t('footer.headquarters')}</strong>
              <br />
              {t('footer.address')}
            </p>
            <div className="space-y-1 text-zinc-400 pt-1">
              <p>
                <Link to="#map" className="text-red-500 hover:underline">
                  {t('footer.viewMap')}
                </Link>
              </p>
              <p>Fax: (028) 38 125 961</p>
              <p>
                Email:{' '}
                <a href="mailto:tuyendung@thegioididong.com" className="text-zinc-200 hover:underline">
                  tuyendung@thegioididong.com
                </a>
              </p>
            </div>
          </div>

          {/* Column 2: VỀ CÔNG TY */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">{t('footer.aboutTitle')}</h4>
            <ul className="space-y-2 text-zinc-400">
              <li>
                <Link to="/gioi-thieu" className="hover:text-white transition-colors">
                  {t('footer.aboutIntro')}
                </Link>
              </li>
              <li>
                <Link to="#benefits" className="hover:text-white transition-colors">
                  {t('footer.aboutBenefits')}
                </Link>
              </li>
              <li>
                <Link to="#life" className="hover:text-white transition-colors">
                  {t('footer.aboutLife')}
                </Link>
              </li>
              <li>
                <Link to="#terms" className="hover:text-white transition-colors">
                  {t('footer.aboutTerms')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: HỖ TRỢ */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">{t('footer.supportTitle')}</h4>
            <ul className="space-y-2 text-zinc-400">
              <li>
                <Link to="#newbies" className="hover:text-white transition-colors">
                  {t('footer.supportNewbies')}
                </Link>
              </li>
              <li>
                <Link to="#process" className="hover:text-white transition-colors">
                  {t('footer.supportProcess')}
                </Link>
              </li>
              <li>
                <Link to="#faq" className="hover:text-white transition-colors">
                  {t('footer.supportFaq')}
                </Link>
              </li>
              <li>
                <Link to="#results" className="hover:text-white transition-colors">
                  {t('footer.supportResults')}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Brand Badges Bar */}
        <div className="pt-6 border-t border-zinc-800/80">
          <div className="flex flex-wrap items-center justify-center gap-2">
            {BRANDS.map((brand) => (
              <span
                key={brand.name}
                className={`px-3 py-1.5 rounded text-[11px] tracking-tight cursor-default select-none ${brand.bg} ${brand.text}`}
              >
                {brand.name}
              </span>
            ))}
          </div>
        </div>

        {/* Social Media Links & Copyright */}
        <div className="pt-4 border-t border-zinc-800/50 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-zinc-500">
          <div className="flex items-center gap-2">
            <span>{t('footer.followUs')}</span>
            <div className="flex items-center gap-2 text-xs font-bold text-zinc-300">
              <span className="hover:text-white cursor-pointer transition-colors">FB</span>
              <span>•</span>
              <span className="hover:text-white cursor-pointer transition-colors">YT</span>
              <span>•</span>
              <span className="hover:text-white cursor-pointer transition-colors">ZL</span>
              <span>•</span>
              <span className="hover:text-white cursor-pointer transition-colors">IG</span>
            </div>
          </div>
          <p>© Copyright {new Date().getFullYear()} by {companyName}. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}


