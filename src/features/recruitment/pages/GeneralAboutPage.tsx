import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import {
  ChevronRight,
  X,
  TrendingUp,
  Building2,
  CheckCircle2,
  MapPin,
  ArrowRight,
  Info,
  BarChart3,
  DollarSign,
  Briefcase
} from 'lucide-react'
import heroImg from '@/assets/hero.png'

interface BrandItem {
  id: string
  name: string
  category: string
  badgeBg: string
  badgeText: string
  logoSymbol: string
  photoUrl: string
  storeCount: string
  foundedYear: string
  description: string
  highlights: string[]
}

const BRAND_LIST: BrandItem[] = [
  {
    id: 'tgdd',
    name: 'thegioididong.com',
    category: 'Bán lẻ Điện thoại & Công nghệ',
    badgeBg: 'bg-[#111111]',
    badgeText: 'text-[#ffd400]',
    logoSymbol: 'TGĐĐ',
    photoUrl:
      'https://images.unsplash.com/photo-1556742049-0a670fc8078a?auto=format&fit=crop&w=1200&q=80',
    storeCount: '900+ Siêu thị',
    foundedYear: 'Từ 2004',
    description:
      'Thế Giới Di Động là chuỗi bán lẻ thiết bị di động, laptop, phụ kiện công nghệ số 1 Việt Nam với chất lượng phục vụ vượt trội và chính sách bảo hành uy tín.',
    highlights: ['Số 1 thị phần điện thoại tại VN', 'Phục vụ tận tâm 7/7', 'Bảo hành 1 đổi 1 dễ dàng'],
  },
  {
    id: 'dmx',
    name: 'Điện máy XANH',
    category: 'Điện máy & Gia dụng',
    badgeBg: 'bg-[#0088d6]',
    badgeText: 'text-white',
    logoSymbol: 'ĐMX',
    photoUrl:
      'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80',
    storeCount: '2,000+ Siêu thị',
    foundedYear: 'Từ 2010',
    description:
      'Hệ thống siêu thị điện máy phủ sóng 63 tỉnh thành, cung cấp tủ lạnh, máy giặt, tivi, máy lạnh và thiết bị gia dụng hàng đầu Việt Nam.',
    highlights: ['Phủ sóng 100% xã phường', 'Giao hàng & Lắp đặt trong ngày', 'Trả góp 0% linh hoạt'],
  },
  {
    id: 'bhx',
    name: 'Bách hóa XANH',
    category: 'Thực phẩm tươi sống & Tiêu dùng',
    badgeBg: 'bg-[#008848]',
    badgeText: 'text-white',
    logoSymbol: 'BHX',
    photoUrl:
      'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1200&q=80',
    storeCount: '1,700+ Cửa hàng',
    foundedYear: 'Từ 2015',
    description:
      'Chuỗi siêu thị thực phẩm tươi sống, rau củ quả và nhu yếu phẩm hàng ngày ngon sạch - rẻ - gần nhà cho mọi gia đình Việt.',
    highlights: ['Thực phẩm tươi ngon mỗi ngày', 'Giá cạnh tranh với chợ truyền thống', 'Đạt điểm hòa vốn toàn chuỗi'],
  },
  {
    id: 'ankhang',
    name: 'Nhà thuốc AN KHANG',
    category: 'Dược phẩm & Chăm sóc sức khỏe',
    badgeBg: 'bg-[#007038]',
    badgeText: 'text-white',
    logoSymbol: 'AK',
    photoUrl:
      'https://images.unsplash.com/photo-1586015555751-63bb77f4322a?auto=format&fit=crop&w=1200&q=80',
    storeCount: '500+ Nhà thuốc',
    foundedYear: 'Từ 2017',
    description:
      'Hệ thống nhà thuốc uy tín chuẩn GPP, tư vấn thuốc tận tâm bởi dược sĩ chuyên môn cao, thuốc chính hãng 100%.',
    highlights: ['Dược sĩ chuyên môn tư vấn 1-1', 'Thuốc chính hãng rõ nguồn gốc', 'Chương trình Mua 1 Tặng 1 hấp dẫn'],
  },
  {
    id: 'topzone',
    name: 'TopZone',
    category: 'Apple Authorized Reseller',
    badgeBg: 'bg-black border border-zinc-700',
    badgeText: 'text-white',
    logoSymbol: '',
    photoUrl:
      'https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?auto=format&fit=crop&w=1200&q=80',
    storeCount: '100+ Cửa hàng',
    foundedYear: 'Từ 2021',
    description:
      'Chuỗi cửa hàng ủy quyền cao cấp nhất của Apple tại Việt Nam (Mono-brand store), không gian trải nghiệm đẳng cấp chuẩn toàn cầu.',
    highlights: ['Đại lý ủy quyền chính thức Apple', 'Trải nghiệm hệ sinh thái Apple đỉnh cao', 'Chính sách bảo hành Apple toàn cầu'],
  },
  {
    id: 'avakids',
    name: 'AVAKids',
    category: 'Mẹ & Bé',
    badgeBg: 'bg-[#e91e63]',
    badgeText: 'text-white',
    logoSymbol: 'AVA',
    photoUrl:
      'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=1200&q=80',
    storeCount: '60+ Siêu thị',
    foundedYear: 'Từ 2022',
    description:
      'Chuỗi siêu thị chuyên cung cấp sữa, tã bỉm, đồ dùng mẹ và bé, thời trang trẻ em chính hãng hàng đầu Việt Nam.',
    highlights: ['Sản phẩm mẹ & bé an toàn tuyệt đối', 'Đa dạng thương hiệu nổi tiếng', 'Ưu đãi thành viên cực lớn'],
  },
]

