# 📋 Kế hoạch thực hiện: Tách Header & Footer thành Components tái sử dụng

## Tổng quan
Hiện tại `MainLayout.tsx` đang chứa inline `<header>` và `<footer>` trực tiếp. Mục tiêu là **tách thành các component độc lập** (`AppHeader`, `AppFooter`) đặt trong `src/components/` để có thể tái sử dụng ở nhiều layout khác nhau (MainLayout, AuthLayout, DashboardLayout…) mà không cần duplicate code.

---

## Danh sách công việc

### 1. Header Component
> **[NEW]**

- [x] Tạo component `AppHeader` — `src/components/AppHeader/AppHeader.tsx`
  - Logo + brand name
  - Navigation links (Home, Candidates…) dùng `<Link>` của React Router
  - `LanguageSwitcher`
  - Props: `navItems?: NavItem[]` để linh hoạt thêm links theo từng layout
- [x] Tạo type định nghĩa props — `src/components/AppHeader/AppHeader.types.ts`
  - `NavItem { label: string; to: string }`
- [x] Export barrel — `src/components/AppHeader/index.ts`

---

### 2. Footer Component
> **[NEW]**

- [x] Tạo component `AppFooter` — `src/components/AppFooter/AppFooter.tsx`
  - Copyright text dùng `useTranslation`
  - Năm tự động `new Date().getFullYear()`
  - Props: `companyName?: string` để override nếu cần
- [x] Export barrel — `src/components/AppFooter/index.ts`

---

### 3. Layout — tích hợp lại
> **[MODIFY]**

- [x] Refactor `MainLayout.tsx` — `src/layouts/MainLayout.tsx`
  - Xóa inline `<header>` và `<footer>`
  - Import và dùng `<AppHeader />` + `<AppFooter />`
  - Truyền `navItems` phù hợp với layout chính

---

### 4. Components barrel
> **[MODIFY / NEW]**

- [x] Thêm `AppHeader` và `AppFooter` vào barrel export — `src/components/index.ts` *(tạo mới nếu chưa có)*

---

## Thứ tự thực hiện khuyến nghị
1. **Types** (`AppHeader.types.ts`) → xác định contract props trước
2. **AppHeader** → tách logic header, dùng `<Link>` thay `<a>`
3. **AppFooter** → đơn giản, tách nhanh
4. **MainLayout** → refactor dùng 2 component mới
5. **Barrel export** → đảm bảo import gọn

---

## Ghi chú
- Theo `.cursorrules`: component tái sử dụng ≥2 nơi → đặt trong `src/components/` ✅
- Thay `<a href>` bằng `<Link to>` (React Router) để tránh reload trang
- Mỗi component nằm trong subfolder riêng (`AppHeader/`, `AppFooter/`) giữ code ngăn nắp
- Không dùng inline style, chỉ dùng Tailwind classes theo convention
