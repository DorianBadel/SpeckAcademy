import React, {useState} from 'react'
import Main from '../../components/Main/Main'
import Header from '../../components/Header/Header'
import Section from '../../components/Section/Section'
import {FormContainer, Strong, PasswordReset} from './ProfileStyle.js';
import { Button } from '../../components/Button/ButtonStyle'

import{ Form, Field, FormRow, InputLabel, Select, Option, ErrorMessage} from "../../lib/style/generalStyles"
import {Formik /*, yupToFormErrors*/} from "formik";
import * as Yup from "yup";


const Profile = () => {
    const [editing, setEditing] = useState(false);
    const [formValues, setFormValues] = useState(null);
  return (
    <Main>
        <Header isSecondary={true}/>
        <Section title={"My profile"} isMainSection isCentered={false}
            buttonText={!editing ? "Edit" : "Cancel"}
            linkTo ={"#"}
            callback={() => setEditing(!editing)}
        >
        <FormContainer>
          <Formik
          enableReinitialize
          initialValues={ formValues || {
            firstName: 'Dorian',
            lastName: 'Badel',
            email: 'dbadel@foi.hr',
            githubUsername:'DorianBadel',
            zepplinUsername:'DorianBadel',
            activeFacultyYear:'3',
            isAdmin: false
          }} validationSchema={
            Yup.object({
              firstName: Yup.string()
                .required("First name is required"),
              lastName: Yup.string()
              .required("Last name is required"),
              email:
                Yup.string().email("Invalid email adress").required("Email is required"),
              githubUsername:
                Yup.string().required("GitHub username is required"),
              zepplinUsername:
                Yup.string().required("Zepplin username is required"),
              activeFacultyYear:
                Yup.string().required("Active faculty year is required"),
            })
          } onSubmit={(values, actions) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              actions.setSubmitting(false);
              actions.resetForm({
                firstName: '',
                lastName: '',
                email: '',
                githubUsername:'',
                zepplinUsername:'',
                activeFacultyYear:'',
                isAdmin: false
              })
            }, 1000)
          }}

          savedValues={{
            firstName: 'Dorian', //nekako ne priznaje "newValues" kao globalnu varijablu
            lastName: 'Badel',
            email: 'dbadel@foi.hr',
            githubUsername:'DorianBadel',
            zepplinUsername:'DorianBadel',
            activeFacultyYear:'3',
            isAdmin: false
          }}>

            {formik => (

                    <Form isCentered={false}>
                        <FormRow>
                          <InputLabel htmlFor="firstName">First name: </InputLabel>
                          <Field type="text" name="firstName" placeholder="First name ..." disabled={!editing || formik.isSubmitting}/>
                          <ErrorMessage component={"div"} name="firstName"/>
                        </FormRow>
                        <FormRow>
                            <InputLabel htmlFor="lastName"> Last name: </InputLabel>
                        <Field type="text" name="lastName" placeholder="Last name ..." disabled={!editing ||formik.isSubmitting}/>
                        <ErrorMessage component={"div"} name="lastName"/>
                        </FormRow>
                        <FormRow>
                            <InputLabel htmlFor="email"> Email: </InputLabel>
                        <Field type="email" name="email" placeholder="email ..." disabled={!editing ||formik.isSubmitting}/>
                        <ErrorMessage component={"div"} name="email"/>
                        </FormRow>
                        <FormRow>
                            <InputLabel htmlFor="githubUsername"> GitHub username: </InputLabel>
                        <Field type="text" name="githubUsername" placeholder="Github username ..." disabled={!editing ||formik.isSubmitting}/>
                        <ErrorMessage component={"div"} name="githubUsername"/>
                        </FormRow>
                        <FormRow>
                            <InputLabel htmlFor="zepplinUsername">Zeplin username: </InputLabel>
                        <Field type="text" name="zepplinUsername" placeholder="Zepplin ..." disabled={!editing ||formik.isSubmitting}/>
                        <ErrorMessage component={"div"} name="zepplinUsername"/>
                        </FormRow>
                        <FormRow>
                            <InputLabel htmlFor="activeFacultyYear"> Active faculty year: </InputLabel>
                        <Select id="activeFacultyYear" {...formik.getFieldProps("activeFacultyYear")} disabled={!editing || formik.isSubmitting}>
                            <Option value="" disabled hidden>Choose an Active faculty year</Option>
                            <Option value='0'>Not a student</Option>
                            <Option value='1'>1st faculty year</Option>
                            <Option value='2'>2nd faculty year</Option>
                            <Option value='3'>3rd faculty year</Option>
                            <Option value='4'>4th faculty year</Option>
                            <Option value='5'>5th faculty year</Option>
                        </Select>
                        <ErrorMessage component={"div"} name="activeFacultyYear"/>
                        </FormRow>
                        {editing &&
                          <FormRow>
                            <Button isOutlined issForm disabled={formik.isSubmitting} onClick={() => setFormValues(formik.values) } type="submit">
                              {formik.isSubmitting ? "Processing..." : "Save changes" }
                            </Button>
                          </FormRow>
                        }

                    </Form>
                  )}
                </Formik>
                <Formik initialValues={{
                  passwordOld: '',
                  passwordNew: '',
                  passwordConfirmed: '',
                }} validationSchema={
                  Yup.object({
                    passwordOld:
                      Yup.string().min(8, "Password must be at least 8 characters long").required("Password is required"),
                    passwordNew:
                      Yup.string().min(8, "Password must be at least 8 characters long").required("Password is required"),
                    passwordConfirmed:
                      Yup.string().test("passwords-match", "Passwords must match", function(value){return this.parent.passwordNew === value}).required("Confirmation password is required"),
                  })
                } onSubmit={(values, actions) => {
                  setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    actions.setSubmitting(false);
                    actions.resetForm({
                      passwordOld: '',
                      passwordNew: '',
                      passwordConfirmed: '',
                    })
                  }, 1000)
                }}>

                    {formik => (
                      <PasswordReset isOpened={editing}>
                        <Strong>Password reset</Strong>
                        {editing ?
                        <Form isCentered={false} isHideable>
                          <FormRow>
                              <Field type="password" name="passwordOld" placeholder="Old password ..." disabled={formik.isSubmitting}/>
                              <ErrorMessage component={"div"} name="passwordOld"/>
                          </FormRow>
                          <FormRow>
                              <Field type="password" name="passwordNew" placeholder="New password ..." disabled={formik.isSubmitting}/>
                              <ErrorMessage component={"div"} name="passwordNew"/>
                          </FormRow>
                          <FormRow>
                              <Field type="password" name="passwordConfirmed" placeholder="Confirmed password ..." disabled={formik.isSubmitting}/>
                              <ErrorMessage component={"div"} name="passwordConfirmed"/>
                          </FormRow>
                            <FormRow>
                              <Button isOutlined issForm disabled={formik.isSubmitting}>
                                {formik.isSubmitting ? "Processing..." : "Change Password" }
                              </Button>
                            </FormRow>
                        </Form>
                         : <p>In order to reset password click on Edit button</p>
                         }
                    </PasswordReset>
                    )}
                  </Formik>


              </FormContainer>

        </Section>
    </Main>
  )
}

export default Profile