interface DirectorMember {
  id: string
  name: string
  role: string
  englishTitle: string
  badge: string
  avatarUrl: string
  bio: string
  highlights: string[]
}

const DIRECTORS_DATA: DirectorMember[] = [
  {
    id: 'tai-nguyen',
    name: 'Nguyễn Đức Tài',
    role: 'Chủ tịch HĐQT',
    englishTitle: 'Co-founder & Chairman',
    badge: 'Sáng lập & Chủ Tịch HĐQT',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
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
    role: 'Thành viên HĐQT / CEO',
    englishTitle: 'Board Member & CEO',
    badge: 'CEO & Thành viên HĐQT',
    avatarUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80',
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
    role: 'Thành viên HĐQT',
    englishTitle: 'CEO of ĐMX & TGĐĐ',
    badge: 'Thành viên HĐQT',
    avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
    bio: 'Chịu trách nhiệm trực tiếp sự phát triển của 2 chuỗi chủ lực Thế Giới Di Động và Điện máy XANH, đồng thời mở rộng mô hình TopZone & EraBlue Indonesia.',
    highlights: [
      'Phát triển mô hình ĐMX Supermini thành công rực rỡ',
      'Tiên phong mở rộng chuỗi EraBlue tại Indonesia',
      'Quản lý chuỗi TopZone - Đại lý ủy quyền cao cấp Apple'
    ]
  }
]

const TIMELINE_CARDS = [
  {
    year: '2004',
    title: 'Thành lập Thế Giới Di Động',
    description: 'Thegioididong.com ra đời từ 1 cửa hàng nhỏ tại TP.HCM, khởi đầu cho hành trình chinh phục thị trường bán lẻ công nghệ số 1 Việt Nam.',
    photoUrl: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80'
  },
  {
    year: '2007',
    title: 'Mở rộng web & Chuyển đổi mô hình',
    description: 'Kích hoạt trang web thương mại điện tử hiện đại, nhân rộng mô hình siêu thị bán lẻ quy mô trên toàn quốc.',
    photoUrl: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80'
  },
  {
    year: '2010',
    title: 'Ra mắt Điện máy Xanh',
    description: 'Hệ thống Điện máy XANH (tiền thân Dienmay.com) ra đời, tạo nên bước ngoặt bứt phá trong ngành bán lẻ điện máy gia dụng.',
    photoUrl: 'https://images.unsplash.com/photo-1526738549149-8e07eca6c147?auto=format&fit=crop&w=800&q=80'
  }
]

