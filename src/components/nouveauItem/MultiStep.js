import React, { useState } from "react";
import { Formik } from "formik";
import { FormFirstStep } from "./forms/FormFirstStep";
import { FormSecondStep } from "./forms/FormSecondStep";
import { FormThirdStep } from "./forms/FormThirdStep";
import { FormFourthStep } from "./forms/FormFourthStep";
import { FormFifthStep } from "./forms/FormFifthStep";
import { FormSixthStep } from "./forms/FormSixthStep";
import { FormSeventhStep } from "./forms/FormSeventhStep";
import { FormEighthStep } from "./forms/FormEighthStep";
import { FormNinthStep } from "./forms/FormNinthStep";
import { FormTenthStep } from "./forms/FormTenthStep";
import { FormSuccess } from "./forms/FormSuccess";
import { StepButton } from "./StepButton";
import styled from "styled-components";
import Form from "react-bootstrap/Form";
import emailjs from "emailjs-com";
import * as Yup from "yup";

const CONTAINER = styled.div`
  background: #f7f9fa;
  height: auto;
  width: 90%;
  margin: 3em auto;
  -webkit-box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.4);
  -moz-box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.4);
  box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.4);

  @media (min-width: 786px) {
    width: 90%;
  }
  span {
    color: red;
    position: absolute;
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
  legend {
    margin-left: 1%;
  }
  label.form-label {
    margin-left: 1%;
  }
`;

const renderStep = (
  step,
  item,
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
  handleSubmit,
  setFieldValue,
  setFieldTouched,
  isSubmitting
) => {
  switch (step) {
    case 1:
      return (
        <FormFirstStep
          item={item}
          values={values}
          errors={errors}
          touched={touched}
          handleChange={handleChange}
          handleBlur={handleBlur}
        />
      );
    case 2:
      return (
        <FormSecondStep
          item={item}
          values={values}
          errors={errors}
          touched={touched}
          handleChange={handleChange}
          handleBlur={handleBlur}
        />
      );
    case 3:
      return (
        <FormThirdStep
          item={item}
          values={values}
          errors={errors}
          touched={touched}
          handleChange={handleChange}
          handleBlur={handleBlur}
        />
      );
    case 4:
      return (
        <FormFourthStep
          item={item}
          values={values}
          errors={errors}
          touched={touched}
          handleChange={handleChange}
          handleBlur={handleBlur}
        />
      );
    case 5:
      return (
        <FormFifthStep
          item={item}
          values={values}
          errors={errors}
          touched={touched}
          handleChange={handleChange}
          handleBlur={handleBlur}
        />
      );
    case 6:
      return (
        <FormSixthStep
          item={item}
          values={values}
          errors={errors}
          touched={touched}
          handleChange={handleChange}
          handleBlur={handleBlur}
        />
      );
    case 7:
      return (
        <FormSeventhStep
          item={item}
          values={values}
          errors={errors}
          touched={touched}
          handleChange={handleChange}
          handleBlur={handleBlur}
        />
      );
    case 8:
      return (
        <FormEighthStep
          item={item}
          values={values}
          errors={errors}
          touched={touched}
          handleChange={handleChange}
          handleBlur={handleBlur}
        />
      );
    case 9:
      return (
        <FormNinthStep
          item={item}
          values={values}
          errors={errors}
          touched={touched}
          handleChange={handleChange}
          handleBlur={handleBlur}
        />
      );
    case 10:
      return (
        <FormTenthStep
          item={item}
          values={values}
          errors={errors}
          touched={touched}
          handleChange={handleChange}
          handleBlur={handleBlur}
        />
      );
    default:
      return (
        <FormFirstStep
          item={item}
          values={values}
          errors={errors}
          touched={touched}
          handleChange={handleChange}
          handleBlur={handleBlur}
        />
      );
  }
};

