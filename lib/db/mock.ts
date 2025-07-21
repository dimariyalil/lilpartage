// Mock database for demo mode
export const mockData = {
  // Dashboard stats
  dashboardStats: {
    clicks: 125430,
    registrations: 3420,
    revenue: 45230.50,
    balance: 12450.30,
    todayClicks: 432,
    todayRegistrations: 18,
    todayRevenue: 1230.45,
    weeklyGrowth: {
      clicks: 12.3,
      registrations: 8.7,
      revenue: 15.2
    }
  },

  // Recent players
  recentPlayers: [
    {
      id: '1',
      email: 'player1@example.com',
      country: 'RU',
      registeredAt: new Date('2024-01-15'),
      firstDeposit: 250,
      totalDeposits: 1200,
      status: 'active'
    },
    {
      id: '2', 
      email: 'player2@example.com',
      country: 'KZ',
      registeredAt: new Date('2024-01-14'),
      firstDeposit: 100,
      totalDeposits: 850,
      status: 'active'
    },
    {
      id: '3',
      email: 'player3@example.com', 
      country: 'UA',
      registeredAt: new Date('2024-01-13'),
      firstDeposit: 500,
      totalDeposits: 2300,
      status: 'vip'
    }
  ],

  // Revenue chart data (last 30 days)
  revenueChart: Array.from({ length: 30 }, (_, i) => ({
    date: new Date(Date.now() - (29 - i) * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    revenue: Math.floor(Math.random() * 2000) + 800,
    clicks: Math.floor(Math.random() * 500) + 200,
    registrations: Math.floor(Math.random() * 50) + 10
  })),

  // Marketing creatives
  creatives: [
    {
      id: '1',
      name: 'Banner 728x90',
      type: 'banner',
      size: '728x90',
      language: 'ru',
      url: '/demo/banner-728x90.jpg',
      clicks: 1250,
      conversions: 32,
      ctr: '2.56%'
    },
    {
      id: '2',
      name: 'Landing Page RU',
      type: 'landing',
      language: 'ru', 
      url: 'https://demo-landing.lilbet.com/ru',
      clicks: 3420,
      conversions: 128,
      ctr: '3.74%'
    }
  ],

  // Sub-accounts
  subAccounts: [
    {
      id: '1',
      name: 'Telegram Channel',
      token: 'sa_demo_telegram_123',
      clicks: 2340,
      registrations: 67,
      revenue: 12450.30,
      createdAt: new Date('2024-01-01')
    },
    {
      id: '2', 
      name: 'YouTube Channel',
      token: 'sa_demo_youtube_456',
      clicks: 1890,
      registrations: 43,
      revenue: 8760.50,
      createdAt: new Date('2024-01-05')
    }
  ]
}

// Mock API functions
export const mockApi = {
  // Auth functions
  async signIn(email: string, password: string) {
    await new Promise(resolve => setTimeout(resolve, 1000)) // Simulate API delay
    if (email === 'demo@lilbet-partners.com' && password === 'demo123') {
      return {
        success: true,
        user: {
          id: 'demo-user-1',
          email: 'demo@lilbet-partners.com',
          name: 'Demo Partner',
          role: 'partner'
        }
      }
    }
    throw new Error('Invalid credentials')
  },

  async signUp(data: any) {
    await new Promise(resolve => setTimeout(resolve, 1500))
    return {
      success: true,
      message: 'Registration successful! Welcome to LILBET Partners.'
    }
  },

  // Dashboard functions  
  async getDashboardStats() {
    await new Promise(resolve => setTimeout(resolve, 500))
    return mockData.dashboardStats
  },

  async getRecentPlayers() {
    await new Promise(resolve => setTimeout(resolve, 300))
    return mockData.recentPlayers
  },

  async getRevenueChart() {
    await new Promise(resolve => setTimeout(resolve, 400))
    return mockData.revenueChart
  },

  // Tools functions
  async getCreatives() {
    await new Promise(resolve => setTimeout(resolve, 600))
    return mockData.creatives
  },

  async createSubAccount(name: string) {
    await new Promise(resolve => setTimeout(resolve, 800))
    const newSubAccount = {
      id: Date.now().toString(),
      name,
      token: `sa_demo_${Date.now()}`,
      clicks: 0,
      registrations: 0, 
      revenue: 0,
      createdAt: new Date()
    }
    return newSubAccount
  },

  // Finance functions
  async requestPayout(amount: number, method: string) {
    await new Promise(resolve => setTimeout(resolve, 1000))
    return {
      success: true,
      payoutId: `payout_${Date.now()}`,
      message: 'Payout request submitted successfully'
    }
  }
}

// Check if we're in demo mode
export const isDemoMode = () => {
  return process.env.NEXT_PUBLIC_DEMO_MODE === 'true' || 
         process.env.NODE_ENV === 'development' ||
         !process.env.DATABASE_URL?.includes('postgresql://')
}