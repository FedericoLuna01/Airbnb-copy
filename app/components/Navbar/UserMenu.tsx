'use client'

import { useCallback, useState } from 'react';
import {AiOutlineMenu} from 'react-icons/ai'
import { SafeUser } from '@/app/types';
import { signOut } from 'next-auth/react';
import Avatar from '../Avatar';
import MenuItem from './MenuItem';
import useRegisterModal from '@/app/hooks/useRegisterModal';
import useLoginModal from '@/app/hooks/useLoginModal';
import useRentModal from '@/app/hooks/useRentModal';
import { useRouter } from 'next/navigation';

interface UserMenuProps {
  currentUser?: SafeUser | null
}

const UserMenu: React.FC<UserMenuProps> = ({ currentUser }) => {
  const [isOpen, setIsOpen] = useState(false)
  const registerModal = useRegisterModal()
  const loginModal = useLoginModal()
  const rentModal = useRentModal()

  const router = useRouter()

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value)
  }, [])

  const onRent = useCallback(() => {
    if (!currentUser) return loginModal.onOpen()
    
    // Abrir rent modal
    rentModal.onOpen()

  }, [currentUser, loginModal, rentModal])

  return ( 
    <div
      className="relative"
    >
      <div
        className="flex flex-row items-center gap-3"
      > 
        <div
          onClick={onRent}
          className="hidden md:block font-sm font-semibold py-3 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer"
        >
          Airbnb tu casa
        </div>
        <div
          onClick={toggleOpen}
          className="p-4 md:py-1 md:px-2 border-[1px] hover:bg-neutral-200 flex flex-row items-center gap-3 rounded-full transition cursor-pointer hover-shadow-md"
        >
          <AiOutlineMenu />
          <div
            className='hidden md:block'
          >
            <Avatar src={currentUser?.image} />
          </div>
        </div>
      </div>
      {
        isOpen && (
          <div
            className="absolute top-12 right-0 w-[40vw] md:w-3/4 bg-white rounded-xl shadow-md overflow-hidden tetx-sm"
          >
            <div
              className='flex flex-col cursor-pointer'
            >
              {currentUser ? (
                <>
                  <MenuItem 
                    onClick={() => router.push('/trips')}
                    label='Mis viajes'
                  />
                  <MenuItem 
                    onClick={() => {}}
                    label='Mis favoritos'
                  />
                  <MenuItem 
                    onClick={() => router.push('/reservations')}
                    label='Mis reservas'
                  />
                  <MenuItem 
                    onClick={() => {}}
                    label='Mis propiedades'
                  />
                  <MenuItem 
                    onClick={rentModal.onOpen}
                    label='Airbnb mi casa'
                  />
                  <hr />
                  <MenuItem 
                    onClick={() => signOut()}
                    label='Salir'
                  />
                </>
              ) : (
                <>
                  <MenuItem 
                    onClick={loginModal.onOpen}
                    label='Ingresar'
                  />
                  <MenuItem 
                    onClick={registerModal.onOpen}
                    label='Registrarse'
                  />
                </>
              )
              }
            </div>
          </div>
        )
      }
    </div>
   );
}
 
export default UserMenu;