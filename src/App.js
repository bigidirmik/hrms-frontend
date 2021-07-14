import "./App.css";
import "semantic-ui-css/semantic.min.css";
import Dashboard from "./layouts/Dashboard/Dashboard";
import { Container } from "semantic-ui-react";
import Navi from "./layouts/Navi/Navi";
import Footer from "./layouts/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navi />
      <Container className="main">
        <Dashboard />
      </Container>
      <Footer />
    </div>
  );
}

export default App;
