import "./App.css";
import SocialButton from "./components/SocialButton";
import Formulario from "./components/Formulario";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

import {
  faFacebook,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import Alert from "./components/Alert";

function App() {
  const [alert, setAlert] = useState({ msg: "", color: "" });

  return (
    <div className="d-flex flex-column mb-3 container bg-light p-5 h-100">
      <h1 className="mb-4">Crea una cuenta</h1>
      <SocialButton
        facebook={faFacebook}
        github={faGithub}
        linkedin={faLinkedin}
      />
      <p className="mb-5 mt-5">O usa tu email para registrarte</p>
      <Formulario setAlert={setAlert} />
      <Alert mensaje={alert.msg} variant={alert.color} />
    </div>
  );
}

export default App;
