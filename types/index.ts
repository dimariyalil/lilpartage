import { Partner, Player, Click, Conversion, Payout, SubAccount, Creative, Notification } from '@prisma/client'

// Partner types
export type PartnerWithStats = Partner & {
  _count: {
    players: number
    clicks: number
    conversions: number
  }
  totalCommission: number
}

export type PartnerRegistrationData = {
  firstName: string
  lastName: string
  email: string
  phone?: string
  country: string
  language: string
  messenger?: string
  messengerNick?: string
  trafficSource?: string
  resourceLink?: string
  trafficVolume?: string
  login: string
  password: string
  confirmPassword: string
  withdrawalMethod?: string
  agreedToTerms: boolean
  agreedToPrivacy: boolean
  agreedToNewsletter: boolean
}

export type PartnerLoginData = {
  login: string
  password: string
}

// Stats types
export type DashboardStats = {
  totalClicks: number
  totalRegistrations: number
  totalRevenue: number
  currentBalance: number
  clicksChange: number
  registrationsChange: number
  revenueChange: number
  balanceChange: number
}

export type RevenueChartData = {
  date: string
  revenue: number
  clicks: number
  registrations: number
}

export type RecentPlayer = {
  id: string
  email?: string
  country?: string
  registeredAt: Date
  firstDepositAt?: Date
  totalDeposits: number
  status: string
}

// API Response types
export type ApiResponse<T = any> = {
  success: boolean
  data?: T
  error?: string
  message?: string
}

// Locale types
export type Locale = 'ru' | 'en' | 'es' | 'pt' | 'kz' | 'uz' | 'az'

// Component props types
export type BaseComponentProps = {
  className?: string
}

// Form types
export type FormFieldError = {
  message: string
}

export type FormErrors<T> = Partial<Record<keyof T, FormFieldError>>

// Navigation types
export type NavItem = {
  title: string
  href: string
  icon?: React.ComponentType<{ className?: string }>
  description?: string
}

// Zustand store types
export type PartnerStore = {
  partner: Partner | null
  stats: DashboardStats | null
  isLoading: boolean
  setPartner: (partner: Partner | null) => void
  setStats: (stats: DashboardStats) => void
  setLoading: (loading: boolean) => void
  clearStore: () => void
}

export type UIStore = {
  sidebarOpen: boolean
  theme: 'light' | 'dark'
  locale: Locale
  toggleSidebar: () => void
  setTheme: (theme: 'light' | 'dark') => void
  setLocale: (locale: Locale) => void
}

// Utility types
export type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>
export type Required<T, K extends keyof T> = T & { [P in K]-?: T[P] }

// Export Prisma types
export type {
  Partner,
  Player,
  Click,
  Conversion,
  Payout,
  SubAccount,
  Creative,
  Notification,
  PartnerStatus,
  PlayerStatus,
  ConversionType,
  PayoutStatus,
  CreativeType,
  NotificationType,
} from '@prisma/client'