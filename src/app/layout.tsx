import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'

import { Providers } from './providers'

const poppins = Poppins({ subsets: ['latin'], weight: ['100', '200', '400', '700'] })

export const metadata: Metadata = {
  title: 'Medis App',
  description: 'A site to connect all you medical needs',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-background`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
