export interface InternalJob {
  id: string
  title: string
  department: string
  brand: string
  locationText: string
  salary: string
  createdDate: string
  deadline: string
  isHot?: boolean
  description?: string
  requirements?: string[]
}

export interface InternalFAQ {
  id: number
  question: string
  answer: string
}

export const INTERNAL_JOBS_MOCK: InternalJob[] = [
  {
    id: 'ij-1',
    title: 'Nhân viên Coffeer TGĐĐ/BHX',
    department: 'Khối Siêu thị',
    brand: 'TGĐĐ / BHX',
    locationText: 'Thành phố Hồ Chí Minh',
    salary: 'Từ 08 - 12 triệu',
    createdDate: '15/04/2024',
    deadline: '30/04/2024',
    isHot: true,
    description: 'Pha chế và phục vụ cà phê, đồ uống tại chuỗi cửa hàng Thế Giới Di Động và Bách Hóa Xanh.',
    requirements: [
      'Nhân viên chính thức MWG làm việc từ 6 tháng trở lên.',
      'Yêu thích công việc pha chế, giao tiếp khách hàng tốt.',
      'Khéo léo, chăm chỉ, có tinh thần trách nhiệm.',
    ],
  },
  {
    id: 'ij-2',
    title: 'Nhân viên Phụ Trách Nội Dung TGĐĐ/BHX',
    department: 'Khối Văn phòng / Marketing',
    brand: 'TGĐĐ / BHX',
    locationText: 'Thành phố Hồ Chí Minh',
    salary: 'Lương Thỏa Thuận',
    createdDate: '12/04/2024',
    deadline: '30/04/2024',
    isHot: true,
    description: 'Biên tập, sáng tạo nội dung truyền thông cho các chiến dịch nội bộ và khách hàng của TGĐĐ và BHX.',
    requirements: [
      'Kinh nghiệm biên tập nội dung hoặc sáng tạo content 6 tháng trở lên.',
      'Tốt nghiệp Cao đẳng/Đại học chuyên ngành MKT, Báo chí hoặc liên quan.',
      'Có khả năng viết lách, nắm bắt xu hướng nhanh.',
    ],
  },
  {
    id: 'ij-3',
    title: 'Nhân viên Admin Logistics (Đổi Trả - Kiểm soát chất lượng)',
    department: 'Khối Logistics',
    brand: 'MWG Logistics',
    locationText: 'Thành phố Hồ Chí Minh',
    salary: 'Từ 10 - 14 triệu',
    createdDate: '01/04/2024',
    deadline: '05/05/2024',
    isHot: true,
    description: 'Quản lý, kiểm soát quy trình đổi trả hàng hóa và giám sát chất lượng sản phẩm tại kho tổng.',
    requirements: [
      'Cẩn thận, tỉ mỉ, có kỹ năng làm việc với số liệu Excel khá.',
      'Hiểu rõ quy trình nhập xuất kho và đổi trả sản phẩm MWG.',
    ],
  },
  {
    id: 'ij-4',
    title: 'Nhân viên Mua Hàng Rau/Củ/Quả/Trái Cây Địa Phương Bách Hóa Xanh (Khu vực Miền Bắc)',
    department: 'Khối Mua hàng (Purchasing)',
    brand: 'Bách Hóa Xanh',
    locationText: 'Thành phố Hà Nội (Lương: Thỏa Thuận)',
    salary: 'Lương Thỏa Thuận',
    createdDate: '02/04/2024',
    deadline: '10/05/2024',
    isHot: true,
    description: 'Tìm kiếm, làm việc trực tiếp với đối tác nhà vườn, thu mua nông sản rau củ quả địa phương khu vực Miền Bắc.',
    requirements: [
      'Có kinh nghiệm hoặc am hiểu nông sản địa phương.',
      'Kỹ năng đàm phán, thương lượng giá cả tốt.',
      'Chấp nhận đi tác chiến tại các tỉnh Miền Bắc.',
    ],
  },
  {
    id: 'ij-5',
    title: 'Nhân viên Mua Hàng Rau/Củ/Quả/Trái Cây Địa Phương Bách Hóa Xanh (Khu vực Miền Trung)',
    department: 'Khối Mua hàng (Purchasing)',
    brand: 'Bách Hóa Xanh',
    locationText: 'Thừa Thiên Huế (Lương: Thỏa Thuận)',
    salary: 'Lương Thỏa Thuận',
    createdDate: '03/04/2024',
    deadline: '10/05/2024',
    isHot: true,
    description: 'Phụ trách khảo sát giá và thu mua nguồn hàng thực phẩm tươi sống địa phương khu vực các tỉnh Miền Trung.',
    requirements: [
      'Có kinh nghiệm ngành hàng thực phẩm tươi sống.',
      'Nhanh nhạy với thị trường giá nông sản.',
    ],
  },
  {
    id: 'ij-6',
    title: 'Chuyên Viên Tìm Kiếm Và Phát Triển Mặt Bằng Bách Hóa Xanh',
    department: 'Khối Phát triển Mặt Bằng',
    brand: 'Bách Hóa Xanh',
    locationText: 'Tỉnh Bà Rịa Vũng Tàu',
    salary: 'Lương: 15 - 25 triệu',
    createdDate: '10/04/2024',
    deadline: '15/05/2024',
    isHot: true,
    description: 'Khảo sát địa bàn, đàm phán hợp đồng thuê mặt bằng kinh doanh cho hệ thống siêu thị Bách Hóa Xanh.',
    requirements: [
      'Giao tiếp khéo léo, am hiểu pháp lý bất động sản cơ bản.',
      'Chủ động, có phương tiện di chuyển cá nhân.',
    ],
  },
  {
    id: 'ij-7',
    title: 'Nhân viên Tổng đài Tiếp nhận & Tư vấn Bảo hành Điện Máy Xanh',
    department: 'Khối Dịch vụ Khách hàng',
    brand: 'Điện Máy Xanh',
    locationText: 'Thành phố Hồ Chí Minh',
    salary: 'Từ 08 - 12 triệu',
    createdDate: '18/04/2024',
    deadline: '28/05/2024',
    isHot: false,
    description: 'Tiếp nhận cuộc gọi hướng dẫn và làm thủ tục bảo hành thiết bị điện thoại, điện máy cho khách hàng DMX.',
    requirements: [
      'Giọng nói chuẩn, không nói ngọng/nói lắp.',
      'Lắng nghe tốt, kiên nhẫn và bình tĩnh xử lý tình huống.',
    ],
  },
  {
    id: 'ij-8',
    title: 'Tổng Đài Chăm Sóc Khách Hàng (Giải Quyết Khiếu Nại)',
    department: 'Khối Dịch vụ Khách hàng',
    brand: 'MWG Tập đoàn',
    locationText: 'Thành phố Hồ Chí Minh',
    salary: 'Từ 09 - 13 triệu',
    createdDate: '19/04/2024',
    deadline: '30/05/2024',
    isHot: false,
    description: 'Xử lý phản hồi khiếu nại của khách hàng toàn hệ thống MWG, đưa ra hướng giải quyết thỏa đáng mang lại sự hài lòng.',
    requirements: [
      'Kinh nghiệm CSKH hoặc tư vấn siêu thị trên 1 năm.',
      'Khả năng kiểm soát cảm xúc tốt.',
    ],
  },
]

