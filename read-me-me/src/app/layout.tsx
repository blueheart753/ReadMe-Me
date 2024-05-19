import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Kim-Minam',
  description:
    '안녕하세요! 저는 김미남입니다. 웹 개발자 김미남의 자기소개 사이트입니다.',
  keywords: '김미남, Minam Kim, 웹 개발자, 자기소개 사이트',
  authors: [{ name: '김미남', url: 'https://yourwebsite.com' }], // 올바른 타입으로 설정
  viewport: 'width=device-width, initial-scale=1',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Kim-Minam" />
        <meta
          property="og:description"
          content="안녕하세요! 저는 김미남입니다. 웹 개발자 김미남의 포트폴리오 사이트입니다."
        />
        <meta property="og:image" content="/path/to/image.jpg" />
        <meta property="og:url" content="https://yourwebsite.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Kim-Minam" />
        <meta
          name="twitter:description"
          content="안녕하세요! 저는 김미남입니다. 웹 개발자 김미남의 포트폴리오 사이트입니다."
        />
        <meta name="twitter:image" content="/path/to/image.jpg" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
