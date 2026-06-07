import type { Metadata, Viewport } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export const metadata: Metadata = {
  title: {
    default: 'Guru Kripa Charitable Trust',
    template: '%s | Guru Kripa Charitable Trust',
  },
  description:
    'Guru Kripa Charitable Trust — Empowering tribal and backward communities in Palakkad, Kerala through healthcare, education, and sustainable livelihoods.',
  keywords: ['charitable trust', 'NGO', 'Palakkad', 'Kerala', 'tribal', 'healthcare', 'Ayurveda'],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased bg-gray-50 overflow-x-hidden">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
