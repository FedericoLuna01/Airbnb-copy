'use client'

import { useRouter } from "next/navigation";
import Container from "../components/Container";
import Heading from "../components/Heading";
import { SafeListing, SafeUser } from "../types";
import { useCallback, useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import ListingCard from "../components/listings/ListingCard";

interface PropertiesProps {
  listings: SafeListing[]
  currentUser: SafeUser | null
}

const PropertiesClient: React.FC<PropertiesProps> = ({ listings, currentUser }) => {
  const router = useRouter()
  const [deletingId, setDeletingId] = useState('')

  const onCancel = useCallback((id: string) => {
    setDeletingId(id)

    axios.delete(`/api/listing/${id}`)
      .then(() => {
        toast.success('Propiedad borrada conrrectamente.')
        router.refresh()
      })
      .catch((error) => {
        console.log(error)
        toast.error(error?.response?.data?.error)
      })
      .finally(() => {
        setDeletingId('')
      })

  }, [router])

  return ( 
    <Container>
      <Heading 
        title='Propiedades'
        subtitle='Listado de tus propiedades.'
      /> 
      <div
        className="
        mt-10 
        grid 
        grid-cols-1 
        sm:grid-cols-2 
        md:grid-cols-3 
        lg:grid-cols-4
        xl:grid-cols-5
        2xl:grid-cols-6
        gap-8
        "
      > 
        {listings.map((listing) => (
          <ListingCard 
            key={listing.id}
            data={listing}
            actionId={listing.id}
            onAction={onCancel}
            disabled={deletingId === listing.id}
            actionLabel='Borrar propiedad'
            currentUser={currentUser}
          />
        ))}
      </div>
    </Container>
   );
}
 
export default PropertiesClient;