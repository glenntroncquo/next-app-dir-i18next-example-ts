import { NextResponse, NextRequest } from "next/server";
import { resolvePath } from "./lib/redirects";

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js|site.webmanifest|robots.txt|sitemap.xml|llms.txt).*)",
  ],
};

export function proxy(req: NextRequest) {
  const host = req.headers.get("host") || "";
  if (host.startsWith("www.")) {
    const canonicalHost = host.replace(/^www\./, "");
    const url = new URL(req.url);
    url.host = canonicalHost;
    return NextResponse.redirect(url, { status: 301 });
  }

  if (
    req.nextUrl.pathname.indexOf("icon") > -1 ||
    req.nextUrl.pathname.indexOf("chrome") > -1
  ) {
    return NextResponse.next();
  }

  const decision = resolvePath(req.nextUrl.pathname);

  if (decision.type === "gone") {
    return new NextResponse(null, { status: 410 });
  }

  if (decision.type === "redirect") {
    const url = req.nextUrl.clone();
    url.pathname = decision.destination;
    return NextResponse.redirect(url, { status: 301 });
  }

  return NextResponse.next();
}
