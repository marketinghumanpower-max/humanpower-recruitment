import { useState, useMemo } from 'react'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import {
  MapPin,
  User,
  CheckCircle2,
  ChevronRight,
  Search,
  ArrowLeft,
  Calendar,
  Phone,
  CreditCard,
  GraduationCap,
  Sparkles,
} from 'lucide-react'

const PROVINCES = [
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
    name: 'Siêu thị Bách Hóa Xanh Xô Viết Nghệ Tĩnh',
    province: 'Thành phố Hồ Chí Minh',
    district: 'Quận Bình Thạnh',
    address: '553A Xô Viết Nghệ Tĩnh, P. 26, Q. Bình Thạnh, TP. Hồ Chí Minh',
  },
  {
    id: 's2',
    name: 'Siêu thị Bách Hóa Xanh QL13',
    province: 'Thành phố Hồ Chí Minh',
    district: 'TP. Thủ Đức',
    address: 'Số 418 QL 13, P. Hiệp Bình Phước, TP. Thủ Đức, TP. Hồ Chí Minh',
  },
  {
    id: 's3',
    name: 'Siêu thị Bách Hóa Xanh Võ Thị Nhờ',
    province: 'Thành phố Hồ Chí Minh',
    district: 'Quận 7',
    address: 'Số 45 Võ Thị Nhờ, KP. 1B, P. Tân Thuận Đông, Quận 7, TP. Hồ Chí Minh',
  },
  {
    id: 's4',
    name: 'Siêu thị Bách Hóa Xanh Xuân Thọ',
    province: 'Tỉnh Đồng Nai',
    district: 'Huyện Xuân Lộc',
    address: 'Tổ 6, Ấp Thọ Chánh, Xã Xuân Thọ, Huyện Xuân Lộc, Tỉnh Đồng Nai',
  },
  {
    id: 's5',
    name: 'Siêu thị Bách Hóa Xanh Đức Diễn',
    province: 'Thành phố Hà Nội',
    district: 'Quận Bắc Từ Liêm',
    address: '47 đường Đức Diễn, P. Phúc Diễn, Q. Bắc Từ Liêm, Hà Nội',
  },
]

