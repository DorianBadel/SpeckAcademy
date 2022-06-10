import React from 'react';

//Styled
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
