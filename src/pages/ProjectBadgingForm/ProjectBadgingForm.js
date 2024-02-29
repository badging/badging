import React from 'react'
import "./ProjectBadgingForm.scss";
import { Footer, Header } from '../../components';
import { FormLabel } from '@mui/material';
import Button from '../../components/Button/Button';
import TextField from '../../components/Forms/TextField';
import { Field, Form, Formik } from 'formik';
import * as yup from 'yup';
// eslint-disable-next-line import/namespace

const ProjectBadgingForm = () => {

  const initialValues = {
    projectName: "",
    yourName: "",
    yourEmail: "",
    projectOwner: "",
    projectDeiUrl: ""
  }

  const validationSchema = yup.object().shape({
    projectName: yup.string().required('Project name is required'),
    yourName: yup.string().required('Name is required'),
    yourEmail: yup.string().email('Invalid email address').required('Email is required'),
    projectOwner: yup.string().required('Project owner is required'),  
    projectDeiUrl: yup.string().required('Project DEI URL is required'),  
  });

  const onContactFormSubmission = (values) => {
    console.log(values);
  }

  return (
    <main>
      <div className="overlay">
        <div className="bgRight"></div>
        <div className="bgCenter"></div>
        <div className="bgLeft"></div>
      </div>
      <Header />
      <div className="container jumbotron__container">
        <h1>Apply for Project Badging</h1>
      </div>

      <div className='project-badging container'>
        <div className='project-badging-form'>
          <h4 style={{ color: "#000000" }}>Self-Hosted Projects</h4>
          <p style={{ marginTop: "1rem" }}>
            Please only use this form if you are applying for a
            CHAOSS DEI Project Badge when using self-hosted software
            development and version control solutions. If you are
            using web-hosted solutions (by GitLab or GitHub), please
            apply for the CHAOSS DEI Project Badge <a href="#" style={{ color: "#D61B5E" }}> here. </a>
          </p>

          <Formik
            initialValues={initialValues}            
            validationSchema={validationSchema}
            onSubmit={(values) => {
              onContactFormSubmission(values);
            }}
          >
            {
              (
                { values, errors, touched, handleChange, }
              ) => (
                <>
                  <Form className='form-container'>
                    <div className='physical-input'>
                      <TextField onChange={handleChange} name="projectName" placeholder="Enter project name " label="Project name: " message={"Please enter a value"} value={values.projectName} />
                      <p style={{ color: "red", fontSize: "14px" }}>
                        {errors.projectName && touched.projectName && errors.projectName}
                      </p>
                    </div>

                    <div className='physical-input'>
                      <TextField value={values.yourName} onChange={handleChange} name="yourName" placeholder="Enter your name " label="Your name: " message={"Please enter a value"} />
                      <p style={{ color: "red", fontSize: "14px" }}>
                        {errors.yourName && touched.yourName && errors.yourName}
                      </p>
                    </div>

                    <div className='physical-input'>
                      <TextField value={values.yourEmail} onChange={handleChange} name="yourEmail" placeholder="Enter your email address" label="Your email (where we will send a successful badge): " message={"Please enter a value"} />
                      <p style={{ color: "red", fontSize: "14px" }}>
                        {errors.yourEmail && touched.yourEmail && errors.yourEmail}
                      </p>
                    </div>

                    <div className='physical-input'>
                      <span style={{ color: "#000", fontSize: "16px" }}>
                        Like publicly hosted projects, we only accept applications
                        from project owners. Are you a project owner? <a href="#" style={{ color: "#D61B5E" }}> * </a>
                      </span>

                      <div style={{ marginTop: "6px" }}>
                        <div role="group" aria-labelledby="my-radio-group">
                          <label style={{ color: "#030303", marginRight: "1.2rem" }}>
                            <Field type="radio" name="projectOwner" value="Yes" onChange={handleChange} style={{ color: "#030303" }} />
                            <span style={{ marginLeft: "4px", color: "#030303" }}>Yes</span>
                          </label>
                          <label style={{ color: "#030303" }}>
                            <Field type="radio" name="projectOwner" value="No" onChange={handleChange} style={{ color: "#030303" }} />
                            <span style={{ marginLeft: "4px", color: "#030303" }}>No</span>
                          </label>
                        </div>
                        <p style={{ color: "red", fontSize: "14px" }}>
                          {errors.projectOwner && touched.projectOwner && errors.projectOwner}
                        </p>
                      </div>
                    </div>

                    <div className='physical-input'>
                      <TextField onChange={handleChange} value={values.projectDeiUrl} name="projectDeiUrl" placeholder="Enter URL to DEI.md file" label="URL to your project's DEI.md file: " message={"Please enter a value"} />
                      <p style={{ color: "red", fontSize: "14px" }}>
                        {errors.projectDeiUrl && touched.projectDeiUrl && errors.projectDeiUrl}
                      </p>
                      <span style={{ fontSize: "14px", display: "block", color: "#030303" }}>
                        For example, this could be in your project repository
                        or on your project website. If you have further questions
                        about the DEI.md file please see our <a href="#" style={{ color: "#D61B5E" }}> DEI.md Guide. </a>
                      </span>
                    </div>

                    <Button type="submit" className="form-submit btn-primary btn-next" disabled={!values.projectName || !values.yourName || !values.yourEmail || !values.projectOwner || !values.projectDeiUrl}>
                      Submit
                    </Button>
                  </Form>
                </>
              )
            }
          </Formik>
        </div>
      </div>

      <Footer />
    </main>
  )
}

export default ProjectBadgingForm