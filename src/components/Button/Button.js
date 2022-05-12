import React from 'react';
import {Button as ButtonStyled} from "./ButtonStyle"

const Button = ({
  children,
  ...otherProps
}) => {
  return (
    <ButtonStyled {...otherProps}> {children} </ButtonStyled>
  );
};

export default Button;


//ES7+ React/Redux/React-Native snippets