export const MultiStep = (props) => {
  const [step, setStep] = useState(1);
  const [multiFormSubmitted, setMultiFormSubmitted] = useState(false);
  const { item } = props;

  function sendEmail(values) {
    var template_id = "template_ZWvpcjq4_clone";

    var user_id = process.env.REACT_APP_EMAILJS_USERID;
    emailjs.send("default_service", template_id, values, user_id).then(
      (result) => {},
      (error) => {
        console.log(error.text);
      }
    );
  }

  const formData = {
    cc_item: "",
    pdc_organisation: "",
    nom: "",
    prenom: "",
    pseudo: "",
    email: "",
    r_item: "",
    charte: false,
    ci_nom: "",
    ci_email: "",
    nom_i: "",
    type_i: "",
    resume_i: "",
    suite_resume: "",
    summary_i: "",
    conti_summary: "",
    status_i: "",
    avancee_i: "",
    date_d_i: "",
    date_f_i: "",
    projet_industriel: "",
    partenaire_industriel: "",
    projet_recherche: "",
    equipe_recherche: "",
    projet_ct: "",
    echelle_territoire: "",
    code_depart: "",
    ville: "",
    partenaire_territorial: "",
    partenaire_asso: "",
    type_livrable: "",
    liv1_intitule: "",
    liv1_adresse: "",
    liv2_intitule: "",
    liv2_adresse: "",
    liv3_intitule: "",
    liv3_adresse: "",
    liv4_intitule: "",
    liv4_adresse: "",
    themeMap21: "",
    new_topics: "",
    topic1: "",
    cta_topic1: "",
    topic2: "",
    cta_topic2: "",
    topic3: "",
    cta_topic3: "",
    topic4: "",
    cta_topic4: "",
    message: "",
  };

  const btnStep = (nb) => setStep((step) => step + nb);

  const validationSchema = Yup.object().shape({
    cc_item: Yup.string().required("*requis"),
    pdc_organisation: Yup.string().required("*requis"),
    nom: Yup.string(),
    prenom: Yup.string(),
    pseudo: Yup.string().required("*requis"),
    email: Yup.string()
      .email("*Doit être une adresse e-mail valide")
      .required("*requis"),
    r_item: Yup.string().required("*requis"),
    charte: Yup.bool().oneOf([true], "Vous devez accepter la charte"),
    ci_nom: Yup.string(),
    ci_email: Yup.string()
      .email("*Doit être une adresse e-mail valide"),
    nom_i: Yup.string().required("*requis"),
    type_i: Yup.string().required("*requis"),
    resume_i: Yup.string(),
    suite_resume: Yup.string(),
    summary_i: Yup.string(),
    conti_summary: Yup.string(),
    status_i: Yup.string().required("*requis"),
    avancee_i: Yup.string(),
    date_d_i: Yup.string(),
    date_f_i: Yup.string(),
    projet_industriel: Yup.string().required("*requis"),
    partenaire_industriel: Yup.string(),
    projet_recherche: Yup.string(),
    equipe_recherche: Yup.string(),
    projet_ct: Yup.string(),
    echelle_territoire: Yup.string(),
    code_depart: Yup.string(),
    ville: Yup.string(),
    partenaire_territorial: Yup.string(),
    partenaire_asso: Yup.string(),
    type_livrable: Yup.string(),
    liv1_intitule: Yup.string(),
    liv1_adresse: Yup.string(),
    liv2_intitule: Yup.string(),
    liv2_adresse: Yup.string(),
    liv3_intitule: Yup.string(),
    liv3_adresse: Yup.string(),
    liv4_intitule: Yup.string(),
    liv4_adresse: Yup.string(),
    themeMap21: Yup.string(),
    new_topics: Yup.string(),
    topic1: Yup.string(),
    cta_topic1: Yup.string(),
    topic2: Yup.string(),
    cta_topic2: Yup.string(),
    topic3: Yup.string(),
    cta_topic3: Yup.string(),
    topic4: Yup.string(),
    cta_topic4: Yup.string(),
    message: Yup.string().required("*requis"),
  });

  if (!multiFormSubmitted) {
    return (
      <div>
        <CONTAINER>
          <Formik
            enableReinitialize
            initialValues={{ ...formData }}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              setMultiFormSubmitted(true);
              setTimeout(() => {
                sendEmail(values);
                resetForm();
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
                {renderStep(
                  step,
                  item,
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur
                )}
                <StepButton
                  btnStep={btnStep}
                  Rstep={step}
                  isSubmitting={isSubmitting}
                />
              </MYFORM>
            )}
          </Formik>
        </CONTAINER>
      </div>
    );
  } else {
    return (
      <CONTAINER>
        <FormSuccess />
      </CONTAINER>
    );
  }
};
