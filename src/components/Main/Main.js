import React from 'react';

//Styled
import { Main as MainContainer} from './MainStyle';

const Main = props => {
  return (
    <MainContainer className="Main">
            {props.children}
    </MainContainer>
  );
};

export default Main;


//ES7+ React/Redux/React-Native snippets
