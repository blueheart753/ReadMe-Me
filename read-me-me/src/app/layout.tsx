import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Kim-Minam',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <meta
          name="Description"
          content="안녕하세요! 저는 김미남입니다., Minam Kim, 김미남, kimminam, Kimminam, Read-Me-Me, read-me-me, readmeme, ReadMeMe, gimminam"
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
