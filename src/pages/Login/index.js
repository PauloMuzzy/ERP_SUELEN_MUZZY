import React from "react";
import { Container , TextoFormulario }  from "./style";
import Button from "../../components/Login/Button";
import Input from "../../components/Login/Input";
// import Toast from "../../components/Toast";

export default function Login() {
  return (
    <Container>
      <form>
        <TextoFormulario>Login</TextoFormulario>
        <Input type="text" placeholder="Login" />
        <Input type="password" placeholder="Senha"/>
        <Button text="ENTRAR"/>
      </form>
      {/* <Toast backgroundColor="#339900" text="SUCCESS" color="#FFFFFF"/> */}
    </Container>
  );
};