import React from "react";
import ImputLogin from "./style";

export default function Imput (props) {
  return (
    <ImputLogin type={props.type}placeholder={props.placeholder}/>
  );
};