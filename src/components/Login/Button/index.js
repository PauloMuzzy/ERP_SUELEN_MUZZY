import React from "react";
import ButtonLogin from "./style";

export default function Button(props) {
  return (
    <ButtonLogin>
      {props.text}
    </ButtonLogin>
  );
};