export const JobApplicationPage = () => {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()

  const jobTitleParam =
    searchParams.get('job') || 'Cộng Tác Viên (Part-time) Siêu Thị Bách Hoá Xanh'

  // Application Steps: 1. Location -> 2. Info -> 3. Confirm
  const [currentStep, setCurrentStep] = useState<1 | 2 | 3>(1)

  // Step 1: Location Form State
  const [selectedProvince, setSelectedProvince] = useState('Thành phố Hồ Chí Minh')
  const [searchWardKeyword, setSearchWardKeyword] = useState('')
  const [selectedStoreId, setSelectedStoreId] = useState('s1')

  // Step 2: Personal Info State
  const [fullName, setFullName] = useState('')
  const [phone, setPhone] = useState('')
  const [dob, setDob] = useState('')
  const [gender, setGender] = useState<'Nam' | 'Nữ'>('Nam')
  const [idCard, setIdCard] = useState('')
  const [education, setEducation] = useState('THPT (12/12)')

  // Step 3: Success state
  const [isCompleted, setIsCompleted] = useState(false)

  // Filtered stores list
  const filteredStores = useMemo(() => {
    return SAMPLE_STORES.filter((st) => {
      if (st.province !== selectedProvince) return false
      if (searchWardKeyword.trim()) {
        const q = searchWardKeyword.toLowerCase()
        return st.address.toLowerCase().includes(q) || st.name.toLowerCase().includes(q)
      }
      return true
    })
  }, [selectedProvince, searchWardKeyword])

  const selectedStore = useMemo(() => {
    return SAMPLE_STORES.find((s) => s.id === selectedStoreId) || SAMPLE_STORES[0]
  }, [selectedStoreId])

  const handleNextStep1 = (e: React.FormEvent) => {
    e.preventDefault()
    setCurrentStep(2)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleNextStep2 = (e: React.FormEvent) => {
    e.preventDefault()
    if (!fullName.trim() || !phone.trim()) return
    setCurrentStep(3)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleFinalSubmit = () => {
    setIsCompleted(true)
  }

  return (
    <div className="w-full min-h-screen bg-slate-100 text-zinc-900 pb-24 font-sans">
      {/* Top Header Title Box */}
      <div className="bg-[#80040d] text-white pt-6 pb-8 px-4 sm:px-6 lg:px-8 border-b border-red-900 shadow-md">
        <div className="max-w-3xl mx-auto space-y-3 text-center">
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-1.5 text-xs text-red-200 hover:text-white font-semibold transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Quay lại chi tiết tuyển dụng</span>
          </button>

          <p className="text-xs uppercase tracking-wider text-red-200 font-bold">
            BẠN ĐANG ỨNG TUYỂN VỊ TRÍ
          </p>
          <h1 className="text-xl sm:text-2xl font-black text-yellow-300 tracking-tight leading-snug">
            {jobTitleParam}
          </h1>
        </div>
      </div>

      {/* Step Progress Bar Card */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 -mt-4">
        <div className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-md space-y-4">
          <p className="text-xs sm:text-sm font-extrabold text-zinc-700 text-center">
            Bạn đang thực hiện {currentStep}/3 bước ứng tuyển
          </p>

          {/* Progress Steps Indicators */}
          <div className="flex items-center justify-between relative px-4 sm:px-12">
            <div className="absolute top-4 left-10 right-10 h-1 bg-slate-200 -z-0" />
            <div
              className="absolute top-4 left-10 h-1 bg-[#c80915] transition-all duration-300 -z-0"
              style={{ width: currentStep === 1 ? '0%' : currentStep === 2 ? '50%' : '100%' }}
            />

            {/* Step 1 */}
            <div className="relative z-10 flex flex-col items-center gap-1">
              <div
                className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-xs shadow-xs transition-colors ${
                  currentStep >= 1
                    ? 'bg-[#c80915] text-white ring-4 ring-red-100'
                    : 'bg-slate-200 text-zinc-500'
                }`}
              >
                1
              </div>
              <span
                className={`text-[11px] font-extrabold ${
                  currentStep >= 1 ? 'text-[#c80915]' : 'text-zinc-400'
                }`}
              >
                Chọn địa điểm
              </span>
            </div>

            {/* Step 2 */}
            <div className="relative z-10 flex flex-col items-center gap-1">
              <div
                className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-xs shadow-xs transition-colors ${
                  currentStep >= 2
                    ? 'bg-[#c80915] text-white ring-4 ring-red-100'
                    : 'bg-slate-200 text-zinc-500'
                }`}
              >
                2
              </div>
              <span
                className={`text-[11px] font-extrabold ${
                  currentStep >= 2 ? 'text-[#c80915]' : 'text-zinc-400'
                }`}
              >
                Điền thông tin
              </span>
            </div>

            {/* Step 3 */}
            <div className="relative z-10 flex flex-col items-center gap-1">
              <div
                className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-xs shadow-xs transition-colors ${
                  currentStep === 3
                    ? 'bg-[#c80915] text-white ring-4 ring-red-100'
                    : 'bg-slate-200 text-zinc-500'
                }`}
              >
                3
              </div>
              <span
                className={`text-[11px] font-extrabold ${
                  currentStep === 3 ? 'text-[#c80915]' : 'text-zinc-400'
                }`}
              >
                Xác nhận
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Wizard Forms Container */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        {/* SUCCESS COMPLETED SCREEN */}
        {isCompleted ? (
          <div className="bg-white rounded-2xl border border-slate-200 p-8 sm:p-12 text-center space-y-5 shadow-lg animate-in zoom-in-95 duration-200">
            <div className="w-20 h-20 bg-red-50 text-[#c80915] rounded-full flex items-center justify-center mx-auto shadow-sm">
              <CheckCircle2 className="w-12 h-12" />
            </div>
            <div className="space-y-2">
              <span className="text-xs font-black uppercase text-[#c80915] tracking-wider bg-red-50 px-3 py-1 rounded-full border border-red-200">
                Gửi Hồ Sơ Thành Công
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-zinc-900">
                Chúc mừng {fullName}!
              </h2>
              <p className="text-sm text-zinc-600 font-medium max-w-md mx-auto leading-relaxed">
                Hồ sơ ứng tuyển vị trí <strong>{jobTitleParam}</strong> tại{' '}
                <strong>{selectedStore.name}</strong> đã được ghi nhận vào hệ thống Tuyển dụng.
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl text-xs text-zinc-600 font-medium text-left max-w-lg mx-auto space-y-1.5">
              <p className="font-bold text-zinc-800">Thông tin ứng tuyển của bạn:</p>
              <p>• Họ tên: {fullName}</p>
              <p>• Số điện thoại: {phone}</p>
              <p>• Nơi làm việc: {selectedStore.address}</p>
              <p>• Mã hồ sơ: <span className="text-[#c80915] font-bold">HS-{Math.floor(100000 + Math.random() * 900000)}</span></p>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                to="/jobs"
                className="w-full sm:w-auto px-8 py-3 bg-[#c80915] hover:bg-[#b00712] text-white font-extrabold text-xs sm:text-sm rounded-xl shadow-md transition-colors"
              >
                Về trang chủ tìm việc
              </Link>
            </div>
          </div>
        ) : (
          /* STEP 1: CHỌN ĐỊA ĐIỂM LÀM VIỆC */
          currentStep === 1 && (
            <form
              onSubmit={handleNextStep1}
              className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-md space-y-6 animate-in fade-in duration-150"
            >
              <div className="border-b border-slate-100 pb-3">
                <h3 className="text-base sm:text-lg font-black text-zinc-900 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-[#c80915]" />
                  <span>Mời bạn chọn địa điểm làm việc mong muốn</span>
                </h3>
                <p className="text-xs text-zinc-500 font-medium">
                  Chọn Tỉnh/Thành phố và Siêu thị gần nhà bạn nhất để tối ưu thời gian di chuyển.
                </p>
              </div>

              {/* Province Dropdown */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-zinc-700 block">
                  1. Tỉnh / Thành phố làm việc *
                </label>
                <select
                  value={selectedProvince}
                  onChange={(e) => setSelectedProvince(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-xs sm:text-sm font-semibold text-zinc-800 focus:outline-none focus:ring-2 focus:ring-[#c80915] cursor-pointer"
                >
                  {PROVINCES.map((prov) => (
                    <option key={prov} value={prov}>
                      {prov}
                    </option>
                  ))}
                </select>
              </div>

              {/* Ward / Search keyword input */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-zinc-700 block">
                  2. Tìm nhanh siêu thị theo Phường/Xã hoặc Tên đường
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={searchWardKeyword}
                    onChange={(e) => setSearchWardKeyword(e.target.value)}
                    placeholder="Nhập tên phường xã hoặc đường..."
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 pr-10 text-xs sm:text-sm text-zinc-800 focus:outline-none focus:ring-2 focus:ring-[#c80915] font-medium"
                  />
                  <Search className="w-4 h-4 text-zinc-400 absolute right-3.5 top-3.5 pointer-events-none" />
                </div>
              </div>

              {/* Store List Options */}
              <div className="space-y-2 pt-2">
                <label className="text-xs font-bold text-zinc-700 block">
                  3. Danh sách siêu thị tuyển dụng ({filteredStores.length} siêu thị) *
                </label>

                <div className="space-y-2 max-h-72 overflow-y-auto pr-1">
                  {filteredStores.length > 0 ? (
                    filteredStores.map((st) => (
                      <label
                        key={st.id}
                        onClick={() => setSelectedStoreId(st.id)}
                        className={`block p-3.5 rounded-xl border transition-all cursor-pointer ${
                          selectedStoreId === st.id
                            ? 'border-[#c80915] bg-red-50/50 ring-2 ring-red-100 shadow-xs'
                            : 'border-slate-200 hover:border-slate-300 bg-white'
                        }`}
                      >
                        <div className="flex items-start gap-3">
                          <input
                            type="radio"
                            name="storeOption"
                            checked={selectedStoreId === st.id}
                            onChange={() => setSelectedStoreId(st.id)}
                            className="mt-1 text-[#c80915] focus:ring-[#c80915]"
                          />
                          <div className="flex-1 space-y-1">
                            <h4 className="text-xs sm:text-sm font-bold text-zinc-900">
                              {st.name}
                            </h4>
                            <p className="text-xs text-zinc-500 font-medium">
                              {st.address}
                            </p>
                          </div>
                        </div>
                      </label>
                    ))
                  ) : (
                    <div className="text-center py-8 text-xs text-zinc-500 bg-slate-50 rounded-xl border border-dashed border-slate-300">
                      Không tìm thấy siêu thị phù hợp tại khu vực này.
                    </div>
                  )}
                </div>
              </div>

              {/* Submit Next Button */}
              <div className="pt-4 border-t border-slate-100 flex justify-end">
                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3.5 bg-[#c80915] hover:bg-[#b00712] text-white font-black text-xs sm:text-sm rounded-xl shadow-md transition-transform hover:scale-[1.01] cursor-pointer flex items-center justify-center gap-2"
                >
                  <span>Tiếp theo: Điền thông tin cá nhân</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          )
        )}

        {/* STEP 2: ĐIỀN THÔNG TIN CÁ NHÂN */}
        {!isCompleted && currentStep === 2 && (
          <form
            onSubmit={handleNextStep2}
            className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-md space-y-6 animate-in fade-in duration-150"
          >
            <div className="border-b border-slate-100 pb-3 flex items-center justify-between">
              <div>
                <h3 className="text-base sm:text-lg font-black text-zinc-900 flex items-center gap-2">
                  <User className="w-5 h-5 text-[#c80915]" />
                  <span>Điền thông tin cá nhân của bạn</span>
                </h3>
                <p className="text-xs text-zinc-500 font-medium">
                  Vui lòng cung cấp chính xác thông tin để nhận phản hồi kết quả ứng tuyển.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setCurrentStep(1)}
                className="text-xs font-bold text-[#c80915] hover:underline shrink-0"
              >
                Quay lại Bước 1
              </button>
            </div>

            {/* Selected Location Summary */}
            <div className="bg-red-50/70 border border-red-200 p-3.5 rounded-xl text-xs font-semibold text-red-950 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#c80915] shrink-0" />
              <span>Địa điểm đã chọn: <strong>{selectedStore.address}</strong></span>
            </div>

            {/* Full Name Input */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-zinc-700 block">
                1. Họ và tên của bạn *
              </label>
              <input
                type="text"
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Nhập đầy đủ Họ và tên (Ví dụ: Nguyễn Văn Ánh)"
                className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-xs sm:text-sm text-zinc-800 focus:outline-none focus:ring-2 focus:ring-[#c80915] font-medium"
              />
            </div>

            {/* Phone & Gender Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-zinc-700 flex items-center gap-1">
                  <Phone className="w-3.5 h-3.5 text-zinc-500" />
                  <span>2. Số điện thoại liên hệ *</span>
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Ví dụ: 0987654321"
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-xs sm:text-sm text-zinc-800 focus:outline-none focus:ring-2 focus:ring-[#c80915] font-medium"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-zinc-700 block">
                  3. Giới tính *
                </label>
                <div className="flex items-center gap-4 pt-2">
                  <label className="flex items-center gap-2 text-xs font-bold text-zinc-800 cursor-pointer">
                    <input
                      type="radio"
                      name="gender"
                      checked={gender === 'Nam'}
                      onChange={() => setGender('Nam')}
                      className="text-[#c80915] focus:ring-[#c80915]"
                    />
                    <span>Nam</span>
                  </label>
                  <label className="flex items-center gap-2 text-xs font-bold text-zinc-800 cursor-pointer">
                    <input
                      type="radio"
                      name="gender"
                      checked={gender === 'Nữ'}
                      onChange={() => setGender('Nữ')}
                      className="text-[#c80915] focus:ring-[#c80915]"
                    />
                    <span>Nữ</span>
                  </label>
                </div>
              </div>
            </div>

            {/* DOB & ID Card Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-zinc-700 flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-zinc-500" />
                  <span>4. Ngày tháng năm sinh</span>
                </label>
                <input
                  type="date"
                  value={dob}
                  onChange={(e) => setDob(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-zinc-800 focus:outline-none focus:ring-2 focus:ring-[#c80915] font-medium"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-zinc-700 flex items-center gap-1">
                  <CreditCard className="w-3.5 h-3.5 text-zinc-500" />
                  <span>5. Số CCCD / CMND</span>
                </label>
                <input
                  type="text"
                  value={idCard}
                  onChange={(e) => setIdCard(e.target.value)}
                  placeholder="Nhập 12 số CCCD"
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-zinc-800 focus:outline-none focus:ring-2 focus:ring-[#c80915] font-medium"
                />
              </div>
            </div>

            {/* Education Select */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-zinc-700 flex items-center gap-1">
                <GraduationCap className="w-3.5 h-3.5 text-zinc-500" />
                <span>6. Trình độ học vấn cao nhất</span>
              </label>
              <select
                value={education}
                onChange={(e) => setEducation(e.target.value)}
                className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-xs sm:text-sm font-semibold text-zinc-800 focus:outline-none focus:ring-2 focus:ring-[#c80915] cursor-pointer"
              >
                <option value="THPT (12/12)">Tốt nghiệp THPT (12/12)</option>
                <option value="Trung cấp">Trung cấp nghề</option>
                <option value="Cao đẳng">Cao đẳng</option>
                <option value="Đại học">Đại học / Cử nhân</option>
                <option value="Khác">Chưa tốt nghiệp THPT</option>
              </select>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
              <button
                type="button"
                onClick={() => setCurrentStep(1)}
                className="px-6 py-3 bg-slate-100 hover:bg-slate-200 text-zinc-800 font-bold text-xs rounded-xl transition-colors"
              >
                Quay lại
              </button>
              <button
                type="submit"
                className="px-8 py-3.5 bg-[#c80915] hover:bg-[#b00712] text-white font-black text-xs sm:text-sm rounded-xl shadow-md transition-transform hover:scale-[1.01] cursor-pointer flex items-center gap-2"
              >
                <span>Tiếp theo: Xem lại & Xác nhận</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </form>
        )}

        {/* STEP 3: XÁC NHẬN HỒ SƠ & GỬI */}
        {!isCompleted && currentStep === 3 && (
          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-md space-y-6 animate-in fade-in duration-150">
            <div className="border-b border-slate-100 pb-3 flex items-center justify-between">
              <div>
                <h3 className="text-base sm:text-lg font-black text-zinc-900 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-[#c80915]" />
                  <span>Xác nhận thông tin ứng tuyển</span>
                </h3>
                <p className="text-xs text-zinc-500 font-medium">
                  Vui lòng kiểm tra kỹ lại thông tin trước khi hoàn tất nộp đơn.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setCurrentStep(2)}
                className="text-xs font-bold text-[#c80915] hover:underline shrink-0"
              >
                Chỉnh sửa
              </button>
            </div>

            <div className="space-y-4">
              {/* Box 1: Position & Store */}
              <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl space-y-2">
                <span className="text-[10px] font-black uppercase text-[#c80915] bg-red-50 px-2 py-0.5 rounded border border-red-200">
                  Vị trí & Siêu thị nguyện vọng
                </span>
                <h4 className="text-sm sm:text-base font-extrabold text-zinc-900">
                  {jobTitleParam}
                </h4>
                <p className="text-xs font-semibold text-zinc-700">
                  Địa điểm: {selectedStore.name} ({selectedStore.address})
                </p>
              </div>

              {/* Box 2: Candidate Info Summary */}
              <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl space-y-2 text-xs sm:text-sm font-medium text-zinc-800">
                <span className="text-[10px] font-black uppercase text-zinc-600 bg-slate-200 px-2 py-0.5 rounded">
                  Thông tin ứng viên
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                  <p>• Họ tên: <strong className="text-zinc-900">{fullName}</strong></p>
                  <p>• Số điện thoại: <strong className="text-zinc-900">{phone}</strong></p>
                  <p>• Giới tính: <strong>{gender}</strong></p>
                  {dob && <p>• Ngày sinh: <strong>{dob}</strong></p>}
                  {idCard && <p>• CCCD: <strong>{idCard}</strong></p>}
                  <p>• Học vấn: <strong>{education}</strong></p>
                </div>
              </div>
            </div>

            {/* Commitment Checkbox */}
            <div className="bg-red-50 p-3.5 rounded-xl border border-red-200 text-xs text-red-950 font-medium leading-relaxed">
              ✔ Tôi cam kết các thông tin cá nhân khai báo trên là chính xác và hoàn toàn chịu trách nhiệm về tính trung thực của thông tin.
            </div>

            {/* Action buttons */}
            <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
              <button
                type="button"
                onClick={() => setCurrentStep(2)}
                className="px-6 py-3 bg-slate-100 hover:bg-slate-200 text-zinc-800 font-bold text-xs rounded-xl transition-colors"
              >
                Quay lại
              </button>
              <button
                type="button"
                onClick={handleFinalSubmit}
                className="px-8 py-3.5 bg-[#c80915] hover:bg-[#b00712] text-white font-black text-xs sm:text-sm rounded-xl shadow-md transition-transform hover:scale-[1.01] cursor-pointer flex items-center gap-2"
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>Hoàn tất & Nộp hồ sơ</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
