import { useState, useEffect } from 'react'
import { Link, useSearchParams, useLocation } from 'react-router-dom'
import {
  Home,
  ChevronRight,
  Clock,
  MapPin,
  ChevronDown,
  ArrowRight,
  Bookmark,
  Share2,
} from 'lucide-react'
import { useTranslation } from 'react-i18next'

interface Article {
  id: string
  title: string
  category: string
  readTime: string
  timeAgo: string
  excerpt: string
  imageUrl: string
  tab: 'huong-nghiep' | 'cuoc-song-mwg' | 'thanh-tuu' | 'podcast'
}

interface JobItem {
  id: string
  title: string
  location: string
  postedDate: string
}

const ARTICLES_DATA: Article[] = [
  {
    id: '1',
    title: '5 điều cần làm sang tuần mới nên thử để trở thành người thành công',
    category: 'Hướng nghiệp và việc làm',
    readTime: '3 min',
    timeAgo: '8 giờ trước',
    excerpt:
      'Tuần mới mang đến những cơ hội mới để bứt phá. Khám phá 5 thói quen đơn giản giúp bạn nâng cao hiệu suất làm việc và tạo lập phong thái của người thành công.',
    imageUrl:
      'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80',
    tab: 'huong-nghiep',
  },
  {
    id: '2',
    title:
      'Công ty Cổ phần Thế Giới Di Động đồng hành cùng học sinh trong chương trình hướng nghiệp "CTIM Career Tour 2024" tại Trường THPT Long Thới',
    category: 'Hướng nghiệp và việc làm',
    readTime: '2 min',
    timeAgo: '20 giờ trước',
    excerpt:
      'Chương trình CTIM Career Tour 2024 tại THPT Long Thới đã mang lại những định hướng nghề nghiệp thực tế, giúp các em học sinh có cái nhìn rõ nét về môi trường làm việc tại MWG.',
    imageUrl:
      'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80',
    tab: 'huong-nghiep',
  },
  {
    id: '3',
    title:
      'Thế Giới Di Động Đồng Hành Cùng Anh Em Công Nhân CTIM Trở Thành Tài Xế Taxi Nghệ An Theo TĐ',
    category: 'Hướng nghiệp và việc làm',
    readTime: '3 min',
    timeAgo: '24 giờ trước',
    excerpt:
      'MWG tiếp tục mở rộng các chương trình hỗ trợ chuyển đổi nghề nghiệp linh hoạt, đồng hành cùng lực lượng lao động trong việc xây dựng sự nghiệp ổn định và lâu dài.',
    imageUrl:
      'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=80',
    tab: 'huong-nghiep',
  },
  {
    id: '4',
    title:
      'Công ty Cổ phần Thế Giới Di Động Đồng Hành Cùng Cao Đẳng CTIM Trong Ngày Hội Hướng Nghiệp – Thắp Lửa Đam Mê Cho Các Bạn Học Sinh',
    category: 'Hướng nghiệp và việc làm',
    readTime: '3 min',
    timeAgo: '3 ngày trước',
    excerpt:
      'Ngày hội hướng nghiệp thắp lửa đam mê với sự tham gia của hàng ngàn sinh viên CTIM, mở ra nhiều cơ hội thực tập sinh và tuyển dụng chính thức tại tập đoàn.',
    imageUrl:
      'https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=800&q=80',
    tab: 'huong-nghiep',
  },
  {
    id: '5',
    title:
      'Công ty Cổ phần Trực Điện máy Xanh và Cao Đẳng CTIM thắt chặt mối quan hệ hợp tác',
    category: 'Hướng nghiệp và việc làm',
    readTime: '3 min',
    timeAgo: '4 ngày trước',
    excerpt:
      'Lễ ký kết hợp tác chiến lược giữa Điện Máy Xanh và Cao Đẳng CTIM nhằm đẩy mạnh công tác đào tạo gắn liền với thực tiễn tuyển dụng doanh nghiệp.',
    imageUrl:
      'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80',
    tab: 'huong-nghiep',
  },
  {
    id: '6',
    title:
      'Giá trị sự nghiệp Tại MWG: Hành trình ý nghĩa cho nhà đầu tư / Freelancer',
    category: 'Hướng nghiệp và việc làm',
    readTime: '3 min',
    timeAgo: '5 ngày trước',
    excerpt:
      'Hành trình phát triển sự nghiệp tại MWG mang lại giá trị dài hạn, thu nhập vượt trội cùng cơ hội đầu tư bứt phá dành cho từng cá nhân xuất sắc.',
    imageUrl:
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80',
    tab: 'huong-nghiep',
  },
  {
    id: '7',
    title: 'MWG – Môi trường mở cho hành trình sự nghiệp của bạn',
    category: 'Hướng nghiệp và việc làm',
    readTime: '3 min',
    timeAgo: '6 ngày trước',
    excerpt:
      'Tạo dựng môi trường làm việc minh bạch, bình đẳng và mở rộng cơ hội cho tất cả thành viên thử sức ở nhiều vị trí công tác mới.',
    imageUrl:
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
    tab: 'cuoc-song-mwg',
  },
  {
    id: '8',
    title:
      '[Tạo khoảnh khắc] 3 tháng gắn bó Hành trình Trực Tiếp Sinh Thương Mại Điện Tử 2023 tại MWG',
    category: 'Hướng nghiệp và việc làm',
    readTime: '3 min',
    timeAgo: '8 ngày trước',
    excerpt:
      'Cùng nhìn lại chặng đường 3 tháng thực tập sinh e-Commerce với những trải nghiệm thực chiến giá trị và thành tựu bứt phá ấn tượng.',
    imageUrl:
      'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80',
    tab: 'cuoc-song-mwg',
  },
  {
    id: '9',
    title:
      'FOMO Nghề Nghiệp: Khi Không Thể Dừng Lại Mọi Trải Nghiệm Để Chọn Một Hướng Đi Đúng Cho Bản Thân',
    category: 'Hướng nghiệp và việc làm',
    readTime: '3 min',
    timeAgo: '10 ngày trước',
    excerpt:
      'Vượt qua tâm lý hoang mang FOMO trong định hướng nghề nghiệp và phương pháp tìm ra con đường phù hợp nhất với năng lực bản thân.',
    imageUrl:
      'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80',
    tab: 'huong-nghiep',
  },
  {
    id: '10',
    title:
      'Google AI Studio là gì – Công cụ AI giúp tiết kiệm vượt giới hạn... mở ra cơ hội nghề nghiệp mới',
    category: 'Hướng nghiệp và việc làm',
    readTime: '3 min',
    timeAgo: '12 ngày trước',
    excerpt:
      'Khám phá ứng dụng công nghệ Google AI Studio giúp nâng cao năng suất cá nhân và đón đầu xu hướng chuyển đổi số trong kỷ nguyên trí tuệ nhân tạo.',
    imageUrl:
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
    tab: 'huong-nghiep',
  },
  {
    id: '11',
    title: 'Top 10 kỹ năng mềm quan trọng nhất khi phỏng vấn tuyển dụng tại tập đoàn bán lẻ',
    category: 'Hướng nghiệp và việc làm',
    readTime: '4 min',
    timeAgo: '14 ngày trước',
    excerpt:
      'Bí quyết chuẩn bị ấn tượng, giao tiếp tự tin và thể hiện tư duy phục vụ khách hàng xuất sắc khi tham gia các kỳ tuyển dụng lớn.',
    imageUrl:
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
    tab: 'huong-nghiep',
  },
  {
    id: '12',
    title: 'Làm thế nào để xây dựng lộ trình thăng tiến rõ ràng từ Nhân viên lên Quản lý?',
    category: 'Hướng nghiệp và việc làm',
    readTime: '5 min',
    timeAgo: '15 ngày trước',
    excerpt:
      'Chia sẻ từ các Quản lý Siêu thị xuất sắc về quá trình rèn luyện kỹ năng lãnh đạo và sẵn sàng đón nhận thử thách mới tại MWG.',
    imageUrl:
      'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80',
    tab: 'thanh-tuu',
  },
]

