import "./App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import SocialButton from "./components/SocialButton";
import Formulario from "./components/Formulario";

import {
  faFacebook,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

function App() {
  return (
    <Container className="container" fluid="md">
      <h1>Crea una cuenta</h1>
      <Row />
      <SocialButton
        facebook={faFacebook}
        github={faGithub}
        linkedin={faLinkedin}
      />
      <p>O usa tu email para registrarte</p>
      <Formulario />
    </Container>
  );
}

export default App;
