import styled from "styled-components"
import { css } from "styled-components";
import {colors, breakpoints} from "../../lib/style/theme"

export const Section = styled.section`
    padding: 60px 24px;

    @media (${breakpoints.desktop}){
        padding: 120px 0;
    }

    ${(props) => props.isTestimonial &&
    `
        background-color: #F6FAFB;    
    `}
`;

export const SectionInner = styled.div`
    @media (min-width: 1024px){
            width: 960px;
            margin: 0 auto;
        }

        @media (min-width: 1300px){
            width: 1260px;
        }
`;

export const SectionActionText = styled.span`
    display: block;
    color: #bf3939;
    font-weight: 500;
    margin-bottom: 24px;
`;

export const SectionHeading = styled.div`
    margin-bottom: 64px;

    @media (min-width: 768px){
    display: flex;
    justify-content: space-between;
    align-items: center;
}
`;

const TitleStyle = css`
    color: ${colors.textPrimary};
    font-size: 26px;
    font-weight: 500;
    margin-bottom: 32px;

    @media (min-width: 768px){
        font-size: 32px;
        margin-bottom: 0;
    }

    @media (min-width: 1024px){
        font-size: 36px;
    }
`;


export const SectionTitleH1 = styled.h1`
    ${TitleStyle}
    ${(props) => props.isCentered &&`
        text-align: center;
        width: 100%;
    `} 
`;

export const SectionTitleH2 = styled.h2`
    ${TitleStyle}

    ${(props) => props.isCentered &&`
        text-align: center;
        width: 100%;
    `} 
`;




