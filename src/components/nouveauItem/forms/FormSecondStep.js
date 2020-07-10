import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { Field } from "formik";
import { RadioButton } from "../formComponents/RadioButton";
import { RadioButtonGroup } from "../formComponents/RadioButtonGroup";

export const FormSecondStep = (formikProps) => {
  const [canal, setCanal] = useState("");
  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
  } = formikProps;
  return (
    <div>
      <Form.Group controlId="pseudoControl">
        <legend>Renseignements et engagement contributeur :</legend>
        <span>*</span>
        <Form.Label>Surnom ou pseudo</Form.Label>
        <Form.Control
          type="text"
          name="pseudo"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.pseudo}
          className={touched.pseudo && errors.pseudo ? "error" : null}
        />
        {touched.pseudo && errors.pseudo ? (
          <div className="error-message">{errors.pseudo}</div>
        ) : null}
      </Form.Group>
      <Form.Group controlId="emailControl">
        <span>*</span>
        <Form.Label>Adresse e-mail</Form.Label>
        <Form.Control
          type="email"
          name="email"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.email}
          className={touched.email && errors.email ? "error" : null}
        />
        {touched.email && errors.email ? (
          <div className="error-message">{errors.email}</div>
        ) : null}
      </Form.Group>
      <Form.Group controlId="r_itemControl">
        <RadioButtonGroup
          id="r_item"
          label="Faites vous partie de cette organisation ?"
          value={values.r_item}
          error={errors.r_item}
          touched={touched.r_item}
          key="r_itemRadio"
          className="mb-3"
        >
          <Field
            component={RadioButton}
            name="r_item"
            id="Responsable ou personnellement impliqué dans cette initiative"
            label="Êtes-vous responsable ou personnellement impliqué dans cette initiative ?"
          />
          <Field
            component={RadioButton}
            name="r_item"
            id="En rapport avec les porteurs de cette initiative"
            label="sinon, êtes vous en rapport avec les porteurs de cette initiative ?"
          />
          <Field
            component={RadioButton}
            name="r_item"
            id={canal}
            label="ou sinon, vous en avez entendu parler ? Par quel canal ?"
          />
          <Form.Control
            type="text"
            name="r_item3r"
            onChange={(e) =>
              setCanal("Entendu parler, par le canal : " + e.target.value)
            }
          />
        </RadioButtonGroup>
      </Form.Group>
    </div>
  );
};
