import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter"
});

export const metadata: Metadata = {
  title: 'Efecto del Riego con Agua Azucarada en el Frijol (Phaseolus vulgaris)',
  description: 'Proyecto de investigación de la Universidad Mariano Gálvez (Villa Nueva, 2026) sobre el efecto del riego con agua azucarada en la germinación y desarrollo inicial de semillas de frijol.',
  generator: 'v0.app',
  icons: {
    icon: '/images/logo-oficial-proyecto.png',
    apple: '/images/logo-oficial-proyecto.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="bg-background scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
