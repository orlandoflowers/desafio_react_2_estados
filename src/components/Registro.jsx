import "./Registro.css";
import SocialButton from "./SocialButton";
import Formulario from "./Formulario";
import Alert from "./Alert";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  faFacebook,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

function Registro() {
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

export default Registro;
