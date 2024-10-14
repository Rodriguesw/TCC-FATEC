import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { AppProvider } from '~/hooks'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Play FUT',
  icons: '/images/png/icon-play-fut.png',
  manifest: '/manifest.webmanifest',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  )
}