const LATEST_JOBS: JobItem[] = [
  {
    id: 'j1',
    title: 'Nhân viên Bảo Trì Điện Nước Siêu Thị',
    location: 'TP. Hồ Chí Minh',
    postedDate: 'Mới cập nhật',
  },
  {
    id: 'j2',
    title: 'Công Nhân Sản Xuất & Lắp Ráp Linh Kiện',
    location: 'Bình Dương',
    postedDate: 'Hot',
  },
  {
    id: 'j3',
    title: 'Nhân Viên Tư Vấn Tuyển Dụng & Hỗ Trợ Ứng Viên',
    location: 'TP. Hồ Chí Minh',
    postedDate: 'Tuyển gấp',
  },
  {
    id: 'j4',
    title: 'Chuyên Viên Marketing Digital & Truyền Thông',
    location: 'Hà Nội',
    postedDate: 'Hot',
  },
  {
    id: 'j5',
    title: 'Trưởng Nhóm Kỹ Thuật Bảo Hành Điện Máy',
    location: 'Đồng Nai',
    postedDate: 'Mới',
  },
  {
    id: 'j6',
    title: 'Nhân Viên Thu Ngân & Phục Vụ Bách Hóa XANH',
    location: 'TP. Hồ Chí Minh',
    postedDate: 'Toàn thời gian',
  },
]

