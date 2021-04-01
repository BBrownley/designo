import Navbar from "./components/Navbar/Navbar";
import {App as Container} from "./App.elements"

function App() {
  return (
    <Container>
      <div className="wrapper">
        <Navbar />
      </div>
    </Container>
  );
}

export default App;
