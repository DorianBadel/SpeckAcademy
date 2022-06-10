import React from 'react';

//Styled
import {Course, CourseFigure, CourseImage, CourseText} from "./SingleCourseStyle"

const SingleCourse = ({
    imgSrc,
    imgAlt,
    text,
}) => {
    return (
        <Course>
            <CourseFigure>
              <CourseImage src={imgSrc} alt={imgAlt}/>
            </CourseFigure>
            <CourseText>
                {text}
            </CourseText>

        </Course>
    );
}

export default SingleCourse;
