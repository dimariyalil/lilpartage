import { z } from 'zod'

// Login schema
export const loginSchema = z.object({
  login: z.string().min(3, 'Логин должен содержать минимум 3 символа'),
  password: z.string().min(8, 'Пароль должен содержать минимум 8 символов'),
})

export type LoginFormData = z.infer<typeof loginSchema>

// Registration schema
export const registrationSchema = z.object({
  // Personal info
  firstName: z.string().min(2, 'Имя должно содержать минимум 2 символа'),
  lastName: z.string().min(2, 'Фамилия должна содержать минимум 2 символа'),
  email: z.string().email('Неверный формат email'),
  phone: z.string().optional(),
  country: z.string().min(2, 'Выберите страну'),
  language: z.string().default('ru'),
  
  // Contact info
  messenger: z.enum(['telegram', 'whatsapp', 'skype']).optional(),
  messengerNick: z.string().optional(),
  
  // Traffic info
  trafficSource: z.string().optional(),
  resourceLink: z.string().url('Неверный формат ссылки').optional().or(z.literal('')),
  trafficVolume: z.string().optional(),
  
  // Account info
  login: z.string()
    .min(3, 'Логин должен содержать минимум 3 символа')
    .max(20, 'Логин не должен превышать 20 символов')
    .regex(/^[a-zA-Z0-9_]+$/, 'Логин может содержать только буквы, цифры и подчеркивание'),
  password: z.string()
    .min(8, 'Пароль должен содержать минимум 8 символов')
    .regex(/(?=.*[a-z])/, 'Пароль должен содержать строчную букву')
    .regex(/(?=.*[A-Z])/, 'Пароль должен содержать заглавную букву')
    .regex(/(?=.*\d)/, 'Пароль должен содержать цифру'),
  confirmPassword: z.string(),
  
  // Withdrawal
  withdrawalMethod: z.string().optional(),
  
  // Agreements
  agreedToTerms: z.boolean().refine((val) => val === true, {
    message: 'Необходимо согласиться с условиями использования',
  }),
  agreedToPrivacy: z.boolean().refine((val) => val === true, {
    message: 'Необходимо согласиться с политикой конфиденциальности',
  }),
  agreedToNewsletter: z.boolean().default(false),
}).refine((data) => data.password === data.confirmPassword, {
  message: 'Пароли не совпадают',
  path: ['confirmPassword'],
})

export type RegistrationFormData = z.infer<typeof registrationSchema>

// Password reset schema
export const passwordResetSchema = z.object({
  email: z.string().email('Неверный формат email'),
})

export type PasswordResetFormData = z.infer<typeof passwordResetSchema>

// Change password schema
export const changePasswordSchema = z.object({
  currentPassword: z.string().min(1, 'Введите текущий пароль'),
  newPassword: z.string()
    .min(8, 'Пароль должен содержать минимум 8 символов')
    .regex(/(?=.*[a-z])/, 'Пароль должен содержать строчную букву')
    .regex(/(?=.*[A-Z])/, 'Пароль должен содержать заглавную букву')
    .regex(/(?=.*\d)/, 'Пароль должен содержать цифру'),
  confirmNewPassword: z.string(),
}).refine((data) => data.newPassword === data.confirmNewPassword, {
  message: 'Пароли не совпадают',
  path: ['confirmNewPassword'],
})

export type ChangePasswordFormData = z.infer<typeof changePasswordSchema>

// Countries list for validation
export const countries = [
  'Россия', 'Казахстан', 'Узбекистан', 'Азербайджан', 'Беларусь', 'Украина',
  'Грузия', 'Армения', 'Молдова', 'Кыргызстан', 'Таджикистан', 'Туркменистан',
  'США', 'Канада', 'Германия', 'Франция', 'Италия', 'Испания', 'Португалия',
  'Бразилия', 'Аргентина', 'Чили', 'Колумбия', 'Мексика', 'Турция', 'Другая'
] as const

export const trafficSources = [
  'Социальные сети',
  'Контекстная реклама',
  'SEO',
  'Email рассылки',
  'Мессенджеры',
  'Блог/Сайт',
  'YouTube канал',
  'Telegram канал',
  'Форумы',
  'Другое'
] as const

export const trafficVolumes = [
  'До 1000 в месяц',
  '1000-5000 в месяц',
  '5000-10000 в месяц',
  '10000+ в месяц',
  'Только начинаю'
] as const

export const withdrawalMethods = [
  'Банковская карта',
  'Банковский перевод',
  'Криптовалюта',
  'Электронные кошельки',
  'Наличные'
] as const