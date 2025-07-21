# LILBET PARTNERS

Партнерская программа для беттинг/казино платформы LILBET с современным веб-интерфейсом и полным функционалом для управления партнерами.

## 🚀 Технический стек

- **Framework**: Next.js 14.2.0 с App Router
- **Language**: TypeScript (строгий режим)
- **Styling**: Tailwind CSS + shadcn/ui
- **Database**: Prisma ORM + PostgreSQL (Supabase)
- **Authentication**: Supabase Auth
- **API**: tRPC для типобезопасных API calls
- **Animations**: Framer Motion
- **Internationalization**: next-intl (7 языков)
- **Forms**: React Hook Form + Zod валидация
- **State Management**: Zustand
- **Charts**: Recharts

## 🎨 Дизайн система

### Цветовая палитра
- **Основной**: `#082b53` (темно-синий)
- **Вторичный**: `#34cc67` (зеленый)
- **Акцент**: `#ff00ff` (розовый)
- **Фон**: `#ffffff` (белый)

### Градиенты
- **Синий**: `#2a4974`
- **Зеленый**: `#3eed77`

### Шрифты
- **Заголовки**: Tektur ExtraBold
- **Основной текст**: Nairi Normal

## 📁 Структура проекта

```
lilbet-partners/
├── app/                          # Next.js App Router
│   ├── [locale]/                 # Мультиязычные страницы
│   │   ├── (auth)/              # Страницы аутентификации
│   │   ├── (marketing)/         # Маркетинговые страницы
│   │   └── (dashboard)/         # Панель управления
│   ├── api/                     # API endpoints
│   ├── layout.tsx               # Root layout
│   └── globals.css              # Глобальные стили
├── components/                   # React компоненты
│   ├── ui/                      # shadcn/ui компоненты
│   ├── layout/                  # Layout компоненты
│   ├── forms/                   # Формы
│   ├── dashboard/               # Dashboard компоненты
│   └── marketing/               # Маркетинговые компоненты
├── lib/                         # Утилиты и настройки
│   ├── api/trpc/               # tRPC конфигурация
│   ├── auth/                   # Supabase auth
│   ├── db/                     # Prisma клиент
│   ├── utils/                  # Вспомогательные функции
│   └── validations/            # Zod схемы
├── hooks/                       # React hooks
├── stores/                      # Zustand stores
├── types/                       # TypeScript типы
├── prisma/                      # База данных
├── messages/                    # Переводы (7 языков)
└── public/                      # Статические файлы
```

## 🛠 Установка и запуск

### Требования
- Node.js 18+
- npm/yarn/pnpm
- PostgreSQL database (рекомендуется Supabase)

### 1. Клонирование репозитория
```bash
git clone https://github.com/your-username/lilbet-partners.git
cd lilbet-partners
```

### 2. Установка зависимостей
```bash
npm install
# или
yarn install
# или
pnpm install
```

### 3. Настройка переменных окружения
Скопируйте `.env.local.example` в `.env.local` и заполните необходимые переменные:

```bash
cp .env.local.example .env.local
```

Обязательные переменные:
```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-supabase-service-role-key

# Database
DATABASE_URL=postgresql://user:password@localhost:5432/lilbet_partners

# Telegram Bot (для уведомлений)
TELEGRAM_BOT_TOKEN=your-telegram-bot-token
TELEGRAM_CHAT_ID=your-telegram-chat-id
```

### 4. Настройка базы данных
```bash
# Генерация Prisma клиента
npm run db:generate

# Применение миграций
npm run db:push

# Открытие Prisma Studio (опционально)
npm run db:studio
```

### 5. Запуск в режиме разработки
```bash
npm run dev
```

Откройте [http://localhost:3000](http://localhost:3000) в браузере.

## 📊 База данных

### Основные модели:
- **Partner** - Партнеры
- **Player** - Игроки партнеров
- **Click** - Клики по партнерским ссылкам
- **Conversion** - Конверсии (регистрации, депозиты)
- **Payout** - Выплаты партнерам
- **SubAccount** - Суб-аккаунты для трекинга
- **Creative** - Маркетинговые материалы
- **Notification** - Уведомления

## 🌍 Мультиязычность

Поддерживаемые языки:
- 🇷🇺 Русский (ru) - по умолчанию
- 🇺🇸 English (en)
- 🇪🇸 Español (es)
- 🇵🇹 Português (pt)
- 🇰🇿 Қазақша (kz)
- 🇺🇿 O'zbek (uz)
- 🇦🇿 Azərbaycan (az)

## 🔧 Разработка

### Скрипты
```bash
npm run dev          # Запуск в режиме разработки
npm run build        # Сборка для продакшена
npm run start        # Запуск продакшен сборки
npm run lint         # Проверка кода
npm run type-check   # Проверка TypeScript типов
```

### Добавление новых компонентов
```bash
# Добавление shadcn/ui компонента
npx shadcn-ui@latest add button
```

### Структура API (tRPC)
```typescript
// Пример router
export const partnerRouter = createTRPCRouter({
  register: publicProcedure
    .input(registerSchema)
    .mutation(async ({ input }) => {
      // Логика регистрации
    }),
  
  getStats: protectedProcedure
    .query(async ({ ctx }) => {
      // Получение статистики
    }),
});
```

## 🚀 Деплой

### Vercel (рекомендуется)
1. Подключите репозиторий к Vercel
2. Настройте переменные окружения
3. Деплой произойдет автоматически

### Docker
```bash
# Сборка образа
docker build -t lilbet-partners .

# Запуск контейнера
docker run -p 3000:3000 lilbet-partners
```

## 📝 Основные функции

### Для партнеров:
- ✅ Регистрация и авторизация
- ✅ Личный кабинет с статистикой
- ✅ Генерация партнерских ссылок
- ✅ Отслеживание кликов и конверсий
- ✅ Управление суб-аккаунтами
- ✅ Запрос выплат
- ✅ Маркетинговые материалы
- ✅ Детальная аналитика

### Административные функции:
- ✅ Управление партнерами
- ✅ Модерация заявок
- ✅ Обработка выплат
- ✅ Аналитика и отчеты
- ✅ Управление креативами
- ✅ Уведомления в Telegram

## 🔐 Безопасность

- JWT токены для аутентификации
- Валидация на клиенте и сервере (Zod)
- CORS настройки
- Rate limiting для API
- Санитизация пользовательского ввода

## 📈 Мониторинг и аналитика

- Интеграция с Google Analytics
- Собственная система аналитики
- Отслеживание конверсий
- Детальная статистика по партнерам

## 🤝 Поддержка

- **Email**: support@lilbet.com
- **Telegram**: @lilbet_partners_support
- **Документация**: [docs.lilbet.com](https://docs.lilbet.com)

## 📄 Лицензия

Все права защищены © 2024 LILBET PARTNERS

---

## 🚀 Быстрый старт для разработчиков

```bash
# Клонирование и установка
git clone https://github.com/your-username/lilbet-partners.git
cd lilbet-partners
npm install

# Настройка окружения
cp .env.local.example .env.local
# Заполните переменные в .env.local

# Настройка БД и запуск
npm run db:generate
npm run db:push
npm run dev
```

Проект будет доступен по адресу [http://localhost:3000](http://localhost:3000)