/* eslint-disable prettier/prettier */

import type { Metadata } from 'next'
import './globals.css'
import '@/styles/boxicons-2.1.4/css/boxicons.min.css'

import { inter } from './fonts'

export const metadata: Metadata = {
  title: 'apa2024',
  description: 'apa',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
