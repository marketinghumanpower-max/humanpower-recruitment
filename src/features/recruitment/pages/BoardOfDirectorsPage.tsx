import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ChevronRight,
  ChevronLeft,
  Building2,
  MapPin,
  Quote,
  ShieldCheck,
  Info,
  X,
  CheckCircle2,
  ArrowRight,
  Flame,
  Heart,
  Target,
  Users,
  GraduationCap,
} from 'lucide-react'
import heroImg from '@/assets/hero.png'

interface DirectorLeader {
  id: string
  name: string
  role: string
  badge: string
  avatarUrl: string
  quote: string
  experienceYears: string
  bio: string
  highlights: string[]
  tabGroup: 'bod' | 'exec'
}

const DIRECTORS_LIST: DirectorLeader[] = [
  {
    id: 'tai-nguyen',
    name: 'Nguyễn Đức Tài',
    role: 'Chủ tịch Hội đồng Quản trị',
    badge: 'Sáng lập & Chủ Tịch HĐQT',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    quote: 'Văn hóa phục vụ khách hàng tận tâm và sự tử tế là tài sản lớn nhất của Thế Giới Di Động.',
    experienceYears: '20+ năm kiến tạo MWG',
    bio: 'Đồng sáng lập Thế Giới Di Động năm 2004. Ông là kiến trúc sư trưởng định hình văn hóa doanh nghiệp lấy khách hàng làm trung tâm, thúc đẩy đưa MWG trở thành tập đoàn bán lẻ số 1 Việt Nam.',
    highlights: [
      'Định hướng chiến lược phát triển chuỗi TGĐĐ, ĐMX, BHX',
      'Tiên phong áp dụng văn hóa Integrity & Phục vụ tận tâm',
      'Top 10 Lãnh đạo xuất sắc nhất Châu Á',
    ],
    tabGroup: 'bod',
  },
  {
    id: 'linh-vu',
    name: 'Vũ Đăng Linh',
    role: 'Thành viên HĐQT Độc lập',
    badge: 'HĐQT Độc Lập / Cố vấn Tài chính',
    avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
    quote: 'Quản trị rủi ro tài chính vững chắc là chiếc phanh an toàn giúp MWG tăng tốc bứt phá vững bền.',
    experienceYears: '22+ năm quản trị tài chính',
    bio: 'Chuyên gia tài chính ngân hàng quốc tế. Ông tham gia cố vấn kiểm soát quản trị tài chính, hoạch định chính sách đầu tư vốn và minh bạch hóa báo cáo tài chính của MWG.',
    highlights: [
      'Tư vấn chính sách phân bổ nguồn vốn chiến lược',
      'Tối ưu hóa cấu trúc tài chính tập đoàn niêm yết',
      'Đảm bảo tuân thủ chuẩn mực kế toán tài chính quốc tế',
    ],
    tabGroup: 'bod',
  },
  {
    id: 'hieu-em-doan',
    name: 'Đoàn Văn Hiểu Em',
    role: 'Thành viên HĐQT / CEO Chuỗi ĐMX & TGĐĐ',
    badge: 'Thành viên HĐQT',
    avatarUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80',
    quote: 'Không ngừng đổi mới, bứt phá giới hạn để giữ vững vị thế số 1 thị phần bán lẻ công nghệ và điện máy.',
    experienceYears: '16+ năm tại MWG',
    bio: 'Chịu trách nhiệm trực tiếp sự phát triển của 2 chuỗi chủ lực Thế Giới Di Động và Điện máy XANH, đồng thời mở rộng mô hình TopZone & EraBlue Indonesia.',
    highlights: [
      'Phát triển mô hình ĐMX Supermini thành công rực rỡ',
      'Tiên phong mở rộng chuỗi EraBlue tại Indonesia',
      'Quản lý chuỗi TopZone - Đại lý ủy quyền cao cấp Apple',
    ],
    tabGroup: 'bod',
  },
  {
    id: 'trong-pham',
    name: 'Phạm Văn Trọng',
    role: 'Thành viên HĐQT / CEO Bách Hóa XANH',
    badge: 'Thành viên HĐQT / CEO BHX',
    avatarUrl: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80',
    quote: 'Tối ưu chuỗi cung ứng thực phẩm tươi sống ngon - sạch - rẻ gần nhà cho mọi gia đình Việt.',
    experienceYears: '15+ năm quản trị chuỗi cung ứng',
    bio: 'Tổng giám đốc chuỗi siêu thị Bách Hóa XANH. Ông đã dẫn dắt BHX đạt điểm hòa vốn toàn chuỗi và đưa thương hiệu trở thành trụ cột tăng trưởng lợi nhuận mới cho MWG.',
    highlights: [
      'Tái cấu trúc BHX đạt mốc có lợi nhuận bền vững',
      'Hiện đại hóa chuỗi cung ứng nông sản & thực phẩm tươi',
      'Mở rộng mô hình cửa hàng thế hệ mới chuẩn hóa',
    ],
    tabGroup: 'bod',
  },
  {
    id: 'robert-willett',
    name: 'Robert Alan Willett',
    role: 'Thành viên HĐQT Độc lập',
    badge: 'HĐQT Độc Lập / Cố vấn Quốc tế',
    avatarUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80',
    quote: 'MWG sở hữu mô hình quản trị đẳng cấp và văn hóa doanh nghiệp độc đáo hàng đầu thế giới.',
    experienceYears: '30+ năm bán lẻ toàn cầu',
    bio: 'Cựu CEO Best Buy International. Ông mang đến cho MWG tầm nhìn chiến lược bán lẻ chuẩn quốc tế, nâng cao năng lực quản trị rủi ro và thực thi quản trị chuẩn toàn cầu.',
    highlights: [
      'Cựu CEO Best Buy International & Giám đốc tư vấn toàn cầu',
      'Tư vấn chiến lược mở rộng quy mô đa quốc gia',
      'Nâng tầm chuẩn mực quản trị doanh nghiệp niêm yết',
    ],
    tabGroup: 'bod',
  },
  {
    id: 'thomas-lanyi',
    name: 'Thomas Lanyi',
    role: 'Thành viên HĐQT Độc lập',
    badge: 'HĐQT Độc Lập / Quỹ Đầu tư',
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
    quote: 'Sự minh bạch và tầm nhìn dài hạn giúp MWG luôn là điểm sáng thu hút vốn đầu tư nước ngoài.',
    experienceYears: '25+ năm Quản lý quỹ & M&A',
    bio: 'Đại diện quỹ đầu tư quốc tế CDH Investments. Ông hỗ trợ tư vấn các chiến lược M&A, thu hút vốn ngoại và hoạch định cấu trúc doanh nghiệp hiện đại.',
    highlights: [
      'Cố vấn chiến lược M&A & hợp tác quốc tế',
      'Tăng cường năng lực quản trị cổ đông nước ngoài',
      'Hoạch định chiến lược đầu tư tài chính dài hạn',
    ],
    tabGroup: 'bod',
  },
  {
    id: 'trung-nguyen',
    name: 'Nguyễn Tiến Trung',
    role: 'Thành viên HĐQT / Giám đốc Công nghệ',
    badge: 'Thành viên HĐQT',
    avatarUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80',
    quote: 'Công nghệ là nền tảng tự động hóa giúp MWG vận hành hàng ngàn cửa hàng mượt mà như một.',
    experienceYears: '17+ năm chiến lược công nghệ',
    bio: 'Chịu trách nhiệm kiến tạo hệ thống phần mềm ERP tự phát triển, hạ tầng dữ liệu Big Data & AI tối ưu hàng tồn kho và trải nghiệm khách hàng.',
    highlights: [
      'Kiến tạo hệ thống ERP riêng biệt đáp ứng quy mô MWG',
      'Ứng dụng AI tối ưu hóa vận chuyển & kho bãi',
      'Bảo mật và tự động hóa toàn bộ luồng vận hành',
    ],
    tabGroup: 'bod',
  },
  {
    id: 'si-do',
    name: 'Đỗ Tiến Sĩ',
    role: 'Thành viên HĐQT / Giám đốc Vận hành',
    badge: 'Thành viên HĐQT',
    avatarUrl: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=400&q=80',
    quote: 'Sự kỷ luật và tinh thần sẵn sàng chiến đấu là chìa khóa mở rộng tốc độ mạng lưới siêu thị.',
    experienceYears: '18+ năm phát triển hạ tầng',
    bio: 'Lãnh đạo khối vận hành & mặt bằng. Ông giữ vai trò then chốt trong tốc độ mở rộng kỷ lục của MWG, đưa các siêu thị đến tận vùng sâu vùng xa.',
    highlights: [
      'Đàm phán & thẩm định hơn 4,000 mặt bằng siêu thị',
      'Chuẩn hóa thiết kế & thi công siêu thị nhanh thần tốc',
      'Quản lý hệ thống hạ tầng chi nhánh 63 tỉnh thành',
    ],
    tabGroup: 'bod',
  },
]

