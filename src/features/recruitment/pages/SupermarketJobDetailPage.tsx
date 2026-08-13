import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import {
  Play,
  X,
  MapPin,
  Clock,
  Award,
  Users,
  Briefcase,
  DollarSign,
  UserCheck,
  CheckCircle2,
  Copy,
  Check,
  ExternalLink,
  ChevronRight,
  Search,
} from 'lucide-react'

// Sample Store locations data for Supermarket Recruitment
const STORE_PROVINCES = [
  'Toàn quốc',
  'Thành phố Hồ Chí Minh',
  'Thành phố Hà Nội',
  'Thành phố Hải Phòng',
  'Thành phố Đà Nẵng',
  'Thành phố Cần Thơ',
  'Tỉnh Đồng Nai',
  'Tỉnh An Giang',
  'Tỉnh Bắc Ninh',
  'Tỉnh Cà Mau',
  'Tỉnh Đắk Lắk',
  'Tỉnh Đồng Tháp',
  'Tỉnh Gia Lai',
  'Tỉnh Hà Tĩnh',
  'Tỉnh Hưng Yên',
  'Tỉnh Khánh Hoà',
  'Tỉnh Lâm Đồng',
  'Tỉnh Nghệ An',
  'Tỉnh Ninh Bình',
  'Tỉnh Phú Thọ',
  'Tỉnh Quảng Ngãi',
  'Tỉnh Quảng Ninh',
  'Tỉnh Tây Ninh',
  'Tỉnh Thái Nguyên',
  'Tỉnh Thanh Hoá',
  'Tỉnh Vĩnh Long',
]

const SAMPLE_STORES = [
  {
    id: 's1',
    province: 'Thành phố Hồ Chí Minh',
    district: 'Quận Bình Thạnh',
    address: '553A Xô Viết Nghệ Tĩnh, Phường 26, Quận Bình Thạnh, TP. Hồ Chí Minh',
    mapsUrl: 'https://www.google.com/maps/place/10.8107434,106.7130258',
  },
  {
    id: 's2',
    province: 'Thành phố Hồ Chí Minh',
    district: 'TP. Thủ Đức',
    address: 'Số 418 QL 13, Phường Hiệp Bình Phước, TP. Thủ Đức, TP. Hồ Chí Minh',
    mapsUrl: 'https://www.google.com/maps/place/10.836261,106.713923',
  },
  {
    id: 's3',
    province: 'Thành phố Hồ Chí Minh',
    district: 'Quận 7',
    address: 'Số 45 Võ Thị Nhờ, Khu phố 1B, Phường Tân Thuận Đông, Quận 7, TP. Hồ Chí Minh',
    mapsUrl: 'https://www.google.com/maps/place/10.745086,106.731728',
  },
  {
    id: 's4',
    province: 'Tỉnh Đồng Nai',
    district: 'Huyện Xuân Lộc',
    address: 'Tổ 6, Ấp Thọ Chánh, Xã Xuân Thọ, Huyện Xuân Lộc, Tỉnh Đồng Nai',
    mapsUrl: 'https://www.google.com/maps/place/10.953049,107.331669',
  },
  {
    id: 's5',
    province: 'Thành phố Hà Nội',
    district: 'Quận Bắc Từ Liêm',
    address: '47 đường Đức Diễn, Phường Phúc Diễn, Q. Bắc Từ Liêm, Hà Nội',
    mapsUrl: 'https://www.google.com/maps/place/21.0502867,105.7517139',
  },
  {
    id: 's6',
    province: 'Tỉnh Quảng Ngãi',
    district: 'TP. Quảng Ngãi',
    address: '300 Lê Lợi, Phường Nghĩa Lộ, TP. Quảng Ngãi, Tỉnh Quảng Ngãi',
    mapsUrl: 'https://www.google.com/maps/place/15.1132895,108.7997306',
  },
]

