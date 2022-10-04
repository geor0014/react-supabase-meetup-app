import { useContext } from "react";
import FavoritesContex from "../store/favorite-contex";
import MeetupList from "../components/meetups/MeetupList";

function FavoritesPage() {
  const favoritesCtx = useContext(FavoritesContex);

  let content;
  if (favoritesCtx.totalFavorites === 0) {
    content = <p>You currently have no favorites.</p>;
  } else {
    content = <MeetupList meetups={favoritesCtx.favorites} />;
  }
  return (
    <section>
      <h1>My Favorites</h1>
      {content}
    </section>
  );
}

export default FavoritesPage;