interface BrandTabItem {
  id: string
  name: string
  category: string
  badgeBg: string
  badgeText: string
  logoSymbol: string
  photoUrl: string
  storeCount: string
  description: string
  highlights: string[]
}

const BRAND_TABS: BrandTabItem[] = [
  {
    id: 'tgdd',
    name: 'thegioididong.com',
    category: 'Bán lẻ Điện thoại & Công nghệ',
    badgeBg: 'bg-[#111111]',
    badgeText: 'text-[#ffd400]',
    logoSymbol: 'TGĐĐ',
    photoUrl: 'https://images.unsplash.com/photo-1556742049-0a670fc8078a?auto=format&fit=crop&w=1000&q=80',
    storeCount: '900+ Siêu thị (Từ 2004 đến nay)',
    description: 'Chuỗi bán lẻ thiết bị di động, laptop, phụ kiện công nghệ số 1 Việt Nam với chất lượng phục vụ vượt trội và chính sách bảo hành uy tín.',
    highlights: ['Số 1 thị phần điện thoại tại Việt Nam', 'Phục vụ tận tâm 7/7', 'Bảo hành 1 đổi 1 dễ dàng'],
  },
  {
    id: 'dmx',
    name: 'Điện máy XANH',
    category: 'Điện máy & Gia dụng',
    badgeBg: 'bg-[#0088d6]',
    badgeText: 'text-white',
    logoSymbol: 'ĐMX',
    photoUrl: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=80',
    storeCount: '2,000+ Siêu thị toàn quốc',
    description: 'Hệ thống siêu thị điện máy phủ sóng 63 tỉnh thành, cung cấp tủ lạnh, máy giặt, tivi, máy lạnh và thiết bị gia dụng hàng đầu.',
    highlights: ['Phủ sóng 100% xã phường', 'Giao hàng & Lắp đặt trong ngày', 'Trả góp 0% linh hoạt'],
  },
  {
    id: 'bhx',
    name: 'Bách hóa XANH',
    category: 'Thực phẩm tươi sống & Tiêu dùng',
    badgeBg: 'bg-[#008848]',
    badgeText: 'text-white',
    logoSymbol: 'BHX',
    photoUrl: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1000&q=80',
    storeCount: '1,700+ Cửa hàng gần nhà',
    description: 'Chuỗi siêu thị thực phẩm tươi sống, rau củ quả và nhu yếu phẩm hàng ngày ngon sạch - rẻ - gần nhà cho mọi gia đình Việt.',
    highlights: ['Thực phẩm tươi ngon mỗi ngày', 'Giá cạnh tranh với chợ truyền thống', 'Đạt điểm hòa vốn toàn chuỗi'],
  },
  {
    id: 'ankhang',
    name: 'Nhà thuốc AN KHANG',
    category: 'Dược phẩm & Chăm sóc sức khỏe',
    badgeBg: 'bg-[#007038]',
    badgeText: 'text-white',
    logoSymbol: 'AK',
    photoUrl: 'https://images.unsplash.com/photo-1586015555751-63bb77f4322a?auto=format&fit=crop&w=1000&q=80',
    storeCount: '500+ Nhà thuốc chuẩn GPP',
    description: 'Hệ thống nhà thuốc uy tín chuẩn GPP, tư vấn thuốc tận tâm bởi dược sĩ chuyên môn cao, thuốc chính hãng 100%.',
    highlights: ['Dược sĩ chuyên môn tư vấn 1-1', 'Thuốc chính hãng rõ nguồn gốc', 'Ưu đãi dành cho bệnh nhân thân thiết'],
  },
  {
    id: 'avakids',
    name: 'AVAKids',
    category: 'Mẹ & Bé',
    badgeBg: 'bg-[#e91e63]',
    badgeText: 'text-white',
    logoSymbol: 'AVA',
    photoUrl: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=1000&q=80',
    storeCount: '60+ Siêu thị mẹ & bé',
    description: 'Chuỗi siêu thị chuyên cung cấp sữa, tã bỉm, đồ dùng mẹ và bé, thời trang trẻ em chính hãng hàng đầu Việt Nam.',
    highlights: ['Sản phẩm mẹ & bé an toàn tuyệt đối', 'Đa dạng thương hiệu nổi tiếng', 'Ưu đãi thành viên cực lớn'],
  },
  {
    id: 'topzone',
    name: 'TopZone',
    category: 'Apple Authorized Reseller',
    badgeBg: 'bg-black border border-zinc-700',
    badgeText: 'text-white',
    logoSymbol: '',
    photoUrl: 'https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?auto=format&fit=crop&w=1000&q=80',
    storeCount: '100+ Cửa hàng Mono-brand Apple',
    description: 'Chuỗi cửa hàng ủy quyền cao cấp nhất của Apple tại Việt Nam (Mono-brand store), không gian trải nghiệm đẳng cấp chuẩn toàn cầu.',
    highlights: ['Đại lý ủy quyền chính thức Apple', 'Trải nghiệm hệ sinh thái Apple đỉnh cao', 'Chính sách bảo hành Apple toàn cầu'],
  },
  {
    id: 'erablue',
    name: 'EraBlue Electronics',
    category: 'Điện máy tại Indonesia',
    badgeBg: 'bg-[#002f6c]',
    badgeText: 'text-[#ffd400]',
    logoSymbol: 'EB',
    photoUrl: 'https://images.unsplash.com/photo-1526738549149-8e07eca6c147?auto=format&fit=crop&w=1000&q=80',
    storeCount: '70+ Cửa hàng tại Indonesia',
    description: 'Liên doanh giữa MWG và Tập đoàn Erajaya (Indonesia), tiên phong mô hình bán lẻ điện máy hiện đại tại quốc gia vạn đảo.',
    highlights: ['Tiên phong ngành bán lẻ điện máy Indonesia', 'Tốc độ mở rộng vượt bậc', 'Mô hình chuyển giao thành công từ ĐMX'],
  },
]

