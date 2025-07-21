'use client'

import { useTranslations, useLocale } from 'next-intl'
import Link from 'next/link'
import { MessageCircle, Users, Mail } from 'lucide-react'

export function Footer() {
  const t = useTranslations('footer')
  const locale = useLocale()

  return (
    <footer className="bg-primary-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link href={`/${locale}`} className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-pattern rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">L</span>
              </div>
              <span className="font-tektur text-xl text-white">
                LILBET<span className="text-primary-green">Partners</span>
              </span>
            </Link>
            <p className="text-gray-300 max-w-md leading-relaxed">
              {t('description')}
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('links')}</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href={`/${locale}/faq`}
                  className="text-gray-300 hover:text-primary-green transition-colors"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/contacts`}
                  className="text-gray-300 hover:text-primary-green transition-colors"
                >
                  {t('contact')}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/register`}
                  className="text-gray-300 hover:text-primary-green transition-colors"
                >
                  Регистрация
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/login`}
                  className="text-gray-300 hover:text-primary-green transition-colors"
                >
                  Вход
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('contact')}</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MessageCircle className="w-5 h-5 text-primary-green" />
                <span className="text-gray-300">{t('support')}</span>
              </div>
              
              <a
                href="https://t.me/lilbet_partners"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-gray-300 hover:text-primary-green transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                <span>{t('telegram')}</span>
              </a>
              
              <a
                href="mailto:partners@lilbet.com"
                className="flex items-center space-x-3 text-gray-300 hover:text-primary-green transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>partners@lilbet.com</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 LILBET Partners. {t('rights')}.
          </p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <a
              href="https://t.me/lilbet_partners"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary-green transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
            <a
              href="https://instagram.com/lilbet.partners"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary-green transition-colors"
            >
              <Users className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}