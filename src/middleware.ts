import {
  availableLanguages,
  cookieName,
  defaultLanguage,
} from "@/app/i18n/settings";
import Negotiator from "negotiator";
import { type NextRequest, NextResponse } from "next/server";

const getNegotiatedLanguage = (
  headers: Negotiator.Headers,
): string | undefined => {
  return new Negotiator({ headers }).language([...availableLanguages]);
};

export const config = {
  // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};

export function middleware(request: NextRequest) {
  const headers = {
    "accept-language": request.headers.get("accept-language") ?? "",
  };
  const preferredLanguage =
    request.cookies.get(cookieName)?.value ||
    getNegotiatedLanguage(headers) ||
    defaultLanguage;

  const pathname = request.nextUrl.pathname;
  if (
    pathname === "/robots.txt" ||
    pathname === "/sitemap.xml" ||
    pathname.startsWith("/favicon.ico")
  ) {
    return NextResponse.next();
  }

  const pathnameIsMissingLocale = availableLanguages.every(
    (lang) => !pathname.startsWith(`/${lang}/`) && pathname !== `/${lang}`,
  );

  if (pathnameIsMissingLocale) {
    if (preferredLanguage !== defaultLanguage) {
      const response = NextResponse.redirect(
        new URL(`/${preferredLanguage}${pathname}`, request.url),
      );
      response.cookies.set(cookieName, preferredLanguage);
      return response;
    } else {
      const newPathname = `/${defaultLanguage}${pathname}`;
      const response = NextResponse.rewrite(new URL(newPathname, request.url));
      response.cookies.set(cookieName, defaultLanguage);
      return response;
    }
  }

  // クッキーがない場合でも、リダイレクト後にクッキーを設定する
  const response = NextResponse.next();
  if (!request.cookies.has(cookieName)) {
    response.cookies.set(cookieName, preferredLanguage);
  }

  return response;
}
