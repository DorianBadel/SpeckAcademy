import styled from "styled-components";
import {colors, breakpoints} from "../../lib/style/theme";

export const Container = styled.div`
    padding: 0px 15px 0px 15px;
    margin-bottom: 40px;

    @media(${breakpoints.tabletMedium}){
        max-width: 400px;
        align-self: center;
        padding: 0px;
    }
`;

export const Input = styled.input`
    border: 1px solid ${colors.textSecondary};
    border-radius: 6px;
    line-height: 40px;
    outline: none;
    font-size: 14px;
    
    padding-left: 5px;

    &:focus {
        border-color: ${colors.textPrimary};
    }

    @media(${breakpoints.desktop}){
        font-size: 16px;
    }
`;