import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { Field } from "formik";
import { RadioButton } from "../formComponents/RadioButton";
import { RadioButtonGroup } from "../formComponents/RadioButtonGroup";

export const FormFourthStep = (formikProps) => {
  const [t_autre, setT_autre] = useState("Autre");
  const {
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
      <Form.Group controlId="nom_iControl">
        <span>*</span>
        <legend>Nom de l'initiative</legend>
        <Form.Label>
          (max. 30 caractères, mais un code court d’une dizaine de caractères
          est conseillé)
        </Form.Label>
        <Form.Control
          type="text"
          name="nom_i"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.nom_i}
          className={touched.nom_i && errors.nom_i ? "error" : null}
        />
        {touched.nom_i && errors.nom_i ? (
          <div className="error-message">{errors.nom_i}</div>
        ) : null}
      </Form.Group>
      <Form.Group controlId="type_iControl">
        <span>*</span>
        <RadioButtonGroup
          id="type_i"
          label="Type d'initiative"
          value={values.type_i}
          error={errors.type_i}
          touched={touched.type_i}
          key="type_iRadio"
          className="mb-3"
        >
          <Form.Label>
            (choisir dans la liste ci-dessous , si « autre », merci de préciser)
          </Form.Label>
          <Field
            component={RadioButton}
            name="type_i"
            id="Dissémination"
            label="Dissémination"
          />
          <Field
            component={RadioButton}
            name="type_i"
            id="Module de formation"
            label="Module de formation"
          />
          <Field
            component={RadioButton}
            name="type_i"
            id="Plateforme de mise en relation territoriale"
            label="Plateforme de mise en relation territoriale"
          />
          <Field
            component={RadioButton}
            name="type_i"
            id="Projet de recherche"
            label="Projet de recherche"
          />
          <Field
            component={RadioButton}
            name="type_i"
            id="Projet de recherche-action"
            label="Projet de recherche-action"
          />
          <Field
            component={RadioButton}
            name="type_i"
            id="Projet du plan de transition d'une organisation"
            label="Projet du plan de transition d'une organisation"
          />
          <Field
            component={RadioButton}
            name="type_i"
            id="Projet étudiant"
            label="Projet étudiant"
          />
          <Field
            component={RadioButton}
            name="type_i"
            id="Projet étudiant dans le cadre d’une UE"
            label="Projet étudiant dans le cadre d’une UE"
          />
          <Field
            component={RadioButton}
            name="type_i"
            id="Projet industriel"
            label="Projet industriel"
          />
          <Field
            component={RadioButton}
            name="type_i"
            id="Projet MIND"
            label="Projet MIND"
          />
          <Field
            component={RadioButton}
            name="type_i"
            id="Synergie industrielle"
            label="Synergie industrielle"
          />
          <Field component={RadioButton} name="type_i" id={t_autre} />
          <Form.Control
            type="text"
            name="type_i2t"
            placeholder="Autre"
            onChange={(e) => setT_autre(e.target.value)}
          />
        </RadioButtonGroup>
      </Form.Group>
    </div>
  );
};