export const GeneralAboutPage = () => {
  const location = useLocation()
  const [selectedBrand, setSelectedBrand] = useState<BrandItem>(BRAND_LIST[0])
  const [leadershipTab, setLeadershipTab] = useState<'bod' | 'executives'>('bod')
  const [selectedDirector, setSelectedDirector] = useState<DirectorMember | null>(null)

  // Smooth scroll handler based on location hash
  useEffect(() => {
    const hash = location.hash
    if (hash) {
      const targetId = hash.replace('#', '')
      const el = document.getElementById(targetId)
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }, 120)
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }, [location.hash, location.pathname])

  return (
    <div className="w-full bg-[#f4f6f9] text-slate-800 font-sans min-h-screen pb-20 selection:bg-amber-400 selection:text-black">
      {/* 1. HERO CORPORATE COVER BANNER & GENERAL OVERVIEW SECTION */}
      <section id="gioi-thieu-chung" className="relative w-full bg-slate-950 overflow-hidden scroll-mt-20">
        {/* Main Background Image with Gradient Overlay */}
        <div className="relative w-full h-[360px] sm:h-[440px] md:h-[480px]">
          <img
            src={heroImg}
            alt="MWG Corporate Headquarters"
            className="w-full h-full object-cover opacity-80 object-center transform scale-105 transition-transform duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-slate-900/30"></div>
          <div className="absolute inset-0 bg-radial from-amber-500/10 via-transparent to-transparent pointer-events-none"></div>

          {/* Banner Content Container */}
          <div className="absolute inset-0 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-end pb-8 sm:pb-12 z-10 text-white">
            <div className="space-y-4 max-w-4xl">
              {/* Top Tag Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#ffd400]/20 border border-[#ffd400]/40 text-[#ffd400] text-xs font-black uppercase tracking-widest backdrop-blur-xs">
                <Building2 className="w-3.5 h-3.5 text-[#ffd400]" />
                VỀ MWG - GIỚI THIỆU CHUNG
              </div>

              {/* Main Headline */}
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-snug sm:leading-tight text-white tracking-tight">
                Công ty Cổ phần Đầu tư Thế Giới Di Động (MWG) là tập đoàn bán lẻ đa ngành hàng đầu Việt Nam.
              </h1>

              {/* Subtext Location Badge */}
              <p className="text-xs sm:text-sm text-zinc-300 font-medium flex items-center gap-2 pt-1">
                <MapPin className="w-4 h-4 text-red-500 shrink-0" />
                <span>Trụ sở chính: Đường D1, Khu Công Nghệ Cao, P. Tân Phú, TP. Thủ Đức, TP. Hồ Chí Minh</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN CONTAINER FOR BODY CONTENT */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 space-y-12">
        {/* OMNI-CHANNEL STRATEGY & ECOSYSTEM (2-COLUMN TEXT BLOCK) */}
        <section className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-6 sm:p-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 relative">
            <div className="hidden md:block absolute left-1/2 top-2 bottom-2 w-px bg-slate-200 -translate-x-1/2"></div>

            {/* Column 1: Omni-Channel Strategy */}
            <div className="space-y-3.5">
              <h2 className="text-base sm:text-lg font-black text-slate-900 uppercase tracking-wide flex items-center gap-2">
                <span className="w-2.5 h-5 bg-[#ffd400] rounded-xs inline-block"></span>
                CHIẾN LƯỢC OMNI-CHANNEL &amp; NỀN TẢNG CÔNG NGHỆ
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed text-justify font-normal">
                Vốn là công ty Công nghệ bán lẻ, các cửa hàng của MWG đều vận hành mượt mà nhờ hệ thống phần mềm quản trị tự viết ("Tổng quan toàn bộ"). Bằng nền tảng công nghệ số hoá, MWG mang tới trải nghiệm mua sắm đồng bộ vượt trội cho khách hàng từ trực tuyến tới trực tiếp, giúp gia tăng nhanh chóng năng lực quản trị tối ưu, từ đó tạo ra lợi thế cạnh tranh vượt trội cho toàn bộ hệ thống.
              </p>
            </div>

            {/* Column 2: Synergistic Ecosystem */}
            <div className="space-y-3.5">
              <h2 className="text-base sm:text-lg font-black text-slate-900 uppercase tracking-wide flex items-center gap-2">
                <span className="w-2.5 h-5 bg-[#d4222f] rounded-xs inline-block"></span>
                HỆ SINH THÁI CÔNG HƯỞNG &amp; VĂN HOÁ PHỤC VỤ
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed text-justify font-normal">
                MWG sở hữu các chuỗi bán lẻ dẫn đầu như Thế Giới Di Động, Điện máy XANH, Bách hoá XANH, Nhà thuốc An Khang, TopZone, AVAKids cùng dịch vụ Tận Tâm và liên doanh EraBlue tại Indonesia... Với văn hoá "Tận tâm phục vụ", MWG đặt khách hàng làm trung tâm trong mọi suy nghĩ và hành động.
              </p>
            </div>
          </div>
        </section>

        {/* 2. BOARD OF DIRECTORS / LEADERSHIP SECTION (BAN LÃNH ĐẠO) */}
        <section id="ban-lanh-dao" className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-6 sm:p-10 space-y-6 scroll-mt-20">
          {/* Section Subheader & Tabs Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-4">
            <div>
              <span className="text-[11px] font-black text-[#d4222f] uppercase tracking-widest">
                BAN LÃNH ĐẠO
              </span>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight mt-0.5">
                Hội đồng Quản trị &amp; Ban Giám Đốc
              </h2>
            </div>

            {/* Tabs Selector matching screenshot */}
            <div className="flex items-center gap-2 bg-slate-100 p-1 rounded-xl border border-slate-200 shrink-0">
              <button
                onClick={() => setLeadershipTab('bod')}
                className={`px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  leadershipTab === 'bod'
                    ? 'bg-white text-slate-900 shadow-xs border border-slate-200/80'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Hội đồng Quản trị
              </button>
              <button
                onClick={() => setLeadershipTab('executives')}
                className={`px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  leadershipTab === 'executives'
                    ? 'bg-white text-slate-900 shadow-xs border border-slate-200/80'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Ban giám đốc
              </button>
            </div>
          </div>

          {/* Executive Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 pt-2">
            {DIRECTORS_DATA.map((member) => (
              <div
                key={member.id}
                className="group bg-slate-50/70 rounded-2xl p-5 border border-slate-200/80 hover:border-amber-400 shadow-2xs hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  {/* Photo Container */}
                  <div className="relative w-full h-56 sm:h-64 rounded-xl overflow-hidden bg-slate-200">
                    <img
                      src={member.avatarUrl}
                      alt={member.name}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-4">
                      <div className="text-white space-y-0.5">
                        <span className="text-[10px] font-bold text-[#ffd400] bg-black/60 px-2 py-0.5 rounded">
                          {member.badge}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Name and Role details */}
                  <div>
                    <h3 className="text-base font-extrabold text-slate-900 group-hover:text-[#d4222f] transition-colors leading-tight">
                      {member.name}
                    </h3>
                    <p className="text-xs font-bold text-slate-700 mt-1">{member.role}</p>
                    <p className="text-[11px] font-medium text-slate-500 italic mt-0.5">{member.englishTitle}</p>
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-200/60 flex items-center justify-between">
                  <span className="text-[11px] text-slate-500 font-semibold">Tập đoàn MWG</span>
                  <button
                    onClick={() => setSelectedDirector(member)}
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#d4222f] hover:underline cursor-pointer"
                  >
                    <span>Xem tiểu sử</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 3. MEMBER BRANDS SHOWCASE (THƯƠNG HIỆU THÀNH VIÊN) */}
        <section id="thuong-hieu" className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-6 sm:p-10 space-y-8 scroll-mt-20">
          <div className="space-y-1">
            <span className="text-[11px] font-black text-[#d4222f] uppercase tracking-widest">
              THƯƠNG HIỆU THÀNH VIÊN
            </span>
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
              Các thành viên của MWG
            </h2>
          </div>

          {/* Horizontal Brand Logo Selector Tabs Bar */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar border-b border-slate-200">
            {BRAND_LIST.map((brand) => {
              const isSelected = selectedBrand.id === brand.id
              return (
                <button
                  key={brand.id}
                  onClick={() => setSelectedBrand(brand)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl border text-xs font-bold transition-all shrink-0 cursor-pointer ${
                    isSelected
                      ? 'bg-slate-900 text-white border-slate-900 shadow-sm scale-[1.02]'
                      : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  <span className="w-5 h-5 rounded-full bg-[#ffd400] text-black font-black flex items-center justify-center text-[10px]">
                    {brand.logoSymbol}
                  </span>
                  <span>{brand.name}</span>
                </button>
              )
            })}
          </div>

          {/* Spotlight Showcase of Selected Brand */}
          <div className="grid grid-cols-1 lg:grid-cols-12 rounded-2xl overflow-hidden border border-slate-200 shadow-md">
            {/* Left Store Front Photo */}
            <div className="lg:col-span-6 relative h-64 sm:h-80 lg:h-full min-h-[300px] bg-slate-900">
              <img
                src={selectedBrand.photoUrl}
                alt={selectedBrand.name}
                className="w-full h-full object-cover opacity-90 transition-opacity duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent flex items-end p-6">
                <span className="text-xs font-bold text-white bg-black/60 px-3 py-1 rounded-full backdrop-blur-xs">
                  {selectedBrand.category}
                </span>
              </div>
            </div>

            {/* Right Dark Info Card */}
            <div className="lg:col-span-6 bg-slate-950 text-white p-6 sm:p-8 flex flex-col justify-between space-y-6">
              <div className="space-y-5">
                <div className="flex items-center gap-3">
                  <div className={`px-4 py-2 rounded-xl border border-white/20 shadow-lg ${selectedBrand.badgeBg} ${selectedBrand.badgeText} flex items-center gap-2`}>
                    <span className="w-6 h-6 rounded-full bg-[#ffd400] text-black font-black flex items-center justify-center text-xs">
                      {selectedBrand.logoSymbol}
                    </span>
                    <span className="text-base sm:text-lg font-black tracking-tight">{selectedBrand.name}</span>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-4 pt-1">
                  <div className="bg-zinc-900 border border-zinc-800 px-4 py-2 rounded-xl space-y-0.5">
                    <p className="text-lg sm:text-xl font-black text-[#ffd400]">{selectedBrand.storeCount}</p>
                    <p className="text-[10px] text-zinc-400 uppercase font-semibold">Quy mô hệ thống</p>
                  </div>
                  <div className="bg-zinc-900 border border-zinc-800 px-4 py-2 rounded-xl space-y-0.5">
                    <p className="text-lg sm:text-xl font-black text-white">{selectedBrand.foundedYear}</p>
                    <p className="text-[10px] text-zinc-400 uppercase font-semibold">Năm ra mắt</p>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal">
                  {selectedBrand.description}
                </p>

                <ul className="space-y-2 pt-2 border-t border-zinc-800">
                  {selectedBrand.highlights.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-xs text-zinc-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-2">
                <Link
                  to="/jobs"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#ffd400] text-black hover:bg-yellow-400 font-extrabold text-xs transition-all shadow-md cursor-pointer group"
                >
                  <span>Tìm hiểu thêm việc làm {selectedBrand.name}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 4. 22-YEAR HISTORY JOURNEY (CỘT MỐC CHÍNH) */}
        <section id="hanh-trinh" className="bg-slate-950 text-white rounded-2xl p-6 sm:p-10 space-y-8 shadow-xl scroll-mt-20">
          <div className="space-y-1">
            <span className="text-[11px] font-black text-[#ffd400] uppercase tracking-widest">
              CỘT MỐC CHÍNH
            </span>
            <h2 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
              Hành trình 22 năm phát triển
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TIMELINE_CARDS.map((card, idx) => (
              <div
                key={idx}
                className="bg-zinc-900/90 border border-zinc-800 rounded-2xl overflow-hidden hover:border-amber-400 transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="p-6 space-y-3">
                  <div className="inline-block px-3 py-1 bg-[#ffd400] text-black font-black text-sm rounded-lg shadow-xs">
                    {card.year}
                  </div>
                  <h3 className="text-base font-bold text-white group-hover:text-[#ffd400] transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed font-normal">
                    {card.description}
                  </p>
                </div>

                <div className="h-44 w-full bg-slate-800 overflow-hidden relative">
                  <img
                    src={card.photoUrl}
                    alt={card.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-85"
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 5. SUBSIDIARIES & ORGANIZATIONAL CHART (CƠ CẤU TỔ CHỨC) */}
        <section id="co-cau-to-chuc" className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-6 sm:p-10 space-y-6 scroll-mt-20">
          <div className="space-y-1">
            <span className="text-[11px] font-black text-[#d4222f] uppercase tracking-widest">
              CƠ CẤU TỔ CHỨC
            </span>
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
              Công ty con &amp; Liên kết
            </h2>
          </div>

          <div className="relative w-full rounded-2xl overflow-hidden border border-slate-200 bg-slate-900 shadow-lg">
            <div className="relative p-6 sm:p-10 flex flex-col items-center justify-center min-h-[380px] text-center bg-gradient-to-b from-slate-900 via-slate-950 to-black">
              <div className="max-w-3xl w-full bg-white rounded-2xl p-6 sm:p-8 shadow-2xl text-slate-900 space-y-6 border-4 border-slate-300">
                <div className="border-b border-slate-200 pb-4">
                  <h3 className="text-lg sm:text-xl font-black tracking-widest text-slate-900 uppercase">
                    ORGANIZATION CHART: MWG CORP.
                  </h3>
                  <p className="text-xs text-slate-500 font-semibold mt-1">Sơ đồ Cơ cấu Tổ chức &amp; Các Công ty Thành viên Tập đoàn Thế Giới Di Động</p>
                </div>

                <div className="space-y-4">
                  <div className="inline-block px-6 py-2.5 rounded-xl bg-slate-950 text-white font-extrabold text-sm shadow-md border border-amber-400">
                    CÔNG TY CỔ PHẦN ĐẦU TƯ THẾ GIỚI DI ĐỘNG (MWG)
                  </div>

                  <div className="w-0.5 h-6 bg-slate-300 mx-auto"></div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-bold">
                    <div className="p-3 rounded-xl bg-amber-50 border border-amber-300 text-amber-900 shadow-xs">
                      Công ty CP Thế Giới Di Động (TGĐĐ &amp; ĐMX)
                    </div>
                    <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-300 text-emerald-900 shadow-xs">
                      Công ty CP Thương mại Bách Hóa XANH (BHX)
                    </div>
                    <div className="p-3 rounded-xl bg-blue-50 border border-blue-300 text-blue-900 shadow-xs">
                      Công ty CP Dược phẩm An Khang
                    </div>
                    <div className="p-3 rounded-xl bg-purple-50 border border-purple-300 text-purple-900 shadow-xs">
                      EraBlue Electronics (Indonesia JV)
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. STOCK & FINANCIAL INFORMATION (THÔNG TIN CỔ PHIẾU) */}
        <section id="thong-tin-co-phieu" className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-6 sm:p-10 space-y-6 scroll-mt-20">
          <div className="space-y-1">
            <span className="text-[11px] font-black text-[#d4222f] uppercase tracking-widest">
              THÔNG TIN CỔ PHIẾU
            </span>
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
              Thông tin Quan hệ Cổ đông (IR)
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-5 rounded-2xl bg-amber-50/80 border border-amber-200 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-amber-900 uppercase">Mã cổ phiếu</span>
                <BarChart3 className="w-5 h-5 text-amber-600" />
              </div>
              <p className="text-2xl font-black text-slate-900">MWG</p>
              <p className="text-[11px] text-slate-600 font-medium">Sàn Giao dịch Chứng khoán TP.HCM (HOSE)</p>
            </div>

            <div className="p-5 rounded-2xl bg-emerald-50/80 border border-emerald-200 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-emerald-900 uppercase">Vốn hóa thị trường</span>
                <DollarSign className="w-5 h-5 text-emerald-600" />
              </div>
              <p className="text-2xl font-black text-slate-900">~80.000+ Tỷ</p>
              <p className="text-[11px] text-slate-600 font-medium">Doanh nghiệp tư nhân Top 10 VN</p>
            </div>

            <div className="p-5 rounded-2xl bg-sky-50/80 border border-sky-200 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-sky-900 uppercase">Doanh thu mục tiêu</span>
                <TrendingUp className="w-5 h-5 text-sky-600" />
              </div>
              <p className="text-2xl font-black text-slate-900">125.000+ Tỷ</p>
              <p className="text-[11px] text-slate-600 font-medium">Tăng trưởng ổn định &amp; bền vững</p>
            </div>

            <div className="p-5 rounded-2xl bg-purple-50/80 border border-purple-200 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-purple-900 uppercase">Cổ đông chiến lược</span>
                <Briefcase className="w-5 h-5 text-purple-600" />
              </div>
              <p className="text-2xl font-black text-slate-900">Quỹ Quốc tế</p>
              <p className="text-[11px] text-slate-600 font-medium">Quản trị minh bạch chuẩn ESG</p>
            </div>
          </div>
        </section>

        {/* 7. DẤU ẤN & THÀNH TỰU BỀN VỮNG (VISION 2030 GOLDEN BANNER) */}
        <section id="dau-an-thanh-tuu" className="bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 text-slate-950 rounded-2xl p-6 sm:p-10 space-y-8 shadow-xl relative overflow-hidden border border-yellow-300 scroll-mt-20">
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-white/20 rounded-full blur-2xl pointer-events-none"></div>

          {/* Banner Header */}
          <div className="text-center space-y-2 relative z-10 max-w-2xl mx-auto">
            <div className="w-12 h-12 rounded-full bg-slate-950 text-[#ffd400] font-black flex items-center justify-center mx-auto shadow-md text-sm">
              MWG
            </div>
            <h2 className="text-xl sm:text-3xl font-black tracking-tight text-slate-950 uppercase pt-1">
              DẤU ẤN &amp; THÀNH TỰU BỀN VỮNG (TẦM NHÌN 2030)
            </h2>
            <p className="text-sm sm:text-base font-extrabold text-slate-900">
              Đây là MWG - Niềm tự hào của Việt Nam
            </p>
          </div>

          {/* 4 Golden Circles */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 relative z-10">
            <div className="bg-white/90 backdrop-blur-xs p-5 rounded-2xl text-center space-y-2.5 shadow-sm border border-yellow-200/80">
              <div className="w-12 h-12 rounded-full bg-amber-500 text-white font-black flex items-center justify-center mx-auto shadow-xs">
                1
              </div>
              <p className="text-xs font-bold text-slate-900 leading-snug">
                Tập đoàn bán lẻ đa ngành hàng đầu Việt Nam &amp; khu vực
              </p>
            </div>

            <div className="bg-white/90 backdrop-blur-xs p-5 rounded-2xl text-center space-y-2.5 shadow-sm border border-yellow-200/80">
              <div className="w-12 h-12 rounded-full bg-rose-500 text-white font-black flex items-center justify-center mx-auto shadow-xs">
                2
              </div>
              <p className="text-xs font-bold text-slate-900 leading-snug">
                Môi trường làm việc hạnh phúc, thu nhập cạnh tranh
              </p>
            </div>

            <div className="bg-white/90 backdrop-blur-xs p-5 rounded-2xl text-center space-y-2.5 shadow-sm border border-yellow-200/80">
              <div className="w-12 h-12 rounded-full bg-sky-500 text-white font-black flex items-center justify-center mx-auto shadow-xs">
                3
              </div>
              <p className="text-xs font-bold text-slate-900 leading-snug">
                Đón đầu trải nghiệm mua sắm tuyệt hảo cho khách hàng
              </p>
            </div>

            <div className="bg-white/90 backdrop-blur-xs p-5 rounded-2xl text-center space-y-2.5 shadow-sm border border-yellow-200/80">
              <div className="w-12 h-12 rounded-full bg-emerald-500 text-white font-black flex items-center justify-center mx-auto shadow-xs">
                4
              </div>
              <p className="text-xs font-bold text-slate-900 leading-snug">
                Đóng góp tích cực cho cộng đồng &amp; sự phát triển xã hội
              </p>
            </div>
          </div>

          {/* 6 Core Values Pill Badge */}
          <div className="flex justify-center sm:justify-end pt-2 relative z-10">
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-slate-950 text-white shadow-xl border border-yellow-400">
              <span className="w-7 h-7 rounded-full bg-[#ffd400] text-black font-black flex items-center justify-center text-xs shrink-0">
                6
              </span>
              <span className="text-xs sm:text-sm font-extrabold text-[#ffd400] tracking-wide uppercase">
                GIÁ TRỊ CỐT LÕI MWG
              </span>
            </div>
          </div>
        </section>
      </div>

      {/* DIRECTOR BIO MODAL */}
      {selectedDirector && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl border border-slate-200 animate-in fade-in zoom-in-95 duration-200">
            <div className="bg-slate-950 text-white p-6 relative">
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
                <div className="space-y-0.5">
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#ffd400] bg-white/10 px-2 py-0.5 rounded">
                    {selectedDirector.badge}
                  </span>
                  <h3 className="text-xl font-black text-white">{selectedDirector.name}</h3>
                  <p className="text-xs text-zinc-300 font-medium">{selectedDirector.role}</p>
                </div>
              </div>
            </div>

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

              <div className="pt-4 flex items-center justify-end border-t border-slate-100">
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
    </div>
  )
}

export const GioiThieuChungPage = GeneralAboutPage

