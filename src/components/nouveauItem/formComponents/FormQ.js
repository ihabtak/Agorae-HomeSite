import { connect } from "formik";
import React from "react";
import { Form } from "react-bootstrap";

const FormQ = connect((props) => {
  const { label, required, name, type, ...inputProps } = props;
  const { errors, touched, handleChange, handleBlur, values } = props.formik;
  return (
    <Form.Group controlId={name+"Control"}>
      {label && <Form.Label>{label}</Form.Label>}
      {required ? <span>*</span> : null}
      {type.includes("email") ? (
        <Form.Control
          name={name}
          type={type}
          onChange={handleChange}
          placeholder="name@example.com"
          onBlur={handleBlur}
          value={values[name]}
          className={touched[name] && errors[name] ? "error" : null}
        />
      ) : type.includes("textarea") ? (
        <Form.Control
          name={name}
          as={type}
          rows="6"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values[name]}
          className={touched[name] && errors[name] ? "error" : null}
        />
      ) : (
        <Form.Control
          name={name}
          type={type}
          onChange={handleChange}
          onBlur={handleBlur}
          value={values[name]}
          className={touched[name] && errors[name] ? "error" : null}
        />
      )}
      {errors[name] && touched[name] && (
        <Form.Text className="text-muted">{errors[name]}</Form.Text>
      )}
    </Form.Group>
  );
});

export default FormQ;
