import React from "react";
import * as S from "./style";

export default function Toast({ type, text }) {

  const handleTypeToast = (type) => {
    switch (type) {
      case "success":
        return {
          backgroundColor: "#00b159",
          color: "#FFFFFF",
          title: "SUCESSO !"
        };
      case "error":
        return {
          backgroundColor: "#d11141",
          color: "#FFFFFF",
          title: "ERRO !"
        };
      case "warning":
        return {
          backgroundColor: "#ffc425",
          color: "#000000",
          title: "ATENÇÃO !"
        };
        default:
          return {
            backgroundColor: "#00aedb",
            color: "#000000",
            title: "INFO !"
          };
    }
  }

  const { backgroundColor, color, title } = handleTypeToast(type);

  return (
    <S.Container backgroundColor={backgroundColor}>
      <S.Header>
        <S.Title color={color}>{title}</S.Title>
        <S.CloseButton color={color}>X</S.CloseButton>
      </S.Header>
      <S.Body>
        <S.Text color={color}>{text}</S.Text>
      </S.Body>
    </S.Container>
  );
};