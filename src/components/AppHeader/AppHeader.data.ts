import {
  ShoppingBag,
  Wrench,
  Package,
  Laptop,
  ShoppingCart,
  Calculator,
  Warehouse,
  Stethoscope,
  Headphones,
  Globe,
  Palette,
  Megaphone,
  Bike,
  ShieldCheck,
  Shield,
  Scale,
  CheckCircle2,
  MapPin,
  type LucideIcon,
} from 'lucide-react'

export interface SpecialtyItem {
  id: string
  label: string
  to: string
  icon: LucideIcon
}

export const SPECIALTY_COLUMNS: SpecialtyItem[][] = [
  // Column 1
  [
    {
      id: 'sales-supermarket',
      label: 'Bán hàng/Thu ngân/Kỹ thuật/Kho siêu thị',
      to: '/jobs?specialty=sales-supermarket',
      icon: ShoppingBag,
    },
    {
      id: 'construction-maintenance',
      label: 'Xây dựng/ Bảo trì/ Điện',
      to: '/jobs?specialty=construction-maintenance',
      icon: Wrench,
    },
    {
      id: 'food-prep-packaging',
      label: 'Sơ chế/ Đóng gói',
      to: '/jobs?specialty=food-prep-packaging',
      icon: Package,
    },
    {
      id: 'it-software',
      label: 'Công nghệ thông tin/ IT/ Lập trình',
      to: '/jobs?specialty=it-software',
      icon: Laptop,
    },
    {
      id: 'purchasing-merchandising',
      label: 'Ngành hàng/Mua hàng',
      to: '/jobs?specialty=purchasing-merchandising',
      icon: ShoppingCart,
    },
    {
      id: 'accounting-finance',
      label: 'Kế toán/Kiểm toán/Tài chính',
      to: '/jobs?specialty=accounting-finance',
      icon: Calculator,
    },
  ],

  // Column 2
  [
    {
      id: 'warehouse-logistics',
      label: 'Kho Vận / Kho trung tâm',
      to: '/jobs?specialty=warehouse-logistics',
      icon: Warehouse,
    },
    {
      id: 'pharmacy-medical',
      label: 'Dược/ Dược sỹ/ Y Tế',
      to: '/jobs?specialty=pharmacy-medical',
      icon: Stethoscope,
    },
    {
      id: 'callcenter-customer-service',
      label: 'Tổng đài/ Callcenter/ Chăm sóc Khách Hàng',
      to: '/jobs?specialty=callcenter-customer-service',
      icon: Headphones,
    },
    {
      id: 'ecommerce-online',
      label: 'Thương mại điện tử/ Kênh online',
      to: '/jobs?specialty=ecommerce-online',
      icon: Globe,
    },
    {
      id: 'design-uxui-product',
      label: 'Thiết kế/ UX-UI/ Phát triển sản phẩm',
      to: '/jobs?specialty=design-uxui-product',
      icon: Palette,
    },
    {
      id: 'marketing-media-pr',
      label: 'Marketing/Media/PR',
      to: '/jobs?specialty=marketing-media-pr',
      icon: Megaphone,
    },
  ],

  // Column 3
  [
    {
      id: 'delivery-driver',
      label: 'Giao nhận/ Tài xế/ Shipper',
      to: '/jobs?specialty=delivery-driver',
      icon: Bike,
    },
    {
      id: 'security-parking',
      label: 'Bảo vệ/ Giữ xe',
      to: '/jobs?specialty=security-parking',
      icon: ShieldCheck,
    },
    {
      id: 'security-safety',
      label: 'An ninh',
      to: '/jobs?specialty=security-safety',
      icon: Shield,
    },
    {
      id: 'others-hr-legal',
      label: 'Bộ phận khác (Bảo hành, Pháp chế, Hành chính Nhân sự...)',
      to: '/jobs?specialty=others-hr-legal',
      icon: Scale,
    },
    {
      id: 'qa-qc-audit',
      label: 'QA/QC/Kiểm soát nội bộ',
      to: '/jobs?specialty=qa-qc-audit',
      icon: CheckCircle2,
    },
    {
      id: 'site-development',
      label: 'Phát triển mặt bằng',
      to: '/jobs?specialty=site-development',
      icon: MapPin,
    },
  ],
]

export const SPECIALTY_ITEMS: SpecialtyItem[] = SPECIALTY_COLUMNS.flat()

export const PROVINCE_COLUMNS: string[][] = [
  // Column 1 (12 items)
  [
    'Thành phố Hồ Chí Minh',
    'Thành phố Đà Nẵng',
    'Tỉnh An Giang',
    'Tỉnh Cao Bằng',
    'Tỉnh Đồng Nai',
    'Tỉnh Hà Tĩnh',
    'Tỉnh Lai Châu',
    'Tỉnh Lào Cai',
    'Tỉnh Phú Thọ',
    'Tỉnh Quảng Trị',
    'Tỉnh Thái Nguyên',
    'Tỉnh Vĩnh Long',
  ],
  // Column 2 (11 items)
  [
    'Thành phố Hà Nội',
    'Thành phố Cần Thơ',
    'Tỉnh Bắc Ninh',
    'Tỉnh Đắc Lắk',
    'Tỉnh Đồng Tháp',
    'Tỉnh Hưng Yên',
    'Tỉnh Lâm Đồng',
    'Tỉnh Nghệ An',
    'Tỉnh Quảng Ngãi',
    'Tỉnh Sơn La',
    'Tỉnh Thanh Hoá',
  ],
  // Column 3 (11 items)
  [
    'Thành phố Hải Phòng',
    'Thành phố Huế',
    'Tỉnh Cà Mau',
    'Tỉnh Điện Biên',
    'Tỉnh Gia Lai',
    'Tỉnh Khánh Hoà',
    'Tỉnh Lạng Sơn',
    'Tỉnh Ninh Bình',
    'Tỉnh Quảng Ninh',
    'Tỉnh Tây Ninh',
    'Tỉnh Tuyên Quang',
  ],
]
