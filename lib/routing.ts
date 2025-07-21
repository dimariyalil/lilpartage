import { defineRouting } from 'next-intl/routing';
import { createSharedPathnamesNavigation } from 'next-intl/navigation';

// For demo mode, only support Russian to avoid translation errors
const isDemoMode = process.env.NEXT_PUBLIC_DEMO_MODE === 'true';

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: isDemoMode ? ['ru'] : ['ru', 'en', 'es', 'pt', 'kz', 'uz', 'az'],

  // Used when no locale matches
  defaultLocale: 'ru'
});

// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation(routing);