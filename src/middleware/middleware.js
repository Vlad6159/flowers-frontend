import { NextResponse } from "next/server";

export function middleware(request) {
  const token = localStorage.getItem("token");

  if (!token) {
    return NextResponse.redirect("/");
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/profile/:path*",
};
