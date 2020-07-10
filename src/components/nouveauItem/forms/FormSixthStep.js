import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { Field } from "formik";
import { RadioButton } from "../formComponents/RadioButton";
import { RadioButtonGroup } from "../formComponents/RadioButtonGroup";

export const FormSixthStep = (formikProps) => {
  const [s_autre, setS_autre] = useState("Autre");
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
      <Form.Group controlId="status_iControl">
        <span>*</span>
        <RadioButtonGroup
          id="status_i"
          label="Statut de l'initiative"
          value={values.status_i}
          error={errors.status_i}
          touched={touched.status_i}
          key="status_iRadio"
          className="mb-3"
        >
          <Form.Label>
            (choisir dans la lite ci-dessous , si « autre », merci de préciser)
          </Form.Label>
          <Field
            component={RadioButton}
            name="status_i"
            id="En cours"
            label="En cours"
          />
          <Field
            component={RadioButton}
            name="status_i"
            id="En préparation"
            label="En préparation"
          />
          <Field
            component={RadioButton}
            name="status_i"
            id="Idée de projet"
            label="Idée de projet"
          />
          <Field
            component={RadioButton}
            name="status_i"
            id="Pleinement opérationnel"
            label="Pleinement opérationnel"
          />
          <Field
            component={RadioButton}
            name="status_i"
            id="Terminée"
            label="Terminée"
          />
          <Field component={RadioButton} name="type_i" id={s_autre} />
          <Form.Control
            type="text"
            name="status_i2t"
            placeholder="Autre"
            onChange={(e) => setS_autre(e.target.value)}
          />
        </RadioButtonGroup>
      </Form.Group>
      {values.status_i.includes("En cours") ? (
        <Form.Group controlId="avancee_iControl">
          <RadioButtonGroup
            id="avancee_i"
            label="Avancée de l'initiative"
            value={values.avancee_i}
            error={errors.avancee_i}
            touched={touched.avancee_i}
            key="avancee_iRadio"
            className="mb-3"
          >
            <Form.Label>
              (indiquez un chiffre suivant l’échelle de 1 à 10 suivante)
            </Form.Label>
            <Field
              component={RadioButton}
              name="avancee_i"
              id="1"
              label="1 (préparation, travail initial sur le concept)"
            />
            <Field
              component={RadioButton}
              name="avancee_i"
              id="2"
              label="2 (en phase de lancement)"
            />
            <Field
              component={RadioButton}
              name="avancee_i"
              id="3"
              label="3 (stand-by : initiative en cours, mais temporairement mise en attente) "
            />
            <Field
              component={RadioButton}
              name="avancee_i"
              id="4"
              label="4 (en cours - accompli environ 15%) "
            />
            <Field
              component={RadioButton}
              name="avancee_i"
              id="5"
              label="5 (en cours – accompli 30%)"
            />
            <Field
              component={RadioButton}
              name="avancee_i"
              id="6"
              label="6 (en cours - accompli 50%)"
            />
            <Field
              component={RadioButton}
              name="avancee_i"
              id="7"
              label="7 (en cours- accompli 70%)"
            />
            <Field
              component={RadioButton}
              name="avancee_i"
              id="8"
              label="8 (en cours- accompli 90%)"
            />
            <Field
              component={RadioButton}
              name="avancee_i"
              id="9"
              label="9 (initiative terminée ou phase de déploiement)"
            />
            <Field
              component={RadioButton}
              name="avancee_i"
              id="10"
              label="10 (l’initiative est achevée au niveau développement mais contribue à un service qui est toujours opérationnel)"
            />
          </RadioButtonGroup>
        </Form.Group>
      ) : (
        <div></div>
      )}
      <Form.Group controlId="date_d_iControl">
        <span>*</span>
        <legend>Date de début</legend>
        <Form.Label>mois (facultatif)/ année (requis)</Form.Label>
        <Form.Control
          type="text"
          name="date_d_i"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.date_d_i}
          className={touched.date_d_i && errors.date_d_i ? "error" : null}
        />
        {touched.date_d_i && errors.date_d_i ? (
          <div className="error-message">{errors.date_d_i}</div>
        ) : null}
      </Form.Group>
      <Form.Group controlId="date_f_iControl">
        <legend>Date de fin</legend>
        <Form.Label>mois/année (facultatif)</Form.Label>
        <Form.Control
          type="text"
          name="date_f_i"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.date_f_i}
          className={touched.date_f_i && errors.date_f_i ? "error" : null}
        />
        {touched.date_f_i && errors.date_f_i ? (
          <div className="error-message">{errors.date_f_i}</div>
        ) : null}
      </Form.Group>
      <Form.Group controlId="projet_industrielControl">
        <span>*</span>
        <RadioButtonGroup
          id="projet_industriel"
          label="S’agit il d’un projet industriel ?"
          value={values.projet_industriel}
          error={errors.projet_industriel}
          touched={touched.projet_industriel}
          key="projet_industrielRadio"
          className="mb-3"
        >
          <Field
            component={RadioButton}
            name="projet_industriel"
            id="OUI"
            label="Oui"
          />
          <Field
            component={RadioButton}
            name="projet_industriel"
            id="NON"
            label="Non"
          />
        </RadioButtonGroup>
      </Form.Group>
      {values.projet_industriel.includes("OUI") ? (
        <Form.Group controlId="partenaire_industrielControl">
          <span>*</span>
          <legend>Mentionner la ou les partenaire(s) industriel(s)</legend>
          <Form.Control
            as="textarea"
            rows="3"
            name="partenaire_industriel"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.partenaire_industriel}
            className={
              touched.partenaire_industriel && errors.partenaire_industriel
                ? "error"
                : null
            }
          />
          {touched.partenaire_industriel && errors.partenaire_industriel ? (
            <div className="error-message">{errors.partenaire_industriel}</div>
          ) : null}
        </Form.Group>
      ) : (
        <div></div>
      )}
    </div>
  );
};
