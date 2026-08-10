import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ChevronDown, ChevronRight, Menu, X, Users } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { LanguageSwitcher } from '@/components/LanguageSwitcher'
import type { AppHeaderProps, NavItem } from './AppHeader.types'
import { SPECIALTY_ITEMS, SPECIALTY_COLUMNS, PROVINCE_COLUMNS } from './AppHeader.data'

export const AppHeader = ({ navItems }: AppHeaderProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mobileExpandedItem, setMobileExpandedItem] = useState<string | null>(null)
  const [mobileSubTab, setMobileSubTab] = useState<string | null>(null)
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)
  const [activeSubMenu, setActiveSubMenu] = useState<'specialty' | 'province' | 'internal'>('specialty')
  const hoverTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const { t } = useTranslation('recruitment')

  const defaultItems: NavItem[] = [
    {
      label: t('header.findJob'),
      to: '#search',
      hasDropdown: true,
      isMegaDropdown: true,
      dropdownItems: [
        { id: 'specialty', label: t('header.findJobBySpecialty'), to: '#specialty', hasSubMenu: true },
        { id: 'province', label: t('header.findJobByProvince'), to: '#province', hasSubMenu: true },
        { id: 'internal', label: t('header.internalJobs'), to: '#internal' },
      ],
    },
    {
      label: t('header.aboutMwg'),
      to: '#about',
      hasDropdown: true,
      dropdownItems: [
        { id: 'overview', label: t('header.aboutOverview'), to: '#about' },
        { id: 'bod', label: t('header.aboutBoardOfDirectors'), to: '#board-of-directors' },
      ],
    },
    {
      label: t('header.lifeAtMwg'),
      to: '#life',
      hasDropdown: true,
      dropdownItems: [
        { id: 'environment', label: t('header.lifeEnvironment'), to: '#life-environment' },
        { id: 'culture', label: t('header.lifeCulture'), to: '#life-culture' },
      ],
    },
    { label: t('header.careerGuide'), to: '#career' },
    { label: t('header.applicationResults'), to: '#results' },
  ]

  const itemsToRender = navItems || defaultItems

  const handleMouseEnter = (key: string) => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current)
    setHoveredItem(key)
  }

  const handleMouseLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setHoveredItem(null)
    }, 150)
  }

  const specialtyRows = [0, 1, 2, 3, 4, 5].flatMap((rowIdx) =>
    SPECIALTY_COLUMNS.map((col) => col[rowIdx]).filter(Boolean),
  )

  return (
    <header className="bg-[#0f0f0f] text-white border-b border-zinc-800 sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between relative">
        {/* Brand Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="bg-[#ffd400] text-black font-extrabold px-2.5 py-1 rounded text-base tracking-tight group-hover:bg-yellow-400 transition-colors">
            TGĐĐ
          </div>
          <span className="font-bold text-xs uppercase tracking-wider text-zinc-300 group-hover:text-white transition-colors">
            {t('header.recruitment')}
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-zinc-300">
          {itemsToRender.map((item) => {
            const isHovered = hoveredItem === item.to
            return (
              <div
                key={item.to + item.label}
                className="relative"
                onMouseEnter={() => handleMouseEnter(item.to)}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  to={item.to}
                  className="hover:text-white transition-colors flex items-center gap-1 py-5"
                >
                  <span>{item.label}</span>
                  {item.hasDropdown ? (
                    <ChevronDown
                      className={`w-3.5 h-3.5 opacity-70 transition-transform duration-200 ${isHovered ? 'rotate-180 text-white' : ''}`}
                    />
                  ) : null}
                </Link>

                {/* Dropdown Menu (Mega or Standard) */}
                {item.hasDropdown && item.dropdownItems && isHovered && (
                  item.isMegaDropdown ? (
                    /* Mega Dropdown Menu */
                    <div
                      className="absolute top-full left-4 right-4 sm:left-6 sm:right-6 lg:left-8 lg:right-8 mt-0 bg-white text-zinc-800 rounded-b-xl shadow-2xl border border-zinc-100 z-50 flex overflow-hidden shadow-zinc-950/20"
                      style={{
                        animation: 'dropdownFadeIn 0.18s ease-out',
                      }}
                    >
                      {/* Left Column - Sub Categories */}
                      <div className="w-52 bg-white border-r border-zinc-100 py-3 shrink-0">
                        {item.dropdownItems.map((dropItem) => {
                          const subId = (dropItem.id || 'specialty') as 'specialty' | 'province' | 'internal'
                          const isActive = activeSubMenu === subId
                          return (
                            <Link
                              key={dropItem.to}
                              to={dropItem.to}
                              onMouseEnter={() => setActiveSubMenu(subId)}
                              className={`flex items-center justify-between px-4 py-3 text-sm font-medium transition-colors border-b border-zinc-50 last:border-none group/dd ${
                                isActive
                                  ? 'bg-zinc-100/90 text-zinc-900 font-semibold'
                                  : 'text-zinc-700 hover:bg-zinc-50 hover:text-zinc-900'
                              }`}
                            >
                              <span>{dropItem.label}</span>
                              {dropItem.hasSubMenu && (
                                <ChevronRight
                                  className={`w-4 h-4 transition-colors ${
                                    isActive ? 'text-[#d4222f]' : 'text-zinc-400 group-hover/dd:text-zinc-600'
                                  }`}
                                />
                              )}
                            </Link>
                          )
                        })}
                      </div>

                      {/* Right Panel - Active Submenu Content */}
                      <div className="flex-1 p-4 sm:p-5 bg-white">
                        {/* 1. Specialty Jobs (Việc làm theo chuyên môn) */}
                        {activeSubMenu === 'specialty' && (
                          <div className="grid grid-cols-3 gap-x-4 gap-y-2.5 items-center">
                            {specialtyRows.map((sp) => {
                              const IconComponent = sp.icon
                              return (
                                <Link
                                  key={sp.id}
                                  to={sp.to}
                                  className="flex items-center gap-2.5 p-1 rounded-lg hover:bg-zinc-50 transition-colors group/sp"
                                >
                                  <div className="w-6 h-6 rounded-full bg-[#ffd400] flex items-center justify-center shrink-0 text-black shadow-xs">
                                    <IconComponent className="w-3.5 h-3.5 text-black" />
                                  </div>
                                  <span className="text-[12.5px] font-medium text-zinc-800 group-hover/sp:text-[#d4222f] transition-colors leading-snug">
                                    {sp.label}
                                  </span>
                                </Link>
                              )
                            })}
                          </div>
                        )}

                        {/* 2. Province Jobs (Việc làm theo tỉnh) */}
                        {activeSubMenu === 'province' && (
                          <div className="grid grid-cols-3 gap-x-4 gap-y-2">
                            {PROVINCE_COLUMNS.map((col, colIdx) => (
                              <div key={colIdx} className="space-y-2">
                                {col.map((prov) => (
                                  <Link
                                    key={prov}
                                    to={`#province-${encodeURIComponent(prov)}`}
                                    className="block text-[12.5px] font-medium text-zinc-700 hover:text-[#d4222f] transition-colors leading-tight whitespace-nowrap"
                                  >
                                    {prov}
                                  </Link>
                                ))}
                              </div>
                            ))}
                          </div>
                        )}

                        {/* 3. Internal Jobs (Việc làm nội bộ) */}
                        {activeSubMenu === 'internal' && (
                          <div className="h-full min-h-[260px] flex flex-col items-center justify-center text-center p-6 bg-zinc-50/60 rounded-xl border border-dashed border-zinc-200">
                            <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 mb-3">
                              <Users className="w-6 h-6" />
                            </div>
                            <h4 className="text-base font-bold text-zinc-800 mb-1">Dành riêng cho nhân viên MWG</h4>
                            <p className="text-xs text-zinc-500 max-w-sm mb-4">
                              Khám phá các cơ hội chuyển đổi vị trí và thăng tiến nội bộ trong tập đoàn Thế Giới Di Động.
                            </p>
                            <Link
                              to="#internal"
                              className="px-4 py-2 bg-[#d4222f] text-white text-xs font-semibold rounded-lg hover:bg-red-700 transition-colors shadow-sm"
                            >
                              Xem cơ hội tuyển dụng nội bộ
                            </Link>
                          </div>
                        )}
                      </div>
                    </div>
                  ) : (
                    /* Standard Dropdown Menu */
                    <div
                      className="absolute top-full left-0 mt-0 min-w-[210px] bg-white text-zinc-800 rounded-b-xl shadow-2xl border border-zinc-100/80 py-1.5 z-50 overflow-hidden shadow-zinc-950/15"
                      style={{
                        animation: 'dropdownFadeIn 0.18s ease-out',
                      }}
                    >
                      {item.dropdownItems.map((dropItem) => (
                        <Link
                          key={dropItem.to}
                          to={dropItem.to}
                          className="block px-5 py-3 text-sm font-medium text-zinc-800 hover:bg-zinc-50 hover:text-[#d4222f] transition-colors border-b border-zinc-100 last:border-none whitespace-nowrap"
                        >
                          {dropItem.label}
                        </Link>
                      ))}
                    </div>
                  )
                )}
              </div>
            )
          })}
          <div className="pl-2 border-l border-zinc-700">
            <LanguageSwitcher />
          </div>
        </nav>

        {/* Mobile menu toggle */}
        <div className="flex md:hidden items-center gap-3">
          <LanguageSwitcher />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 rounded-md text-zinc-300 hover:text-white hover:bg-zinc-800 transition-colors"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#18181b] border-b border-zinc-800 px-4 pt-2 pb-4 space-y-1 text-sm font-medium max-h-[85vh] overflow-y-auto">
          {itemsToRender.map((item) => (
            <div key={item.to + item.label}>
              <button
                onClick={() => {
                  if (item.hasDropdown && item.dropdownItems) {
                    setMobileExpandedItem(
                      mobileExpandedItem === item.to ? null : item.to,
                    )
                  } else {
                    setMobileMenuOpen(false)
                  }
                }}
                className="w-full text-left py-2.5 px-3 rounded-md text-zinc-200 hover:bg-zinc-800 hover:text-white transition-colors"
              >
                <div className="flex items-center justify-between">
                  <span>{item.label}</span>
                  {item.hasDropdown ? (
                    <ChevronDown
                      className={`w-4 h-4 opacity-70 transition-transform duration-200 ${mobileExpandedItem === item.to ? 'rotate-180' : ''}`}
                    />
                  ) : null}
                </div>
              </button>

              {/* Mobile sub-menu */}
              {item.hasDropdown &&
                item.dropdownItems &&
                mobileExpandedItem === item.to && (
                  <div className="ml-3 mt-1 space-y-1 border-l-2 border-zinc-700 pl-3">
                    {item.dropdownItems.map((dropItem) => {
                      const subId = dropItem.id || 'specialty'
                      const isSubExpanded = mobileSubTab === subId

                      if (!dropItem.hasSubMenu) {
                        return (
                          <Link
                            key={dropItem.to}
                            to={dropItem.to}
                            onClick={() => setMobileMenuOpen(false)}
                            className="block py-2 px-2 rounded-md text-zinc-300 hover:text-white hover:bg-zinc-800 transition-colors text-sm"
                          >
                            {dropItem.label}
                          </Link>
                        )
                      }

                      return (
                        <div key={dropItem.to}>
                          <button
                            onClick={() => setMobileSubTab(isSubExpanded ? null : subId)}
                            className="w-full text-left flex items-center justify-between py-2 px-2 rounded-md text-zinc-300 hover:text-white hover:bg-zinc-800 transition-colors text-sm"
                          >
                            <span>{dropItem.label}</span>
                            <ChevronRight
                              className={`w-3.5 h-3.5 opacity-60 transition-transform ${isSubExpanded ? 'rotate-90' : ''}`}
                            />
                          </button>

                          {/* Mobile Specialty items list */}
                          {isSubExpanded && subId === 'specialty' && (
                            <div className="ml-2 my-1 space-y-1 bg-zinc-900/60 p-2 rounded-lg border border-zinc-800">
                              {SPECIALTY_ITEMS.map((sp) => {
                                const IconComp = sp.icon
                                return (
                                  <Link
                                    key={sp.id}
                                    to={sp.to}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="flex items-center gap-2.5 py-1.5 px-2 rounded hover:bg-zinc-800 text-xs text-zinc-300 hover:text-white"
                                  >
                                    <div className="w-5 h-5 rounded-full bg-[#ffd400] flex items-center justify-center shrink-0 text-black">
                                      <IconComp className="w-3 h-3 text-black" />
                                    </div>
                                    <span>{sp.label}</span>
                                  </Link>
                                )
                              })}
                            </div>
                          )}

                          {/* Mobile Province items list */}
                          {isSubExpanded && subId === 'province' && (
                            <div className="ml-2 my-1 grid grid-cols-1 sm:grid-cols-2 gap-1 bg-zinc-900/60 p-2 rounded-lg border border-zinc-800 max-h-60 overflow-y-auto">
                              {PROVINCE_COLUMNS.flat().map((prov) => (
                                <Link
                                  key={prov}
                                  to={`#province-${encodeURIComponent(prov)}`}
                                  onClick={() => setMobileMenuOpen(false)}
                                  className="py-1 px-2 text-xs text-zinc-300 hover:text-white hover:bg-zinc-800 rounded"
                                >
                                  {prov}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      )
                    })}
                  </div>
                )}
            </div>
          ))}
        </div>
      )}

      <style>{`
        @keyframes dropdownFadeIn {
          from { opacity: 0; transform: translateY(-6px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </header>
  )
}

