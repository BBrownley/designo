import Navbar from "./components/Navbar/Navbar";
import { App as Container } from "./App.elements";

import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

import HomePage from "./components/HomePage/HomePage";
import ContactPage from "./components/ContactPage/ContactPage";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Router>
      <Container>
        <div className="wrapper">
          <Navbar />
          <Switch>
            <Route exact path="/" component={HomePage} />
          </Switch>
        </div>
        <Footer />
      </Container>
    </Router>
  );
}

export default App;
