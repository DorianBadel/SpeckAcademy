import React, { useState } from 'react';
import {useEffect } from "react";

//Components
import Landing from '../../components/Landing/Landing';
import Main from '../../components/Main/Main';
import Section from '../../components/Section/Section';

import CourseCard from '../../components/CourseCard/CourseCard';
import Testimonial from '../../components/Testimonial/Testimonial';
import Header from '../../components/Header/Header';
import {Grid} from "../../lib/style/generalStyles";

import coursesMock from '../../lib/style/mock/courses';
import SearchBar from '../../components/SearchBar/SearchBar';


function Home(){
    const [courses, setCourses] = useState(null);  
    
    useEffect(() => {
        setTimeout(() => {
            setCourses(coursesMock);
        }, 1000)
    }, [])

    const [searchInput, setSearchInput] = useState("");

    const handleChange = (e) => {
        //e.preventDefault();
        setSearchInput(e);
        console.log(e);
    };

    //window.scrollTo(0, 0);
    return(
        <Main>
            <Header/>
            <section>
            <Landing/>
            </section>
            <Section
            actionText={"Learn Something New"}
            title={"Open new possibilities"}
            buttonText={"More courses"}
            linkTo ={"/courses"}
            >

                <SearchBar 
                onValueChange={handleChange}
                placeholder={"ph"}
                disabledState={false}
                />

                {courses && <Grid>
                    {courses.map((course, index) => index <= 3 && 
                    <CourseCard
                        key = {course.id}
                        courseId = {course.id}
                        imgSrc={course.imgSrc}
                        imgAlt={course.imgAlt}
                        title={course.title}
                        subtitle={course.subtitle}
                    />
                    )}
                </Grid>}

            </Section>
            <Section modifiers={["Testimonials"]} isHeadingVisible={false}>
            <Testimonial/>
            </Section>
        </Main>
    )
}

export default Home;