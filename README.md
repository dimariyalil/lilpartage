# LILBET Partners - Партнерская Программа

Профессиональная партнерская программа для привлечения трафика на беттинг/казино платформу LILBET. Основные рынки: Узбекистан, Бангладеш, Египет, Индия, Сомали.

## 🎯 Особенности

- **RevShare до 40%** - пожизненная комиссия с каждого игрока
- **CPA модель** - фиксированная оплата за качественный трафик  
- **Real-time статистика** - отслеживание результатов в режиме реального времени
- **Автоматические выплаты** - еженедельные выплаты
- **Мультиязычность** - поддержка русского и казахского языков
- **Маркетинговые инструменты** - баннеры, лендинги, smart-ссылки

## 🛠 Технологический стек

- **Frontend**: Next.js 14.2, Tailwind CSS 3.4, Framer Motion 11
- **Backend**: Node.js 20, Prisma 5.11, Next.js API Routes
- **Database**: PostgreSQL 16
- **Auth**: Supabase Auth
- **Notifications**: Telegram Bot API
- **Deployment**: Vercel

## 📋 Быстрый старт

### 1. Установка зависимостей

```bash
npm install
```

### 2. Настройка окружения

Скопируйте `.env.example` в `.env.local` и заполните переменные:

```bash
cp .env.example .env.local
```

Настройте переменные окружения:

```env
# Database
DATABASE_URL="postgresql://user:password@localhost:5432/lilbet_partners"

# Supabase
NEXT_PUBLIC_SUPABASE_URL="your-supabase-url"
NEXT_PUBLIC_SUPABASE_ANON_KEY="your-anon-key"
SUPABASE_SERVICE_ROLE_KEY="your-service-key"

# Telegram
TELEGRAM_BOT_TOKEN="your-bot-token"
TELEGRAM_CHAT_ID="your-chat-id"

# App
NEXT_PUBLIC_APP_URL="http://localhost:3000"
NEXT_PUBLIC_LILBET_URL="https://lilbet.com"
```

### 3. Настройка базы данных

```bash
# Генерация Prisma клиента
npx prisma generate

# Применение схемы к базе данных
npx prisma db push

# (Опционально) Открыть Prisma Studio
npx prisma studio
```

### 4. Запуск проекта

```bash
npm run dev
```

Проект будет доступен по адресу: http://localhost:3000

## 🏗 Структура проекта

```
lilbet-partners/
├── app/                      # Next.js 14 App Router
│   ├── [locale]/            # Мультиязычность (ru/kz)
│   │   ├── layout.tsx       # Основной layout
│   │   ├── page.tsx         # Главная страница
│   │   ├── register/        # Регистрация
│   │   ├── login/           # Вход
│   │   ├── dashboard/       # Личный кабинет
│   │   ├── faq/             # FAQ
│   │   └── contacts/        # Контакты
│   ├── api/                 # API endpoints
│   │   ├── auth/            # Аутентификация
│   │   ├── partners/        # Партнерские данные
│   │   ├── stats/           # Статистика
│   │   └── s2s/             # S2S Postback
│   └── globals.css          # Глобальные стили
├── components/              # React компоненты
│   ├── layout/             # Header, Footer
│   ├── forms/              # Формы
│   ├── dashboard/          # Компоненты дашборда
│   ├── home/               # Компоненты главной страницы
│   └── ui/                 # UI компоненты
├── lib/                    # Утилиты
│   ├── prisma.ts          # Prisma client
│   ├── supabase.ts        # Supabase client
│   ├── telegram.ts        # Telegram bot
│   ├── utils.ts           # Общие утилиты
│   └── i18n.ts            # Интернационализация
├── prisma/                 # База данных
│   └── schema.prisma      # Схема БД
├── messages/              # Переводы
│   ├── ru.json           # Русский
│   └── kz.json           # Казахский
└── config/                # Конфигурация
    ├── site.ts           # Настройки сайта
    └── theme.ts          # Тема и цвета
```

## 🎨 Дизайн токены

### Цвета
```css
--primary-dark: #082b53     /* Темно-синий */
--primary-green: #34cc67    /* Зеленый */
--accent-pink: #ff00ff      /* Розовый */
--gradient-blue: #2a4974    /* Градиент синий */
--gradient-green: #3eed77   /* Градиент зеленый */
```

### Шрифты
- **Заголовки**: Tektur ExtraBold
- **Основной текст**: Nairi Normal
- **Интерфейс**: Inter

## 🔧 API Endpoints

### Аутентификация
- `POST /api/auth/register` - Регистрация партнера
- `POST /api/auth/login` - Вход в систему

### S2S Postback
- `GET /api/s2s/postback` - Обработка событий игроков
- `POST /api/s2s/postback` - Тестовый endpoint

### Статистика
- `GET /api/stats/[partnerId]` - Статистика партнера
- `GET /api/partners/[partnerId]` - Данные партнера

## 📊 База данных

### Основные модели

**Partner** - Партнеры
- Личная информация
- Настройки аккаунта
- RevShare/CPA ставки
- Статус (PENDING, ACTIVE, SUSPENDED)

**Stat** - Ежедневная статистика
- Клики, регистрации, депозиты
- Доходы и комиссии
- Группировка по дням

**Referral** - Рефералы
- Привязка игроков к партнерам
- Отслеживание конверсий
- Данные о доходах

**Payout** - Выплаты
- История выплат
- Статусы (PENDING, COMPLETED, FAILED)
- Различные методы выплат

## 🔐 Безопасность

- Аутентификация через Supabase
- Валидация всех входящих данных
- Защита API endpoints
- Безопасные переменные окружения

## 🌍 Интернационализация

Поддерживаемые языки:
- **ru** - Русский (по умолчанию)
- **kz** - Казахский

Переводы находятся в папке `messages/`

## 📱 Адаптивность

- **Desktop**: 1024px+
- **Tablet**: 768px - 1023px  
- **Mobile**: 320px - 767px

## 🚀 Развертывание

### Vercel (рекомендуется)

1. Подключите GitHub репозиторий к Vercel
2. Настройте переменные окружения
3. Деплой происходит автоматически

### Переменные окружения для продакшена

```env
DATABASE_URL="postgresql://..."
NEXT_PUBLIC_SUPABASE_URL="https://..."
NEXT_PUBLIC_SUPABASE_ANON_KEY="..."
SUPABASE_SERVICE_ROLE_KEY="..."
TELEGRAM_BOT_TOKEN="..."
TELEGRAM_CHAT_ID="..."
NEXT_PUBLIC_APP_URL="https://partners.lilbet.com"
NEXT_PUBLIC_LILBET_URL="https://lilbet.com"
```

## 📈 Мониторинг

- Логирование API запросов
- Telegram уведомления о новых партнерах
- Отслеживание S2S событий
- Error tracking

## 🧪 Тестирование

### Тестирование S2S Postback

```bash
# Регистрация
curl "http://localhost:3000/api/s2s/postback?click_id=test123&event=registration&player_id=player456"

# Депозит
curl "http://localhost:3000/api/s2s/postback?click_id=test123&event=deposit&player_id=player456&revenue=100"
```

## 🤝 Поддержка

- **Telegram**: @lilbet_partners
- **Email**: partners@lilbet.com
- **Документация**: В данном README

## 📄 Лицензия

Проприетарное программное обеспечение LILBET.

---

**Статус**: ✅ Готов к продакшену  
**Версия**: 1.0.0  
**Последнее обновление**: 2024