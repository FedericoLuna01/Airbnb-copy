import ClientOnly from './components/ClientOnly'
import Navbar from './components/Navbar/Navbar'
import RegisterModal from './components/modals/RegisterModal'
import './globals.css'
import { Nunito } from 'next/font/google'

const nunito = Nunito({ subsets: ['latin'] })

export const metadata = {
  title: 'Airbnb - copy',
  description: 'Copy of Airbnb website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <ClientOnly>
          <RegisterModal />
          <Navbar />
        </ClientOnly>
        {children}
      </body>
    </html>
  )
}
