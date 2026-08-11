import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Search,
  CheckCircle2,
  Clock,
  MapPin,
  Calendar,
  AlertCircle,
  FileText,
  UserCheck,
  Building2,
  RefreshCw,
} from 'lucide-react'
import { useTranslation } from 'react-i18next'

interface ApplicationResult {
  candidateName: string
  cccd: string
  phone: string
  jobTitle: string
  location: string
  appliedDate: string
  statusStep: number // 1: Tiếp nhận, 2: Sơ tuyển, 3: Phỏng vấn, 4: Nhận việc
  statusText: string
  interviewDate?: string
  interviewAddress?: string
  note?: string
}

export const ApplicationResultsPage = () => {
  const { t } = useTranslation('recruitment')

  const [cccd, setCccd] = useState('')
  const [phone, setPhone] = useState('')
  const [errorMsg, setErrorMsg] = useState('')
  const [isSearching, setIsSearching] = useState(false)
  const [searchStatus, setSearchStatus] = useState<'idle' | 'found' | 'not_found'>('idle')
  const [resultData, setResultData] = useState<ApplicationResult | null>(null)

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    setErrorMsg('')

    if (!cccd.trim() || !phone.trim()) {
      setErrorMsg('Vui lòng nhập đầy đủ cả Số CCCD và Số điện thoại.')
      return
    }

    if (cccd.trim().length < 9) {
      setErrorMsg('Số CCCD không hợp lệ (tối thiểu 9 chữ số).')
      return
    }

    if (phone.trim().length < 9) {
      setErrorMsg('Số điện thoại không hợp lệ.')
      return
    }

    setIsSearching(true)
    setSearchStatus('idle')

    // Simulate API search query delay
    setTimeout(() => {
      setIsSearching(false)
      // Mock result condition
      if (cccd.trim() === '000000000' || phone.trim() === '000000000') {
        setSearchStatus('not_found')
        setResultData(null)
      } else {
        setSearchStatus('found')
        setResultData({
          candidateName: 'NGUYỄN VĂN AN',
          cccd: cccd.trim(),
          phone: phone.trim(),
          jobTitle: 'Nhân viên Tư Vấn Bán Hàng TGĐĐ / ĐMX',
          location: 'TP. Hồ Chí Minh (Quận 1 / TP. Thủ Đức)',
          appliedDate: '08/08/2026',
          statusStep: 3,
          statusText: 'Mời tham gia Phỏng vấn Trực tiếp',
          interviewDate: '09:30 - Thứ Năm, 13/08/2026',
          interviewAddress: 'Tòa nhà MWG Lô T2-1.2, Đường D1, Khu Công Nghệ Cao, TP. Thủ Đức, TP.HCM',
          note: 'Anh/Chị vui lòng mang theo Giấy CMND/CCCD gốc và trang phục lịch sự khi đến phỏng vấn.',
        })
      }
    }, 700)
  }

  const handleResetSearch = () => {
    setSearchStatus('idle')
    setResultData(null)
    setCccd('')
    setPhone('')
    setErrorMsg('')
  }

  return (
    <div className="w-full bg-white text-zinc-800 min-h-[calc(100vh-160px)] relative overflow-hidden flex flex-col justify-between selection:bg-[#00a4e4] selection:text-white">
      {/* BACKGROUND VECTOR GRAPHIC ACCENTS (Matching user mockup) */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Top Center Cyan Semi-Circle Blob */}
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 sm:translate-x-0 sm:left-[35%] w-[340px] h-[340px] sm:w-[420px] sm:h-[420px] rounded-full bg-[#00a4e4] opacity-95"></div>

        {/* Right Light Blue Large Background Circle */}
        <div className="absolute top-10 right-[-10%] sm:right-[-5%] w-[420px] h-[420px] sm:w-[600px] sm:h-[600px] rounded-full bg-[#eaf7fd] opacity-80"></div>

        {/* Bottom Left Hatched Pattern Circle */}
        <div className="absolute bottom-10 left-6 sm:left-24 w-36 h-36 sm:w-48 sm:h-48 rounded-full border-2 border-sky-300 opacity-60 overflow-hidden flex items-center justify-center">
          <svg className="w-full h-full opacity-40 text-sky-500" viewBox="0 0 100 100" fill="none">
            <pattern
              id="hatched-pattern"
              width="10"
              height="10"
              patternTransform="rotate(45 0 0)"
              patternUnits="userSpaceOnUse"
            >
              <line x1="0" y1="0" x2="0" y2="10" stroke="currentColor" strokeWidth="2" />
            </pattern>
            <rect width="100" height="100" fill="url(#hatched-pattern)" />
          </svg>
        </div>
      </div>

      {/* MAIN CONTAINER */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 relative z-10 w-full flex-1 flex flex-col items-center justify-center">
        {/* Form Card Container */}
        <div className="w-full max-w-xl bg-white/90 backdrop-blur-md rounded-2xl p-6 sm:p-10 border border-zinc-100 shadow-xl shadow-sky-950/5">
          {/* Header Text */}
          <div className="text-center space-y-2 mb-8">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 tracking-tight">
              Tra cứu kết quả ứng tuyển
            </h1>
            <p className="text-xs sm:text-sm text-zinc-500 font-medium">
              Anh / Chị vui lòng nhập cả 2 thông tin sau đây
            </p>
          </div>

          {/* Form */}
          {searchStatus === 'idle' && (
            <form onSubmit={handleSearch} className="space-y-4">
              {errorMsg && (
                <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-semibold flex items-center gap-2 animate-in fade-in duration-200">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMsg}</span>
                </div>
              )}

              {/* Input 1: Số CCCD */}
              <div className="space-y-1">
                <input
                  type="text"
                  value={cccd}
                  onChange={(e) => setCccd(e.target.value)}
                  placeholder="Số CCCD"
                  className="w-full px-4 py-3.5 rounded-xl border border-zinc-200 focus:border-[#00a4e4] focus:ring-2 focus:ring-[#00a4e4]/20 outline-none text-sm text-zinc-900 placeholder:text-zinc-400 font-medium transition-all bg-white"
                />
              </div>

              {/* Input 2: Số điện thoại */}
              <div className="space-y-1">
                <input
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Số điện thoại"
                  className="w-full px-4 py-3.5 rounded-xl border border-zinc-200 focus:border-[#00a4e4] focus:ring-2 focus:ring-[#00a4e4]/20 outline-none text-sm text-zinc-900 placeholder:text-zinc-400 font-medium transition-all bg-white"
                />
              </div>

              {/* Button: TRA CỨU */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSearching}
                  className="w-full py-4 rounded-xl bg-[#00a4e4] hover:bg-[#0092cd] active:bg-[#0082b7] text-white font-extrabold text-sm uppercase tracking-wider transition-all duration-200 shadow-md shadow-sky-500/20 hover:shadow-lg cursor-pointer flex items-center justify-center gap-2"
                >
                  {isSearching ? (
                    <>
                      <RefreshCw className="w-4 h-4 animate-spin" />
                      <span>ĐANG TRA CỨU...</span>
                    </>
                  ) : (
                    <span>TRA CỨU</span>
                  )}
                </button>
              </div>
            </form>
          )}

          {/* RESULT STATUS DISPLAY */}

          {/* Not Found State */}
          {searchStatus === 'not_found' && (
            <div className="text-center space-y-5 py-4 animate-in fade-in duration-300">
              <div className="w-16 h-16 rounded-full bg-amber-50 text-amber-500 flex items-center justify-center mx-auto border border-amber-200">
                <AlertCircle className="w-8 h-8" />
              </div>
              <div className="space-y-1">
                <h3 className="text-base sm:text-lg font-bold text-zinc-900">
                  Không tìm thấy thông tin hồ sơ ứng tuyển
                </h3>
                <p className="text-xs sm:text-sm text-zinc-500 max-w-sm mx-auto">
                  Hệ thống chưa tìm thấy hồ sơ tương ứng với số CCCD <span className="font-bold text-zinc-700">{cccd}</span> và SĐT <span className="font-bold text-zinc-700">{phone}</span>. Anh/Chị vui lòng kiểm tra lại thông tin.
                </p>
              </div>
              <button
                onClick={handleResetSearch}
                className="px-6 py-2.5 rounded-xl bg-zinc-900 hover:bg-black text-white text-xs font-bold transition-colors cursor-pointer inline-flex items-center gap-2"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Tra cứu lại</span>
              </button>
            </div>
          )}

          {/* Found State with Candidate Info & Application Timeline */}
          {searchStatus === 'found' && resultData && (
            <div className="space-y-6 animate-in fade-in zoom-in-95 duration-300">
              {/* Candidate Info Header */}
              <div className="bg-sky-50/70 border border-sky-100 p-4 rounded-xl space-y-2">
                <div className="flex items-center justify-between border-b border-sky-100 pb-2 text-xs">
                  <span className="font-bold text-sky-900 uppercase">Ứng viên: {resultData.candidateName}</span>
                  <span className="text-zinc-500 font-medium">Nộp ngày: {resultData.appliedDate}</span>
                </div>
                <div className="space-y-1">
                  <h3 className="text-sm font-extrabold text-zinc-900">{resultData.jobTitle}</h3>
                  <p className="text-xs text-zinc-600 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
                    <span>{resultData.location}</span>
                  </p>
                </div>
              </div>

              {/* Progress Timeline Stepper */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold text-zinc-500 uppercase tracking-wider">
                  Tiến trình xử lý hồ sơ:
                </h4>

                <div className="grid grid-cols-4 gap-2 text-center text-[11px] font-bold">
                  {[
                    { step: 1, title: 'Tiếp nhận' },
                    { step: 2, title: 'Sơ tuyển' },
                    { step: 3, title: 'Phỏng vấn' },
                    { step: 4, title: 'Kết quả' },
                  ].map((s) => {
                    const isDone = s.step <= resultData.statusStep
                    const isCurrent = s.step === resultData.statusStep
                    return (
                      <div key={s.step} className="space-y-1.5">
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center mx-auto text-xs font-black transition-colors ${
                            isCurrent
                              ? 'bg-[#00a4e4] text-white ring-4 ring-sky-200'
                              : isDone
                              ? 'bg-emerald-500 text-white'
                              : 'bg-zinc-100 text-zinc-400 border border-zinc-200'
                          }`}
                        >
                          {isDone ? <CheckCircle2 className="w-4 h-4" /> : s.step}
                        </div>
                        <span className={isCurrent ? 'text-[#00a4e4] font-extrabold' : 'text-zinc-600'}>
                          {s.title}
                        </span>
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* Current Status Details Box */}
              <div className="bg-emerald-50 border border-emerald-200 p-4 rounded-xl space-y-2">
                <div className="flex items-center gap-2 text-emerald-800 font-extrabold text-xs uppercase tracking-wide">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Trạng thái hiện tại: {resultData.statusText}</span>
                </div>

                {resultData.interviewDate && (
                  <div className="space-y-1 pt-1 text-xs text-zinc-700">
                    <p className="flex items-center gap-2 font-semibold">
                      <Calendar className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>Thời gian: {resultData.interviewDate}</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <MapPin className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>Địa điểm: {resultData.interviewAddress}</span>
                    </p>
                  </div>
                )}

                {resultData.note && (
                  <p className="text-[11px] text-zinc-500 italic pt-1 border-t border-emerald-100">
                    * {resultData.note}
                  </p>
                )}
              </div>

              {/* Actions */}
              <div className="flex items-center justify-between pt-2">
                <button
                  onClick={handleResetSearch}
                  className="px-4 py-2 rounded-lg border border-zinc-200 text-xs font-semibold text-zinc-600 hover:bg-zinc-50 transition-colors cursor-pointer"
                >
                  Nhập thông tin khác
                </button>

                <Link
                  to="/jobs"
                  className="px-5 py-2 rounded-lg bg-[#00a4e4] hover:bg-[#0092cd] text-white text-xs font-bold transition-colors cursor-pointer"
                >
                  Xem công việc khác
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
