import React from 'react'
import "./Course.scss"
import {useState, useEffect } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom"
import coursesMock from '../../lib/style/mock/courses';

//Components
import Main from '../../components/Main/Main';
import Section from '../../components/Section/Section';
import SingleCourse from '../../components/SingleCourse/SingleCourse';
import Header from '../../components/Header/Header';



function Course(){
    const { id } = useParams();
    const [courses, setCourses] = useState(null);
    const [course, setCourse] = useState(null);
    const location = new useLocation();
    const navigate = new useNavigate();

    useEffect(() => {
        setCourses(coursesMock)

    },[]);

    useEffect(() => {
        courses && setCourse(...courses.filter(course => course.id === parseInt(id)));

    },[courses, id]);

    const handleButtonClick = () => {
        if(location.pathname.includes("/course/")) navigate(-1);
        if(location.pathname === "/") navigate("/courses");

    }

    window.scrollTo(0, 0);
    return(
        <Main>
            <Header isSecondary={true}/>

            {course && (
                <Section
                    title={course.title}
                    actionText={course.sub}
                    buttonText={"Back"}
                    linkTo={"/"}
                    callback={handleButtonClick}
                >
                    <SingleCourse
                        imgSrc={course.imgSrc}
                        imgAl={course.imgAlt}
                        text={course.text}
                    />
    
                </Section>

            )}
            

        </Main>
    )
}

export default Course;