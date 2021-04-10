import Navbar from "./components/Navbar/Navbar";
import { App as Container } from "./App.elements";

import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

import ScrollToTop from "./components/utils/ScrollToTop";

import HomePage from "./components/HomePage/HomePage";
import WebDesignPage from "./components/WebDesignPage/WebDesignPage";
import AppDesignPage from "./components/AppDesignPage/AppDesignPage";
import GraphicDesignPage from "./components/GraphicDesignPage/GraphicDesignPage";
import LocationsPage from "./components/LocationsPage/LocationsPage";
import ContactPage from "./components/ContactPage/ContactPage";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Container>
        <div className="wrapper">
          <Navbar />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/web-design" component={WebDesignPage} />
            <Route exact path="/app-design" component={AppDesignPage} />
            <Route exact path="/graphic-design" component={GraphicDesignPage} />
            <Route exact path="/locations" component={LocationsPage} />
            <Route exact path="/contact" component={ContactPage} />
          </Switch>
        </div>
        <Footer />
      </Container>
    </Router>
  );
}

export default App;
