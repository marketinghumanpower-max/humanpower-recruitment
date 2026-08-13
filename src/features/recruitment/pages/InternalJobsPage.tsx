import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import {
  Search,
  ChevronDown,
  ChevronUp,
  FileCheck,
  Award,
  Building,
  Briefcase,
  HelpCircle,
  BookOpen,
  ArrowRight,
  Info,
  CheckCircle2,
  X,
} from 'lucide-react'
import { INTERNAL_JOBS_MOCK, INTERNAL_FAQS, type InternalJob } from '../data/internalJobsData'

export const InternalJobsPage = () => {
  const [keyword, setKeyword] = useState('')
  const [selectedDept, setSelectedDept] = useState('')
  const [activeTab, setActiveTab] = useState<'all' | 'announcement'>('all')
  const [showAllJobs, setShowAllJobs] = useState(false)
  const [expandedFaqId, setExpandedFaqId] = useState<number | null>(1) // First open by default
  const [faqTab, setFaqTab] = useState<'faq' | 'guide'>('faq')
  const [selectedApplyJob, setSelectedApplyJob] = useState<InternalJob | null>(null)
  const [staffId, setStaffId] = useState('')
  const [applySuccess, setApplySuccess] = useState(false)

  // Filter jobs by keyword & department
  const filteredJobs = useMemo(() => {
    return INTERNAL_JOBS_MOCK.filter((job) => {
      if (keyword.trim()) {
        const q = keyword.toLowerCase()
        const matchTitle = job.title.toLowerCase().includes(q)
        const matchDept = job.department.toLowerCase().includes(q)
        if (!matchTitle && !matchDept) return false
      }
      if (selectedDept && job.department !== selectedDept) {
        return false
      }
      return true
    })
  }, [keyword, selectedDept])

  const visibleJobs = showAllJobs ? filteredJobs : filteredJobs.slice(0, 8)

  const handleFaqToggle = (id: number) => {
    setExpandedFaqId(expandedFaqId === id ? null : id)
  }

  const handleApplySubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!staffId.trim()) return
    setApplySuccess(true)
    setTimeout(() => {
      setApplySuccess(false)
      setSelectedApplyJob(null)
      setStaffId('')
    }, 2000)
  }

  return (
    <div className="w-full min-h-screen bg-white text-zinc-900 pb-20 font-sans">
      {/* ---------------------------------------------------- */}
      {/* 1. TOP HERO BANNER (YELLOW THEME MATCHING SCREENSHOT) */}
      {/* ---------------------------------------------------- */}
      <section className="bg-[#ffd400] pt-8 pb-10 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-5xl mx-auto flex flex-col items-center text-center space-y-5">
          {/* Top Tagline */}
          <span className="text-xs sm:text-sm font-semibold tracking-wide text-zinc-800 uppercase">
            Chuyển trang nội bộ cho nhân viên nội bộ
          </span>

          {/* Main Title */}
          <h1 className="text-2xl sm:text-4xl font-extrabold text-black tracking-tight uppercase max-w-3xl leading-tight">
            MWG ĐỒNG HÀNH CÙNG BẠN PHÁT TRIỂN SỰ NGHIỆP
          </h1>

          {/* Right Action Badge / Button */}
          <a
            href="#quy-trinh"
            className="inline-flex items-center gap-2 bg-black hover:bg-zinc-800 text-[#ffd400] text-xs sm:text-sm font-bold px-5 py-2.5 rounded-full transition-transform hover:scale-[1.02] shadow-md"
          >
            <span>KHÁM PHÁ ĐĂNG KÝ NGAY NHÉ</span>
            <span className="text-white text-xs font-medium">→ Xem quy trình tuyển dụng</span>
          </a>

          {/* Search Box Input */}
          <div className="w-full max-w-2xl mt-4">
            <div className="bg-white rounded-full p-2 shadow-lg flex items-center border border-yellow-300 focus-within:ring-2 focus-within:ring-black transition-all">
              <Search className="w-5 h-5 text-zinc-400 ml-4 shrink-0" />
              <input
                type="text"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                placeholder="Bạn tìm kiếm vị trí gì?"
                className="w-full px-3 py-2 text-sm sm:text-base text-zinc-800 focus:outline-none placeholder:text-zinc-400 font-medium"
              />
              <button
                type="button"
                className="bg-[#d4222f] hover:bg-red-700 text-white font-bold text-xs sm:text-sm px-6 py-2.5 rounded-full transition-colors shrink-0"
              >
                Tìm kiếm
              </button>
            </div>
          </div>

          {/* Quote Sub-tagline */}
          <p className="text-xs sm:text-sm font-bold text-zinc-800 italic pt-2">
            &quot; MWG luôn nỗ lực tạo cơ hội phát triển nghề nghiệp trong nội bộ cho nhân viên &quot;
          </p>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 2. JOB LISTINGS SECTION ("TẤT CẢ VIỆC LÀM")        */}
      {/* ---------------------------------------------------- */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 space-y-6">
        {/* Section Heading & Filter Tabs */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-zinc-100 pb-4">
          <h2 className="text-xl sm:text-2xl font-black text-black uppercase tracking-tight">
            TẤT CẢ VIỆC LÀM
          </h2>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-colors ${
                activeTab === 'all'
                  ? 'bg-[#d4222f] text-white shadow-sm'
                  : 'bg-zinc-100 text-zinc-700 hover:bg-zinc-200'
              }`}
            >
              Tất cả việc làm
            </button>
            <button
              onClick={() => setActiveTab('announcement')}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-colors ${
                activeTab === 'announcement'
                  ? 'bg-[#d4222f] text-white shadow-sm'
                  : 'bg-zinc-100 text-zinc-700 hover:bg-zinc-200'
              }`}
            >
              Thông báo tuyển dụng
            </button>
          </div>
        </div>

        {/* Orange Warning/Notice Banner */}
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-3.5 flex items-center gap-3 text-xs sm:text-sm font-semibold text-amber-900 shadow-xs">
          <Info className="w-5 h-5 text-amber-600 shrink-0" />
          <span>
            Nội bộ không áp dụng ứng tuyển việc ngoài MWG. Ứng tuyển chỉ dành cho nguyện vọng ứng tuyển chuyển khối.
          </span>
        </div>

        {/* Filter Toolbar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 bg-zinc-50 p-3 rounded-xl border border-zinc-200/80">
          <div className="w-full sm:w-auto flex items-center gap-2">
            <select
              value={selectedDept}
              onChange={(e) => setSelectedDept(e.target.value)}
              className="w-full sm:w-64 bg-white border border-zinc-300 text-xs font-semibold text-zinc-800 rounded-lg px-3 py-2 focus:outline-none cursor-pointer"
            >
              <option value="">Vị trí Đơn vị/Phòng ban (Tất cả)</option>
              <option value="Khối Siêu thị">Khối Siêu thị</option>
              <option value="Khối Văn phòng / Marketing">Khối Văn phòng / Marketing</option>
              <option value="Khối Logistics">Khối Logistics</option>
              <option value="Khối Mua hàng (Purchasing)">Khối Mua hàng (Purchasing)</option>
              <option value="Khối Phát triển Mặt Bằng">Khối Phát triển Mặt Bằng</option>
              <option value="Khối Dịch vụ Khách hàng">Khối Dịch vụ Khách hàng</option>
            </select>
          </div>

          <div className="w-full sm:w-72 relative">
            <input
              type="text"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              placeholder="Gửi 08 số tự nguyện/truyền..."
              className="w-full bg-white border border-zinc-300 rounded-lg px-3 py-2 pr-8 text-xs text-zinc-800 focus:outline-none placeholder:text-zinc-400 font-medium"
            />
            <Search className="w-3.5 h-3.5 text-zinc-400 absolute right-3 top-2.5 pointer-events-none" />
          </div>
        </div>

        {/* Job Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {visibleJobs.map((job) => (
            <div
              key={job.id}
              className="bg-white rounded-xl border border-zinc-200 p-4 shadow-sm hover:shadow-md transition-shadow relative flex flex-col justify-between group"
            >
              {/* HOT Badge */}
              {job.isHot && (
                <span className="absolute top-4 right-4 bg-[#d4222f] text-white text-[10px] font-black px-2 py-0.5 rounded tracking-wider uppercase">
                  HOT
                </span>
              )}

              <div className="space-y-2 pr-12">
                <h3 className="text-sm sm:text-base font-bold text-zinc-900 group-hover:text-[#d4222f] transition-colors leading-snug">
                  <Link to="/tuyen-dung/nhan-vien-sieu-thi-bach-hoa-xanh-45" className="hover:underline">
                    {job.title}
                  </Link>
                </h3>
                <p className="text-xs text-zinc-500 font-medium">
                  {job.brand} | {job.department}
                </p>
                <div className="text-xs text-zinc-600 font-medium space-y-0.5 pt-1">
                  <p>
                    <span className="font-semibold text-zinc-800">{job.locationText}</span> | Lương: {job.salary}
                  </p>
                  <p className="text-zinc-400">Ngày tạo: {job.createdDate}</p>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-zinc-100 flex items-center justify-between">
                <span className="text-xs text-zinc-400 font-medium">
                  Hạn nộp: <strong className="text-zinc-700">{job.deadline}</strong>
                </span>
                <button
                  onClick={() => setSelectedApplyJob(job)}
                  className="bg-zinc-100 hover:bg-[#d4222f] hover:text-white text-zinc-800 text-xs font-bold px-4 py-1.5 rounded-full transition-colors border border-zinc-200 hover:border-[#d4222f] cursor-pointer"
                >
                  Ứng tuyển
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Show More Button */}
        {filteredJobs.length > 8 && (
          <div className="text-center pt-2">
            <button
              onClick={() => setShowAllJobs(!showAllJobs)}
              className="inline-flex items-center gap-1.5 bg-zinc-100 hover:bg-zinc-200 text-zinc-800 text-xs font-bold px-6 py-2.5 rounded-full transition-colors cursor-pointer"
            >
              <span>{showAllJobs ? 'Thu gọn việc làm' : 'Xem thêm việc làm nội bộ'}</span>
              {showAllJobs ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
          </div>
        )}
      </section>

      {/* ---------------------------------------------------- */}
      {/* 3. ELIGIBILITY & PROCESS BANNER (YELLOW CONTAINER)  */}
      {/* ---------------------------------------------------- */}
      <section id="quy-trinh" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-14">
        <div className="bg-[#ffd400] rounded-2xl p-6 sm:p-8 shadow-md grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1: Điều kiện ứng tuyển */}
          <div className="bg-white rounded-xl p-5 shadow-sm space-y-3 border border-yellow-200">
            <div className="flex items-center gap-2 text-black border-b border-zinc-100 pb-3">
              <FileCheck className="w-6 h-6 text-[#d4222f]" />
              <h3 className="text-base sm:text-lg font-black uppercase tracking-tight">
                ĐIỀU KIỆN ỨNG TUYỂN
              </h3>
            </div>
            <ul className="space-y-2 text-xs sm:text-sm text-zinc-700 font-medium">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Thời gian làm việc chính thức từ 6 tháng trở lên.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Không vi phạm kỷ luật từ mức Khiển trách trở lên.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Đạt đánh giá hiệu quả công việc (KPI) từ loại Khá trở lên.</span>
              </li>
            </ul>
          </div>

          {/* Card 2: Quy trình ứng tuyển */}
          <div className="bg-white rounded-xl p-5 shadow-sm space-y-3 border border-yellow-200">
            <div className="flex items-center gap-2 text-black border-b border-zinc-100 pb-3">
              <Briefcase className="w-6 h-6 text-[#d4222f]" />
              <h3 className="text-base sm:text-lg font-black uppercase tracking-tight">
                QUY TRÌNH ỨNG TUYỂN
              </h3>
            </div>
            <ul className="space-y-2 text-xs sm:text-sm text-zinc-700 font-medium">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Đăng ký nguyện vọng ứng tuyển trực tiếp trên cổng nội bộ.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Quản lý trực tiếp duyệt đơn ứng tuyển nội bộ.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Tham gia phỏng vấn đánh giá năng lực tại vị trí mới.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 4. 3 HIGHLIGHT FEATURE CARDS                         */}
      {/* ---------------------------------------------------- */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Feature 1 */}
          <div className="bg-zinc-50 rounded-2xl p-6 border border-zinc-200 flex flex-col justify-between space-y-4 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-yellow-100 flex items-center justify-center text-amber-700">
              <Award className="w-6 h-6" />
            </div>
            <p className="text-xs sm:text-sm font-bold text-zinc-800 leading-relaxed">
              MWG tạo ra cơ hội chuyển đổi vị trí và phát triển thăng tiến cho nhân viên theo phương châm CÔNG BẰNG - MINH BẠCH.
            </p>
            <button className="inline-flex items-center gap-1.5 text-xs font-bold text-[#d4222f] hover:underline self-start">
              <span>Tìm hiểu thêm</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Feature 2 */}
          <div className="bg-[#ffd400]/20 rounded-2xl p-6 border border-yellow-300 flex flex-col justify-between space-y-4 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-yellow-400 flex items-center justify-center text-black font-extrabold text-sm">
              MWG
            </div>
            <p className="text-xs sm:text-sm font-bold text-zinc-800 leading-relaxed">
              Phong trào nội bộ giúp bạn thể hiện bản thân và gia tăng phát triển hướng tới sự nghiệp đỉnh cao.
            </p>
            <button className="inline-flex items-center gap-1.5 text-xs font-bold text-[#d4222f] hover:underline self-start">
              <span>Xem chi tiết</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Feature 3 */}
          <div className="bg-zinc-50 rounded-2xl p-6 border border-zinc-200 flex flex-col justify-between space-y-4 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-sky-100 flex items-center justify-center text-sky-700">
              <Building className="w-6 h-6" />
            </div>
            <p className="text-xs sm:text-sm font-bold text-zinc-800 leading-relaxed">
              Môi trường LÀM VIỆC TẠI MWG - Mới lạ không gian phát triển sự nghiệp đỉnh cao cùng với môi trường mẫu thích hợp cho bạn.
            </p>
            <button className="inline-flex items-center gap-1.5 text-xs font-bold text-[#d4222f] hover:underline self-start">
              <span>Tìm hiểu thêm</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 5. QUOTE BANNER & CORE VALUES SECTION                */}
      {/* ---------------------------------------------------- */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-14 space-y-8">
        {/* Yellow Quote Banner */}
        <div className="bg-[#ffd400] rounded-xl p-4 text-center">
          <p className="text-xs sm:text-sm font-black text-black uppercase tracking-tight">
            &quot; MWG CAM KẾT MANG ĐẾN CHO NHÂN VIÊN MỘT MÔI TRƯỜNG LÀM VIỆC THÂN THIỆN, VUI VẺ, CHUYÊN NGHIỆP, ỔN ĐỊNH VÀ CƠ HỘI CÔNG BẰNG TRONG THĂNG TIẾN. &quot;
          </p>
        </div>

        {/* Team Banner Visual */}
        <div className="rounded-2xl overflow-hidden shadow-md bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-500 p-8 text-center text-black font-black text-3xl tracking-widest uppercase">
          <div className="bg-white/80 backdrop-blur-xs py-6 px-4 rounded-xl border border-white/50 max-w-xl mx-auto shadow-inner">
            <span className="text-[#d4222f]">M</span>
            <span className="text-amber-600">W</span>
            <span className="text-emerald-600">G</span>
            <span className="text-zinc-800 text-lg block font-bold tracking-normal mt-1">
              Đồng Hành Phát Triển Sự Nghiệp
            </span>
          </div>
        </div>

        {/* Blue Dashed Border Core Values Container */}
        <div className="border-2 border-dashed border-sky-400 bg-sky-50/30 rounded-2xl p-6 sm:p-8 space-y-6">
          {/* GIÁ TRỊ CỐT LÕI Block */}
          <div className="space-y-3">
            <div className="inline-block bg-[#d4222f] text-white text-xs sm:text-sm font-black px-4 py-1.5 rounded uppercase tracking-wider">
              GIÁ TRỊ CỐT LÕI
            </div>
            <div className="text-xs sm:text-sm text-zinc-700 leading-relaxed font-medium space-y-1">
              <p className="font-bold text-zinc-900">Yêu thương và hỗ trợ đồng đội:</p>
              <p>
                - Thành thật quan tâm giúp đỡ đồng nghiệp, hướng đến cùng thực hiện thành công mục tiêu chung của tập đoàn.
              </p>
              <p>- Thành thật xin lỗi, nhận lỗi và sửa lỗi.</p>
              <p>
                - NGHIÊM TÚC: Đồng ý nghĩa là không giấu giếm, không che giấu lỗi sai của bản thân và đồng nghiệp.
              </p>
            </div>
          </div>

          {/* Photo Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="h-32 rounded-xl bg-amber-200 border border-amber-300 flex items-center justify-center text-amber-900 font-bold text-xs p-3 text-center">
              Hoạt động Team Building MWG
            </div>
            <div className="h-32 rounded-xl bg-emerald-200 border border-emerald-300 flex items-center justify-center text-emerald-900 font-bold text-xs p-3 text-center">
              Đào tạo nâng cao năng lực tại MWG Academy
            </div>
            <div className="h-32 rounded-xl bg-sky-200 border border-sky-300 flex items-center justify-center text-sky-900 font-bold text-xs p-3 text-center">
              Lễ vinh danh nhân viên xuất sắc
            </div>
          </div>

          {/* NIỀM TIN MWG Block */}
          <div className="space-y-3 pt-2">
            <div className="inline-block bg-[#d4222f] text-white text-xs sm:text-sm font-black px-4 py-1.5 rounded uppercase tracking-wider">
              NIỀM TIN MWG
            </div>
            <div className="text-xs sm:text-sm text-zinc-700 leading-relaxed font-medium">
              <p className="font-bold text-zinc-900">Ngũ hành:</p>
              <p>
                Thấu hiểu và sống đúng với các giá trị cốt lõi, cùng nhau tạo nên thành công bền vững cho tập đoàn Thế Giới Di Động.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 6. "VỀ CHÚNG TÔI" SECTION                            */}
      {/* ---------------------------------------------------- */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-14 space-y-6">
        <h2 className="text-xl sm:text-2xl font-black text-black text-center uppercase tracking-tight">
          VỀ CHÚNG TÔI
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-white rounded-xl p-6 border-t-4 border-t-[#d4222f] border border-zinc-200 shadow-xs space-y-2">
            <h3 className="text-base font-extrabold text-zinc-900 text-center">VỚI MWG</h3>
            <p className="text-xs text-zinc-600 text-center leading-relaxed">
              Tập thể đồng lòng hướng tới mục tiêu chung, không ngừng học hỏi và phát triển bản thân mỗi ngày.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-xl p-6 border-t-4 border-t-[#d4222f] border border-zinc-200 shadow-xs space-y-2">
            <h3 className="text-base font-extrabold text-zinc-900 text-center">TẠI MWG</h3>
            <p className="text-xs text-zinc-600 text-center leading-relaxed">
              Không chỉ là nơi làm việc mà là môi trường rèn luyện sự nghiệp, cống hiến và phát huy tối đa năng lực.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-xl p-6 border-t-4 border-t-[#d4222f] border border-zinc-200 shadow-xs space-y-2">
            <h3 className="text-base font-extrabold text-zinc-900 text-center">Ở MWG</h3>
            <p className="text-xs text-zinc-600 text-center leading-relaxed">
              Đảm bảo chế độ đãi ngộ công bằng, thu nhập hấp dẫn và môi trường làm việc hạnh phúc cho mọi thành viên.
            </p>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 7. "HỖ TRỢ GIẢI ĐÁP QUY TRÌNH" (FAQ ACCORDION)       */}
      {/* ---------------------------------------------------- */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 space-y-6">
        <h2 className="text-xl sm:text-2xl font-black text-black text-center uppercase tracking-tight">
          HỖ TRỢ GIẢI ĐÁP QUY TRÌNH
        </h2>

        {/* Tab Buttons */}
        <div className="flex items-center justify-center gap-3">
          <button
            onClick={() => setFaqTab('faq')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all border ${
              faqTab === 'faq'
                ? 'border-[#d4222f] text-[#d4222f] bg-red-50 shadow-xs'
                : 'border-zinc-200 text-zinc-600 hover:bg-zinc-50'
            }`}
          >
            <HelpCircle className="w-4 h-4" />
            <span>Các câu hỏi thường gặp</span>
          </button>
          <button
            onClick={() => setFaqTab('guide')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all border ${
              faqTab === 'guide'
                ? 'border-[#d4222f] text-[#d4222f] bg-red-50 shadow-xs'
                : 'border-zinc-200 text-zinc-600 hover:bg-zinc-50'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>Hướng dẫn chi tiết</span>
          </button>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-2 pt-2">
          {INTERNAL_FAQS.map((faq) => {
            const isOpen = expandedFaqId === faq.id
            return (
              <div
                key={faq.id}
                className="bg-white rounded-xl border border-zinc-200 overflow-hidden shadow-xs transition-all"
              >
                <button
                  onClick={() => handleFaqToggle(faq.id)}
                  className="w-full px-5 py-3.5 flex items-center justify-between text-left hover:bg-zinc-50 transition-colors"
                >
                  <span className="text-xs sm:text-sm font-bold text-zinc-800 pr-4">
                    {faq.id}. {faq.question}
                  </span>
                  <span className="text-zinc-400 font-bold text-lg shrink-0">
                    {isOpen ? '−' : '+'}
                  </span>
                </button>
                {isOpen && (
                  <div className="px-5 pb-4 text-xs sm:text-sm text-zinc-600 font-medium leading-relaxed border-t border-zinc-100 pt-3 bg-zinc-50/50">
                    {faq.answer}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 8. APPLICATION MODAL DIALOG                          */}
      {/* ---------------------------------------------------- */}
      {selectedApplyJob && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 space-y-4 shadow-2xl relative border border-zinc-200 animate-in fade-in zoom-in-95 duration-150">
            <button
              onClick={() => setSelectedApplyJob(null)}
              className="absolute top-4 right-4 text-zinc-400 hover:text-zinc-600 p-1"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-1">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#d4222f] bg-red-50 px-2 py-0.5 rounded">
                Ứng tuyển việc làm nội bộ
              </span>
              <h3 className="text-lg font-extrabold text-zinc-900 leading-tight">
                {selectedApplyJob.title}
              </h3>
              <p className="text-xs text-zinc-500 font-medium">
                {selectedApplyJob.brand} | {selectedApplyJob.department}
              </p>
            </div>

            {applySuccess ? (
              <div className="py-8 text-center space-y-2">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="text-base font-bold text-zinc-800">Đăng ký thành công!</h4>
                <p className="text-xs text-zinc-500">
                  Hồ sơ nguyện vọng nội bộ của bạn đã được gửi tới quản lý bộ phận duyệt.
                </p>
              </div>
            ) : (
              <form onSubmit={handleApplySubmit} className="space-y-4 pt-2">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-zinc-700 block">
                    Mã số nhân viên (MWG Staff ID) *
                  </label>
                  <input
                    type="text"
                    required
                    value={staffId}
                    onChange={(e) => setStaffId(e.target.value)}
                    placeholder="Ví dụ: 148920"
                    className="w-full px-3 py-2 border border-zinc-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#d4222f] font-medium"
                  />
                </div>

                <div className="bg-zinc-50 p-3 rounded-lg text-xs text-zinc-500 space-y-1 border border-zinc-200/60">
                  <p className="font-semibold text-zinc-700">Yêu cầu xác nhận:</p>
                  <p>✔ Bạn đã làm việc chính thức trên 6 tháng.</p>
                  <p>✔ Bạn đã trao đổi với quản lý trực tiếp trước khi nộp.</p>
                </div>

                <div className="flex gap-2 pt-2">
                  <button
                    type="button"
                    onClick={() => setSelectedApplyJob(null)}
                    className="flex-1 py-2.5 bg-zinc-100 hover:bg-zinc-200 text-zinc-800 text-xs font-bold rounded-lg transition-colors"
                  >
                    Hủy bỏ
                  </button>
                  <button
                    type="submit"
                    className="flex-1 py-2.5 bg-[#d4222f] hover:bg-red-700 text-white text-xs font-bold rounded-lg transition-colors shadow-sm"
                  >
                    Xác nhận nộp đơn
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
