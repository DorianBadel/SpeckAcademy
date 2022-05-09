import React, { useEffect } from 'react';
import {useState } from "react";


//Components
import Main from '../../components/Main/Main';
import Section from '../../components/Section/Section';
import CourseCard from '../../components/CourseCard/CourseCard';
import Header from '../../components/Header/Header';
import {Grid} from "../../lib/style/generalStyles";

import coursesMock from '../../lib/style/mock/courses'

//3:01:57
function Courses(){
    const [courses, setCourses] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            setCourses(coursesMock);
        },1000)

    },[])
    window.scrollTo(0, 0);
    return(
        <Main>
            <Header isSecondary={true}/>
            <Section
            actionText={"Learn Something New"}
            title={"Open new possibilities"}
            buttonText={"Back"}
            linkTo={"/"}
            >
                {courses && <Grid>
                    {courses.map((course,index) => 
                    <CourseCard
                        key = {course.id}
                        courseId = {course.id}
                        imgSrc={course.imgSrc}
                        imgAlt={course.imgAlt}
                        title={course.title}
                        subtitle={course.subtitle}
                    />)}
                
                
                </Grid>}
            

            </Section>

        </Main>
    )
}

export default Courses;