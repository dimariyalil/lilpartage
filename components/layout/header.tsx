'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { ChevronDown, Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils/cn'

const languages = [
  { code: 'ru', name: 'Русский', flag: '🇷🇺' },
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'pt', name: 'Português', flag: '🇵🇹' },
  { code: 'kz', name: 'Қазақша', flag: '🇰🇿' },
  { code: 'uz', name: 'O\'zbek', flag: '🇺🇿' },
  { code: 'az', name: 'Azərbaycan', flag: '🇦🇿' },
]

const tools = [
  { name: 'Креативы', href: '/tools/creatives' },
  { name: 'Баннеры', href: '/tools/banners' },
  { name: 'Лендинги', href: '/tools/landing-pages' },
  { name: 'Email шаблоны', href: '/tools/email-templates' },
  { name: 'Суб-аккаунты', href: '/tools/sub-accounts' },
]

export function Header() {
  const t = useTranslations('header')
  const [isToolsOpen, setIsToolsOpen] = useState(false)
  const [isLanguageOpen, setIsLanguageOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full bg-lilbet-primary/95 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-lilbet-gradient rounded-lg flex items-center justify-center">
                <span className="text-white font-tektur font-bold text-lg">L</span>
              </div>
              <span className="text-white font-tektur font-extrabold text-xl">
                {t('brandName')}
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Tools Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsToolsOpen(!isToolsOpen)}
                className="flex items-center space-x-1 text-white hover:text-lilbet-secondary transition-colors"
              >
                <span>{t('tools')}</span>
                <ChevronDown className={cn(
                  "w-4 h-4 transition-transform",
                  isToolsOpen && "rotate-180"
                )} />
              </button>
              
              {isToolsOpen && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                  {tools.map((tool) => (
                    <a
                      key={tool.href}
                      href={tool.href}
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-lilbet-primary transition-colors"
                    >
                      {tool.name}
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Social Icons */}
            <div className="flex items-center space-x-4">
              <a
                href="https://t.me/lilbet_partners"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-lilbet-secondary transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                </svg>
              </a>
              <a
                href="https://instagram.com/lilbet_partners"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-lilbet-secondary transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987c6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.324-1.297L6.989 14.2c.652.652 1.555 1.058 2.572 1.058c1.297 0 2.347-.98 2.347-2.347c0-1.297-.98-2.347-2.347-2.347c-1.017 0-1.92.406-2.572 1.058L5.125 10.13c.876-.807 2.027-1.297 3.324-1.297c2.572 0 4.654 2.082 4.654 4.654S11.021 16.988 8.449 16.988z"/>
                </svg>
              </a>
            </div>

            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                className="flex items-center space-x-2 text-white hover:text-lilbet-secondary transition-colors"
              >
                <span>🇷🇺</span>
                <ChevronDown className={cn(
                  "w-4 h-4 transition-transform",
                  isLanguageOpen && "rotate-180"
                )} />
              </button>
              
              {isLanguageOpen && (
                <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      className="flex items-center space-x-3 w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-50 hover:text-lilbet-primary transition-colors"
                    >
                      <span>{lang.flag}</span>
                      <span>{lang.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Auth Buttons */}
            <div className="flex items-center space-x-4">
              <Button
                variant="outline"
                size="sm"
                className="border-white text-white hover:bg-white hover:text-lilbet-primary"
              >
                {t('signIn')}
              </Button>
              <Button
                variant="accent"
                size="sm"
                className="bg-lilbet-accent hover:opacity-80"
              >
                {t('signUp')}
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-lilbet-secondary transition-colors"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/10">
            <div className="space-y-4">
              <div className="space-y-2">
                <h3 className="text-white font-medium">{t('tools')}</h3>
                {tools.map((tool) => (
                  <a
                    key={tool.href}
                    href={tool.href}
                    className="block pl-4 text-white/80 hover:text-white transition-colors"
                  >
                    {tool.name}
                  </a>
                ))}
              </div>
              
              <div className="space-y-2">
                <h3 className="text-white font-medium">{t('language')}</h3>
                <div className="grid grid-cols-2 gap-2 pl-4">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      className="flex items-center space-x-2 text-white/80 hover:text-white transition-colors"
                    >
                      <span>{lang.flag}</span>
                      <span className="text-sm">{lang.name}</span>
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="space-y-3 pt-4 border-t border-white/10">
                <Button
                  variant="outline"
                  className="w-full border-white text-white hover:bg-white hover:text-lilbet-primary"
                >
                  {t('signIn')}
                </Button>
                <Button
                  variant="accent"
                  className="w-full bg-lilbet-accent hover:opacity-80"
                >
                  {t('signUp')}
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}