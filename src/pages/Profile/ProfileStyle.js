import styled from "styled-components"
import { breakpoints, colors, fonts } from "../../lib/style/theme";

export const FormContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    row-gap: 48px;

    ${props => props.isHideable == true && `
            color: red;
    `}

    @media (${breakpoints.tabletSmall}){
        grid-template-columns: repeat(2, 1fr);
        column-gap: 32px;
    }

    @media (${breakpoints.desktop}){
        grid-template-columns: repeat(3, 1fr);
        column-gap: 48px;
    }

    @media (${breakpoints.desktopLarge}){
        grid-template-columns: repeat(4, 1fr);
    }
`;

export const Strong = styled.p`
    padding-bottom: 20px;
    font-weight: 900;
`;