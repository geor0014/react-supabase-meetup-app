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

  const addFavoriteHandler = (favoriteMeetup) => {
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.concat(favoriteMeetup);
    });
  };
  const removeFavoriteHandler = (meetupId) => {
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.filter((meetup) => meetup.id !== meetupId);
    });
  };
  const itemIsFavoriteHandler = (meetupId) => {
    return userFavorites.some((meetup) => meetup.id === meetupId);
  };

  return (
    <FavoritesContex.Provider value={context}>
      {props.children}
    </FavoritesContex.Provider>
  );
};
