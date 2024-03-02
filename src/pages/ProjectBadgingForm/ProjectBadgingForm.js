import React from 'react';
import './ProjectBadgingForm.scss';
import { Footer, Header } from '../../components';
import { FormLabel } from '@mui/material';
import Button from '../../components/Button/Button';
import TextField from '../../components/Forms/TextField';
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import RadioInput from '../../components/Forms/RadioInput';
// eslint-disable-next-line import/namespace

const ProjectBadgingForm = () => {
  const initialValues = {
    projectName: '',
    name: '',
    email: '',
    projectOwner: '',
    projectDeiUrl: '',
  };

  /**
  TODOS:
 
  - sticking to scss intead in inline styling
  - encapsulating the textfield components, each having their own labels
  - use React Link tags instead of anchor tags
  - improve on the pixel perfect design based of what we have on figma
  
  **/

  const validationSchema = Yup.object({
    projectName: Yup.string()
      .required('Project name is required')
      .min(3, 'Must be 3 characters or more'),
    name: Yup.string()
      .required('Your name is required')
      .min(3, 'Must be 3 characters or more'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    projectDeiUrl: Yup.string().required('Project DEI Url is required'),
    projectOwner: Yup.string().required('ProjectOwner is required'),
  });

  const onContactFormSubmission = values => {
    console.log(values);
  };

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

      <div className="project-badging container">
        <div className="project-badging-form">
          <div className='projects-header'>
            <h4>Self-Hosted Projects</h4>
            <p>
              Please only use this form if you are applying for a CHAOSS DEI
              Project Badge when using self-hosted software development and
              version control solutions. If you are using web-hosted solutions
              (by GitLab or GitHub), please apply for the CHAOSS DEI Project
              Badge{' '}
              <Link to="#">
                {' '}
                here.{' '}
              </Link>
            </p>
          </div>

          <Formik
            initialValues={initialValues}
            // validate={validateForm}
            validationSchema={validationSchema}
            onSubmit={values => {
              onContactFormSubmission(values);
            }}
          >
            {({ values, errors, touched, handleChange }) => (
              <>
                <Form className="form-container">
                  <div className="physical-input">
                    <TextField
                      onChange={handleChange}
                      name="projectName"
                      placeholder="Enter project name "
                      label="Project name: "
                      message={'Please enter a value'}
                      value={values.projectName}
                    />
                    {errors.projectName && touched.projectName && (
                      <p>
                        {errors.projectName}
                      </p>
                    )}
                  </div>

                  <div className="physical-input">
                    <TextField
                      value={values.name}
                      onChange={handleChange}
                      name="name"
                      placeholder="Enter your name "
                      label="Your name: "
                      message={'Please enter a value'}
                    />

                    {errors.name && touched.name && (
                      <p>
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div className="physical-input">
                    <TextField
                      value={values.email}
                      onChange={handleChange}
                      name="email"
                      placeholder="Enter your email address"
                      label="Your email (where we will send a successful badge): "
                      message={'Please enter a value'}
                    />
                    {errors.email && touched.email && (
                      <p>
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div className="physical-input">
                    <span>
                      Like publicly hosted projects, we only accept applications
                      from project owners. Are you a project owner?{' '}
                      <Link href="#">
                        {' '}
                        *{' '}
                      </Link>
                    </span>

                    <div className='radio-field'>
                      <div role="group" aria-labelledby="my-radio-group">
                        <RadioInput
                          name="projectOwner"
                          value="Yes"
                          onChange={handleChange}
                          label="Yes"
                          htmlFor="projectOwner"
                        />

                        <RadioInput
                          name="projectOwner"
                          value="No"
                          onChange={handleChange}
                          label="No"
                          htmlFor="projectOwner"
                          className="radio-btn"
                        />
                      </div>
                      {errors.projectOwner && touched.projectOwner && (
                        <p>
                          {errors.projectOwner}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="physical-input">
                    <TextField
                      onChange={handleChange}
                      value={values.projectDeiUrl}
                      name="projectDeiUrl"
                      placeholder="Enter URL to DEI.md file"
                      label="URL to your project's DEI.md file: "
                      message={'Please enter a value'}
                    />
                    {errors.projectDeiUrl && touched.projectDeiUrl && (
                      <p>
                        {errors.projectDeiUrl}
                      </p>
                    )}
                    <span
                      className='info'                     
                    >
                      For example, this could be in your project repository or
                      on your project website. If you have further questions
                      about the DEI.md file please see our{' '}
                      <Link href="#" className='info-link'>
                        DEI.md Guide.{' '}
                      </Link>
                    </span>
                  </div>

                  <Button
                    type="submit"
                    className="form-submit-btn btn-primary btn-next"
                    disabled={!values.email}
                  >
                    Submit
                  </Button>
                </Form>
              </>
            )}
          </Formik>
        </div>
      </div>

      <Footer />
    </main>
  );
};

export default ProjectBadgingForm
