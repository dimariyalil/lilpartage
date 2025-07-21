import { PrismaClient } from '@prisma/client'
import { isDemoMode } from './mock'

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

// Create Prisma client only if not in demo mode
export const prisma = isDemoMode() 
  ? null 
  : (globalForPrisma.prisma ?? new PrismaClient({
      log: process.env.NODE_ENV === 'development' ? ['query'] : [],
    }))

if (process.env.NODE_ENV !== 'production' && !isDemoMode()) {
  globalForPrisma.prisma = prisma as PrismaClient
}

// Safe database operations that work in demo mode
export const safeDb = {
  async query<T>(operation: () => Promise<T>, fallback: T): Promise<T> {
    if (isDemoMode() || !prisma) {
      return fallback
    }
    
    try {
      return await operation()
    } catch (error) {
      console.warn('Database operation failed, falling back to demo data:', error)
      return fallback
    }
  }
}