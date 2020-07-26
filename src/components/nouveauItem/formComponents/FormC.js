import { connect } from "formik";
import React, { useState, Fragment } from "react";
import { Form } from "react-bootstrap";
import { Field } from "formik";
import { RadioButton } from "../formComponents/RadioButton";
import { RadioButtonGroup } from "../formComponents/RadioButtonGroup";

const FormC = connect((props) => {
  const [t_autre, setT_autre] = useState("Autre");
  const {
    label,
    slabel,
    required,
    name,
    other,
    v_other,
    label_other,
    place_h,
    options,
  } = props;
  const { errors, touched, values } = props.formik;
  return (
    <Form.Group controlId={name + "Control"}>
      <Form.Label>{label}</Form.Label>
      {required && label ? <span>*</span> : null}
      {slabel && slabel ? (
        <Form.Text className="text-muted">{slabel}</Form.Text>
      ) : null}
      <RadioButtonGroup
        id={name}
        value={values[name]}
        error={errors[name]}
        touched={touched[name]}
        key={name + "Radio"}
        className="mb-3"
      >
        {options.map((option) => (
          <Field
            key={option.id + "" + name}
            component={RadioButton}
            name={name}
            id={option.id}
            label={option.value}
          />
        ))}
        {other && other ? (
          <Fragment>
            <Field
              component={RadioButton}
              key={t_autre + "" + name}
              name={name}
              id={t_autre}
              label={label_other}
            />
            <Form.Control
              type="text"
              name={name + "2t"}
              placeholder={place_h}
              onChange={(e) => setT_autre(v_other + e.target.value)}
            />
          </Fragment>
        ) : null}
      </RadioButtonGroup>
    </Form.Group>
  );
});

export default FormC;
