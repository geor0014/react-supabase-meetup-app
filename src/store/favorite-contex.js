import { createContext, useState } from "react";

const FavoritesContex = createContext({
  favorites: [],
  totalFavorites: 0,
});

const FovoritesContextProvider = (props) => {
  const [userFavorites, setUserFavorites] = useState([]);
  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
  };

  const addFavoriteHandler = (favoriteMeetup) => {};
  const removeFavoriteHandler = (meetupId) => {};
  const itemIsFavoriteHandler = (meetupId) => {};
  return (
    <FavoritesContex.Provider value={context}>
      {props.children}
    </FavoritesContex.Provider>
  );
};
