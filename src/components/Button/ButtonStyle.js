import styled from "styled-components";
import {colors, breakpoints} from "../../lib/style/theme";

export const Button = styled.button`
    border: none;
    height: 48px;
    font-size: 16px;
    width: 220px;
    background-color: ${colors.secondary};
    color: ${colors.primary};
    border-radius:30px;
    font-weight: 500;

    display:inline-flex;
    justify-content: center;
    align-items: center;

    text-transform: uppercase;

    &:hover{
        transition: all 0.3s ease-in-out;
        filter: drop-shadow(0 3px 3px ${colors.textPrimary});
    }
    

    ${(props) => props.isNav &&`
        width: 100%;
        border-radius: 0;
        text-transform: none;

        @media(${breakpoints.desktop}){
        border-radius: 30px;
        text-transform: uppercase;
        width: 150px;
        
        }

        &:hover{
        transition: all 0.3s ease-in-out;
        filter: drop-shadow(0 3px 3px ${colors.black});
        }
    `}

    ${(props) => props.isOutlined &&`
        width: 200px;
        border: 1px solid ${colors.primary};
        transition: 0.3s ease-in-out;

        &:hover{
            background-color: ${colors.primary};
            color: ${colors.secondary};
        }
    `
    }

    ${(props) => props.isSecondary &&`
        background: ${colors.primary};
        color: ${colors.secondary};
    `}

    ${(props) =>
    props.isHeading &&`
        width:200px;
    `}

    ${(props) => props.isLanding &&`
        width:220px;
    `}

    ${(props) => props.issForm &&`
        display: block;
        margin: 0 auto;
        width: 220px;
    `}

    ${(props) => props.isMobileNav &&`
        width: 100%;
        background-color: red;
    `}

`;