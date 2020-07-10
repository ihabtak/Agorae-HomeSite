import React from "react";
import Form from "react-bootstrap/Form";
import { Field } from "formik";
import { Checkbox } from "../formComponents/Checkbox";

export const FormThirdStep = (formikProps) => {
  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
  } = formikProps;
  if (values.r_item.includes("Responsable")) {
    return (
      <div>
        <Form.Group controlId="charteControl">
          <legend>Renseignements et engagement contributeur :</legend>
          <span>*</span>
          <Form.Label>Merci de vérifier les informations</Form.Label>
          <Field
            component={Checkbox}
            name="charte"
            id="charteCB"
            label="j’ai lu la charte du contributeur, j’ai pris connaissance des règles et je certifie l’exactitude des information transmises"
          />
        </Form.Group>
      </div>
    );
  }
  if (values.r_item.includes("Entendu") || values.r_item.includes("rapport")) {
    return (
      <div>
        <Form.Group controlId="ci_nomControl">
          <legend>Renseignements et engagement contributeur :</legend>
          <Form.Label>
            Merci de nous communiquer le contact d’une personne responsable ou
            personnellement impliqué dans cette initiative
          </Form.Label>
          <Form.Label>Contact initiative </Form.Label>
          <br />
          <span>*</span>
          <Form.Label>Nom</Form.Label>
          <Form.Control
            type="text"
            name="ci_nom"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.ci_nom}
            className={touched.ci_nom && errors.ci_nom ? "error" : null}
          />
          {touched.ci_nom && errors.ci_nom ? (
            <div className="error-message">{errors.ci_nom}</div>
          ) : null}
        </Form.Group>
        <Form.Group controlId="ci_emailControl">
          <span>*</span>
          <Form.Label>Adresse e-mail</Form.Label>
          <Form.Control
            type="email"
            name="ci_email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.ci_email}
            className={touched.ci_email && errors.ci_email ? "error" : null}
          />
          {touched.ci_email && errors.ci_email ? (
            <div className="error-message">{errors.email}</div>
          ) : null}
        </Form.Group>
        <Form.Group controlId="charteControl">
          <legend>Renseignements et engagement contributeur :</legend>
          <span>*</span>
          <Form.Label>Merci de vérifier les informations</Form.Label>
          <Field
            component={Checkbox}
            name="charte"
            id="charteCB"
            label="j’ai lu la charte du contributeur, j’ai pris connaissance des règles et je certifie l’exactitude des information transmises"
          />
        </Form.Group>
      </div>
    );
  }

  return (
    <div className="formsteptwo-notFull">
      Vous devez remplir correctement le formulaire avant de continuer.
    </div>
  );
};
