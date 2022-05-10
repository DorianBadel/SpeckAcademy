import React from 'react';
import './Button.scss';

const Button = ({
  modifiers,
  children,
  doStuff,
  isMobile
}) => {
  const modifierClasses = {
        secondary: 'Button_secondary',
        nav: 'Button_nav',
        landing: 'Button_landing',
        heading: 'Button_heading',
        outline: 'Button_outline'
  };

  let buttonClass = "Button";

  modifiers.map(modifier => (buttonClass += " " + modifierClasses[modifier]));

  return (
    <button className={buttonClass} onClick={() => true && doStuff()}> {children} </button>
  );
};

export default Button;


//ES7+ React/Redux/React-Native snippets
