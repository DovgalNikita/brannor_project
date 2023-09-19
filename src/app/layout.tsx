import type { Metadata } from 'next'
import Header from '@/components/Header/Header'
import './globals.scss';


export const metadata: Metadata = {
  title: 'Brannor',
  description: 'Brannor_app',
}

export default function RootLayout({children} : {children: React.ReactNode}) {
  return (
    <html lang="ru">
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}
