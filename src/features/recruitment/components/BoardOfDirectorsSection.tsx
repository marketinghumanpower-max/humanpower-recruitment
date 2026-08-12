import { useState } from 'react'
import { Quote, Award, ShieldCheck, UserCheck, Info, X, CheckCircle2, ChevronRight } from 'lucide-react'
import { motion, type Variants } from 'framer-motion'

interface DirectorMember {
  id: string
  name: string
  role: string
  badge: string
  quote: string
  imageBg: string
  initials: string
  avatarUrl?: string
  experienceYears: string
  bio: string
  highlights: string[]
}

const gridVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.05,
    },
  },
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: 'easeOut' },
  },
}

export const BoardOfDirectorsSection = () => {
  const [selectedDirector, setSelectedDirector] = useState<DirectorMember | null>(null)

  const directors: DirectorMember[] = [
    {
      id: 'tai-nguyen',
      name: 'Nguyễn Đức Tài',
      role: 'Chủ tịch Hội đồng Quản trị',
      badge: 'Sáng lập & Chủ Tịch HĐQT',
      quote: 'Văn hóa phục vụ khách hàng tận tâm và sự tử tế là tài sản lớn nhất của Thế Giới Di Động.',
      imageBg: 'from-amber-500 to-yellow-600',
      initials: 'NĐT',
      avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
      experienceYears: '20+ năm kiến tạo MWG',
      bio: 'Đồng sáng lập Thế Giới Di Động năm 2004. Ông là kiến trúc sư trưởng định hình văn hóa doanh nghiệp lấy khách hàng làm trung tâm, thúc đẩy đưa MWG trở thành tập đoàn bán lẻ số 1 Việt Nam.',
      highlights: [
        'Định hướng chiến lược phát triển chuỗi TGĐĐ, ĐMX, BHX',
        'Tiên phong áp dụng văn hóa Integrity & Phục vụ tận tâm',
        'Top 10 Lãnh đạo xuất sắc nhất Châu Á'
      ]
    },
    {
      id: 'chuan-tran',
      name: 'Trần Tùng Chuẩn',
      role: 'Thành viên HĐQT / Tổng Giám Đốc',
      badge: 'CEO & Thành viên HĐQT',
      quote: 'Tiên phong ứng dụng công nghệ và tối ưu hóa vận hành để tạo ra giá trị đột phá cho toàn hệ thống.',
      imageBg: 'from-red-600 to-rose-700',
      initials: 'TTC',
      avatarUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80',
      experienceYears: '18+ năm tại MWG',
      bio: 'Điều hành chiến lược kinh doanh toàn tập đoàn. Ông có đóng góp quan trọng trong việc xây dựng hệ thống quản trị hiện đại, chuyển đổi số kho vận và tối ưu hóa trải nghiệm mua sắm.',
      highlights: [
        'Điều hành hoạt động kinh doanh đa ngành hàng',
        'Chuyển đổi số toàn diện quy trình chuỗi cung ứng',
        'Xây dựng mô hình Omnichannel hàng đầu'
      ]
    },
    {
      id: 'hieu-em-doan',
      name: 'Đoàn Văn Hiểu Em',
      role: 'Thành viên HĐQT / CEO Chuỗi ĐMX & TGĐĐ',
      badge: 'Thành viên HĐQT',
      quote: 'Không ngừng đổi mới, bứt phá giới hạn để giữ vững vị thế số 1 thị phần bán lẻ công nghệ và điện máy.',
      imageBg: 'from-blue-600 to-indigo-700',
      initials: 'ĐHE',
      avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
      experienceYears: '16+ năm tại MWG',
      bio: 'Chịu trách nhiệm trực tiếp sự phát triển của 2 chuỗi chủ lực Thế Giới Di Động và Điện máy XANH, đồng thời mở rộng mô hình TopZone & EraBlue Indonesia.',
      highlights: [
        'Phát triển mô hình ĐMX Supermini thành công rực rỡ',
        'Tiên phong mở rộng chuỗi EraBlue tại Indonesia',
        'Quản lý chuỗi TopZone - Đại lý ủy quyền cao cấp Apple'
      ]
    },
    {
      id: 'robert-willett',
      name: 'Robert Willett',
      role: 'Thành viên HĐQT Độc lập',
      badge: 'HĐQT Độc Lập / Cố vấn',
      quote: 'MWG sở hữu mô hình quản trị đẳng cấp và văn hóa doanh nghiệp độc đáo hàng đầu thế giới.',
      imageBg: 'from-zinc-700 to-zinc-900',
      initials: 'RW',
      avatarUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80',
      experienceYears: '30+ năm bán lẻ toàn cầu',
      bio: 'Cựu CEO Best Buy International. Ông mang đến cho MWG tầm nhìn chiến lược bán lẻ chuẩn quốc tế, nâng cao năng lực quản trị rủi ro và thực thi quản trị chuẩn toàn cầu.',
      highlights: [
        'Cựu CEO Best Buy International & Giám đốc tư vấn toàn cầu',
        'Tư vấn chiến lược mở rộng quy mô đa quốc gia',
        'Nâng tầm chuẩn mực quản trị doanh nghiệp niêm yết'
      ]
    },
    {
      id: 'luom-dang',
      name: 'Đặng Minh Lượm',
      role: 'Thành viên HĐQT / Giám đốc Nhân sự',
      badge: 'Thành viên HĐQT',
      quote: 'Con người và nguồn nhân lực hạnh phúc là động lực tăng trưởng bền vững nhất của doanh nghiệp.',
      imageBg: 'from-emerald-600 to-teal-700',
      initials: 'ĐML',
      avatarUrl: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80',
      experienceYears: '15+ năm quản trị nhân sự',
      bio: 'Lãnh đạo khối nhân sự tập đoàn, kiến tạo môi trường làm việc minh bạch, công bằng và chính sách đãi ngộ hàng đầu thu hút hàng chục ngàn tài năng.',
      highlights: [
        'Xây dựng môi trường làm việc đạt giải Top 10 Best Workplace Asia',
        'Kiến tạo chương trình đào tạo & phát triển thăng tiến nội bộ',
        'Quản trị đội ngũ hơn 60,000 nhân sự trên toàn quốc'
      ]
    },
    {
      id: 'nam-dieu',
      name: 'Điêu Chính Hải Nam',
      role: 'Thành viên HĐQT / Phụ trách Chiến lược CNTT',
      badge: 'Thành viên HĐQT',
      quote: 'Ứng dụng trí tuệ nhân tạo và hạ tầng hạ tầng dữ liệu hiện đại để dẫn dắt làn sóng bán lẻ tương lai.',
      imageBg: 'from-purple-600 to-indigo-800',
      initials: 'ĐHN',
      avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
      experienceYears: '17+ năm chiến lược công nghệ',
      bio: 'Chịu trách nhiệm kiến tạo hệ thống phần mềm quản trị tự động hóa ERP, hệ thống POS, CRM và nền tảng dữ liệu lớn (Big Data) bảo đảm vận hành thông suốt.',
      highlights: [
        'Xây dựng hệ thống ERP tự phát triển tối ưu riêng cho MWG',
        'Ứng dụng AI dự báo hàng tồn kho & phân phối tối ưu',
        'Phát triển nền tảng công nghệ bảo mật cao cho hệ thống'
      ]
    }
  ]

  return (
    <section id="board-of-directors" className="py-14 bg-white border-y border-slate-200/90 scroll-mt-20 relative overflow-hidden">
      <motion.div
        variants={gridVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.05 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transform-gpu"
      >
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-100 text-[#d4222f] text-xs font-extrabold uppercase tracking-wider">
            <UserCheck className="w-3.5 h-3.5" />
            Lãnh đạo Tập đoàn MWG
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 leading-tight">
            Hội đồng <span className="text-[#d4222f]">Quản trị</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Đội ngũ lãnh đạo bản lĩnh, giàu kinh nghiệm, dẫn dắt định hướng chiến lược và phát triển bền vững cho Tập đoàn Thế Giới Di Động.
          </p>
        </div>

        {/* Directors Cards Grid (6 Members) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {directors.map((member) => (
            <motion.div
              key={member.id}
              variants={cardVariants}
              whileHover={{ y: -4 }}
              className="group bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative overflow-hidden"
            >
              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#ffd400] to-[#d4222f] opacity-0 group-hover:opacity-100 transition-opacity" />

              <div>
                {/* Profile Header */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative shrink-0">
                    <img
                      src={member.avatarUrl}
                      alt={member.name}
                      className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-md group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-[#ffd400] text-black flex items-center justify-center text-[10px] font-black shadow-xs">
                      ★
                    </div>
                  </div>
                  <div>
                    <h3 className="text-base font-extrabold text-slate-900 group-hover:text-[#d4222f] transition-colors leading-tight">
                      {member.name}
                    </h3>
                    <p className="text-xs font-semibold text-slate-500 mt-0.5">{member.role}</p>
                    <span className="inline-flex items-center gap-1 text-[10px] font-bold text-amber-800 bg-amber-50 px-2 py-0.5 rounded-full mt-1 border border-amber-200/80">
                      <ShieldCheck className="w-3 h-3 text-amber-600" />
                      {member.badge}
                    </span>
                  </div>
                </div>

                {/* Quote Box */}
                <div className="relative bg-slate-50 p-3.5 rounded-xl border border-slate-100 mb-4 min-h-[72px] flex items-center">
                  <Quote className="w-5 h-5 text-slate-300 absolute top-2 right-2 rotate-180 opacity-60" />
                  <p className="text-xs text-slate-600 italic leading-relaxed relative z-10 pr-3">
                    "{member.quote}"
                  </p>
                </div>
              </div>

              {/* Bottom Action Footer */}
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[11px] font-medium text-slate-500 flex items-center gap-1">
                  <Award className="w-3.5 h-3.5 text-[#ffd400]" />
                  {member.experienceYears}
                </span>
                <button
                  onClick={() => setSelectedDirector(member)}
                  className="inline-flex items-center gap-1 text-xs font-bold text-[#d4222f] hover:text-red-700 transition-colors cursor-pointer group/btn"
                >
                  <span>Chi tiết</span>
                  <ChevronRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>


      {/* Member Bio Detail Modal */}
      {selectedDirector && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl border border-slate-200 animate-in fade-in zoom-in-95 duration-200">
            {/* Modal Header Banner */}
            <div className="bg-slate-900 text-white p-6 relative">
              <button
                onClick={() => setSelectedDirector(null)}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 text-white hover:bg-white/20 flex items-center justify-center transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-4">
                <img
                  src={selectedDirector.avatarUrl}
                  alt={selectedDirector.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-[#ffd400] shadow-md"
                />
                <div className="space-y-1">
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#ffd400] bg-white/10 px-2 py-0.5 rounded">
                    {selectedDirector.badge}
                  </span>
                  <h3 className="text-xl font-black">{selectedDirector.name}</h3>
                  <p className="text-xs text-zinc-300 font-medium">{selectedDirector.role}</p>
                </div>
              </div>
            </div>

            {/* Modal Body Content */}
            <div className="p-6 space-y-4">
              <div className="space-y-2">
                <h4 className="text-xs font-extrabold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
                  <Info className="w-4 h-4 text-[#d4222f]" /> Tiểu sử &amp; Đóng góp chiến lược
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">{selectedDirector.bio}</p>
              </div>

              <div className="space-y-2.5 pt-3 border-t border-slate-100">
                <h4 className="text-xs font-extrabold text-slate-900 uppercase tracking-wider">
                  Dấu ấn quan trọng:
                </h4>
                <ul className="space-y-2">
                  {selectedDirector.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-slate-700 leading-snug">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 flex items-center justify-between border-t border-slate-100">
                <span className="text-xs font-semibold text-slate-500">
                  {selectedDirector.experienceYears}
                </span>
                <button
                  onClick={() => setSelectedDirector(null)}
                  className="px-4 py-2 rounded-lg bg-[#d4222f] hover:bg-red-700 text-white text-xs font-bold transition-colors cursor-pointer"
                >
                  Đóng
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
