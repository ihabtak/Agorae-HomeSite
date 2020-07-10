import React from "react";
import Form from "react-bootstrap/Form";

export const FormFifthStep = (formikProps) => {
  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
  } = formikProps;
  return (
    <div>
      <Form.Group>
        <legend>Description de l’initiative</legend>
        <Form.Label>
          Ces renseignements, après vérification éventuelle, seront publics
          figureront dans la base Agorae Map21
        </Form.Label>
      </Form.Group>
      <Form.Group controlId="resume_iControl">
        <span>*</span>
        <legend>Résumé:</legend>
        <Form.Label>(max. 250 car.)</Form.Label>
        <Form.Control
          as="textarea"
          rows="3"
          name="resume_i"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.resume_i}
          className={touched.resume_i && errors.resume_i ? "error" : null}
        />
        {touched.resume_i && errors.resume_i ? (
          <div className="error-message">{errors.resume_i}</div>
        ) : null}
      </Form.Group>
      <Form.Group controlId="suite_resumeControl">
        <legend>Suite du résumé:</legend>
        <Form.Control
          as="textarea"
          rows="3"
          name="suite_resume"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.suite_resume}
          className={
            touched.suite_resume && errors.suite_resume ? "error" : null
          }
        />
        {touched.suite_resume && errors.suite_resume ? (
          <div className="error-message">{errors.suite_resume}</div>
        ) : null}
      </Form.Group>
      <Form.Group controlId="summary_iontrol">
        <legend>Summary:</legend>
        <Form.Label>(recommandé, max. 250 car.)</Form.Label>
        <Form.Control
          as="textarea"
          rows="3"
          name="summary_i"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.summary_i}
          className={touched.summary_i && errors.summary_i ? "error" : null}
        />
        {touched.summary_i && errors.summary_i ? (
          <div className="error-message">{errors.summary_i}</div>
        ) : null}
      </Form.Group>
      <Form.Group controlId="conti_summaryControl">
        <legend>Continuation of the summary:</legend>
        <Form.Label>(facultatif )</Form.Label>
        <Form.Control
          as="textarea"
          rows="3"
          name="conti_summary"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.conti_summary}
          className={
            touched.conti_summary && errors.conti_summary ? "error" : null
          }
        />
        {touched.conti_summary && errors.conti_summary ? (
          <div className="error-message">{errors.conti_summary}</div>
        ) : null}
      </Form.Group>
    </div>
  );
};
