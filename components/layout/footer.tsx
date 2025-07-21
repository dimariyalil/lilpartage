'use client'

import { useTranslations } from 'next-intl'

const socialLinks = [
  {
    name: 'Telegram',
    href: 'https://t.me/lilbet_partners',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
      </svg>
    )
  },
  {
    name: 'Instagram',
    href: 'https://instagram.com/lilbet_partners',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987c6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.324-1.297L6.989 14.2c.652.652 1.555 1.058 2.572 1.058c1.297 0 2.347-.98 2.347-2.347c0-1.297-.98-2.347-2.347-2.347c-1.017 0-1.92.406-2.572 1.058L5.125 10.13c.876-.807 2.027-1.297 3.324-1.297c2.572 0 4.654 2.082 4.654 4.654S11.021 16.988 8.449 16.988z"/>
      </svg>
    )
  }
]

const footerLinks = {
  company: [
    { name: 'О компании', href: '/about' },
    { name: 'Новости', href: '/news' },
    { name: 'Карьера', href: '/careers' },
    { name: 'Контакты', href: '/contacts' }
  ],
  partners: [
    { name: 'Стать партнером', href: '/register' },
    { name: 'Партнерские инструменты', href: '/tools' },
    { name: 'Маркетинговые материалы', href: '/materials' },
    { name: 'FAQ', href: '/faq' }
  ],
  legal: [
    { name: 'Условия использования', href: '/terms' },
    { name: 'Политика конфиденциальности', href: '/privacy' },
    { name: 'Ответственная игра', href: '/responsible-gaming' },
    { name: 'Лицензии', href: '/licenses' }
  ]
}

export function Footer() {
  const t = useTranslations('footer')

  return (
    <footer className="bg-lilbet-primary text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-lilbet-gradient rounded-lg flex items-center justify-center">
                <span className="text-white font-tektur font-bold text-xl">L</span>
              </div>
              <span className="text-white font-tektur font-extrabold text-2xl">
                LILBET PARTNERS
              </span>
            </div>
            
            <p className="text-white/80 leading-relaxed mb-6 max-w-md">
              Ведущая партнерская программа в сфере онлайн-гемблинга. 
              Мы предлагаем высокие комиссии, быстрые выплаты и профессиональную поддержку.
            </p>
            
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/10 hover:bg-lilbet-secondary rounded-lg flex items-center justify-center transition-colors group"
                >
                  <span className="text-white group-hover:scale-110 transition-transform">
                    {social.icon}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-tektur font-bold text-lg mb-6">Компания</h3>
            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white/80 hover:text-lilbet-secondary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Partners Links */}
          <div>
            <h3 className="font-tektur font-bold text-lg mb-6">Партнерам</h3>
            <ul className="space-y-4">
              {footerLinks.partners.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white/80 hover:text-lilbet-secondary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="font-tektur font-bold text-lg mb-6">Правовая информация</h3>
            <ul className="space-y-4">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white/80 hover:text-lilbet-secondary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-white/80 text-sm">
              © 2024 LILBET PARTNERS. Все права защищены.
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-white/80">
              <span>Лицензия Кюрасао #8048/JAZ</span>
              <span>18+</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}