const TIMELINE_MILESTONES = [
  {
    year: '2004',
    title: 'Thành lập Thế Giới Di Động',
    desc: 'Khởi đầu với mô hình website bán hàng trực tuyến kết hợp cửa hàng trải nghiệm bán lẻ điện thoại đầu tiên tại TP.HCM.',
    photoUrl: 'https://images.unsplash.com/photo-1556742049-0a670fc8078a?auto=format&fit=crop&w=600&q=80',
  },
  {
    year: '2007',
    title: 'Hoàn thiện mô hình, chuyển đổi số',
    desc: 'Chuyển đổi sang Công ty Cổ phần, tiếp nhận vốn đầu tư từ Mekong Capital, bứt phá mở rộng chuỗi siêu thị.',
    photoUrl: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80',
  },
  {
    year: '2010',
    title: 'Ra mắt Điện máy XANH',
    desc: 'Mở rộng ngành hàng sang thiết bị gia dụng và điện tử với thương hiệu Điện máy XANH (tiền thân dienmay.com).',
    photoUrl: 'https://images.unsplash.com/photo-1526738549149-8e07eca6c147?auto=format&fit=crop&w=600&q=80',
  },
  {
    year: '2012',
    title: 'Phủ sóng 63 tỉnh thành',
    desc: 'Bứt phá tốc độ mở cửa hàng, đưa thương hiệu Thế Giới Di Động có mặt trên 63 tỉnh thành Việt Nam.',
    photoUrl: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=600&q=80',
  },
  {
    year: '2015',
    title: 'Thử nghiệm Bách Hóa XANH',
    desc: 'Tiên phong thâm nhập thị trường bán lẻ thực phẩm tươi sống và tiêu dùng nhanh gần nhà.',
    photoUrl: 'https://images.unsplash.com/photo-1586015555751-63bb77f4322a?auto=format&fit=crop&w=600&q=80',
  },
  {
    year: '2022',
    title: 'Vươn tầm quốc tế EraBlue',
    desc: 'Thành lập liên doanh EraBlue tại Indonesia cùng Tập đoàn Erajaya, vươn ra thị trường Đông Nam Á.',
    photoUrl: 'https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?auto=format&fit=crop&w=600&q=80',
  },
]

