'use client';

export function GradientBlob() {
  return (
    <>
      <div className="absolute top-0 -left-4 w-96 h-96 bg-gradient-to-br from-purple-600 via-purple-500 to-transparent rounded-full mix-blend-multiply filter blur-[120px] opacity-20 animate-blob" />
      <div className="absolute top-1/2 -right-4 w-96 h-96 bg-gradient-to-bl from-blue-600 via-blue-500 to-transparent rounded-full mix-blend-multiply filter blur-[120px] opacity-20 animate-blob animation-delay-2000" />
    </>
  );
}
