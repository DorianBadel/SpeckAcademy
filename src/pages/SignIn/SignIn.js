import React from 'react'
import{ Form, Field, FormRow, Select, Option, ErrorMessage} from "../../lib/style/generalStyles";
import {Formik, yupToFormErrors} from "formik";
import * as Yup from "yup";

import Main from '../../components/Main/Main'
import Header from '../../components/Header/Header'
import Section from '../../components/Section/Section';
import Button from '../../components/Button/Button';






const SignIn = () => {
  return (
    <Main>
        <Header isSecondary={true}/>
        <Section title={"Log in"} isMainSection isCentered>
          <Formik initialValues={{
            
          }}>

          </Formik>

        </Section>
            

    </Main>
  )
}

export default SignIn