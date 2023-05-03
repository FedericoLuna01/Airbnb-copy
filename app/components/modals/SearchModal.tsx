'use client'

import qs from 'query-string'
import { useCallback, useMemo, useState } from "react";
import { Range } from "react-date-range";
import { useRouter, useSearchParams } from "next/navigation";
import useSearchModal from "@/app/hooks/useSeatchModal";
import Modal from "./Modal";
import dynamic from "next/dynamic";
import CountrySelect, { CountrySelectValue } from "../inputs/CountrySelect";
import { formatISO } from 'date-fns';
import Heading from '../Heading';
import Calendar from '../inputs/Calendar';
import Counter from '../inputs/Counter';

enum STEPS {
  LOCATION = 0,
  DATE = 1,
  INFO = 2
}

const SearchModal = () => {
  const [step, setStep] = useState(STEPS.LOCATION)
  const [location, setLocation] = useState<CountrySelectValue>()
  const [roomCount, setRoomCount] = useState(1)
  const [guestCount, setGuestCount] = useState(1)
  const [bathroomCount, setBathroomCount] = useState(1)
  const [dateRange, setDateRange] = useState<Range>({
    startDate: new Date(),
    endDate: new Date(),
    key: 'selection'
  })

  const searchModal = useSearchModal()
  const router = useRouter()
  const params = useSearchParams()

  const Map = useMemo(() => dynamic(() => import('../Map'), 
    { ssr: false }
  ), [location])

  const onBack = useCallback(() => {
    setStep(value => value - 1)
  }, [])  

  const onNext = useCallback(() => {
    setStep(value => value + 1)
  }, [])  

  const onSubmit = useCallback( async () => {
    if (step !== STEPS.INFO) return onNext()

    let currentQuery = {}

    if (params) {
      currentQuery = qs.parse(params.toString())
    }

    const updatedQuery: any = {
      ...currentQuery,
      locationValue: location?.value,
      guestCount,
      roomCount,
      bathroomCount,
    }

    if (dateRange.startDate) {
      updatedQuery.startDate = formatISO(dateRange.startDate)
    }

    if (dateRange.endDate) {
      updatedQuery.endDate = formatISO(dateRange.endDate)
    }

    const url = qs.stringifyUrl({
      url: '/',
      query: updatedQuery
    }, { skipNull: true })

    setStep(STEPS.LOCATION)
    searchModal.onClose()
    router.push(url)
  }, [step, searchModal, location, guestCount, roomCount, bathroomCount, router, dateRange, onNext, params])

  const actionLabel = useMemo(() => {
    if (step === STEPS.INFO) return 'Buscar'
    return 'Siguiente'
  }, [step])

  const secondaryActionLabel = useMemo(() => {
    if (step === STEPS.LOCATION) return undefined
    return 'Atrás'
  }, [step])

  let bodyContent = (
    <div
      className='flex flex-col gap-8'
    >
      <Heading 
        title='Donde quieres ir?'
        subtitle='Encuentra tu lugar ideal para hospedarte'
      />
      <CountrySelect 
        value={location}
        onChange={(value) => setLocation(value as CountrySelectValue)}
      />
      <hr />
      <Map 
        center={location?.latlng}
      />
    </div> 
  )

  if(step === STEPS.DATE) {
    bodyContent = (
      <div
        className='flex flex-col gap-8'
      >
        <Heading 
          title='Cuando quieres ir?'
          subtitle='Busca una fecha disponible'
        />
        <Calendar 
          value={dateRange}
          onChange={(value) => setDateRange(value.selection)}
        />
      </div>
    )
  }

  if (step === STEPS.INFO) {
    bodyContent = (
      <div
        className='flex flex-col gap-8'
      >
        <Heading 
          title='Mas información'
          subtitle='Encuentra tu lugar ideal para hospedarte'
        />
        <Counter 
          title='Huespedes'
          subtitle='Agrega la cantidad de huespedes'
          value={guestCount}
          onChange={(value) => setGuestCount(value)}
        />
        <Counter 
          title='Habitaciones'
          subtitle='Cuantas habitaciones necesitas?'
          value={roomCount}
          onChange={(value) => setRoomCount(value)}
        />
        <Counter 
          title='Baños'
          subtitle='Cuantos Baños necesitas?'
          value={bathroomCount}
          onChange={(value) => setBathroomCount(value)}
        />
      </div>
    )
  }    

  return ( 
    <Modal 
      isOpen={searchModal.isOpen}
      onClose={searchModal.onClose}
      onSubmit={onSubmit}
      title='Filtros'
      body={bodyContent}
      actionLabel={actionLabel}
      secondaryAction={step === STEPS.LOCATION ? undefined : onBack}
      secondaryActionLabel={secondaryActionLabel}
    />
   );
}
 
export default SearchModal;