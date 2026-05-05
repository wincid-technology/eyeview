import { NextResponse } from "next/server";

export function middleware(req) {
  const isAdmin = req.cookies.get("admin-auth");

  if (req.nextUrl.pathname.startsWith("/admin")) {
    if (!isAdmin) {
      return NextResponse.redirect(new URL("/", req.url));
    }
  }

  return NextResponse.next();
}