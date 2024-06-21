import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Default_Mi-nam',
  description: '안녕하세요! 저는 김미남이라고 합니다!',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko">
      <head>
        <meta
          name="google-site-verification"
          content="IRNnpCop6wOd0Tn9nBhgPeHibl--Dl7sw7RdkPgKiHQ"
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
