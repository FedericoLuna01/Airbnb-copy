import axios from 'axios'
import { useRouter } from 'next/navigation'
import { useCallback, useMemo } from 'react'
import { toast } from 'react-hot-toast'

import { SafeUser } from '../types'
import useLoginModal from './useLoginModal'

interface IUseFavorite {
  listingId: string
  currentUser?: SafeUser | null
}

const useFavorite = ({ listingId, currentUser }: IUseFavorite) => {
  const router = useRouter()
  const loginModal = useLoginModal()

  const hasFavorited = useMemo(() => {
    const list = currentUser?.favoritesIds || []
    
    return list.includes(listingId)
  }, [currentUser, listingId])

  const toggleFavorite = useCallback(async (
    e: React.MouseEvent<HTMLDivElement>
  ) => {
    e.stopPropagation()

    if (!currentUser) return loginModal.onOpen()

    try {
      let req

      if (hasFavorited) {
        req = () => axios.delete(`/api/favorites/${listingId}`)
        toast.success('Eliminado de favoritos.')
      } else {
        req = () => axios.post(`/api/favorites/${listingId}`)
        toast.success('Agregado a favoritos.')
      }

      await req()
      router.refresh()

    } catch (error) {
      toast.error('Algo fue mal')
    }

  }, [loginModal, currentUser, hasFavorited, listingId, router])

  return {
    hasFavorited,
    toggleFavorite
  }
}

export default useFavorite
