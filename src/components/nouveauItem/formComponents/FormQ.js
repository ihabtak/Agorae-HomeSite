import { connect } from "formik";
import React from "react";
import { Form } from "react-bootstrap";

const FormQ = connect((props) => {
  const { label, slabel, required, name, type, legend, rows } = props;
  const { errors, touched, handleChange, handleBlur, values } = props.formik;
  return (
    <Form.Group controlId={name + "Control"}>
      {legend && <legend>{legend}</legend>}
      {label && <Form.Label>{label}</Form.Label>}
      {required && label ? <span>*</span> : null}
      {slabel && <Form.Text className="text-muted">{slabel}</Form.Text>}
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
        rows && <Form.Control
          name={name}
          as={type}
          rows={rows}
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
