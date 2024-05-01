import { Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import HomePage from "./layouts/HomePage/HomePage";
import Footer from "./layouts/NavBarAndFooter/Footer";
import NavBar from "./layouts/NavBarAndFooter/NavBar";
import SearchBookPage from "./layouts/SearchBookPage/SearchBookPage";

function App() {
  return (
    <>
      <NavBar />

      <Switch>
        <Route path="/" exact>
          <Redirect to='/home' />
        </Route>
        <Route path="/home" exact>
          <HomePage />
        </Route>
        <Route path="/search">
          <SearchBookPage />
        </Route>
      </Switch>

      <Footer />
    </>
  );
}

export default App;
