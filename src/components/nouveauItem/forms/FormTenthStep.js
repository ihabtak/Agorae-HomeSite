import React from "react";
import Form from "react-bootstrap/Form";

export const FormTenthStep = (formikProps) => {
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
        <legend>Renseignement complémentaires </legend>
        <Form.Label>
          Ces éléments et commentaires sont destinés à interagir avec le
          staff-Map21, et ne figureront pas la base
        </Form.Label>
      </Form.Group>
      <Form.Group controlId="messageControl">
        <span>*</span>
        <legend>Votre message :</legend>
        <Form.Control
          as="textarea"
          rows="6"
          name="message"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.message}
          className={touched.message && errors.message ? "error" : null}
        />
        {touched.message && errors.message ? (
          <div className="error-message">{errors.message}</div>
        ) : null}
      </Form.Group>
    </div>
  );
};
