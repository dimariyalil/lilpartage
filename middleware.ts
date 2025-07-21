import createMiddleware from 'next-intl/middleware';
import { routing } from './lib/routing';

export default createMiddleware(routing);

// Update matcher for demo mode
const isDemoMode = process.env.NEXT_PUBLIC_DEMO_MODE === 'true';

export const config = {
  // Match only internationalized pathnames
  matcher: isDemoMode 
    ? ['/', '/(ru)/:path*']
    : ['/', '/(ru|en|es|pt|kz|uz|az)/:path*']
};