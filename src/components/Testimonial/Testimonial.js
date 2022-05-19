import React from 'react';
import {
    Testimonial as TestimonialContainer,
    TestimonialFigure,
    TestimonialImage,
    TestimonialContent,
    TestimonialText,
    TestimonialQuotation
  } from './TestimonialStyle';

import TestimonialImg from '../../assets/images/testimonial.jpg';

const Testimonial = () => {
    return (
        <TestimonialContainer>
            <TestimonialFigure>
                <TestimonialImage src={TestimonialImg} alt="Testimonialka" className="Testimonial-Img" />
            </TestimonialFigure>
            <TestimonialContent>
                <TestimonialText>
                    <TestimonialQuotation>"</TestimonialQuotation>
                    At the academy, I learned how to apply technology in practice.
                    Frontend education was demanding, it required a lot of time.
                    Upon completion, I got my first job as a developer.
                    <TestimonialQuotation>"</TestimonialQuotation>
                </TestimonialText>
            </TestimonialContent>
        </TestimonialContainer>
    );
}

export default Testimonial;
