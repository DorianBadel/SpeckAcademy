import React from 'react'

//Components
import Landing from '../../components/Landing/Landing';
import Main from '../../components/Main/Main';
import Section from '../../components/Section/Section';
import Grid from '../../components/Grid/Grid';
import CourseCard from '../../components/CourseCard/CourseCard';
import Testimonial from '../../components/Testimonial/Testimonial';

//Images
import LectureImg1 from '../../assets/images/lecture-1.jpg';
import LectureImg2 from '../../assets/images/lecture-2.jpg';
import LectureImg3 from '../../assets/images/lecture-3.jpg';
import LectureImg4 from '../../assets/images/lecture-4.jpg';


function Home(){
    window.scrollTo(0, 0);
    return(
        <Main>
            <section>
            <Landing/>
            </section>
            <Section
            actionText={"Learn Something New"}
            title={"Open new possibilities"}
            buttonText={"More courses"}
            linkTo ={"/courses"}
            >
            <Grid>
                <CourseCard
                imgSrc={LectureImg1}
                imgAlt={'Introduction'}
                title={'1. Introduction'}
                subtitle={'60 Minutes'}
                />
                <CourseCard
                imgSrc={LectureImg2}
                imgAlt={'HTML & CSS'}
                title={'2. HTML & CSS'}
                subtitle={'120+ Minutes'}
                />
                <CourseCard
                imgSrc={LectureImg3}
                imgAlt={'Version Control System'}
                title={'3. Version Control System'}
                subtitle={'120+ Minutes'}
                />
                <CourseCard
                imgSrc={LectureImg4}
                imgAlt={'Advanced CSS'}
                title={'4. Advanced CSS'}
                subtitle={'120+ Minutes'}
                />
            </Grid>

            </Section>
            <Section modifiers={["Testimonials"]} isHeadingVisible={false}>
            <Testimonial/>
            </Section>
        </Main>
    )
}

export default Home;