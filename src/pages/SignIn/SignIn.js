import React from 'react'
import Main from '../../components/Main/Main'
import Header from '../../components/Header/Header'
import Section from '../../components/Section/Section'
import { Button } from '../../components/Button/ButtonStyle'

import{ Form, Field, FormRow, ErrorMessage} from "../../lib/style/generalStyles"
import {Formik /*, yupToFormErrors*/} from "formik";
import * as Yup from "yup";


const Register = () => {
  return (
    <Main>
        <Header isSecondary={true}/>
        <Section title={"Register"} isMainSection isCentered>
          <Formik initialValues={{
            email: '',
            password: '',
            isAdmin: false
          }} validationSchema={
            Yup.object({
              email: Yup.string().email("Invalid email adress").required("Email is required"),
              password: Yup.string().min(8, "Password must be at least 8 characters long").required("Password is required"),
            })
          } onSubmit={(values, actions) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              actions.setSubmitting(false);
              actions.resetForm({
                email: '',
                password: '',
                isAdmin: false
              })
            }, 1000)
          }}>

            {formik => (
              <Form isCentered>
                <FormRow>
                  <Field type="email" name="email" placeholder="email ..." disabled={formik.isSubmitting}/>
                  <ErrorMessage component={"div"} name="email"/>
                </FormRow>
                <FormRow>
                  <Field type="password" name="password" placeholder="Password ..." disabled={formik.isSubmitting}/>
                  <ErrorMessage component={"div"} name="password"/>
                </FormRow>
                <FormRow>
                  <Button isOutlined issForm disabled={formik.isSubmitting}>
                    {formik.isSubmitting ? "Processing..." : "Log in" }
                  </Button>
                </FormRow>
              </Form>

            )}

          </Formik>

        </Section>
    </Main>
  )
}

export default Register;
