import React from 'react';
import {Link} from "react-router-dom";
import Button from '../Button/Button';
import {
    Section as SectionWrap, 
    SectionInner, 
    SectionActionText, 
    SectionHeading, 
    SectionTitleH1,
    SectionTitleH2
} from "./SectionStyle"

const Section = ({
    modifiers,
    actionText,
    title,
    buttonText,
    isHeadingVisible = true,
    linkTo,
    children,
    callback,
    isMainSection = false,
    isCentered = false
}) => {
    const modifierClasses = {
        testimonials: 'Section_testimonials'
    }

    let sectionClass = 'Section';

    if (modifiers){
        modifiers.map(modifier => {
            return sectionClass += ' ' + modifierClasses[modifier];
        });
    }

    return (
        <SectionWrap>
            <SectionInner>
                {actionText && <SectionActionText>{actionText}</SectionActionText>}
                {isHeadingVisible && <SectionHeading>
                    {title && (isMainSection ? (
                    <SectionTitleH1 isCentered={isCentered}>{title}</SectionTitleH1> ):( 
                    <SectionTitleH2 isCentered={isCentered}>{title}</SectionTitleH2>))}
                    {buttonText && <Link to={linkTo}><Button isHeading isOutlined onClick={callback}>{buttonText}</Button></Link>}
                </SectionHeading>}
                {children}
            </SectionInner>
        </SectionWrap>
    );
}

export default Section;
