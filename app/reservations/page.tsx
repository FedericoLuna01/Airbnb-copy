import getCurrentUser from "../actions/getCurrentUser";
import getReservations from "../actions/getReservations";
import EmptyState from "../components/EmptyState";
import ReservationsClient from "./ReservationsClient";

const ReservationsPage = async () => {

  const currentUser = await getCurrentUser()
  
  if ( !currentUser ) {
    return (
      <EmptyState 
        title='No estás registrado'
        subtitle='Ingresa a tu cuenta para ver tus reservas'
      />
      )
    }
    
  const reservations = await getReservations({ authorId: currentUser.id })
  
  if (reservations.length === 0) {
    return (
      <EmptyState 
        title='No tienes reservas'
        subtitle='Reserva un lugar para comenzar'
      />
    )
  }

  return ( 
    <ReservationsClient 
      reservations={reservations}
      currentUser={currentUser}
    />
   );
}
 
export default ReservationsPage;