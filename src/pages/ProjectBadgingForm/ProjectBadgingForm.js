import React from 'react';
import './ProjectBadgingForm.scss';
import { Footer, Header } from '../../components';
import { FormLabel } from '@mui/material';
import Button from '../../components/Button/Button';
import TextField from '../../components/Forms/TextField';
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
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
          <div style={{ marginBottom: '3.375rem' }}>
            <h4 style={{ color: '#000000' }}>Self-Hosted Projects</h4>
            <p style={{ marginTop: '1rem' }}>
              Please only use this form if you are applying for a CHAOSS DEI
              Project Badge when using self-hosted software development and
              version control solutions. If you are using web-hosted solutions
              (by GitLab or GitHub), please apply for the CHAOSS DEI Project
              Badge{' '}
              <a href="#" style={{ color: '#D61B5E' }}>
                {' '}
                here.{' '}
              </a>
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
                      <p style={{ color: 'red', fontSize: '14px' }}>
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
                      <p style={{ color: 'red', fontSize: '14px' }}>
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div className="physical-input">
                    <TextField
                      value={values.email}
                      onChange={handleChange}
                      name="yourEmail"
                      placeholder="Enter your email address"
                      label="Your email (where we will send a successful badge): "
                      message={'Please enter a value'}
                    />
                    {errors.email && touched.email && (
                      <p style={{ color: 'red', fontSize: '14px' }}>
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div className="physical-input">
                    <span style={{ color: '#000', fontSize: '16px' }}>
                      Like publicly hosted projects, we only accept applications
                      from project owners. Are you a project owner?{' '}
                      <Link href="#" style={{ color: '#D61B5E' }}>
                        {' '}
                        *{' '}
                      </Link>
                    </span>

                    <div style={{ marginTop: '6px' }}>
                      <div role="group" aria-labelledby="my-radio-group">
                        <label
                          style={{ color: '#030303', marginRight: '1.2rem' }}
                          htmlFor="projectOwner"
                        >
                          <Field
                            type="radio"
                            name="projectOwner"
                            value="Yes"
                            onChange={handleChange}
                            style={{ color: '#030303' }}
                          />
                          <span style={{ marginLeft: '4px', color: '#030303' }}>
                            Yes
                          </span>
                        </label>
                        <label
                          style={{ color: '#030303' }}
                          htmlFor="projectOwner"
                        >
                          <Field
                            type="radio"
                            name="projectOwner"
                            value="No"
                            onChange={handleChange}
                            style={{ color: '#030303' }}
                          />
                          <span style={{ marginLeft: '4px', color: '#030303' }}>
                            No
                          </span>
                        </label>
                      </div>
                      {errors.projectOwner && touched.projectOwner && (
                        <p style={{ color: 'red', fontSize: '14px' }}>
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
                      <p style={{ color: 'red', fontSize: '14px' }}>
                        {errors.projectDeiUrl}
                      </p>
                    )}
                    <span
                      style={{
                        fontSize: '14px',
                        display: 'block',
                        color: '#030303',
                        lineHeight: '1.5',
                      }}
                    >
                      For example, this could be in your project repository or
                      on your project website. If you have further questions
                      about the DEI.md file please see our{' '}
                      <Link href="#" style={{ color: '#D61B5E' }}>
                        DEI.md Guide.{' '}
                      </Link>
                    </span>
                  </div>

                  <Button
                    type="submit"
                    className="form-submit-btn btn-primary btn-next"
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

export default ProjectBadgingForm;
