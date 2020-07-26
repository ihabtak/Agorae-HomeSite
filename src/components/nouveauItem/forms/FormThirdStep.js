import React from "react";
import Form from "react-bootstrap/Form";
import { Field } from "formik";
import { Checkbox } from "../formComponents/Checkbox";
import FormQ from "../formComponents/FormQ";

export const FormThirdStep = (formikProps) => {
  const { values, item } = formikProps;
  let lbl = "",
    leg = "";
  if (item === "1") {
    lbl =
      "Merci de nous communiquer le contact d’une personne responsable ou personnellement impliqué dans cette initiative";
    leg = "Contact initiative";
  } else {
    lbl =
      "Merci de nous communiquer le contact d’une personne responsable ou personnellement impliqué dans cette élément";
    leg = "Contact élément";
  }
  if (values.r_item.includes("Responsable")) {
    return (
      <div>
        <Form.Group controlId="charteControl">
          <legend>Renseignements et engagement contributeur :</legend>
          <span>*</span>
          <Form.Text className="text-muted">
            Merci de vérifier les informations
          </Form.Text>
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
        <Form.Group>
          <legend>Renseignements et engagement contributeur :</legend>
          <Form.Text className="text-muted">{lbl}</Form.Text>
        </Form.Group>
        <FormQ label="Nom" legend={leg} required name="ci_nom" type="text" />
        <FormQ label="Adresse e-mail" required name="ci_email" type="email" />
        <Form.Group controlId="charteControl">
          <Form.Label>Merci de vérifier les informations</Form.Label>
          <span>*</span>

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
