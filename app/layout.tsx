import './globals.css'
import { Nunito } from 'next/font/google'
import Navbar from './components/Navbar/Navbar'
import RegisterModal from './components/modals/RegisterModal'
import LoginModal from './components/modals/LoginModal'
import RentModal from './components/modals/RentModal'
import SearchModal from './components/modals/SearchModal'
import ToasterProvider from './providers/ToasterProvider'
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
        <ToasterProvider />
        <RegisterModal />
        <LoginModal />
        <RentModal />
        <SearchModal />
        <Navbar currentUser={currentUser} />
        <div
          className='pb-20 pt-28'
        >
          {children}
        </div>
      </body>
    </html>
  )
}
