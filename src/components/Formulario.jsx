import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";

const Formulario = ({ setAlert }) => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confimacionPassword, setConfimacionPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (nombre === "") {
      setAlert({
        msg: "Debe de ingresar un nombre!",
        color: "danger",
      });
      return;
    }
    if (email === "") {
      setAlert({
        msg: "Debe de ingresar un email !",
        color: "danger",
      });
      return;
    }
    if (password === "") {
      setAlert({
        msg: "Debe de ingresar una contraseña !",
        color: "danger",
      });
      return;
    }
    if (confimacionPassword === "") {
      setAlert({
        msg: "Debe de ingresar una confirmación de contraseña !",
        color: "danger",
      });
      return;
    }
    if (password !== confimacionPassword) {
      setAlert({
        msg: "Las contraseñas deben coincidir !",
        color: "danger",
      });
      return;
    }

    setAlert({
      msg: "Ingreso satisfactorio !",
      color: "success",
    });
  };

  return (
    <Form className="w-100 " onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Control
          type="text"
          placeholder="Nombre"
          onChange={(e) => setNombre(e.target.value)}
          value={nombre}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Control
          type="email"
          placeholder="name@example.com"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Control
          type="password"
          placeholder="Contraseña"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Control
          type="password"
          placeholder="Confirma tu contraseña"
          onChange={(e) => setConfimacionPassword(e.target.value)}
          value={confimacionPassword}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Button
          className="w-100"
          as="input"
          type="submit"
          value="Registrarse"
        />
      </Form.Group>
    </Form>
  );
};

export default Formulario;