export const BoardOfDirectorsPage = () => {
  const [selectedLeaderTab, setSelectedLeaderTab] = useState<'bod' | 'exec'>('bod')
  const [selectedDirector, setSelectedDirector] = useState<DirectorLeader | null>(null)
  const [activeBrandId, setActiveBrandId] = useState<string>('tgdd')
  const [timelineIndex, setTimelineIndex] = useState<number>(0)

  const activeBrand = BRAND_TABS.find((b) => b.id === activeBrandId) || BRAND_TABS[0]

  const nextTimeline = () => {
    setTimelineIndex((prev) => (prev + 1) % TIMELINE_MILESTONES.length)
  }

  const prevTimeline = () => {
    setTimelineIndex((prev) => (prev - 1 + TIMELINE_MILESTONES.length) % TIMELINE_MILESTONES.length)
  }

  return (
    <div className="w-full bg-[#f8fafc] text-slate-800 min-h-screen pb-20 font-sans">
      {/* 1. Top Breadcrumb & Hero Banner */}
      <div className="bg-slate-900 text-white relative overflow-hidden border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between text-xs text-slate-400 z-10 relative">
          <div className="flex items-center gap-2">
            <Link to="/" className="hover:text-white transition-colors">
              Trang chủ
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
            <Link to="/gioi-thieu" className="hover:text-white transition-colors">
              Về MWG
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
            <span className="text-[#ffd400] font-bold">Hội đồng quản trị</span>
          </div>
          <span className="hidden sm:inline-block text-[11px] font-semibold text-slate-300 bg-slate-800/80 px-2.5 py-1 rounded-full border border-slate-700">
            Cơ cấu quản trị doanh nghiệp
          </span>
        </div>

        {/* Dark Hero Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Strategic Intro Text */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-[#ffd400] text-xs font-bold uppercase tracking-wider">
                <Building2 className="w-4 h-4 text-[#ffd400]" />
                Tập đoàn Bán lẻ Số 1 Việt Nam
              </div>

              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-tight">
                Công ty Cổ phần Đầu tư Thế Giới Di Động (MWG) là tập đoàn bán lẻ đa ngành hàng đầu Việt Nam.
              </h1>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="bg-slate-800/60 p-4 rounded-xl border border-slate-700/80 space-y-1.5">
                  <h3 className="text-xs font-extrabold text-[#ffd400] uppercase tracking-wider">
                    Chiến lược Omnichannel &amp; Nền tảng Công nghệ
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Vận hành hệ thống bán lẻ quy mô hàng ngàn điểm bán trên toàn quốc cùng nền tảng thương mại điện tử mượt mà, MWG mang lại trải nghiệm mua sắm đồng nhất.
                  </p>
                </div>

                <div className="bg-slate-800/60 p-4 rounded-xl border border-slate-700/80 space-y-1.5">
                  <h3 className="text-xs font-extrabold text-[#ffd400] uppercase tracking-wider">
                    Hệ sinh thái Cộng hưởng &amp; Văn hóa Phục vụ
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    MWG bao gồm 6 chuỗi thương hiệu hàng đầu: TGĐĐ, ĐMX, BHX, An Khang, AVAKids, TopZone cùng dịch vụ Tận Tâm và liên doanh EraBlue tại Indonesia.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Photo Frame */}
            <div className="lg:col-span-5 relative h-64 sm:h-80 rounded-2xl overflow-hidden shadow-2xl border border-slate-700">
              <img
                src={heroImg}
                alt="MWG Corporate Building"
                className="w-full h-full object-cover opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent flex items-end p-5">
                <div className="text-white space-y-1">
                  <span className="text-[10px] font-black uppercase tracking-widest text-[#ffd400]">
                    Trụ sở chính MWG
                  </span>
                  <p className="text-xs font-semibold text-slate-200 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-red-500" /> Tòa nhà MWG Lô T2-1.2, Khu Công Nghệ Cao, TP. Thủ Đức, TP.HCM
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Ban Lãnh Đạo / Hội Đồng Quản Trị Section (Grid with Yellow Frames) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-200 pb-4 gap-4">
          <div className="space-y-1">
            <span className="text-xs font-black uppercase tracking-widest text-[#d4222f]">
              BAN LÃNH ĐẠO MWG
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Đội ngũ Lãnh đạo Tập đoàn
            </h2>
          </div>

          {/* Leader Sub-Tabs */}
          <div className="flex items-center gap-2 bg-slate-200/80 p-1 rounded-xl text-xs font-bold self-start sm:self-auto">
            <button
              onClick={() => setSelectedLeaderTab('bod')}
              className={`px-4 py-2 rounded-lg transition-all cursor-pointer ${
                selectedLeaderTab === 'bod'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'text-slate-700 hover:text-slate-900'
              }`}
            >
              HỘI ĐỒNG QUẢN TRỊ
            </button>
            <button
              onClick={() => setSelectedLeaderTab('exec')}
              className={`px-4 py-2 rounded-lg transition-all cursor-pointer ${
                selectedLeaderTab === 'exec'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'text-slate-700 hover:text-slate-900'
              }`}
            >
              BAN GIÁM ĐỐC
            </button>
          </div>
        </div>

        {/* 8 Leader Cards Grid (Yellow Framed Box Design) */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {DIRECTORS_LIST.map((member) => (
            <div
              key={member.id}
              onClick={() => setSelectedDirector(member)}
              className="group bg-white rounded-2xl p-4 border-2 border-[#ffd400] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between items-center text-center cursor-pointer hover:-translate-y-1 relative overflow-hidden"
            >
              {/* Photo Box */}
              <div className="w-full h-44 sm:h-48 rounded-xl overflow-hidden bg-slate-100 mb-3 relative group-hover:scale-[1.02] transition-transform duration-300">
                <img
                  src={member.avatarUrl}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center p-2">
                  <span className="text-[11px] font-extrabold text-white bg-[#d4222f] px-2.5 py-1 rounded-full shadow-md">
                    Xem tiểu sử
                  </span>
                </div>
              </div>

              {/* Name & Role */}
              <div className="space-y-1 w-full">
                <h3 className="text-base font-extrabold text-slate-900 group-hover:text-[#d4222f] transition-colors leading-tight">
                  {member.name}
                </h3>
                <p className="text-xs font-medium text-slate-500 line-clamp-2 min-h-[32px]">
                  {member.role}
                </p>
              </div>

              {/* Badge Footer */}
              <div className="w-full pt-3 mt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
                <span className="inline-flex items-center gap-1 font-semibold text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200/60">
                  <ShieldCheck className="w-3 h-3 text-amber-600" />
                  MWG HĐQT
                </span>
                <span className="font-bold text-[#d4222f] group-hover:translate-x-0.5 transition-transform">
                  &rarr;
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Hệ Thống Các Thành Viên Của MWG Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 space-y-6">
        <div className="space-y-1 border-b border-slate-200 pb-3">
          <span className="text-xs font-black uppercase tracking-widest text-[#d4222f]">
            HỆ THỐNG THƯƠNG HIỆU
          </span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
            Các thành viên của MWG
          </h2>
        </div>

        {/* Brand Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
          {BRAND_TABS.map((brand) => {
            const isActive = brand.id === activeBrandId
            return (
              <button
                key={brand.id}
                onClick={() => setActiveBrandId(brand.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                  isActive
                    ? 'bg-slate-900 text-[#ffd400] shadow-md border border-slate-800 scale-105'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {brand.name}
              </button>
            )
          })}
        </div>

        {/* Active Brand Card Banner */}
        <div className="bg-slate-900 rounded-3xl overflow-hidden shadow-xl border border-slate-800 text-white grid grid-cols-1 lg:grid-cols-12 items-center">
          <div className="lg:col-span-7 p-6 sm:p-8 space-y-5">
            <div className="flex items-center gap-3">
              <div
                className={`px-3 py-1.5 rounded-xl font-extrabold text-sm shadow-md ${activeBrand.badgeBg} ${activeBrand.badgeText}`}
              >
                {activeBrand.name}
              </div>
              <span className="text-xs font-bold text-[#ffd400] bg-white/10 px-3 py-1 rounded-full border border-white/10">
                {activeBrand.storeCount}
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-black text-white">{activeBrand.category}</h3>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {activeBrand.description}
            </p>

            <div className="space-y-2 pt-2">
              <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#ffd400]">
                Điểm nổi bật tiêu biểu:
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {activeBrand.highlights.map((h, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-xs text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4">
              <Link
                to="/jobs"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#ffd400] hover:bg-yellow-400 text-slate-950 font-black text-xs transition-all shadow-md group cursor-pointer"
              >
                <span>XEM VIỆC LÀM PHÙ HỢP</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 h-64 sm:h-80 lg:h-full relative overflow-hidden bg-slate-950">
            <img
              src={activeBrand.photoUrl}
              alt={activeBrand.name}
              className="w-full h-full object-cover opacity-85 hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
          </div>
        </div>
      </section>

      {/* 4. Hành Trình 22 Năm Section (Dark Theme Timeline) */}
      <section className="bg-[#090d16] text-white py-16 mt-16 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-800 pb-4 gap-4">
            <div className="space-y-1">
              <span className="text-xs font-black uppercase tracking-widest text-[#ffd400]">
                CỘT MỐC PHÁT TRIỂN
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-white">Hành trình 22 năm</h2>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={prevTimeline}
                className="w-10 h-10 rounded-full bg-slate-800 hover:bg-slate-700 text-white flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Previous timeline item"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextTimeline}
                className="w-10 h-10 rounded-full bg-slate-800 hover:bg-slate-700 text-white flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Next timeline item"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Timeline Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TIMELINE_MILESTONES.map((item, index) => {
              const isSelected = index === timelineIndex
              return (
                <div
                  key={item.year}
                  onClick={() => setTimelineIndex(index)}
                  className={`bg-slate-900 rounded-2xl p-5 border transition-all duration-300 cursor-pointer space-y-4 ${
                    isSelected
                      ? 'border-[#ffd400] ring-2 ring-[#ffd400]/40 scale-105 shadow-xl'
                      : 'border-slate-800 hover:border-slate-700 opacity-80 hover:opacity-100'
                  }`}
                >
                  <div className="relative h-36 rounded-xl overflow-hidden bg-slate-800">
                    <img
                      src={item.photoUrl}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-2 left-2 px-3 py-1 rounded-lg bg-[#ffd400] text-black font-black text-xs shadow-md">
                      {item.year}
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <h3 className="text-base font-extrabold text-white">{item.title}</h3>
                    <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* 5. Công ty Con & Liên Kết Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 space-y-6">
        <div className="space-y-1 border-b border-slate-200 pb-3">
          <span className="text-xs font-black uppercase tracking-widest text-[#d4222f]">
            CƠ CẤU TẬP ĐOÀN
          </span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
            Công ty con &amp; Liên kết
          </h2>
        </div>

        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-md space-y-8 text-center">
          <div className="max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold text-[#d4222f] uppercase tracking-wider bg-red-50 px-3 py-1 rounded-full border border-red-100">
              MÔ HÌNH QUẢN TRỊ MWG HOLDINGS
            </span>
            <h3 className="text-lg sm:text-xl font-extrabold text-slate-900">
              Công ty Cổ phần Đầu tư Thế Giới Di Động (MWG)
            </h3>
            <p className="text-xs text-slate-600">
              Sở hữu 100% cổ phần định hướng chiến lược và các công ty con vận hành từng mảng ngành bán lẻ.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200/80 space-y-2 hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-full bg-[#111111] text-[#ffd400] font-black text-xs flex items-center justify-center mx-auto shadow-xs">
                TGĐĐ
              </div>
              <h4 className="text-xs font-bold text-slate-900">CTCP Công nghệ Di Động</h4>
              <p className="text-[11px] text-slate-500">Chuỗi TGĐĐ &amp; ĐMX</p>
            </div>

            <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200/80 space-y-2 hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-full bg-[#008848] text-white font-black text-xs flex items-center justify-center mx-auto shadow-xs">
                BHX
              </div>
              <h4 className="text-xs font-bold text-slate-900">CTCP Bách Hóa XANH</h4>
              <p className="text-[11px] text-slate-500">Chuỗi siêu thị thực phẩm</p>
            </div>

            <div className="p-4 rounded-2xl bg-teal-50 border border-teal-200/80 space-y-2 hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-full bg-[#007038] text-white font-black text-xs flex items-center justify-center mx-auto shadow-xs">
                AK
              </div>
              <h4 className="text-xs font-bold text-slate-900">CTCP Dược phẩm An Khang</h4>
              <p className="text-[11px] text-slate-500">Chuỗi nhà thuốc GPP</p>
            </div>

            <div className="p-4 rounded-2xl bg-blue-50 border border-blue-200/80 space-y-2 hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-full bg-[#003b73] text-[#ffd400] font-black text-xs flex items-center justify-center mx-auto shadow-xs">
                TT
              </div>
              <h4 className="text-xs font-bold text-slate-900">CTCP Dịch vụ Tận Tâm</h4>
              <p className="text-[11px] text-slate-500">Dịch vụ bảo trì kỹ thuật</p>
            </div>

            <div className="p-4 rounded-2xl bg-indigo-50 border border-indigo-200/80 space-y-2 hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-full bg-[#002f6c] text-[#ffd400] font-black text-xs flex items-center justify-center mx-auto shadow-xs">
                EB
              </div>
              <h4 className="text-xs font-bold text-slate-900">PT EraBlue Electronics</h4>
              <p className="text-[11px] text-slate-500">Liên doanh Indonesia</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Dấu Ấn & Thành Tựu Bền Vững Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 space-y-6">
        <div className="flex items-center justify-between border-b border-slate-200 pb-3">
          <div className="space-y-1">
            <span className="text-xs font-black uppercase tracking-widest text-[#d4222f]">
              VINH DANH TOÀN DIỆN
            </span>
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
              Dấu ấn &amp; Thành tựu bền vững
            </h2>
          </div>
          <Link to="/gioi-thieu" className="text-xs font-bold text-[#d4222f] hover:underline flex items-center gap-1">
            <span>Xem tất cả</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm hover:shadow-lg transition-all space-y-4">
            <div className="h-40 rounded-xl overflow-hidden bg-slate-900 relative">
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80"
                alt="Headquarters"
                className="w-full h-full object-cover opacity-90"
              />
              <span className="absolute top-3 left-3 bg-[#ffd400] text-black font-black text-[10px] px-2.5 py-1 rounded">
                NĂM 2025
              </span>
            </div>
            <div className="space-y-2">
              <h3 className="text-sm font-extrabold text-slate-900 leading-snug">
                Top 10 Doanh nghiệp tư nhân lớn nhất Việt Nam (VNR500)
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Thế Giới Di Động tiếp tục giữ vững vị trí dẫn đầu trong bảng xếp hạng VNR500 năm thứ 12 liên tiếp.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm hover:shadow-lg transition-all space-y-4">
            <div className="h-40 rounded-xl overflow-hidden bg-slate-900 relative">
              <img
                src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=600&q=80"
                alt="Forbes Award"
                className="w-full h-full object-cover opacity-90"
              />
              <span className="absolute top-3 left-3 bg-[#ffd400] text-black font-black text-[10px] px-2.5 py-1 rounded">
                NĂM 2024
              </span>
            </div>
            <div className="space-y-2">
              <h3 className="text-sm font-extrabold text-slate-900 leading-snug">
                Top 50 Công ty niêm yết tốt nhất Việt Nam - Forbes Vietnam
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Được Forbes vinh danh nhờ tốc độ tăng trưởng doanh thu ấn tượng và năng lực quản trị doanh nghiệp.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm hover:shadow-lg transition-all space-y-4">
            <div className="h-40 rounded-xl overflow-hidden bg-slate-900 relative">
              <img
                src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=600&q=80"
                alt="HR Award"
                className="w-full h-full object-cover opacity-90"
              />
              <span className="absolute top-3 left-3 bg-[#ffd400] text-black font-black text-[10px] px-2.5 py-1 rounded">
                NĂM 2024
              </span>
            </div>
            <div className="space-y-2">
              <h3 className="text-sm font-extrabold text-slate-900 leading-snug">
                Nơi làm việc tốt nhất Châu Á (Best Companies to Work for in Asia)
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                HR Asia trao tặng giải thưởng cho môi trường làm việc hạnh phúc, thu nhập cạnh tranh và thăng tiến công bằng.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Thông Tin Cổ Phiếu Widget */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 space-y-6">
        <div className="space-y-1 border-b border-slate-200 pb-3">
          <span className="text-xs font-black uppercase tracking-widest text-[#d4222f]">
            THỊ TRƯỜNG CHỨNG KHOÁN
          </span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
            Thông tin cổ phiếu MWG
          </h2>
        </div>

        <div className="bg-amber-50/70 rounded-3xl p-6 sm:p-8 border border-amber-200/80 shadow-md space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-amber-200/80 pb-4">
            <div>
              <span className="text-xs font-extrabold text-amber-800 uppercase tracking-widest">
                MÃ CỔ PHIẾU - NISAQ / HOSE
              </span>
              <h3 className="text-2xl font-black text-slate-900">MWG - HOSE</h3>
            </div>
            <div className="text-right sm:text-right">
              <div className="text-3xl font-black text-emerald-600">
                71,700 <span className="text-xs font-bold">VNĐ</span>
              </div>
              <span className="text-xs font-bold text-emerald-600 bg-emerald-100 px-2 py-0.5 rounded">
                +1,300 (+1.85%)
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 text-center">
            <div className="bg-white p-3 rounded-xl border border-amber-200/60 shadow-xs">
              <span className="text-[11px] font-semibold text-slate-500">Giá mở cửa</span>
              <p className="text-sm font-extrabold text-slate-900 mt-0.5">70,500 VNĐ</p>
            </div>
            <div className="bg-white p-3 rounded-xl border border-amber-200/60 shadow-xs">
              <span className="text-[11px] font-semibold text-slate-500">Cao nhất</span>
              <p className="text-sm font-extrabold text-emerald-600 mt-0.5">72,100 VNĐ</p>
            </div>
            <div className="bg-white p-3 rounded-xl border border-amber-200/60 shadow-xs">
              <span className="text-[11px] font-semibold text-slate-500">Thấp nhất</span>
              <p className="text-sm font-extrabold text-red-600 mt-0.5">70,200 VNĐ</p>
            </div>
            <div className="bg-white p-3 rounded-xl border border-amber-200/60 shadow-xs">
              <span className="text-[11px] font-semibold text-slate-500">Khối lượng GD</span>
              <p className="text-sm font-extrabold text-slate-900 mt-0.5">2,850,000 cổ</p>
            </div>
            <div className="bg-white p-3 rounded-xl border border-amber-200/60 shadow-xs">
              <span className="text-[11px] font-semibold text-slate-500">Vốn hóa thị trường</span>
              <p className="text-sm font-extrabold text-slate-900 mt-0.5">104,800 tỷ VNĐ</p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Banner Tầm Nhìn 2030 & 6 Giá Trị Cốt Lõi */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 rounded-3xl p-6 sm:p-10 shadow-xl text-slate-950 space-y-8 relative overflow-hidden">
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <span className="inline-block px-3 py-1 rounded-full bg-black text-[#ffd400] text-xs font-black uppercase tracking-wider shadow-md">
              MWG TẦM NHÌN 2030
            </span>
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight">
              ĐÂY LÀ MWG - NIỀM TỰ HÀO CỦA VIỆT NAM
            </h2>
            <p className="text-xs font-semibold text-slate-900">
              Kim chỉ nam định hình văn hóa doanh nghiệp và khát vọng vươn tầm khu vực.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            <div className="bg-white/90 backdrop-blur-xs p-3.5 rounded-2xl text-center space-y-2 border border-white/40 shadow-xs hover:scale-105 transition-transform">
              <div className="w-10 h-10 rounded-xl bg-amber-500 text-white flex items-center justify-center mx-auto shadow-xs">
                <Heart className="w-5 h-5 fill-white" />
              </div>
              <h3 className="text-xs font-black text-slate-900 leading-tight">
                Tận tâm với Khách hàng
              </h3>
            </div>

            <div className="bg-white/90 backdrop-blur-xs p-3.5 rounded-2xl text-center space-y-2 border border-white/40 shadow-xs hover:scale-105 transition-transform">
              <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center mx-auto shadow-xs">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-xs font-black text-slate-900 leading-tight">Trung thực</h3>
            </div>

            <div className="bg-white/90 backdrop-blur-xs p-3.5 rounded-2xl text-center space-y-2 border border-white/40 shadow-xs hover:scale-105 transition-transform">
              <div className="w-10 h-10 rounded-xl bg-sky-600 text-white flex items-center justify-center mx-auto shadow-xs">
                <Target className="w-5 h-5" />
              </div>
              <h3 className="text-xs font-black text-slate-900 leading-tight">Integrity</h3>
            </div>

            <div className="bg-white/90 backdrop-blur-xs p-3.5 rounded-2xl text-center space-y-2 border border-white/40 shadow-xs hover:scale-105 transition-transform">
              <div className="w-10 h-10 rounded-xl bg-purple-600 text-white flex items-center justify-center mx-auto shadow-xs">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="text-xs font-black text-slate-900 leading-tight">Đồng đội</h3>
            </div>

            <div className="bg-white/90 backdrop-blur-xs p-3.5 rounded-2xl text-center space-y-2 border border-white/40 shadow-xs hover:scale-105 transition-transform">
              <div className="w-10 h-10 rounded-xl bg-rose-600 text-white flex items-center justify-center mx-auto shadow-xs">
                <Flame className="w-5 h-5 fill-white" />
              </div>
              <h3 className="text-xs font-black text-slate-900 leading-tight">
                Máu lửa công việc
              </h3>
            </div>

            <div className="bg-white/90 backdrop-blur-xs p-3.5 rounded-2xl text-center space-y-2 border border-white/40 shadow-xs hover:scale-105 transition-transform">
              <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center mx-auto shadow-xs">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h3 className="text-xs font-black text-slate-900 leading-tight">Ham học hỏi</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Member Biography Modal */}
      {selectedDirector && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl border border-slate-200 animate-in fade-in zoom-in-95 duration-200">
            <div className="bg-slate-900 text-white p-6 relative">
              <button
                onClick={() => setSelectedDirector(null)}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 text-white hover:bg-white/20 flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close modal"
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

            <div className="p-6 space-y-4">
              <div className="space-y-2">
                <h4 className="text-xs font-extrabold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
                  <Info className="w-4 h-4 text-[#d4222f]" /> Tiểu sử &amp; Đóng góp chiến lược
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">{selectedDirector.bio}</p>
              </div>

              <div className="relative bg-amber-50/60 p-3.5 rounded-xl border border-amber-200/60">
                <Quote className="w-4 h-4 text-amber-500 mb-1" />
                <p className="text-xs text-amber-900 italic font-medium">"{selectedDirector.quote}"</p>
              </div>

              <div className="space-y-2.5 pt-2 border-t border-slate-100">
                <h4 className="text-xs font-extrabold text-slate-900 uppercase tracking-wider">
                  Dấu ấn nổi bật:
                </h4>
                <ul className="space-y-1.5">
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
    </div>
  )
}

export const HoiDongQuanTriPage = BoardOfDirectorsPage

