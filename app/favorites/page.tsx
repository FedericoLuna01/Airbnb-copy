import getCurrentUser from "../actions/getCurrentUser";
import getFavorites from "../actions/getFavorites";
import Container from "../components/Container";
import EmptyState from "../components/EmptyState";
import Heading from "../components/Heading";
import FavoritesClient from "./FavoritesClient";

const FavoritesPage = async () => {

  const currentUser = await getCurrentUser()
  const favorites = await getFavorites()

  if (!currentUser) {
    <EmptyState 
      title='No has iniciado sesión'
      subtitle='Inicia sesión para ver tus favoritos'
    />
  }

  if (favorites.length === 0) {
    return (
      <EmptyState 
        title='No tienes favoritos'
        subtitle='Empieza a guardar tus favoritos'
      />
    )
  }

  return ( 
      <FavoritesClient 
        listings={favorites}
        currentUser={currentUser}
      />
   );
}
 
export default FavoritesPage;