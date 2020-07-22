import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { Field } from "formik";
import { RadioButton } from "../formComponents/RadioButton";
import { RadioButtonGroup } from "../formComponents/RadioButtonGroup";
import FormQ from "../formComponents/FormQ";

export const FormSixthStep = (formikProps) => {
  const [s_autre, setS_autre] = useState("Autre");
  const { values, errors, touched } = formikProps;
  return (
    <div>
      <Form.Group>
        <legend>Description de l’initiative</legend>
        <Form.Text className="text-muted">
          Ces renseignements, après vérification éventuelle, seront publics
          figureront dans la base Agorae Map21
        </Form.Text>
      </Form.Group>
      <Form.Group controlId="status_iControl">
        <Form.Label>Statut de l'initiative</Form.Label>
        <Form.Text className="text-muted">
          (choisir dans la lite ci-dessous , si « autre », merci de préciser)
        </Form.Text>
        <span>*</span>
        <RadioButtonGroup
          id="status_i"
          value={values.status_i}
          error={errors.status_i}
          touched={touched.status_i}
          key="status_iRadio"
          className="mb-3"
        >
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
          <Form.Label>Avancée de l'initiative</Form.Label>
          <Form.Text className="text-muted">
            (indiquez un chiffre suivant l’échelle de 1 à 10 suivante)
          </Form.Text>
          <RadioButtonGroup
            id="avancee_i"
            value={values.avancee_i}
            error={errors.avancee_i}
            touched={touched.avancee_i}
            key="avancee_iRadio"
            className="mb-3"
          >
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
      <FormQ
        label="Date de début"
        required
        slabel="mois (facultatif)/ année (requis)"
        name="date_d_i"
        type="text"
      />
      <FormQ
        label="Date de fin"
        slabel="mois/année (facultatif)"
        name="date_f_i"
        type="text"
      />

      <Form.Group controlId="projet_industrielControl">
        <Form.Label>S’agit il d’un projet industriel ?</Form.Label>
        <span>*</span>
        <RadioButtonGroup
          id="projet_industriel"
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
        <FormQ
          label="Mentionner la ou les partenaire(s) industriel(s)"
          required
          rows="3"
          name="partenaire_industriel"
          type="textarea"
        />
      ) : (
        <div></div>
      )}
    </div>
  );
};
