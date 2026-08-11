import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Search, Menu, X } from 'lucide-react'
import { useTranslation } from 'react-i18next'

export const MwgCorporateHeader = () => {
  const { i18n } = useTranslation()
  const location = useLocation()
  const navigate = useNavigate()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const currentLang = i18n.language || 'vi'

  const toggleLanguage = (lang: string) => {
    i18n.changeLanguage(lang)
  }

  const handleNavClick = (sectionId: string, path: string = '/gioi-thieu') => {
    setMobileMenuOpen(false)
    if (location.pathname === path || (path === '/gioi-thieu' && location.pathname.includes('/gioi-thieu'))) {
      const el = document.getElementById(sectionId)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
    } else {
      navigate(`${path}#${sectionId}`)
    }
  }

  const navItems = [
    { id: 'gioi-thieu-chung', label: 'Về MWG', path: '/gioi-thieu', isHighlight: true },
    { id: 'thong-tin-co-phieu', label: 'Công bố thông tin', path: '/gioi-thieu' },
    { id: 'thong-tin-co-phieu', label: 'Báo cáo', path: '/gioi-thieu' },
    { id: 'ban-lanh-dao', label: 'Quản trị công ty', path: '/hoi-dong-quan-tri' },
    { id: 'hanh-trinh', label: 'Tin tức', path: '/gioi-thieu' },
    { id: 'dau-an-thanh-tuu', label: 'Phát triển bền vững', path: '/gioi-thieu' },
    { id: 'contact-footer', label: 'Hỏi MWG IR', path: '/gioi-thieu' },
  ]

  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-50 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between relative">
        {/* Left: Brand Logo */}
        <Link to="/gioi-thieu" className="flex items-center gap-2 group shrink-0">
          <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center text-[#ffd400] font-black text-xs shadow-xs group-hover:scale-105 transition-transform">
            <span className="text-[10px] tracking-tighter">MWG</span>
          </div>
          <span className="font-extrabold text-slate-900 text-sm tracking-tight hidden sm:inline-block">
            MWG
          </span>
        </Link>

        {/* Center: Desktop Navigation Items */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-xs sm:text-sm font-bold">
          {navItems.map((item, idx) => {
            const isActive = item.isHighlight && location.pathname.includes('/gioi-thieu')
            return (
              <button
                key={idx}
                onClick={() => handleNavClick(item.id, item.path)}
                className={`transition-colors py-5 cursor-pointer whitespace-nowrap ${
                  isActive
                    ? 'text-[#f5a623] font-extrabold border-b-2 border-[#f5a623]'
                    : 'text-slate-800 hover:text-[#f5a623]'
                }`}
              >
                {item.label}
              </button>
            )
          })}
        </nav>

        {/* Right: Search & Language Switcher */}
        <div className="flex items-center gap-4 shrink-0">
          {/* Search Button */}
          <div className="relative">
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-2 text-slate-700 hover:text-black hover:bg-slate-100 rounded-full transition-colors cursor-pointer"
              aria-label="Search"
            >
              <Search className="w-4 h-4" />
            </button>

            {/* Search Dropdown Input */}
            {searchOpen && (
              <div className="absolute right-0 mt-2 w-72 bg-white rounded-xl shadow-xl border border-slate-200 p-3 z-50 animate-in fade-in zoom-in-95 duration-150">
                <div className="flex items-center gap-2 bg-slate-100 px-3 py-1.5 rounded-lg border border-slate-200">
                  <Search className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Tìm kiếm thông tin MWG..."
                    className="w-full text-xs bg-transparent focus:outline-none text-slate-800"
                    autoFocus
                  />
                  {searchQuery && (
                    <button onClick={() => setSearchQuery('')} className="text-slate-400 hover:text-slate-600">
                      <X className="w-3 h-3" />
                    </button>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Language Switcher Pill */}
          <div className="flex items-center bg-slate-100 p-1 rounded-lg border border-slate-200/80 text-xs font-bold">
            <button
              onClick={() => toggleLanguage('vi')}
              className={`px-2.5 py-1 rounded-md transition-all cursor-pointer ${
                currentLang.startsWith('vi')
                  ? 'bg-white text-slate-900 shadow-2xs font-black'
                  : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              VN
            </button>
            <button
              onClick={() => toggleLanguage('en')}
              className={`px-2.5 py-1 rounded-md transition-all cursor-pointer ${
                currentLang.startsWith('en')
                  ? 'bg-white text-slate-900 shadow-2xs font-black'
                  : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              EN
            </button>
          </div>

          {/* Back to Recruitment site link */}
          <Link
            to="/jobs"
            className="hidden sm:inline-flex items-center gap-1 text-[11px] font-bold text-slate-600 hover:text-[#d4222f] bg-slate-50 hover:bg-slate-100 px-3 py-1.5 rounded-lg border border-slate-200 transition-colors"
          >
            <span>Tuyển dụng</span>
          </Link>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-4 space-y-2 text-sm font-bold shadow-lg">
          {navItems.map((item, idx) => (
            <button
              key={idx}
              onClick={() => handleNavClick(item.id, item.path)}
              className="w-full text-left py-2.5 px-3 rounded-lg text-slate-800 hover:bg-amber-50 hover:text-[#f5a623] transition-colors"
            >
              {item.label}
            </button>
          ))}
          <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
            <Link
              to="/jobs"
              onClick={() => setMobileMenuOpen(false)}
              className="text-xs font-bold text-[#d4222f] hover:underline"
            >
              &larr; Quay lại trang Tuyển dụng
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
