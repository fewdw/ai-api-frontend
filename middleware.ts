import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { LOGIN_API_ROUTES, LOGIN_INFO_API_ROUTE } from './app/utils/ApiRoutes';


export async function middleware(req: NextRequest) {
  const sessionCookie = req.cookies.get('JSESSIONID');
  
  if (!sessionCookie) {
    return NextResponse.redirect(LOGIN_API_ROUTES);
  }

  try {
    const response = await fetch(LOGIN_INFO_API_ROUTE, {
      headers: { 'Cookie': `JSESSIONID=${sessionCookie}` },
      credentials: 'include',
    });

    if (response.status === 404) {
      return NextResponse.redirect(LOGIN_API_ROUTES);
    }

    // Allow access to the page if session is valid
    return NextResponse.next();

  } catch (error) {
    console.error("Failed to validate session:", error);
    return NextResponse.redirect(LOGIN_API_ROUTES);
  }
}

export const config = {
  matcher: ['/apis/:path*'],
};
