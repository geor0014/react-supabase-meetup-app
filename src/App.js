import { Route, Switch } from "react-router-dom";
import AllMeetupsPage from "./pages/AllMeetups";
import NewMeetup from "./pages/NewMettup";
import FavoritesPage from "./pages/Favourites";
import MainNavigation from "./components/layout/MainNavigation";

function App() {
  return (
    <div>
      <MainNavigation />

      <Switch>
        <Route path={"/"} exact>
          <AllMeetupsPage />
        </Route>
        <Route path={"/new-meetup"}>
          <NewMeetup />
        </Route>
        <Route path={"/favorites"}>
          <FavoritesPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
