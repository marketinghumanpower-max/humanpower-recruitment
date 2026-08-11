import { useState, useEffect, useMemo } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { Search, MapPin, Users, DollarSign, User, ChevronDown } from 'lucide-react'
import { SPECIALTY_ITEMS, PROVINCE_COLUMNS } from '@/components/AppHeader/AppHeader.data'
import { MOCK_JOBS } from '../data/jobsData'

export const JobSearchPage = () => {
  const [searchParams, setSearchParams] = useSearchParams()

  const specialtyParam = searchParams.get('specialty') || searchParams.get('category') || ''
  const provinceParam = searchParams.get('province') || searchParams.get('location') || ''
  const keywordParam = searchParams.get('q') || searchParams.get('keyword') || ''

  const [selectedSpecialty, setSelectedSpecialty] = useState<string>(specialtyParam)
  const [selectedProvince, setSelectedProvince] = useState<string>(provinceParam)
  const [keyword, setKeyword] = useState<string>(keywordParam)

  // Secondary filters
  const [brandFilter, setBrandFilter] = useState<string>('')
  const [workTypeFilter, setWorkTypeFilter] = useState<string>('')
  const [levelFilter, setLevelFilter] = useState<string>('')
  const [expFilter, setExpFilter] = useState<string>('')
  const [salaryFilter, setSalaryFilter] = useState<string>('')
  const [isHotOnly, setIsHotOnly] = useState<boolean>(false)
  const [isNearbyOnly, setIsNearbyOnly] = useState<boolean>(false)
  const [sortBy, setSortBy] = useState<string>('priority')

  // Sync from URL search parameters
  useEffect(() => {
    setSelectedSpecialty(specialtyParam)
    setSelectedProvince(provinceParam)
    setKeyword(keywordParam)
  }, [specialtyParam, provinceParam, keywordParam])

  // Get display label for active specialty
  const activeSpecialtyObj = useMemo(() => {
    if (!selectedSpecialty) return null
    return (
      SPECIALTY_ITEMS.find(
        (sp) => sp.id === selectedSpecialty || sp.label.toLowerCase() === selectedSpecialty.toLowerCase(),
      ) || null
    )
  }, [selectedSpecialty])

  const activeSpecialtyLabel = activeSpecialtyObj ? activeSpecialtyObj.label : selectedSpecialty

  // Filter jobs based on selected criteria
  const filteredJobs = useMemo(() => {
    return MOCK_JOBS.filter((job) => {
      // Specialty filter
      if (selectedSpecialty) {
        const matchesId = job.specialtyId === selectedSpecialty
        const matchesLabel = job.specialtyName.toLowerCase().includes(selectedSpecialty.toLowerCase())
        if (!matchesId && !matchesLabel) return false
      }

      // Province filter
      if (selectedProvince) {
        const provLower = selectedProvince.toLowerCase()
        const matchesProvince =
          job.province.toLowerCase().includes(provLower) ||
          job.locationText.toLowerCase().includes(provLower)
        if (!matchesProvince) return false
      }

      // Keyword filter
      if (keyword.trim()) {
        const q = keyword.toLowerCase()
        const matchesTitle = job.title.toLowerCase().includes(q)
        const matchesSpec = job.specialtyName.toLowerCase().includes(q)
        if (!matchesTitle && !matchesSpec) return false
      }

      // Brand filter
      if (brandFilter && job.brand !== brandFilter) return false

      // Work type filter
      if (workTypeFilter && job.workType !== workTypeFilter) return false

      // Level filter
      if (levelFilter && job.level !== levelFilter) return false

      // Exp filter
      if (expFilter && job.experience !== expFilter) return false

      // Hot filter
      if (isHotOnly && !job.isHot) return false

      return true
    })
  }, [
    selectedSpecialty,
    selectedProvince,
    keyword,
    brandFilter,
    workTypeFilter,
    levelFilter,
    expFilter,
    isHotOnly,
  ])

  // Handle Search Submission
  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const newParams: Record<string, string> = {}
    if (selectedSpecialty) newParams.specialty = selectedSpecialty
    if (selectedProvince) newParams.province = selectedProvince
    if (keyword.trim()) newParams.q = keyword.trim()
    setSearchParams(newParams)
  }

  // Handle filter changes that immediately update searchParams
  const handleSpecialtyChange = (val: string) => {
    setSelectedSpecialty(val)
    const newParams: Record<string, string> = {}
    if (val) newParams.specialty = val
    if (selectedProvince) newParams.province = selectedProvince
    if (keyword.trim()) newParams.q = keyword.trim()
    setSearchParams(newParams)
  }

  const handleProvinceChange = (val: string) => {
    setSelectedProvince(val)
    const newParams: Record<string, string> = {}
    if (selectedSpecialty) newParams.specialty = selectedSpecialty
    if (val) newParams.province = val
    if (keyword.trim()) newParams.q = keyword.trim()
    setSearchParams(newParams)
  }

  // Flattened provinces list for select dropdown
  const allProvinces = useMemo(() => PROVINCE_COLUMNS.flat(), [])

  return (
    <div className="w-full min-h-screen bg-slate-50 text-zinc-900 pb-16">
      {/* Top Header Section with Light Blue Banner (Matching Screenshot) */}
      <div className="bg-[#edf6fd] border-b border-sky-100 pt-5 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-5">
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center gap-1.5 text-xs text-zinc-600 font-medium">
            <Link to="/jobs" className="text-[#1877f2] hover:underline">
              Tất cả việc làm
            </Link>
            {(activeSpecialtyLabel || selectedProvince) && (
              <>
                <span className="text-zinc-400">›</span>
                <span className="text-[#1877f2] font-semibold">
                  {activeSpecialtyLabel || selectedProvince}
                </span>
              </>
            )}
          </nav>

          {/* Heading & Subheading */}
          <div className="space-y-1">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 tracking-tight">
              Thế giới việc làm, nhanh nhất trên toàn quốc
            </h1>
            <p className="text-[#d4222f] sm:text-lg font-bold">
              {filteredJobs.length > 0
                ? `${filteredJobs.length * 1316 + 124} công việc đang chờ bạn`
                : '42124 công việc đang chờ bạn'}
            </p>
          </div>

          {/* Search Inputs Bar (Exact layout matching screenshot) */}
          <form
            onSubmit={handleSearchSubmit}
            className="bg-white rounded-xl shadow-md border border-slate-200/80 p-2 sm:p-2.5 grid grid-cols-1 md:grid-cols-12 gap-2"
          >
            {/* Input 1: Keyword */}
            <div className="md:col-span-4 relative flex items-center bg-white rounded-lg border border-slate-200 px-3 py-2">
              <input
                type="text"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                placeholder="Bạn muốn tìm việc gì"
                className="w-full pr-8 text-sm text-zinc-800 focus:outline-none placeholder:text-zinc-400 font-medium"
              />
              <Search className="w-4 h-4 text-zinc-400 absolute right-3 pointer-events-none" />
            </div>

            {/* Input 2: Category Dropdown */}
            <div className="md:col-span-3 relative flex items-center bg-white rounded-lg border border-slate-200 px-3 py-2">
              <select
                value={selectedSpecialty}
                onChange={(e) => handleSpecialtyChange(e.target.value)}
                className="w-full pr-6 text-sm text-zinc-800 focus:outline-none bg-transparent cursor-pointer font-medium appearance-none truncate"
              >
                <option value="">Chuyên môn / Ngành nghề</option>
                {SPECIALTY_ITEMS.map((sp) => (
                  <option key={sp.id} value={sp.id}>
                    {sp.label}
                  </option>
                ))}
              </select>
              <ChevronDown className="w-4 h-4 text-zinc-400 absolute right-2.5 pointer-events-none" />
            </div>

            {/* Input 3: Location Dropdown */}
            <div className="md:col-span-3 relative flex items-center bg-white rounded-lg border border-slate-200 px-3 py-2">
              <select
                value={selectedProvince}
                onChange={(e) => handleProvinceChange(e.target.value)}
                className="w-full pr-6 text-sm text-zinc-800 focus:outline-none bg-transparent cursor-pointer font-medium appearance-none truncate"
              >
                <option value="">Địa điểm làm việc</option>
                {allProvinces.map((prov) => (
                  <option key={prov} value={prov}>
                    {prov}
                  </option>
                ))}
              </select>
              <ChevronDown className="w-4 h-4 text-zinc-400 absolute right-2.5 pointer-events-none" />
            </div>

            {/* Search Action Button */}
            <div className="md:col-span-2">
              <button
                type="submit"
                className="w-full h-full min-h-[42px] bg-[#ffd400] hover:bg-yellow-400 text-black font-extrabold text-sm rounded-lg shadow-xs transition-colors flex items-center justify-center cursor-pointer active:scale-[0.99]"
              >
                Tìm việc
              </button>
            </div>
          </form>

          {/* Secondary Filter Chips Row (Matching Screenshot) */}
          <div className="flex flex-wrap items-center gap-2 pt-1">
            {/* Filter 1: Brand / Theo */}
            <div className="relative">
              <select
                value={brandFilter}
                onChange={(e) => setBrandFilter(e.target.value)}
                className="bg-white border border-slate-200 text-xs font-medium text-zinc-700 px-3 py-1.5 pr-7 rounded-lg shadow-xs focus:outline-none cursor-pointer appearance-none hover:bg-slate-50"
              >
                <option value="">Theo thương hiệu...</option>
                <option value="tgdd">Thế Giới Di Động</option>
                <option value="dmx">Điện Máy Xanh</option>
                <option value="bhx">Bách Hóa Xanh</option>
                <option value="ankhang">Nhà Thuốc An Khang</option>
                <option value="avakids">AVAKids</option>
              </select>
              <ChevronDown className="w-3.5 h-3.5 text-zinc-400 absolute right-2 top-2.5 pointer-events-none" />
            </div>

            {/* Filter 2: Work Type */}
            <div className="relative">
              <select
                value={workTypeFilter}
                onChange={(e) => setWorkTypeFilter(e.target.value)}
                className="bg-white border border-slate-200 text-xs font-medium text-zinc-700 px-3 py-1.5 pr-7 rounded-lg shadow-xs focus:outline-none cursor-pointer appearance-none hover:bg-slate-50"
              >
                <option value="">Hình thức làm...</option>
                <option value="fulltime">Toàn thời gian</option>
                <option value="parttime">Bán thời gian (Part-time)</option>
              </select>
              <ChevronDown className="w-3.5 h-3.5 text-zinc-400 absolute right-2 top-2.5 pointer-events-none" />
            </div>

            {/* Filter 3: Level */}
            <div className="relative">
              <select
                value={levelFilter}
                onChange={(e) => setLevelFilter(e.target.value)}
                className="bg-white border border-slate-200 text-xs font-medium text-zinc-700 px-3 py-1.5 pr-7 rounded-lg shadow-xs focus:outline-none cursor-pointer appearance-none hover:bg-slate-50"
              >
                <option value="">Cấp bậc...</option>
                <option value="Nhân viên">Nhân viên</option>
                <option value="Quản lý">Quản lý / Giám sát</option>
                <option value="Cộng tác viên">Cộng tác viên</option>
              </select>
              <ChevronDown className="w-3.5 h-3.5 text-zinc-400 absolute right-2 top-2.5 pointer-events-none" />
            </div>

            {/* Filter 4: Experience */}
            <div className="relative">
              <select
                value={expFilter}
                onChange={(e) => setExpFilter(e.target.value)}
                className="bg-white border border-slate-200 text-xs font-medium text-zinc-700 px-3 py-1.5 pr-7 rounded-lg shadow-xs focus:outline-none cursor-pointer appearance-none hover:bg-slate-50"
              >
                <option value="">Kinh nghiệm làm...</option>
                <option value="Chưa có kinh nghiệm">Chưa có kinh nghiệm</option>
                <option value="Dưới 1 năm">Dưới 1 năm</option>
                <option value="1-3 năm">1-3 năm</option>
                <option value="Trên 3 năm">Trên 3 năm</option>
              </select>
              <ChevronDown className="w-3.5 h-3.5 text-zinc-400 absolute right-2 top-2.5 pointer-events-none" />
            </div>

            {/* Filter 5: Salary */}
            <div className="relative">
              <select
                value={salaryFilter}
                onChange={(e) => setSalaryFilter(e.target.value)}
                className="bg-white border border-slate-200 text-xs font-medium text-zinc-700 px-3 py-1.5 pr-7 rounded-lg shadow-xs focus:outline-none cursor-pointer appearance-none hover:bg-slate-50"
              >
                <option value="">Mức lương...</option>
                <option value="under10">Dưới 10 triệu</option>
                <option value="10-15">10 - 15 triệu</option>
                <option value="above15">Trên 15 triệu</option>
              </select>
              <ChevronDown className="w-3.5 h-3.5 text-zinc-400 absolute right-2 top-2.5 pointer-events-none" />
            </div>

            {/* Checkbox: Việc HOT */}
            <label className="flex items-center gap-1.5 text-xs font-semibold text-zinc-700 bg-white border border-slate-200 px-3 py-1.5 rounded-lg shadow-xs cursor-pointer hover:bg-slate-50">
              <input
                type="checkbox"
                checked={isHotOnly}
                onChange={(e) => setIsHotOnly(e.target.checked)}
                className="rounded text-[#d70018] focus:ring-[#d70018] w-3.5 h-3.5 cursor-pointer"
              />
              <span>Việc HOT</span>
              <span className="bg-[#d70018] text-white text-[9px] font-bold uppercase px-1 rounded">
                HOT
              </span>
            </label>

            {/* Checkbox: Việc gần bạn */}
            <label className="flex items-center gap-1.5 text-xs font-semibold text-zinc-700 bg-white border border-slate-200 px-3 py-1.5 rounded-lg shadow-xs cursor-pointer hover:bg-slate-50">
              <input
                type="checkbox"
                checked={isNearbyOnly}
                onChange={(e) => setIsNearbyOnly(e.target.checked)}
                className="rounded text-sky-600 focus:ring-sky-500 w-3.5 h-3.5 cursor-pointer"
              />
              <span>Việc gần bạn</span>
            </label>
          </div>
        </div>
      </div>

      {/* Main Results Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 space-y-5">
        {/* Results Header Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200 pb-3">
          <h2 className="text-base sm:text-lg font-bold text-zinc-900">
            Tìm thấy{' '}
            <span className="text-[#d70018]">
              {filteredJobs.length > 0 ? filteredJobs.length * 16 : 32}
            </span>{' '}
            công việc{' '}
            <span className="text-zinc-800 font-extrabold">
              {activeSpecialtyLabel || selectedProvince || 'toàn quốc'}
            </span>
          </h2>

          <div className="flex items-center gap-2 text-xs text-zinc-600 self-end sm:self-auto">
            <span>Xếp theo:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-white border border-slate-200 rounded-lg px-2.5 py-1.5 font-semibold text-zinc-800 focus:outline-none cursor-pointer shadow-xs"
            >
              <option value="priority">Độ ưu tiên</option>
              <option value="newest">Mới nhất</option>
              <option value="salary">Lương cao nhất</option>
            </select>
          </div>
        </div>

        {/* Job Cards List / Grid (Matching exact screenshot styling) */}
        {filteredJobs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredJobs.map((job) => (
              <div
                key={job.id}
                className="bg-white rounded-xl border border-slate-200 p-4 shadow-xs hover:shadow-md hover:border-slate-300 transition-all flex flex-col justify-between group"
              >
                <div className="flex items-start gap-3">
                  {/* Left Avatar Icon Box */}
                  <div className="w-10 h-10 rounded-lg bg-sky-100/70 border border-sky-200/60 flex items-center justify-center shrink-0 mt-0.5">
                    <User className="w-5 h-5 text-sky-600" />
                  </div>

                  {/* Middle Content */}
                  <div className="flex-1 min-w-0 space-y-1.5">
                    {/* Title with optional HOT badge */}
                    <h3 className="text-sm sm:text-[15px] font-bold text-zinc-900 group-hover:text-[#1877f2] transition-colors leading-snug line-clamp-2">
                      {job.isHot && (
                        <span className="inline-block bg-[#d70018] text-white text-[10px] font-extrabold px-1.5 py-0.5 rounded mr-1.5 tracking-wide align-middle">
                          HOT
                        </span>
                      )}
                      <span>{job.title}</span>
                    </h3>

                    {/* Metadata details line */}
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-zinc-500 font-medium">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
                        <span className="truncate max-w-[150px]">{job.locationText}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
                        <span>{job.quantity}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <DollarSign className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
                        <span>{job.salary}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Footer: Deadline on left/right & Apply Link */}
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-zinc-400 font-medium">
                    Hạn nộp {job.deadline}
                  </span>
                  <Link
                    to={`#apply-${job.id}`}
                    className="font-bold text-[#1877f2] hover:underline hover:text-blue-700 transition-colors"
                  >
                    Ứng tuyển
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Empty state if no jobs match */
          <div className="bg-white rounded-xl border border-dashed border-slate-300 p-12 text-center space-y-3">
            <p className="text-base font-bold text-zinc-700">
              Không tìm thấy công việc phù hợp
            </p>
            <p className="text-xs text-zinc-500">
              Vui lòng thay đổi từ khóa hoặc điều kiện lọc để tìm kiếm lại.
            </p>
            <button
              onClick={() => {
                setSelectedSpecialty('')
                setSelectedProvince('')
                setKeyword('')
                setBrandFilter('')
                setWorkTypeFilter('')
                setSearchParams({})
              }}
              className="px-4 py-2 bg-slate-900 text-white text-xs font-semibold rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
            >
              Xóa bộ lọc
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
