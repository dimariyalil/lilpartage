'use client'

import { isDemoMode } from '@/lib/db/mock'
import { AlertCircle } from 'lucide-react'

export function DemoBanner() {
  if (!isDemoMode()) return null

  return (
    <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-center space-x-2 text-sm font-medium">
          <AlertCircle className="w-4 h-4" />
          <span>
            🎮 Демо-режим: Это демонстрационная версия LILBET Partners. 
            Все данные являются тестовыми. 
            Вход: demo@lilbet-partners.com / demo123
          </span>
        </div>
      </div>
    </div>
  )
}