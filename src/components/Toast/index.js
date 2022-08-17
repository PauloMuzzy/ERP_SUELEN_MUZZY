import React from "react";
import { ToastSuccessStyled , SpanToastText , ToastCloseButton} from "./style";

export default function ToastSuccess({backgroundColor, text, color}) {
  return (
    <ToastSuccessStyled>
      <ToastCloseButton color={color}>X</ToastCloseButton>
      <SpanToastText backgroundColor={backgroundColor} text={text}/>
    </ToastSuccessStyled>
  );
};