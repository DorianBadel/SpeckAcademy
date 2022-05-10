import React from 'react';
import {
    Container,
    Input
} from './SearchBarStyle';

const SearchBar = (
    props) => {
    return (
        <Container>
            <Input type="text" value={props.value} placeholder={props.placeholder} disabled={props.disabledState} onChange={(input) => props.onValueChange(input.target.value)} ></Input>
        </Container>
    );
  };
  
  export default SearchBar;