import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Maison Privée — Exceptional Dining. Entirely Yours.',
  description: 'A private chef service in Geneva for exceptional dining, entirely yours.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/client-portal/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/client-portal/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/client-portal/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/client-portal/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
