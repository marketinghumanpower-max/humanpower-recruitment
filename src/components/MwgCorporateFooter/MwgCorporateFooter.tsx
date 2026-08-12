import { Link } from 'react-router-dom'

export const MwgCorporateFooter = () => {
  return (
    <footer id="contact-footer" className="bg-[#111111] text-zinc-300 font-sans text-xs border-t border-zinc-800 pt-10 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Main Header / Contact Section matching Image 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: MWG Corporate Info & Address */}
          <div className="lg:col-span-6 space-y-3">
            {/* Logo Badge */}
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center text-[#ffd400] font-black text-xs border border-zinc-800">
                <span className="text-[9px] tracking-tighter">MWG</span>
              </div>
            </div>

            {/* Company Full Name */}
            <h3 className="text-base sm:text-lg font-extrabold text-white leading-snug">
              Công ty Cổ phần Đầu tư Thế Giới Di Động
            </h3>

            {/* Headquarters Address */}
            <p className="text-xs text-zinc-400 max-w-lg leading-relaxed">
              Tòa nhà MWG, Lô T2-1.2 đường D1, Khu Công Nghệ Cao, Phường Tăng Nhơn Phú, TP.HCM
            </p>
          </div>

          {/* Right Column: LIÊN HỆ Grid Section */}
          <div className="lg:col-span-6 space-y-3">
            <h4 className="text-xs font-black text-zinc-200 uppercase tracking-widest">
              LIÊN HỆ
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-1">
              {/* Sub-column 1: Quan hệ cổ đông & Phát triển bền vững */}
              <div className="space-y-3">
                <div className="space-y-0.5">
                  <p className="text-xs text-zinc-400">Quan hệ cổ đông:</p>
                  <a
                    href="mailto:investor@thegioididong.com"
                    className="text-xs text-zinc-200 hover:text-white hover:underline transition-colors block font-medium"
                  >
                    investor@thegioididong.com
                  </a>
                </div>

                <div className="space-y-0.5">
                  <p className="text-xs text-zinc-400">Phát triển bền vững:</p>
                  <a
                    href="mailto:esg@thegioididong.com"
                    className="text-xs text-zinc-200 hover:text-white hover:underline transition-colors block font-medium"
                  >
                    esg@thegioididong.com
                  </a>
                </div>
              </div>

              {/* Sub-column 2: Pháp chế & Tổng đài */}
              <div className="space-y-3">
                <div className="space-y-0.5">
                  <p className="text-xs text-zinc-400">Pháp chế:</p>
                  <a
                    href="mailto:banphapche@thegioididong.com"
                    className="text-xs text-zinc-200 hover:text-white hover:underline transition-colors block font-medium"
                  >
                    banphapche@thegioididong.com
                  </a>
                </div>

                <div className="space-y-0.5">
                  <p className="text-xs text-zinc-400">
                    Tổng đài: <span className="text-zinc-200 font-semibold">028.3812.5960</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Horizontal Line & Bottom Bar */}
        <div className="pt-6 border-t border-zinc-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="text-xs text-zinc-500">
            © {new Date().getFullYear()} Công ty Cổ phần Đầu tư Thế Giới Di Động (MWG)
          </p>

          <div className="flex items-center gap-4 text-xs text-zinc-400">
            <Link to="#terms" className="hover:text-white transition-colors">
              Điều khoản sử dụng
            </Link>
            <span className="text-zinc-700">•</span>
            <Link to="#privacy" className="hover:text-white transition-colors">
              Chính sách bảo vệ dữ liệu cá nhân
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
