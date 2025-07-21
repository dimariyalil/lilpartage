'use client'

import { useState } from 'react'
import { useTranslations, useLocale } from 'next-intl'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Globe } from 'lucide-react'
import { cn } from '@/lib/utils'

export function Header() {
  const t = useTranslations('nav')
  const locale = useLocale()
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLangOpen, setIsLangOpen] = useState(false)

  const navigation = [
    { name: t('home'), href: `/${locale}` },
    { name: t('tools'), href: `/${locale}/tools` },
    { name: t('faq'), href: `/${locale}/faq` },
    { name: t('contacts'), href: `/${locale}/contacts` },
  ]

  const languages = [
    { code: 'ru', name: 'Русский' },
    { code: 'kz', name: 'Қазақша' },
  ]

  const switchLanguage = (newLocale: string) => {
    const newPath = pathname.replace(`/${locale}`, `/${newLocale}`)
    window.location.href = newPath
  }

  return (
    <header className="bg-primary-dark shadow-lg sticky top-0 z-50">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Link href={`/${locale}`} className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-pattern rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">L</span>
              </div>
              <span className="font-tektur text-xl text-white">
                LILBET<span className="text-primary-green">Partners</span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    'px-3 py-2 rounded-md text-sm font-medium transition-colors',
                    pathname === item.href
                      ? 'bg-primary-green text-white'
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Right side buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Language Switcher */}
            <div className="relative">
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors"
              >
                <Globe className="h-4 w-4" />
                <span className="text-sm font-medium">
                  {languages.find(lang => lang.code === locale)?.name}
                </span>
              </button>
              
              {isLangOpen && (
                <div className="absolute right-0 mt-2 w-32 bg-white rounded-md shadow-lg py-1 z-50">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        switchLanguage(lang.code)
                        setIsLangOpen(false)
                      }}
                      className={cn(
                        'block px-4 py-2 text-sm w-full text-left hover:bg-gray-100',
                        locale === lang.code ? 'bg-gray-100 font-medium' : 'text-gray-700'
                      )}
                    >
                      {lang.name}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <Link
              href={`/${locale}/login`}
              className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              {t('login')}
            </Link>
            <Link
              href={`/${locale}/register`}
              className="btn-primary text-sm"
            >
              {t('register')}
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              {isMenuOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    'block px-3 py-2 rounded-md text-base font-medium transition-colors',
                    pathname === item.href
                      ? 'bg-primary-green text-white'
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                  )}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              
              <div className="border-t border-gray-700 pt-4">
                <div className="flex items-center px-3 py-2">
                  <Globe className="h-4 w-4 text-gray-300 mr-2" />
                  <span className="text-gray-300 text-sm">Language:</span>
                </div>
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      switchLanguage(lang.code)
                      setIsMenuOpen(false)
                    }}
                    className={cn(
                      'block w-full text-left px-6 py-2 text-sm transition-colors',
                      locale === lang.code 
                        ? 'text-primary-green font-medium' 
                        : 'text-gray-300 hover:text-white'
                    )}
                  >
                    {lang.name}
                  </button>
                ))}
              </div>
              
              <div className="border-t border-gray-700 pt-4 space-y-2">
                <Link
                  href={`/${locale}/login`}
                  className="block text-gray-300 hover:text-white px-3 py-2 rounded-md text-base font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t('login')}
                </Link>
                <Link
                  href={`/${locale}/register`}
                  className="block btn-primary text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t('register')}
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}