import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { Field } from "formik";
import { RadioButton } from "../formComponents/RadioButton";
import { RadioButtonGroup } from "../formComponents/RadioButtonGroup";

export const FormFirstStep = (formikProps) => {
  const [autre, setautre] = useState("Autre");
  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
  } = formikProps;
  return (
    <div>
      <Form.Group controlId="cc_itemControl">
        <span>*</span>
        <RadioButtonGroup
          id="cc_item"
          label="Collectif concerné par l’item "
          value={values.cc_item}
          error={errors.cc_item}
          touched={touched.cc_item}
          key="cc_itemRadio"
          className="mb-3"
        >
          <Form.Label>
            (Si votre organisation est liée à un un key-player soutenant Map21
            cela permettra l’apposition à votre item du tag correspondant)
          </Form.Label>
          <Field component={RadioButton} name="cc_item" id="UTT" label="UTT" />
          <Field component={RadioButton} name="cc_item" id={autre} />
          <Form.Control
            type="text"
            name="cc_item2t"
            placeholder="Autre"
            onChange={(e) => setautre(e.target.value)}
          />
        </RadioButtonGroup>
      </Form.Group>
      <Form.Group controlId="pdc_organisationControl">
        <span>*</span>
        <RadioButtonGroup
          id="pdc_organisation"
          label="Faites vous partie de cette organisation ?"
          value={values.pdc_organisation}
          error={errors.pdc_organisation}
          touched={touched.pdc_organisation}
          key="pdc_organisationRadio"
          className="mb-3"
        >
          <Field
            component={RadioButton}
            name="pdc_organisation"
            id="OUI"
            label="Oui"
          />
          <Field
            component={RadioButton}
            name="pdc_organisation"
            id="NON"
            label="Non"
          />
        </RadioButtonGroup>
      </Form.Group>
      <Form.Group controlId="nomControl">
        <legend>Renseignements et engagement contributeur :</legend>
        <Form.Label>Nom</Form.Label>
        <Form.Control
          type="text"
          name="nom"
          placeholder="Joan"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.nom}
          className={touched.nom && errors.nom ? "error" : null}
        />
        {touched.nom && errors.nom ? (
          <div className="error-message">{errors.nom}</div>
        ) : null}
      </Form.Group>
      <Form.Group controlId="prenomControl">
        <Form.Label>Prénom</Form.Label>
        <Form.Control
          type="text"
          name="prenom"
          placeholder="Dupont"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.prenom}
          className={touched.prenom && errors.prenom ? "error" : null}
        />
        {touched.prenom && errors.prenom ? (
          <div className="error-message">{errors.prenom}</div>
        ) : null}
      </Form.Group>
    </div>
  );
};
