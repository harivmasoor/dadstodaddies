import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'DadstoDaddies - Empowering Fathers to Get Fit',
  description: 'A supportive community for dads on their fitness journey',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.className} bg-gray-50 text-gray-900 min-h-full flex flex-col`}>
        <div className="flex-grow">{children}</div>
        <footer className="bg-gray-200 py-4 mt-8">
          <div className="container mx-auto text-center">
            <p>&copy; 2023 DadstoDaddies. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  )
}

//test