export const INTERNAL_FAQS: InternalFAQ[] = [
  {
    id: 1,
    question: 'Điều kiện ứng tuyển là gì?',
    answer:
      'Nhân viên thuộc hợp đồng lao động chính thức của MWG từ 6 tháng trở lên, có kết quả đánh giá KPI gần nhất đạt mức Khá trở lên và không thuộc đối tượng đang trong quá trình xem xét kỷ luật từ mức Khiển trách.',
  },
  {
    id: 2,
    question: 'Muốn chuyển khối nhưng chưa đủ năng lực thì làm thế nào?',
    answer:
      'Bạn có thể tham gia các khóa đào tạo nội bộ do MWG Academy tổ chức hoặc đề xuất với bộ phận Nhân sự để được hướng dẫn lộ trình nâng cao năng lực trước khi chính thức nộp hồ sơ ứng tuyển.',
  },
  {
    id: 3,
    question: 'Quy trình chuyển đổi & khoán vị giữa các bộ phận trong tập đoàn thế nào?',
    answer:
      'Quy trình bao gồm 4 bước: 1. Nộp hồ sơ nguyện vọng trực tuyến -> 2. Quản lý bộ phận hiện tại xác nhận -> 3. Bộ phận mới phỏng vấn & đánh giá -> 4. Hoàn tất thủ tục chuyển phòng ban và thử thách vị trí mới.',
  },
  {
    id: 4,
    question: 'Có hạn chế số lượng vị trí tuyển dụng không?',
    answer:
      'Không hạn chế số lượng ứng tuyển. Tuy nhiên, nhân viên chỉ nên nộp tối đa 2 nguyện vọng cùng lúc để tập trung tốt nhất cho quá trình phỏng vấn.',
  },
  {
    id: 5,
    question: 'Có cần thông báo với quản lý trước khi nộp ĐK?',
    answer:
      'Có. Việc trao đổi minh bạch với Quản lý trực tiếp giúp quản lý chủ động sắp xếp nhân sự thay thế và tạo điều kiện hỗ trợ bạn chuyển giao công việc thuận lợi.',
  },
  {
    id: 6,
    question: 'Chuyển ngành có bị ảnh hưởng đến thu nhập/lương thưởng không?',
    answer:
      'Mức lương sẽ được điều chỉnh tương ứng với khung lương của vị trí mới. MWG cam kết chính sách thu nhập cạnh tranh và công bằng theo đúng năng lực & cấp bậc mới.',
  },
  {
    id: 7,
    question: 'Vị trí mới đòi hỏi kinh nghiệm mới thì tôi có được đào tạo không?',
    answer:
      'Có. MWG luôn có chương trình "Onboarding & Mentoring" đồng hành giúp nhân viên tiếp thu công việc mới trong 30-60 ngày đầu tiên.',
  },
  {
    id: 8,
    question: 'Tôi đã nộp ứng tuyển nhưng làm sao biết hồ sơ đã được duyệt?',
    answer:
      'Trạng thái hồ sơ sẽ được cập nhật liên tục trên cổng Việc làm nội bộ và gửi thông báo qua email công vụ / ứng dụng MWG Nội bộ của bạn.',
  },
  {
    id: 9,
    question: 'Thu nhập/lương thưởng được tính lại như thế nào?',
    answer:
      'Lương tháng chuyển đổi sẽ được tính theo số ngày công thực tế tại phòng ban cũ và phòng ban mới theo quy định của bộ phận Kế toán - Nhân sự.',
  },
  {
    id: 10,
    question: 'Quy trình phỏng vấn việc nội bộ như thế nào?',
    answer:
      'Phỏng vấn nội bộ thường bao gồm 1 vòng bài test chuyên môn (nếu có) và 1 vòng phỏng vấn trực tiếp cùng Trưởng bộ phận tiếp nhận.',
  },
  {
    id: 11,
    question: 'Quy trình ứng tuyển giữa các khối/phòng chuyển như thế nào?',
    answer:
      'Quy trình diễn ra nhanh chóng thông qua hệ thống quản trị nhân sự ERP nội bộ, tiết kiệm tối đa thời gian và không cần chuẩn bị hồ sơ giấy.',
  },
  {
    id: 12,
    question: 'Quy trình xử lý hồ sơ khi được duyệt chuyển như thế nào?',
    answer:
      'Sau khi trúng tuyển, bạn sẽ nhận được Thư mời nhận việc nội bộ (Internal Offer Letter) và có từ 7 - 14 ngày để bàn giao công việc cũ trước khi sang bộ phận mới.',
  },
]
