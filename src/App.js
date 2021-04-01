import Navbar from "./components/Navbar/Navbar";
import { App as Container } from "./App.elements";

import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

import HomePage from "./components/HomePage/HomePage";
import ContactPage from "./components/ContactPage/ContactPage";

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
      </Container>
    </Router>
  );
}

export default App;
