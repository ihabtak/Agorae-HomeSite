import React, { useState } from "react";
import "./Contact.css";
import styled from "styled-components";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Formik } from "formik";
import * as Yup from "yup";
// eslint-disable-next-line
import emailjs from "emailjs-com";
import { translate } from "react-i18next";

const CONTAINER = styled.div`
  background: #f7f9fa;
  height: auto;
  width: 90%;
  margin: 3em auto;
  color: red;
  -webkit-box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.4);
  -moz-box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.4);
  box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.4);

  @media (min-width: 786px) {
    width: 70%;
  }
  span {
    color: red;
  }

  label {
    color: #144f5d;
    font-size: 1.2em;
    font-weight: 400;
  }

  h1 {
    color: #144f5d;
    padding-top: 0.5em;
  }

  .form-group {
    margin-bottom: 2.5em;
  }
`;

const MYFORM = styled(Form)`
  width: 90%;
  text-align: left;
  padding-top: 2em;
  padding-bottom: 2em;

  @media (min-width: 786px) {
    width: 70%;
  }
`;

const BUTTON = styled(Button)`
  background: #1863ab;
  border: none;
  font-size: 1.2em;
  font-weight: 400;

  &:hover {
    background: #1d3461;
  }
`;
const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "*Names must have at least 2 characters")
    .max(100, "*Names can't be longer than 100 characters"),
  email: Yup.string()
    .email("*Must be a valid email address")
    .max(100, "*Email must be less than 100 characters")
    .required("*Email is required"),
  message: Yup.string().required("*Message is required"),
});

const Contact = ({ t }) => {
  const [formSubmitted, setFormSub] = useState(false);

  function sendEmail(values) {
    var template_id = "template_ZWvpcjq4";

    var user_id = process.env.REACT_APP_EMAILJS_USERID;
    setFormSub(true);
    emailjs.send("default_service", template_id, values, user_id).then(
      (result) => {},
      (error) => {
        console.log(error.text);
      }
    );
  }
  if (!formSubmitted) {
    return (
      <div className="contactdiv">
        <h1>{t("contact.title")}</h1>
        <CONTAINER>
          <Formik
            initialValues={{ name: "", email: "", message: "" }}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              setSubmitting(true);
              setTimeout(() => {
                sendEmail(values);
                resetForm();
                setSubmitting(false);
              }, 200);
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
            }) => (
              <MYFORM onSubmit={handleSubmit} className="mx-auto">
                <Form.Group controlId="nameControl">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    placeholder="Name/Pseudo"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                    className={touched.name && errors.name ? "error" : null}
                  />
                  {touched.name && errors.name ? (
                    <div className="error-message">{errors.name}</div>
                  ) : null}
                </Form.Group>
                <Form.Group controlId="emailControl">
                  <Form.Label>
                    Email address <span>*</span>
                  </Form.Label>
                  <Form.Control
                    name="email"
                    type="email"
                    placeholder="name@example.com"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    className={touched.email && errors.email ? "error" : null}
                  />
                  {touched.email && errors.email ? (
                    <div className="error-message">{errors.email}</div>
                  ) : null}
                </Form.Group>
                <Form.Group controlId="messageControl">
                  <Form.Label>
                    Message <span>*</span>
                  </Form.Label>
                  <Form.Control
                    name="message"
                    as="textarea"
                    rows="3"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.message}
                    className={
                      touched.message && errors.message ? "error" : null
                    }
                  />
                  {touched.message && errors.message ? (
                    <div className="error-message">{errors.message}</div>
                  ) : null}
                </Form.Group>
                <BUTTON variant="primary" type="submit" disabled={isSubmitting}>
                  Submit
                </BUTTON>
              </MYFORM>
            )}
          </Formik>
        </CONTAINER>
      </div>
    );
  } else {
    return (
      <div className="contactdiv">
        <h1>{t("contact.title")} </h1>
        <p>
          {t("contact.msg")} <br />
          {t("contact.sub_msg")}
        </p>
      </div>
    );
  }
};

export default translate("common")(Contact);
