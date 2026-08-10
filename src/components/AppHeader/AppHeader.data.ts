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
      to: '#sales-supermarket',
      icon: ShoppingBag,
    },
    {
      id: 'construction-maintenance',
      label: 'Xây dựng/ Bảo trì/ Điện',
      to: '#construction',
      icon: Wrench,
    },
    {
      id: 'food-prep-packaging',
      label: 'Sơ chế/ Đóng gói',
      to: '#packaging',
      icon: Package,
    },
    {
      id: 'it-software',
      label: 'Công nghệ thông tin/ IT/ Lập trình',
      to: '#it',
      icon: Laptop,
    },
    {
      id: 'purchasing-merchandising',
      label: 'Ngành hàng/Mua hàng',
      to: '#purchasing',
      icon: ShoppingCart,
    },
    {
      id: 'accounting-finance',
      label: 'Kế toán/Kiểm toán/Tài chính',
      to: '#accounting',
      icon: Calculator,
    },
  ],

  // Column 2
  [
    {
      id: 'warehouse-logistics',
      label: 'Kho Vận / Kho trung tâm',
      to: '#warehouse',
      icon: Warehouse,
    },
    {
      id: 'pharmacy-medical',
      label: 'Dược/ Dược sỹ/ Y Tế',
      to: '#pharmacy',
      icon: Stethoscope,
    },
    {
      id: 'callcenter-customer-service',
      label: 'Tổng đài/ Callcenter/ Chăm sóc Khách Hàng',
      to: '#callcenter',
      icon: Headphones,
    },
    {
      id: 'ecommerce-online',
      label: 'Thương mại điện tử/ Kênh online',
      to: '#ecommerce',
      icon: Globe,
    },
    {
      id: 'design-uxui-product',
      label: 'Thiết kế/ UX-UI/ Phát triển sản phẩm',
      to: '#design',
      icon: Palette,
    },
    {
      id: 'marketing-media-pr',
      label: 'Marketing/Media/PR',
      to: '#marketing',
      icon: Megaphone,
    },
  ],

  // Column 3
  [
    {
      id: 'delivery-driver',
      label: 'Giao nhận/ Tài xế/ Shipper',
      to: '#delivery',
      icon: Bike,
    },
    {
      id: 'security-parking',
      label: 'Bảo vệ/ Giữ xe',
      to: '#parking-guard',
      icon: ShieldCheck,
    },
    {
      id: 'security-safety',
      label: 'An ninh',
      to: '#security',
      icon: Shield,
    },
    {
      id: 'others-hr-legal',
      label: 'Bộ phận khác (Bảo hành, Pháp chế, Hành chính Nhân sự...)',
      to: '#others',
      icon: Scale,
    },
    {
      id: 'qa-qc-audit',
      label: 'QA/QC/Kiểm soát nội bộ',
      to: '#qa-qc',
      icon: CheckCircle2,
    },
    {
      id: 'site-development',
      label: 'Phát triển mặt bằng',
      to: '#site-dev',
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