export const CareerGuidePage = () => {
  const { t } = useTranslation('recruitment')
  const [searchParams] = useSearchParams()
  const location = useLocation()

  const getInitialTab = (): 'moi-nhat' | 'huong-nghiep' | 'cuoc-song-mwg' | 'thanh-tuu' | 'podcast' => {
    const search = location.search || window.location.search
    const path = location.pathname || window.location.pathname
    const tabParam = searchParams.get('tab') || new URLSearchParams(search).get('tab')
    if (
      tabParam === 'cuoc-song-mwg' ||
      tabParam === 'life-mwg' ||
      path.includes('cuoc-song-mwg')
    ) {
      return 'cuoc-song-mwg'
    }
    if (tabParam === 'moi-nhat') return 'moi-nhat'
    if (tabParam === 'thanh-tuu') return 'thanh-tuu'
    if (tabParam === 'podcast') return 'podcast'
    return 'huong-nghiep'
  }

  const [activeTab, setActiveTab] = useState<
    'moi-nhat' | 'huong-nghiep' | 'cuoc-song-mwg' | 'thanh-tuu' | 'podcast'
  >(getInitialTab)
  const [visibleCount, setVisibleCount] = useState(10)

  useEffect(() => {
    const search = location.search || window.location.search
    const path = location.pathname || window.location.pathname
    const tabParam = searchParams.get('tab') || new URLSearchParams(search).get('tab')
    if (
      tabParam === 'cuoc-song-mwg' ||
      tabParam === 'life-mwg' ||
      path.includes('cuoc-song-mwg')
    ) {
      setActiveTab('cuoc-song-mwg')
    } else if (tabParam === 'moi-nhat') {
      setActiveTab('moi-nhat')
    } else if (tabParam === 'thanh-tuu') {
      setActiveTab('thanh-tuu')
    } else if (tabParam === 'podcast') {
      setActiveTab('podcast')
    } else if (tabParam === 'huong-nghiep') {
      setActiveTab('huong-nghiep')
    }
  }, [searchParams, location.search, location.pathname])

  const filteredArticles = ARTICLES_DATA.filter((article) => {
    if (activeTab === 'moi-nhat') return true
    if (activeTab === 'huong-nghiep') return article.tab === 'huong-nghiep'
    if (activeTab === 'cuoc-song-mwg') return article.tab === 'cuoc-song-mwg'
    if (activeTab === 'thanh-tuu') return article.tab === 'thanh-tuu'
    if (activeTab === 'podcast') return article.id === '10' || article.id === '1'
    return true
  })

  const displayedArticles = filteredArticles.slice(0, visibleCount)

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 5)
  }

  return (
    <div className="w-full bg-[#f8f9fa] text-zinc-800 min-h-screen">
      {/* Top Header Breadcrumb Line */}
      <div className="bg-white border-b border-zinc-200 py-3 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs font-medium text-zinc-500">
          <Link
            to="/"
            className="flex items-center gap-1.5 hover:text-blue-600 transition-colors"
          >
            <Home className="w-3.5 h-3.5 text-zinc-400" />
            <span>{t('common.home', 'Trang chủ')}</span>
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-zinc-400" />
          <span className="text-zinc-700 font-medium">
            Hướng nghiệp - Bài viết
          </span>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Navigation Tabs Bar */}
        <div className="bg-white border border-zinc-200 rounded-t-xl px-4 sm:px-6 flex items-center gap-6 sm:gap-8 overflow-x-auto scrollbar-none shadow-xs">
          {[
            { id: 'moi-nhat', label: 'MỚI NHẤT' },
            { id: 'huong-nghiep', label: 'HƯỚNG NGHIỆP' },
            { id: 'cuoc-song-mwg', label: 'CUỘC SỐNG MWG' },
            { id: 'thanh-tuu', label: 'THÀNH TỰU' },
            { id: 'podcast', label: 'PODCAST' },
          ].map((tab) => {
            const isActive = activeTab === tab.id
            return (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id as any)
                  setVisibleCount(10)
                }}
                className={`py-4 text-xs sm:text-sm font-bold tracking-wide border-b-2 transition-all whitespace-nowrap cursor-pointer ${
                  isActive
                    ? 'border-[#0070e0] text-[#0070e0]'
                    : 'border-transparent text-zinc-600 hover:text-zinc-900 hover:border-zinc-300'
                }`}
              >
                {tab.label}
              </button>
            )
          })}
        </div>

        {/* Main 2-Column Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-6">
          {/* Left Column: Articles List (8 cols on lg) */}
          <div className="lg:col-span-8 space-y-5">
            {displayedArticles.map((article) => (
              <div
                key={article.id}
                className="bg-white rounded-xl p-4 sm:p-5 border border-zinc-200/90 hover:border-zinc-300 shadow-2xs hover:shadow-md transition-all duration-200 flex flex-col sm:flex-row gap-4 sm:gap-5 group"
              >
                {/* Article Image Thumbnail */}
                <div className="w-full sm:w-56 h-40 sm:h-36 rounded-lg overflow-hidden shrink-0 relative bg-zinc-100">
                  <img
                    src={article.imageUrl}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-2 left-2 bg-black/60 backdrop-blur-xs text-white text-[10px] font-semibold px-2 py-0.5 rounded">
                    {article.category}
                  </div>
                </div>

                {/* Article Info & Text */}
                <div className="flex-1 flex flex-col justify-between space-y-2">
                  <div className="space-y-2">
                    {/* Title */}
                    <h2 className="text-base sm:text-lg font-bold text-zinc-900 group-hover:text-[#0070e0] transition-colors leading-snug line-clamp-2">
                      <Link to={`#article-${article.id}`}>{article.title}</Link>
                    </h2>

                    {/* Excerpt */}
                    <p className="text-xs sm:text-sm text-zinc-600 line-clamp-2 leading-relaxed font-normal">
                      {article.excerpt}
                    </p>
                  </div>

                  {/* Metadata Footer */}
                  <div className="flex items-center justify-between text-[11px] text-zinc-500 pt-2 border-t border-zinc-100">
                    <div className="flex items-center gap-3">
                      <span className="font-semibold text-[#0070e0]">
                        {article.category}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3 text-zinc-400" />
                        {article.readTime}
                      </span>
                      <span>•</span>
                      <span>{article.timeAgo}</span>
                    </div>

                    <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button
                        className="p-1 text-zinc-400 hover:text-zinc-700 rounded transition-colors"
                        title="Lưu bài viết"
                      >
                        <Bookmark className="w-3.5 h-3.5" />
                      </button>
                      <button
                        className="p-1 text-zinc-400 hover:text-zinc-700 rounded transition-colors"
                        title="Chia sẻ"
                      >
                        <Share2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Load More Button ("Xem thêm") */}
            {visibleCount < filteredArticles.length && (
              <div className="pt-4 pb-8 flex justify-center">
                <button
                  onClick={handleLoadMore}
                  className="px-8 py-2.5 rounded-full bg-[#0070e0] hover:bg-blue-700 text-white font-bold text-xs sm:text-sm transition-all duration-200 shadow-md shadow-blue-500/20 hover:scale-[1.02] cursor-pointer flex items-center gap-2"
                >
                  <span>Xem thêm</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>

          {/* Right Column: Latest Job Postings Sidebar Widget (4 cols on lg) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white rounded-xl p-5 border border-zinc-200 shadow-2xs sticky top-20">
              {/* Header */}
              <div className="flex items-center justify-between pb-3 border-b border-zinc-200 mb-4">
                <h3 className="text-sm font-extrabold text-zinc-900 uppercase tracking-wide">
                  TIN TUYỂN DỤNG MỚI NHẤT
                </h3>
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              </div>

              {/* Job Items List */}
              <div className="divide-y divide-zinc-100">
                {LATEST_JOBS.map((job) => (
                  <div
                    key={job.id}
                    className="py-3.5 first:pt-0 last:pb-0 flex items-center justify-between gap-3 group"
                  >
                    <div className="space-y-1 pr-2">
                      <Link
                        to="/jobs"
                        className="text-xs sm:text-sm font-bold text-zinc-800 group-hover:text-[#0070e0] transition-colors leading-snug block line-clamp-2"
                      >
                        {job.title}
                      </Link>
                      <div className="flex items-center gap-1.5 text-[11px] text-zinc-500">
                        <MapPin className="w-3 h-3 text-zinc-400 shrink-0" />
                        <span>{job.location}</span>
                      </div>
                    </div>

                    <Link
                      to="/jobs"
                      className="shrink-0 text-xs font-bold text-[#0070e0] hover:text-blue-800 hover:underline transition-colors flex items-center gap-0.5 whitespace-nowrap"
                    >
                      <span>Ứng tuyển</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                ))}
              </div>

              {/* View All Jobs Banner */}
              <div className="mt-5 pt-4 border-t border-zinc-100">
                <Link
                  to="/jobs"
                  className="w-full py-2.5 px-4 rounded-lg bg-zinc-900 hover:bg-black text-white text-xs font-bold flex items-center justify-center gap-2 transition-colors shadow-xs"
                >
                  <span>Xem tất cả việc làm</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
