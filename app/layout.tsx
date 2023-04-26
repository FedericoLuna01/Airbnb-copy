import './globals.css'
import ClientOnly from './components/ClientOnly'
import Navbar from './components/Navbar/Navbar'
import RegisterModal from './components/modals/RegisterModal'
import LoginModal from './components/modals/LoginModal'
import ToasterProvider from './providers/ToasterProvider'
import { Nunito } from 'next/font/google'
import getCurrentUser from './actions/getCurrentUser'

const nunito = Nunito({ subsets: ['latin'] })

export const metadata = {
  title: 'Airbnb - copy',
  description: 'Copy of Airbnb website',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const currentUser = await getCurrentUser()
  return (
    <html lang="en">
      <body className={nunito.className}>
        <ClientOnly>
            <ToasterProvider />
            <RegisterModal />
            <LoginModal />
            <Navbar currentUser={currentUser} />
        </ClientOnly>
        {children}
      </body>
    </html>
  )
}
