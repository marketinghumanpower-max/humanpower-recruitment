export interface DropdownSubItem {
  id: string
  label: string
  to: string
}

export interface DropdownItem {
  id?: string
  label: string
  to: string
  hasSubMenu?: boolean
  subItems?: DropdownSubItem[]
}

export interface NavItem {
  label: string
  to: string
  hasDropdown?: boolean
  isMegaDropdown?: boolean
  dropdownItems?: DropdownItem[]
}

export interface AppHeaderProps {
  navItems?: NavItem[]
}

