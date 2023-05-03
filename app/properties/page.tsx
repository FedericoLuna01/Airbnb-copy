
import EmptyState from "../components/EmptyState";
import getCurrentUser from "../actions/getCurrentUser";
import getReservations from "../actions/getReservations";
import TripsClient from "./TripsClient";
import getFavorites from "../actions/getFavorites";

const PropertiesPage = async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return (
      <EmptyState
        title='No estás conectado.'
        subtitle='Por favor inicia sesión para ver tus viajes.'
      />
    )
  }

  const listings = await getFavorites({ userId: currentUser.id })

  if (!reservations.length) {
    return (
      <EmptyState
        title='No tienes viajes.'
        subtitle='Puedes reservar un viaje en la página de inicio.'
      />
    )
  }

  return ( 
    <div>
      <TripsClient 
        reservations={reservations}
        currentUser={currentUser}
      />
    </div>
   );
}
 
export default PropertiesPage;