export const SupermarketJobDetailPage = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false)
  const [selectedProvince, setSelectedProvince] = useState('Toàn quốc')
  const [searchStoreKeyword, setSearchStoreKeyword] = useState('')
  const [copiedLink, setCopiedLink] = useState(false)
  const [selectedStoreId, setSelectedStoreId] = useState<string>('s1')

  // Application Modal state
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false)
  const [fullName, setFullName] = useState('')
  const [phone, setPhone] = useState('')
  const [applyProvince, setApplyProvince] = useState('Thành phố Hồ Chí Minh')
  const [isSubmitted, setIsSubmitted] = useState(false)

  // Filtered stores
  const filteredStores = useMemo(() => {
    return SAMPLE_STORES.filter((st) => {
      if (selectedProvince !== 'Toàn quốc' && !st.province.toLowerCase().includes(selectedProvince.toLowerCase())) {
        return false
      }
      if (searchStoreKeyword.trim()) {
        const q = searchStoreKeyword.toLowerCase()
        return st.address.toLowerCase().includes(q) || st.district.toLowerCase().includes(q)
      }
      return true
    })
  }, [selectedProvince, searchStoreKeyword])

  const handleCopyLink = () => {
    const url = window.location.href
    navigator.clipboard.writeText(url)
    setCopiedLink(true)
    setTimeout(() => setCopiedLink(false), 2500)
  }

  const handleApplyFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!fullName.trim() || !phone.trim()) return
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
      setIsApplyModalOpen(false)
      setFullName('')
      setPhone('')
    }, 2200)
  }

  return (
    <div className="w-full min-h-screen bg-slate-50 text-zinc-900 pb-20 font-sans">
      {/* -------------------------------------------------------- */}
      {/* 1. BREADCRUMB BAR                                        */}
      {/* -------------------------------------------------------- */}
      <div className="bg-white border-b border-slate-200 py-3 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto flex items-center gap-2 text-xs sm:text-sm font-medium text-zinc-600">
          <Link to="/jobs" className="text-[#c80915] hover:underline">
            Tất cả việc làm
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
          <Link to="/jobs?category=sales-supermarket" className="text-[#c80915] hover:underline truncate">
            Bán hàng/Thu ngân/Kỹ thuật/Kho siêu thị
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
          <span className="text-zinc-900 font-semibold truncate">
            Nhân Viên Siêu Thị Bách Hóa Xanh
          </span>
        </div>
      </div>

      {/* -------------------------------------------------------- */}
      {/* 2. HERO BANNER WITH VIDEO POPUP LINK                      */}
      {/* -------------------------------------------------------- */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-5">
        <div className="relative rounded-2xl overflow-hidden shadow-md bg-[#80040d] group">
          {/* Supermarket Banner Background Image */}
          <div className="relative h-48 sm:h-64 w-full bg-gradient-to-r from-[#90050f] via-[#c80915] to-[#80040d] flex items-center justify-between px-6 sm:px-12 overflow-hidden">
            {/* Background graphics / overlay pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-red-400/20 via-transparent to-transparent pointer-events-none" />

            {/* Left Tag & Visual Heading */}
            <div className="relative z-10 space-y-2 max-w-xl text-white">
              <span className="inline-block bg-[#ffd400] text-black text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider shadow-xs">
                Supermarket Recruitment
              </span>
              <h1 className="text-xl sm:text-3xl font-extrabold tracking-tight text-white drop-shadow-xs">
                NHÂN VIÊN SIÊU THỊ BÁCH HÓA XANH
              </h1>
              <p className="text-xs sm:text-sm text-red-100 font-medium line-clamp-2">
                Hơn 3.000 siêu thị trên toàn quốc - Thu nhập hấp dẫn, môi trường làm việc gần nhà, thăng tiến công bằng.
              </p>
            </div>

            {/* Video Thumbnail Button */}
            <button
              onClick={() => setIsVideoOpen(true)}
              className="relative z-10 shrink-0 flex flex-col items-center gap-2 bg-black/40 hover:bg-black/60 backdrop-blur-md border border-white/30 text-white p-3 sm:px-5 sm:py-4 rounded-xl transition-transform hover:scale-105 cursor-pointer shadow-lg group-hover:border-yellow-400"
            >
              <div className="w-12 h-12 rounded-full bg-[#ffd400] text-black flex items-center justify-center shadow-md">
                <Play className="w-6 h-6 fill-black ml-0.5" />
              </div>
              <span className="text-xs font-bold text-yellow-300 hidden sm:block">
                Xem video giới thiệu công việc
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* -------------------------------------------------------- */}
      {/* 3. JOB TITLE CARD & ACTION BAR                           */}
      {/* -------------------------------------------------------- */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-7 shadow-xs space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-5">
            <div className="flex items-start gap-4">
              {/* Deep Red Brand Icon Box */}
              <div className="w-14 h-14 rounded-2xl bg-[#c80915] text-white flex items-center justify-center font-black text-xl shrink-0 shadow-md">
                BHX
              </div>
              <div className="space-y-1">
                <h2 className="text-xl sm:text-2xl font-black text-zinc-900 tracking-tight leading-tight">
                  Nhân Viên Siêu Thị Bách Hóa Xanh
                </h2>
                <div className="flex flex-wrap items-center gap-3 text-xs text-zinc-500 font-medium">
                  <span>Hạn nhận hồ sơ: <strong className="text-zinc-800">31/10/2030</strong></span>
                  <span className="text-slate-300">•</span>
                  <span className="text-[#c80915] bg-red-50 px-2 py-0.5 rounded font-semibold border border-red-200">
                    Đang tuyển dụng gấp
                  </span>
                </div>
              </div>
            </div>

            {/* Apply Button Top (Using Standard Deep Red Color #c80915) */}
            <div className="flex items-center gap-3 self-start md:self-auto">
              <Link
                to="/ho-so/cong-tac-vien-part-time-sieu-thi-bach-hoa-xanh-258?job=Nhan-Vien-Sieu-Thi-Bach-Hoa-Xanh"
                className="bg-[#c80915] hover:bg-[#b00712] text-white font-extrabold text-sm px-7 py-3 rounded-xl shadow-md transition-all cursor-pointer active:scale-95 flex items-center gap-2"
              >
                <span>Ứng tuyển ngay</span>
              </Link>
            </div>
          </div>

          {/* 7 Key Job Specifications Grid */}
          <div className="space-y-3">
            <h3 className="text-xs font-black text-zinc-400 uppercase tracking-wider">
              CHI TIẾT TUYỂN DỤNG
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-3">
              {/* Metric 1 */}
              <div className="bg-slate-50 border border-slate-200/80 p-3 rounded-xl space-y-1">
                <div className="flex items-center gap-1.5 text-xs text-zinc-500 font-semibold">
                  <DollarSign className="w-4 h-4 text-[#c80915]" />
                  <span>Thu nhập</span>
                </div>
                <p className="text-xs sm:text-sm font-extrabold text-[#c80915]">
                  9 - 12 triệu
                </p>
              </div>

              {/* Metric 2 */}
              <div className="bg-slate-50 border border-slate-200/80 p-3 rounded-xl space-y-1">
                <div className="flex items-center gap-1.5 text-xs text-zinc-500 font-semibold">
                  <Clock className="w-4 h-4 text-sky-600" />
                  <span>Hình thức</span>
                </div>
                <p className="text-xs sm:text-sm font-extrabold text-zinc-900">
                  Việc làm theo ca
                </p>
              </div>

              {/* Metric 3 */}
              <div className="bg-slate-50 border border-slate-200/80 p-3 rounded-xl space-y-1">
                <div className="flex items-center gap-1.5 text-xs text-zinc-500 font-semibold">
                  <Award className="w-4 h-4 text-amber-600" />
                  <span>Bằng cấp</span>
                </div>
                <p className="text-xs sm:text-sm font-extrabold text-zinc-900">
                  Không yêu cầu
                </p>
              </div>

              {/* Metric 4 */}
              <div className="bg-slate-50 border border-slate-200/80 p-3 rounded-xl space-y-1">
                <div className="flex items-center gap-1.5 text-xs text-zinc-500 font-semibold">
                  <MapPin className="w-4 h-4 text-[#c80915]" />
                  <span>Nơi làm việc</span>
                </div>
                <p className="text-xs sm:text-sm font-extrabold text-zinc-900 truncate" title="TP.HCM và 27 tỉnh thành khác">
                  TP.HCM & 27 tỉnh
                </p>
              </div>

              {/* Metric 5 */}
              <div className="bg-slate-50 border border-slate-200/80 p-3 rounded-xl space-y-1">
                <div className="flex items-center gap-1.5 text-xs text-zinc-500 font-semibold">
                  <Briefcase className="w-4 h-4 text-indigo-600" />
                  <span>Kinh nghiệm</span>
                </div>
                <p className="text-xs sm:text-sm font-extrabold text-zinc-900">
                  Không cần KN
                </p>
              </div>

              {/* Metric 6 */}
              <div className="bg-slate-50 border border-slate-200/80 p-3 rounded-xl space-y-1">
                <div className="flex items-center gap-1.5 text-xs text-zinc-500 font-semibold">
                  <UserCheck className="w-4 h-4 text-purple-600" />
                  <span>Cấp bậc</span>
                </div>
                <p className="text-xs sm:text-sm font-extrabold text-zinc-900">
                  Nhân viên
                </p>
              </div>

              {/* Metric 7 */}
              <div className="bg-slate-50 border border-slate-200/80 p-3 rounded-xl space-y-1 col-span-2 sm:col-span-1">
                <div className="flex items-center gap-1.5 text-xs text-zinc-500 font-semibold">
                  <Users className="w-4 h-4 text-[#c80915]" />
                  <span>Số lượng tuyển</span>
                </div>
                <p className="text-xs sm:text-sm font-extrabold text-[#c80915]">
                  24.061 người
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* -------------------------------------------------------- */}
      {/* 4. MAIN CONTENT LAYOUT (LEFT 8 COLS, RIGHT 4 COLS)       */}
      {/* -------------------------------------------------------- */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* LEFT COLUMN: Details, Benefits, Work description, Locations, Form */}
        <div className="lg:col-span-8 space-y-6">
          {/* Benefits Section */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4">
            <h3 className="text-base font-extrabold text-zinc-900 border-b border-slate-100 pb-3 flex items-center gap-2">
              <span className="w-2 h-5 bg-[#c80915] rounded-full inline-block" />
              <span>PHÚC LỢI</span>
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
              {[
                '12 ngày phép năm',
                'Bảo hiểm (BHYT, BHXH)',
                'Bảo hiểm thất nghiệp',
                'Chế độ Công đoàn',
                'Chế độ Hôn hỷ/Tang chế',
                'Chế độ ốm đau',
                'Chế độ Thai sản',
                'Cơ hội thăng tiến',
                'Đào tạo phát triển',
                'Làm việc gần nhà',
                'Mua hàng ưu đãi',
                'Thưởng cuối năm',
                'Thưởng nóng',
                'Thưởng tháng',
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-red-50/60 border border-red-200/80 text-red-950 text-xs font-semibold px-3 py-2 rounded-xl flex items-center gap-2"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#c80915] shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Detailed Description & Requirements */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-6 text-sm text-zinc-800 leading-relaxed">
            {/* About Paragraph */}
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/70 text-xs sm:text-sm text-zinc-700 leading-relaxed font-medium">
              Bách Hóa XANH là thành viên của MWG – tập đoàn nhiều năm liền đứng trong top các nhà bán lẻ hàng đầu Châu Á, sở hữu các chuỗi lớn như thegioididong.com và Điện Máy Xanh. Cả 3 thương hiệu này đều nằm trong top 100 thương hiệu giá trị nhất Việt Nam.
              Bách Hóa XANH hiện đã trở thành top nhà bán lẻ tạp hóa hiện đại với hơn 3.000 cửa hàng trên toàn quốc. Để tiếp tục phát triển, chúng tôi đang tìm kiếm những nhân sự năng động, nhiệt huyết gia nhập đội ngũ.
            </div>

            {/* MÔ TẢ CÔNG VIỆC */}
            <div className="space-y-3">
              <h4 className="text-base font-black text-zinc-900 uppercase tracking-tight">
                MÔ TẢ CÔNG VIỆC
              </h4>
              <p className="font-bold text-[#c80915]">
                Luân phiên công việc trong và ngoài siêu thị.
              </p>

              <div className="space-y-2 text-xs sm:text-sm font-medium">
                <p className="font-bold text-zinc-900">(*) Bên trong siêu thị:</p>
                <ul className="list-disc pl-5 space-y-1 text-zinc-700">
                  <li>1. Tư vấn, bán hàng, thu ngân.</li>
                  <li>2. Nhập hàng, trưng bày, châm hàng, kiểm kê.</li>
                  <li>3. Sơ chế/đóng vỉ thực phẩm tươi sống (rau, thịt, cá…).</li>
                  <li>4. Giữ an toàn vệ sinh thực phẩm bên trong siêu thị.</li>
                </ul>

                <p className="font-bold text-zinc-900 pt-2">(*) Bên ngoài siêu thị:</p>
                <ul className="list-disc pl-5 space-y-1 text-zinc-700">
                  <li>1. Sắp xếp bãi xe gọn gàng, sạch sẽ.</li>
                  <li>2. Trông giữ xe, đón Khách hàng.</li>
                  <li className="italic text-zinc-500">
                    (*) Và các công việc khác theo sự sắp xếp của Quản lý cửa hàng.
                  </li>
                </ul>
              </div>
            </div>

            {/* YÊU CẦU CÔNG VIỆC */}
            <div className="space-y-3 border-t border-slate-100 pt-5">
              <h4 className="text-base font-black text-zinc-900 uppercase tracking-tight">
                YÊU CẦU CÔNG VIỆC
              </h4>
              <ol className="list-decimal pl-5 space-y-1 text-xs sm:text-sm font-medium text-zinc-700">
                <li>Tuổi từ 18 đến dưới 40.</li>
                <li>Sức khỏe tốt, thân thiện, siêng năng, lịch sự và vui vẻ.</li>
                <li>Làm việc trong bán kính 10 km.</li>
              </ol>
              <p className="text-xs font-bold text-[#c80915] bg-red-50 p-2.5 rounded-lg border border-red-200">
                (*) Ứng viên cần chuẩn bị số tài khoản của Ngân hàng VietinBank hoặc MB Bank trước ngày nhận việc.
              </p>
            </div>

            {/* THỜI GIAN LÀM VIỆC */}
            <div className="space-y-2 border-t border-slate-100 pt-5">
              <h4 className="text-base font-black text-zinc-900 uppercase tracking-tight">
                THỜI GIAN LÀM VIỆC
              </h4>
              <p className="text-xs sm:text-sm font-medium text-zinc-700">
                Sẵn sàng làm việc theo ca xoay/ca gãy (Ca 1: 5h30 - 14h30 | Ca 2: 14h30 - 22h00).
              </p>
            </div>

            {/* View Counter */}
            <div className="pt-2 text-xs font-semibold text-zinc-400 border-t border-slate-100 flex items-center justify-between">
              <span>795.748 lượt xem.</span>
              <span className="text-[#c80915] font-bold">Mã việc làm: BHX-45</span>
            </div>
          </div>

          {/* Interactive Store Location Selector */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-3">
              <h3 className="text-base font-extrabold text-zinc-900 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-[#c80915]" />
                <span>Chọn địa điểm làm việc (28 tỉnh thành)</span>
              </h3>

              <div className="flex items-center gap-1.5 text-xs text-[#c80915] font-bold bg-red-50 px-3 py-1 rounded-full border border-red-200">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Tìm địa điểm gần bạn</span>
              </div>
            </div>

            {/* Filter Search Bar */}
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-3">
              <div className="sm:col-span-5 relative">
                <select
                  value={selectedProvince}
                  onChange={(e) => setSelectedProvince(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-xs font-semibold text-zinc-800 focus:outline-none cursor-pointer"
                >
                  {STORE_PROVINCES.map((prov) => (
                    <option key={prov} value={prov}>
                      {prov}
                    </option>
                  ))}
                </select>
              </div>

              <div className="sm:col-span-7 relative">
                <input
                  type="text"
                  value={searchStoreKeyword}
                  onChange={(e) => setSearchStoreKeyword(e.target.value)}
                  placeholder="Nhập quận/huyện hoặc đường để tìm nhanh siêu thị..."
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 pr-8 text-xs text-zinc-800 focus:outline-none placeholder:text-zinc-400 font-medium"
                />
                <Search className="w-4 h-4 text-zinc-400 absolute right-3 top-2.5 pointer-events-none" />
              </div>
            </div>

            {/* Stores List */}
            <div className="space-y-2 pt-2 max-h-80 overflow-y-auto pr-1">
              {filteredStores.length > 0 ? (
                filteredStores.map((st) => (
                  <label
                    key={st.id}
                    onClick={() => setSelectedStoreId(st.id)}
                    className={`block p-3 rounded-xl border transition-all cursor-pointer ${
                      selectedStoreId === st.id
                        ? 'border-[#c80915] bg-red-50/40 shadow-xs'
                        : 'border-slate-200 hover:border-slate-300 bg-white'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <input
                        type="radio"
                        name="store"
                        checked={selectedStoreId === st.id}
                        onChange={() => setSelectedStoreId(st.id)}
                        className="mt-1 text-[#c80915] focus:ring-[#c80915]"
                      />
                      <div className="flex-1 space-y-1">
                        <p className="text-xs sm:text-sm font-semibold text-zinc-800 leading-snug">
                          {st.address}
                        </p>
                        <a
                          href={st.mapsUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex items-center gap-1 text-xs font-bold text-[#c80915] hover:underline"
                        >
                          <span>Chỉ đường trên Google Maps</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                    </div>
                  </label>
                ))
              ) : (
                <div className="text-center py-6 text-xs text-zinc-500">
                  Không tìm thấy siêu thị phù hợp với điều kiện tìm kiếm.
                </div>
              )}
            </div>
          </div>

          {/* 5-Step Recruitment Process Visual */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-5">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="text-base font-extrabold text-zinc-900 uppercase tracking-tight">
                QUY TRÌNH TUYỂN DỤNG
              </h3>
              <Link to="/quy-trinh" className="text-xs font-bold text-[#c80915] hover:underline">
                Xem chi tiết tại đây
              </Link>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 text-center">
              {[
                { step: 'Bước 1', title: 'ĐĂNG KÝ HỒ SƠ', color: 'bg-red-50 border-red-200 text-[#c80915]' },
                { step: 'Bước 2', title: 'SÀNG LỌC HỒ SƠ', color: 'bg-[#c80915]/10 border-red-300 text-[#c80915]' },
                { step: 'Bước 3', title: 'PHỎNG VẤN', color: 'bg-red-50 border-red-200 text-[#c80915]' },
                { step: 'Bước 4', title: 'KIỂM TRA KẾT QUẢ', color: 'bg-[#c80915]/10 border-red-300 text-[#c80915]' },
                { step: 'Bước 5', title: 'ONBOARDING NHẬN VIỆC', color: 'bg-red-50 border-red-200 text-[#c80915]' },
              ].map((item, index) => (
                <div
                  key={index}
                  className={`p-3 rounded-xl border ${item.color} flex flex-col justify-between space-y-2 shadow-2xs`}
                >
                  <span className="text-[10px] font-black uppercase tracking-wider opacity-80">
                    {item.step}
                  </span>
                  <strong className="text-xs font-extrabold leading-tight">
                    {item.title}
                  </strong>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Action Bar */}
          <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
            <Link
              to="/ho-so/cong-tac-vien-part-time-sieu-thi-bach-hoa-xanh-258?job=Nhan-Vien-Sieu-Thi-Bach-Hoa-Xanh"
              className="w-full sm:w-auto flex-1 bg-[#c80915] hover:bg-[#b00712] text-white font-extrabold text-base py-3.5 px-8 rounded-xl shadow-md transition-transform hover:scale-[1.01] cursor-pointer text-center"
            >
              Ứng tuyển công việc này
            </Link>

            <button
              onClick={handleCopyLink}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-zinc-800 font-bold text-xs py-3.5 px-6 rounded-xl border border-slate-300 transition-colors cursor-pointer"
            >
              {copiedLink ? (
                <>
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span className="text-emerald-700">Đã copy link!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-zinc-600" />
                  <span>Copy Link</span>
                </>
              )}
            </button>
          </div>

          {/* Fanpage Banner Support Card */}
          <div className="bg-gradient-to-r from-[#c80915] to-[#80040d] text-white rounded-2xl p-5 shadow-md flex items-center justify-between gap-4">
            <div className="space-y-1">
              <h4 className="text-base font-extrabold">Ghé Fanpage tuyển dụng Siêu thị</h4>
              <p className="text-xs text-red-100 font-medium">
                Giải đáp mọi thắc mắc và cập nhật lịch phỏng vấn nhanh nhất!
              </p>
            </div>
            <a
              href="https://www.facebook.com/tuyendungbhx/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#ffd400] hover:bg-yellow-400 text-black font-extrabold text-xs px-4 py-2.5 rounded-xl shadow-xs shrink-0 transition-transform hover:scale-105"
            >
              Truy cập ngay
            </a>
          </div>
        </div>

        {/* RIGHT COLUMN: Group Info & Related Jobs Sidebar */}
        <div className="lg:col-span-4 space-y-6">
          {/* Job Group Card */}
          <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs space-y-3">
            <h4 className="text-xs font-black text-zinc-400 uppercase tracking-wider">
              NHÓM NGÀNH NGHỀ
            </h4>
            <div className="bg-red-50 border border-red-200 p-3 rounded-xl text-xs font-bold text-[#c80915]">
              <Link to="/jobs?category=sales-supermarket" className="hover:underline flex items-center justify-between">
                <span>Bán hàng/Thu ngân/Kỹ thuật/Kho siêu thị</span>
                <ChevronRight className="w-4 h-4 text-[#c80915] shrink-0" />
              </Link>
            </div>
          </div>

          {/* Related Jobs Box */}
          <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs space-y-4">
            <h4 className="text-xs font-black text-zinc-400 uppercase tracking-wider">
              VIỆC LÀM LIÊN QUAN
            </h4>

            <div className="space-y-3">
              {[
                {
                  id: 'job-2',
                  title: 'Cộng Tác Viên (Part-time) Siêu Thị Bách Hóa Xanh',
                  salary: 'Lương theo giờ',
                  location: 'Hồ Chí Minh & 8 tỉnh',
                },
                {
                  id: 'job-3',
                  title: 'Quản Lý Siêu Thị Bách Hóa Xanh / Thế Giới Di Động',
                  salary: '15 - 25 triệu',
                  location: 'Hồ Chí Minh & 15 tỉnh',
                },
                {
                  id: 'job-4',
                  title: 'Dược Sĩ Nhà Thuốc An Khang',
                  salary: '10 - 15 triệu',
                  location: 'Hồ Chí Minh, Hà Nội',
                },
                {
                  id: 'job-[#tuyen-dung-avakids]',
                  title: 'Nhân Viên Tư Vấn Bán Hàng AVAKids',
                  salary: '8 - 11 triệu',
                  location: 'Cần Thơ & An Giang',
                },
              ].map((relJob, i) => (
                <Link
                  key={i}
                  to={`/tuyen-dung/${relJob.id}`}
                  className="block p-3 rounded-xl border border-slate-200 hover:border-red-400 hover:bg-red-50/40 transition-all group space-y-1"
                >
                  <h5 className="text-xs sm:text-sm font-bold text-zinc-900 group-hover:text-[#c80915] line-clamp-2 leading-snug">
                    {relJob.title}
                  </h5>
                  <div className="flex items-center justify-between text-[11px] text-zinc-500 font-medium pt-1">
                    <span className="text-[#c80915] font-bold">{relJob.salary}</span>
                    <span>{relJob.location}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* -------------------------------------------------------- */}
      {/* 5. VIDEO MODAL POPUP                                     */}
      {/* -------------------------------------------------------- */}
      {isVideoOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl bg-black rounded-2xl overflow-hidden shadow-2xl border border-zinc-800">
            {/* Close Button */}
            <button
              onClick={() => setIsVideoOpen(false)}
              className="absolute top-3 right-3 z-10 bg-black/60 hover:bg-black text-white p-2 rounded-full border border-white/20 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="aspect-video w-full">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/27r9rRZogZw?autoplay=1"
                title="Video giới thiệu công việc Nhân Viên Siêu Thị Bách Hóa Xanh"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}

      {/* -------------------------------------------------------- */}
      {/* 6. QUICK APPLICATION FORM MODAL                          */}
      {/* -------------------------------------------------------- */}
      {isApplyModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-150">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 space-y-5 shadow-2xl relative border border-slate-200">
            <button
              onClick={() => setIsApplyModalOpen(false)}
              className="absolute top-4 right-4 text-zinc-400 hover:text-zinc-600 p-1"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-1">
              <span className="text-[10px] font-black uppercase tracking-wider text-[#c80915] bg-red-50 px-2 py-0.5 rounded border border-red-200">
                Ứng tuyển trực tiếp Siêu thị
              </span>
              <h3 className="text-lg font-black text-zinc-900 leading-tight">
                Nhân Viên Siêu Thị Bách Hóa Xanh
              </h3>
              <p className="text-xs text-zinc-500 font-medium">
                Vui lòng điền thông tin để Bộ phận tuyển dụng liên hệ phỏng vấn.
              </p>
            </div>

            {isSubmitted ? (
              <div className="py-8 text-center space-y-3">
                <div className="w-14 h-14 rounded-full bg-red-100 text-[#c80915] flex items-center justify-center mx-auto shadow-xs">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-base font-extrabold text-zinc-900">Ứng tuyển thành công!</h4>
                <p className="text-xs text-zinc-600 font-medium">
                  Cảm ơn bạn! Thông tin của bạn đã được chuyển tới bộ phận Tuyển dụng Siêu thị. Chúng tôi sẽ liên hệ trong vòng 24h.
                </p>
              </div>
            ) : (
              <form onSubmit={handleApplyFormSubmit} className="space-y-4 pt-1">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-zinc-700 block">
                    Họ và tên của bạn *
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Ví dụ: Nguyễn Văn A"
                    className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#c80915] font-medium"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-zinc-700 block">
                    Số điện thoại liên hệ *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Ví dụ: 0912345678"
                    className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#c80915] font-medium"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-zinc-700 block">
                    Tỉnh/Thành phố nguyện vọng *
                  </label>
                  <select
                    value={applyProvince}
                    onChange={(e) => setApplyProvince(e.target.value)}
                    className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#c80915] font-medium bg-white cursor-pointer"
                  >
                    {STORE_PROVINCES.filter((p) => p !== 'Toàn quốc').map((p) => (
                      <option key={p} value={p}>
                        {p}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="flex gap-2 pt-2">
                  <button
                    type="button"
                    onClick={() => setIsApplyModalOpen(false)}
                    className="flex-1 py-2.5 bg-slate-100 hover:bg-slate-200 text-zinc-800 text-xs font-bold rounded-xl transition-colors"
                  >
                    Hủy bỏ
                  </button>
                  <button
                    type="submit"
                    className="flex-1 py-2.5 bg-[#c80915] hover:bg-[#b00712] text-white text-xs font-bold rounded-xl transition-colors shadow-sm"
                  >
                    Gửi hồ sơ ngay
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
