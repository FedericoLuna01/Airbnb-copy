
import EmptyState from "../components/EmptyState";
import getCurrentUser from "../actions/getCurrentUser";
import PropertiesClient from "./PropertiesClient";
import getListings from "../actions/getListings";

const PropertiesPage = async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return (
      <EmptyState
        title='No estás conectado.'
        subtitle='Por favor inicia sesión para ver tus propiedades.'
      />
    )
  }

  const listings = await getListings({ userId: currentUser.id })

  if (!listings.length) {
    return (
      <EmptyState
        title='No tienes propiedades.'
        subtitle='Parece que todavia no tienes ninguna propiedad.'
      />
    )
  }

  return ( 
    <div>
      <PropertiesClient 
        listings={listings}
        currentUser={currentUser}
      />
    </div>
   );
}
 
export default PropertiesPage;