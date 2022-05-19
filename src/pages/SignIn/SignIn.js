import React, {useState} from 'react'

//Components
import Main from '../../components/Main/Main'
import Header from '../../components/Header/Header'
import Section from '../../components/Section/Section'
import { Button } from '../../components/Button/ButtonStyle'

//Lib
import{ Form, Field, FormRow, ErrorMessage, FormSucessMessage} from "../../lib/style/generalStyles"

//Formik
import {Formik /*, yupToFormErrors*/} from "formik";
import * as Yup from "yup";
import { getAllUsers, loginUser } from '../../api/users'


const Register = () => {
  const [successMessage, setSuccessMessage] = useState(null);
  return (
    <Main>
        <Header isSecondary={true}/>
        <Section title={"Sign In"} isMainSection isCentered>
          <Formik initialValues={{
            email: '',
            password: ''
          }} validationSchema={
            Yup.object({
              email: Yup.string().email("Invalid email adress").required("Email is required"),
              password: Yup.string().min(8, "Password must be at least 8 characters long").required("Password is required"),
            })
          } onSubmit={async (values, actions) => {
            try{
              const res = await loginUser(values);
              const users = await getAllUsers(res.access_token);
              const user = users.find(user => user.email === values.email);
              
              localStorage.setItem("accessToken", res.access_token);

              actions.setSubmitting(false);
              actions.resetForm({
                email: '',
                password: ''
              })

              setSuccessMessage({
                error: false,
                message: `Hi ${
                  user.first_name + ' ' + user.last_name},
                  login was successfull.`
              });

              setTimeout(() => {
                setSuccessMessage(null);
              },3000)
            } catch(err) {
              setSuccessMessage({
                  error: true,
                  message: "Error occured, try again or contact us"
                });
                
              actions.setSubmitting(false);

              setTimeout(() => {setSuccessMessage(null)}, 3000);
            }


          }}>

            {formik => (
              <Form isCentered>
                { successMessage &&
                  <FormRow>
                    <FormSucessMessage isError={successMessage.error}>{successMessage.message}</FormSucessMessage>
                  </FormRow>
                }
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
