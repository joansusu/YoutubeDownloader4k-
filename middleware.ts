import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const locales = ['en', 'zh', 'de','fr','es'];
const defaultLocale = 'en';

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  if (pathname.match(/\.(png|jpg|jpeg|gif|svg|txt)$/)) {
    return NextResponse.next();
  }
  const pathLocale = locales.find(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  
  if (pathLocale === defaultLocale) {
    const newPath = pathname.replace(`/${defaultLocale}`, '') || '/';
    return NextResponse.redirect(new URL(newPath, request.url));
  }

  if (!pathLocale) {
    const newUrl = new URL(`/${defaultLocale}${pathname}`, request.url);
    return NextResponse.rewrite(newUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|public).*)'],
};