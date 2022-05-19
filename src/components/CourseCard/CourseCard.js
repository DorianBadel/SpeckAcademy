import React from 'react';

//Styled
import {
    Course,
    Figure,
    Image,
    Title,
    Subtitle
} from './CourseCardStyle';

const CourseCard = ({
    courseId,
    imgSrc,
    imgAlt,
    title,
    subtitle
}) => {
    return (
        <Course to={`/course/${courseId}`}>
            <Figure>
                <Image src={imgSrc} alt={imgAlt} />
            </Figure>
            <Title>{title}</Title>
            <Subtitle>{subtitle}</Subtitle>
        </Course>
    );
}

export default CourseCard;
