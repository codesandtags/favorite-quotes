import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  console.log('🚨 middleware running...');
  const token = request.cookies.get('token');

  console.log(token);

  if (token && token.value !== '') {
    console.log('🚨 user logged in');
    return NextResponse.next();
  }

  return NextResponse.redirect(new URL('/login', request.url));
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/quote/add', '/quote/edit/:id'],
};
