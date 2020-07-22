import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { Field } from "formik";
import { RadioButton } from "../formComponents/RadioButton";
import { RadioButtonGroup } from "../formComponents/RadioButtonGroup";
import FormQ from "../formComponents/FormQ";

export const FormFirstStep = (formikProps) => {
  const [autre, setautre] = useState("Autre");
  const { values, errors, touched } = formikProps;
  return (
    <div>
      <Form.Group controlId="cc_itemControl">
        
        <Form.Label>Collectif concerné par l’item</Form.Label>
        <span>*</span>
        <RadioButtonGroup
          id="cc_item"
          value={values.cc_item}
          error={errors.cc_item}
          touched={touched.cc_item}
          key="cc_itemRadio"
          className="mb-3"
        >
        <Form.Text className="text-muted">
            (Si votre organisation est liée à un un key-player soutenant Map21
            cela permettra l’apposition à votre item du tag correspondant)
          </Form.Text>
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
        <Form.Label>Faites vous partie de cette organisation ?</Form.Label>
        <span>*</span>
        <RadioButtonGroup
          id="pdc_organisation"
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
      <FormQ
        label="Nom"
        legend="Renseignements et engagement contributeur :"
        name="nom"
        type="text"
      />
      <FormQ label="Prénom" name="prenom" type="text" />
    </div>
  );
};
