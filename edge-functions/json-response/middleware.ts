/* eslint-disable @next/next/no-server-import-in-page */
import { NextResponse, NextRequest } from 'next/server'

export function middleware(req: NextRequest) {
  if (req.nextUrl.pathname == '/file') {
    return
  } else {
    const url = req.nextUrl.clone()
    url.pathname = '/file.json'
    return NextResponse.redirect(url)
  }
}
