import { Route, Switch } from "react-router-dom";
import AllMeetupsPage from "./pages/AllMeetups";
import NewMeetup from "./pages/NewMeetup";
import FavoritesPage from "./pages/Favourites";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Layout>
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
    </Layout>
  );
}

export default App;
