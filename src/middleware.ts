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
  const pathnameIsMissingLocale = availableLanguages.every(
    (lang) => !pathname.startsWith(`/${lang}/`) && pathname !== `/${lang}`,
  );

  if (!request.cookies.has(cookieName)) {
    const response = NextResponse.next();
    response.cookies.set(cookieName, preferredLanguage);
    return response;
  }

  if (pathnameIsMissingLocale) {
    if (preferredLanguage !== defaultLanguage) {
      return NextResponse.redirect(
        new URL(`/${preferredLanguage}${pathname}`, request.url),
      );
    } else {
      const newPathname = `/${defaultLanguage}${pathname}`;
      return NextResponse.rewrite(new URL(newPathname, request.url));
    }
  }

  return NextResponse.next();
}
