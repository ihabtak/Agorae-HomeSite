import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { Field } from "formik";
import { RadioButton } from "../formComponents/RadioButton";
import { RadioButtonGroup } from "../formComponents/RadioButtonGroup";

export const FormSeventhStep = (formikProps) => {
  const [ct_autre, setCt_autre] = useState("Autre");
  const {
    item,
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
  } = formikProps;
  return (
    <div>
      <Form.Group>
        <legend>Description de l’initiative</legend>
        <Form.Label>
          Ces renseignements, après vérification éventuelle, seront publics
          figureront dans la base Agorae Map21
        </Form.Label>
      </Form.Group>
      <Form.Group controlId="projet_rechercheControl">
        <span>*</span>
        <RadioButtonGroup
          id="projet_recherche"
          label="S’agit il d’un projet de recherche ?"
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
        <Form.Group controlId="equipe_rechercheControl">
          <legend>Mentionner la ou les équipe(s) de recherche:</legend>
          <Form.Control
            as="textarea"
            rows="3"
            name="equipe_recherche"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.equipe_recherche}
            className={
              touched.equipe_recherche && errors.equipe_recherche
                ? "error"
                : null
            }
          />
          {touched.equipe_recherche && errors.equipe_recherche ? (
            <div className="error-message">{errors.equipe_recherche}</div>
          ) : null}
        </Form.Group>
      ) : (
        <div></div>
      )}
      <Form.Group controlId="projet_ctControl">
        <RadioButtonGroup
          id="projet_ct"
          label="S’agit il d’un projet à caractère territorial ? "
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
        <div>
          <Form.Group controlId="echelle_territoireControl">
            <span>*</span>
            <RadioButtonGroup
              id="echelle_territoire"
              label="Échelle du territoire: "
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
            <div>
              <Form.Group controlId="code_departControl">
                <legend>Code département concerné:</legend>
                <Form.Control
                  type="text"
                  name="code_depart"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.code_depart}
                  className={
                    touched.code_depart && errors.code_depart ? "error" : null
                  }
                />
                {touched.code_depart && errors.code_depart ? (
                  <div className="error-message">{errors.code_depart}</div>
                ) : null}
              </Form.Group>
              <Form.Group controlId="villeControl">
                <legend>Ville:</legend>
                <Form.Control
                  type="text"
                  name="ville"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.ville}
                  className={touched.ville && errors.ville ? "error" : null}
                />
                {touched.ville && errors.ville ? (
                  <div className="error-message">{errors.ville}</div>
                ) : null}
              </Form.Group>
            </div>
          ) : (
            <div></div>
          )}
          <Form.Group controlId="partenaire_territorialControl">
            <legend>Mentionner la ou les équipe(s) de recherche:</legend>
            <Form.Control
              as="textarea"
              rows="3"
              name="partenaire_territorial"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.partenaire_territorial}
              className={
                touched.partenaire_territorial && errors.partenaire_territorial
                  ? "error"
                  : null
              }
            />
            {touched.partenaire_territorial && errors.partenaire_territorial ? (
              <div className="error-message">
                {errors.partenaire_territorial}
              </div>
            ) : null}
          </Form.Group>
        </div>
      ) : (
        <div></div>
      )}
      <Form.Group controlId="partenaire_assoControl">
        <legend>Partenaire(s) associatif(s):</legend>
        <Form.Control
          as="textarea"
          rows="3"
          name="partenaire_asso"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.partenaire_asso}
          className={
            touched.partenaire_asso && errors.partenaire_asso ? "error" : null
          }
        />
        {touched.partenaire_asso && errors.partenaire_asso ? (
          <div className="error-message">{errors.partenaire_asso}</div>
        ) : null}
      </Form.Group>
    </div>
  );
};
