import React, { useState, useEffect } from 'react';

//Components
import Landing from '../../components/Landing/Landing';
import Main from '../../components/Main/Main';
import Section from '../../components/Section/Section';
import Loader from '../../components/Loader/Loader';

import CourseCard from '../../components/CourseCard/CourseCard';
import Testimonial from '../../components/Testimonial/Testimonial';
import Header from '../../components/Header/Header';
import SearchBar from '../../components/SearchBar/SearchBar';

import {Grid} from "../../lib/style/generalStyles";
import coursesMock from '../../lib/style/mock/courses';


function Home(){
    

    const [searchInput, setSearchInput] = useState("");

    const handleChange = (e) => {
        setSearchInput(e);
    };

    const [courses, setCourses] = useState(null); 
    
    useEffect(() => {
        
        setTimeout(() => {
            
            setCourses(coursesMock);

        }, 1000)
    }, [])

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
                placeholder={"Search ..."}
                disabledState={courses ? false : true}
                value={searchInput}
                />

                {courses ?
                <Grid>
                    {
                    courses.filter((found) => { return found.title.toLowerCase().match(searchInput.toLowerCase())}).map((course, index) => index <= 3 && 
                    <CourseCard
                        key = {course.id}
                        courseId = {course.id}
                        imgSrc={course.imgSrc}
                        imgAlt={course.imgAlt}
                        title={course.title}
                        subtitle={course.subtitle}
                    />
                    )}
                </Grid> : <Loader/>}

            </Section>
            <Section modifiers={["Testimonials"]} isHeadingVisible={false}>
            <Testimonial/>
            </Section>
        </Main>
    )
}

export default Home;