import React from 'react';
import { RevolvingDot } from 'react-loader-spinner';

//Styled
import { LoaderContainer } from './LoaderStyle';

const Loader = () => {
  return (
      <LoaderContainer>
          <RevolvingDot width={100} height={100} color={"#bf3939"}/>
      </LoaderContainer>

  );
};

export default Loader;
