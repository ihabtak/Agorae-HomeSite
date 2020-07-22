import React, { useState, Fragment } from "react";
import Form from "react-bootstrap/Form";
import { Field } from "formik";
import { RadioButton } from "../formComponents/RadioButton";
import { RadioButtonGroup } from "../formComponents/RadioButtonGroup";
import FormQ from "../formComponents/FormQ";

export const FormSecondStep = (formikProps) => {
  const [canal, setCanal] = useState("");
  const { values, errors, touched } = formikProps;
  return (
    <Fragment>
      <FormQ
        label="Surnom ou pseudo"
        required
        legend="Renseignements et engagement contributeur :"
        name="pseudo"
        type="text"
      />
      <FormQ label="Adresse e-mail" required name="email" type="email" />
      <Form.Group controlId="r_itemControl">
      <Form.Label>Par rapport à l’initiative que vous décrivez ci-dessous</Form.Label>
      <span>*</span>
        <RadioButtonGroup
          id="r_item"
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
    </Fragment>
  );
};
