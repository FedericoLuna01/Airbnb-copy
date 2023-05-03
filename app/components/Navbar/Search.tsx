'use client'

import useCountries from '@/app/hooks/useCountries';
import useSearchModal from '@/app/hooks/useSeatchModal';
import { differenceInDays } from 'date-fns';
import { useSearchParams } from 'next/navigation';
import { useMemo } from 'react';
import {BiSearch} from 'react-icons/bi'

const Search = () => {
  const searchModal = useSearchModal()
  const params = useSearchParams()  
  const { getByValue } = useCountries()

  const locationValue = params?.get('locationValue')
  const startDate = params?.get('startDate')
  const endDate = params?.get('endDate')
  const guestCount = params?.get('guestCount')

  const locationLabel = useMemo(() => {
    if (locationValue) {
      return getByValue(locationValue as string)?.label
    }

    return 'Donde quieras'
  }, [getByValue, locationValue])

  const durationValue = useMemo(() => {
    if (startDate && endDate) {
      const start = new Date(startDate as string)
      const end = new Date(endDate as string)
      let diff = differenceInDays(end, start)

      if (diff === 0) {
        return '1'
      }

      return diff === 1 ? `${diff} día` : `${diff} días`
    }

    return 'Cuando quieras'
  }, [endDate, startDate])

  const guestLabel = useMemo(() => {
    if (guestCount) {
      return guestCount === '1' ? `${guestCount} huesped` : `${guestCount} huespedes`
    }

    return 'Agregar huespedes'
  }, [guestCount])

  return ( 
    <div
      onClick={searchModal.onOpen}
      className="border-[1px] w-full md:w-auto py-2 rounded-full shadow-sm hover:shadow-md transition cursor-pointer"
    >
      <div
        className="flex flex-row items-center justify-between"
      >
        <div
          className="text-sm font-semibold px-6"
        >
          {locationLabel}
        </div>
        <div
          className="hidden sm:block text-sm font-semibold px-6 border-x-[1px] flex-1 text-center"
        >
          {durationValue}
        </div>
        <div
          className="text-sm pl-6 pr-2 text-gray-600 flex flex-row items-center gap-3"
        >
          <div
            className="hidden sm:block"
          >
            {guestLabel}
          </div>
          <div
            className="p-2 bg-rose-500 rounded-full text-white "
          >
            <BiSearch size={18} />
          </div>
        </div>
      </div>
    </div>
   );
}
 
export default Search;