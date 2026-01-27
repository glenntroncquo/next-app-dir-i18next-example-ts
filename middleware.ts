import { NextResponse, NextRequest } from "next/server";
import acceptLanguage from "accept-language";
import {
  fallbackLng,
  languages,
  cookieName,
  headerName,
} from "./app/i18n/settings";

acceptLanguage.languages(languages);

export const config = {
  // matcher: '/:lng*'
  matcher: [
    "/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js|site.webmanifest).*)",
  ],
};

export function middleware(req: NextRequest) {
  if (
    req.nextUrl.pathname.indexOf("icon") > -1 ||
    req.nextUrl.pathname.indexOf("chrome") > -1
  )
    return NextResponse.next();
  
  // Return 410 Gone for removed pages (tell Google they don't exist anymore)
  const removedPages = ['/gent', '/merelbeke', '/oudenaarde'];
  const pathname = req.nextUrl.pathname;
  
  // Check if path is a removed page (with or without language prefix)
  const isRemovedPage = removedPages.some(page => 
    pathname === page || 
    pathname.startsWith(`${page}/`) ||
    languages.some(lng => pathname === `/${lng}${page}` || pathname.startsWith(`/${lng}${page}/`))
  );
  
  if (isRemovedPage) {
    return new NextResponse(null, { status: 410 }); // 410 Gone - permanently removed
  }
  
  let lng: string | undefined | null;
  
  // 1. Check cookie first
  if (req.cookies.has(cookieName))
    lng = acceptLanguage.get(req.cookies.get(cookieName)?.value);
  
  // 2. Check Accept-Language header if no cookie
  if (!lng && req.headers.has("accept-language")) {
    lng = acceptLanguage.get(req.headers.get("accept-language") || "");
  }
  
  // 3. Fallback to default language
  if (!lng) lng = fallbackLng;

  const lngInPath = languages.find((loc) =>
    req.nextUrl.pathname.startsWith(`/${loc}`)
  );
  const headers = new Headers(req.headers);
  headers.set(headerName, lngInPath || lng);

  // Handle root path - redirect to language-prefixed version
  if (req.nextUrl.pathname === "/") {
    return NextResponse.redirect(
      new URL(`/${lng}${req.nextUrl.search}`, req.url)
    );
  }

  // Redirect if lng in path is not supported (but not for _next, api, or static files)
  if (
    !lngInPath &&
    !req.nextUrl.pathname.startsWith("/_next") &&
    !req.nextUrl.pathname.startsWith("/api") &&
    !req.nextUrl.pathname.startsWith("/favicon") &&
    !req.nextUrl.pathname.match(/\.(ico|png|jpg|jpeg|svg|webp|xml|txt)$/)
  ) {
    // Preserve query string and hash
    const search = req.nextUrl.search;
    const hash = req.nextUrl.hash;
    return NextResponse.redirect(
      new URL(`/${lng}${req.nextUrl.pathname}${search}${hash}`, req.url)
    );
  }

  if (req.headers.has("referer")) {
    const refererUrl = new URL(req.headers.get("referer") || "");
    const lngInReferer = languages.find((l) =>
      refererUrl.pathname.startsWith(`/${l}`)
    );
    const response = NextResponse.next({ headers });
    if (lngInReferer) response.cookies.set(cookieName, lngInReferer);
    return response;
  }

  return NextResponse.next({ headers });
}
