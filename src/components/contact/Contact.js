import React, { useState } from "react";
import "./Contact.css";
import { CONTAINER, MYFORM, BUTTON } from "./styling/styles";
import FormQ from "../nouveauItem/formComponents/FormQ";
import { Formik } from "formik";
import * as Yup from "yup";
import emailjs from "emailjs-com";
import { translate } from "react-i18next";

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
  function Contactform(props) {
    return (
      <MYFORM onSubmit={props.handleSubmit} className="mx-auto">
        <FormQ label="Name" name="name" type="text" />
        <FormQ
          label="Email address"
          required
          name="email"
          type="email"
        />
        <FormQ label="Message" required rows="6" name="message" type="textarea" />
        <BUTTON variant="primary" type="submit" disabled={props.isSubmitting}>
          Submit
        </BUTTON>
      </MYFORM>
    );
  }
  function sendEmail(values) {
    var template_id = "template_ZWvpcjq4";

    var user_id = process.env.REACT_APP_EMAILJS_USERID;
    setFormSub(true);
    emailjs.send("default_service", template_id, values, user_id).then(
      (result) => {},
      (error) => {}
    );
  }
  if (!formSubmitted) {
    return (
      <div className="contactdiv">
        <h1>{t("contact.title")}</h1>
        <CONTAINER>
          <Formik
            component={Contactform}
            initialValues={{ name: "", email: "", message: "" }}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              setSubmitting(true);
              setFormSub(true);
              setTimeout(() => {
                sendEmail(values);
                resetForm();
                setSubmitting(false);
              }, 200);
            }}
          />
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
