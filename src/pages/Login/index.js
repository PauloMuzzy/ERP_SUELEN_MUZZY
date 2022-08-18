import React from "react";
import Button from "../../components/Login/Button";
import Input from "../../components/Login/Input";
import Toast from "../../components/Toast";
import * as S from "./style";

export default function Login() {

  return (
    <S.Container>
      <form>
        <S.TextoFormulario>Login</S.TextoFormulario>
          <Input 
            type="email" 
            placeholder="E-mail" 
          />
          <Input 
            type="password" 
            placeholder="Senha" 
          />
        <Button text="ENTRAR"/>
      </form>
      <Toast type="warning" text="teste erro"/>
    </S.Container>
  );
};