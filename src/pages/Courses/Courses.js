import React, { useEffect, useState } from 'react';

//Components
import Main from '../../components/Main/Main';
import Section from '../../components/Section/Section';
import CourseCard from '../../components/CourseCard/CourseCard';
import Header from '../../components/Header/Header';
import Loader from '../../components/Loader/Loader';
import SearchBar from '../../components/SearchBar/SearchBar';

import coursesMock from '../../lib/style/mock/courses';
import {Grid} from "../../lib/style/generalStyles";

//3:01:57
function Courses(){
    const [searchInput, setSearchInput] = useState("");

    const handleChange = (e) => {
        setSearchInput(e);
    };

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

            <SearchBar 
                onValueChange={handleChange}
                placeholder={"Search ..."}
                disabledState={courses ? false : true}
                value={searchInput}
            />

            {courses ? <Grid>
                {courses.filter((found) => { return found.title.toLowerCase().match(searchInput.toLowerCase())}).map((course,index) => 
                <CourseCard
                    key = {course.id}
                    courseId = {course.id}
                    imgSrc={course.imgSrc}
                    imgAlt={course.imgAlt}
                    title={course.title}
                    subtitle={course.subtitle}
                />)}
            
            
            </Grid> : <Loader/>}
            

            </Section>

        </Main>
    )
}

export default Courses;