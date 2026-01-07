import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  // This route is not meant to be used directly.
  // It exists to prevent a build error.
  // The root page is handled by src/app/page.tsx.
  return new Response('Not Found', { status: 404 });
}
