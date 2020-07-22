import React, { useState, Fragment } from "react";
import Form from "react-bootstrap/Form";
import { Field } from "formik";
import { RadioButton } from "../formComponents/RadioButton";
import { RadioButtonGroup } from "../formComponents/RadioButtonGroup";
import FormQ from "../formComponents/FormQ";

export const FormSeventhStep = (formikProps) => {
  const [ct_autre, setCt_autre] = useState("Autre");
  const { values, errors, touched} = formikProps;
  return (
    <div>
      <Form.Group>
        <legend>Description de l’initiative</legend>
        <Form.Text className="text-muted">
          Ces renseignements, après vérification éventuelle, seront publics
          figureront dans la base Agorae Map21
        </Form.Text>
      </Form.Group>
      <Form.Group controlId="projet_rechercheControl">
        <span>*</span>
        <Form.Label>S’agit il d’un projet de recherche ?</Form.Label>
        <RadioButtonGroup
          id="projet_recherche"
          value={values.projet_recherche}
          error={errors.projet_recherche}
          touched={touched.projet_recherche}
          key="projet_rechercheRadio"
          className="mb-3"
        >
          <Field
            component={RadioButton}
            name="projet_recherche"
            id="OUI"
            label="Oui"
          />
          <Field
            component={RadioButton}
            name="projet_recherche"
            id="NON"
            label="Non"
          />
        </RadioButtonGroup>
      </Form.Group>
      {values.projet_recherche.includes("OUI") ? (
        <FormQ
          label="Mentionner la ou les équipe(s) de recherche:"
          rows="3"
          name="equipe_recherche"
          type="textarea"
        />
      ) : (
        <div></div>
      )}
      <Form.Group controlId="projet_ctControl">
      <Form.Label>S’agit il d’un projet à caractère territorial ?</Form.Label>
        <RadioButtonGroup
          id="projet_ct"
          value={values.projet_ct}
          error={errors.projet_ct}
          touched={touched.projet_ct}
          key="projet_ctRadio"
          className="mb-3"
        >
          <Field
            component={RadioButton}
            name="projet_ct"
            id="OUI"
            label="Oui"
          />
          <Field
            component={RadioButton}
            name="projet_ct"
            id="NON"
            label="Non"
          />
        </RadioButtonGroup>
      </Form.Group>
      {values.projet_ct.includes("OUI") ? (
        <Fragment>
          <Form.Group controlId="echelle_territoireControl">
            <Form.Label>Échelle du territoire </Form.Label>
            <span>*</span>
            <RadioButtonGroup
              id="echelle_territoire"
              value={values.echelle_territoire}
              error={errors.echelle_territoire}
              touched={touched.echelle_territoire}
              key="echelle_territoireRadio"
              className="mb-3"
            >
              <Field
                component={RadioButton}
                name="echelle_territoire"
                id="National"
                label="National"
              />
              <Field
                component={RadioButton}
                name="echelle_territoire"
                id="Régional"
                label="Régional"
              />
              <Field
                component={RadioButton}
                name="echelle_territoire"
                id="Local"
                label="Local"
              />
              <Field
                component={RadioButton}
                name="echelle_territoire"
                id={ct_autre}
              />
              <Form.Control
                type="text"
                name="echelle_territoire2t"
                placeholder="Autre"
                onChange={(e) => setCt_autre(e.target.value)}
              />
            </RadioButtonGroup>
          </Form.Group>
          {values.echelle_territoire.includes("Local") ? (
            <Fragment>
              <FormQ
                label="Code département concerné"
                name="code_depart"
                type="text"
              />
              <FormQ label="Ville" name="ville" type="text" />
            </Fragment>
          ) : null}
          <FormQ
            label="Mentionner la ou les équipe(s) de recherche"
            rows="3"
            name="partenaire_territorial"
            type="textarea"
          />
        </Fragment>
      ) : null}
      <FormQ
        label="Partenaire(s) associatif(s)"
        rows="3"
        name="partenaire_asso"
        type="textarea"
      />
    </div>
  );
};
