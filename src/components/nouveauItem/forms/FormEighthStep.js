import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { Field } from "formik";
import { RadioButton } from "../formComponents/RadioButton";
import { RadioButtonGroup } from "../formComponents/RadioButtonGroup";
import FormQ from "../formComponents/FormQ";

export const FormEighthStep = (formikProps) => {
  const [tl_autre, setTl_autre] = useState("Autre");
  const { values, errors, touched} = formikProps;
  return (
    <div>
      <Form.Group>
        <legend>Livrables intéressants à partager </legend>
      </Form.Group>
      <Form.Group controlId="type_livrableControl">
        <Form.Label>Type de livrable:</Form.Label>
        <RadioButtonGroup
          id="type_livrable"
          value={values.type_livrable}
          error={errors.type_livrable}
          touched={touched.type_livrable}
          key="type_livrableRadio"
          className="mb-3"
        >
          <Field
            component={RadioButton}
            name="type_livrable"
            id="Algorithme"
            label="Algorithme"
          />
          <Field
            component={RadioButton}
            name="type_livrable"
            id="Ateliers participatifs"
            label="Ateliers participatifs"
          />
          <Field
            component={RadioButton}
            name="type_livrable"
            id="Démo en ligne"
            label="Démo en ligne"
          />
          <Field
            component={RadioButton}
            name="type_livrable"
            id="Élément d’infrastructure"
            label="Élément d’infrastructure"
          />
          <Field
            component={RadioButton}
            name="type_livrable"
            id="Formations"
            label="Formations"
          />
          <Field
            component={RadioButton}
            name="type_livrable"
            id="Logiciel"
            label="Logiciel"
          />
          <Field
            component={RadioButton}
            name="type_livrable"
            id="Maquette"
            label="Maquette"
          />
          <Field
            component={RadioButton}
            name="type_livrable"
            id="Outil de fabrication"
            label="Outil de fabrication"
          />
          <Field
            component={RadioButton}
            name="type_livrable"
            id="Plateforme Web"
            label="Plateforme Web"
          />
          <Field
            component={RadioButton}
            name="type_livrable"
            id="Présentation"
            label="Présentation"
          />
          <Field
            component={RadioButton}
            name="type_livrable"
            id="Rapport"
            label="Rapport"
          />
          <Field
            component={RadioButton}
            name="type_livrable"
            id="Rapport, vidéo"
            label="Rapport, vidéo"
          />
          <Field
            component={RadioButton}
            name="type_livrable"
            id="Services"
            label="Services"
          />
          <Field
            component={RadioButton}
            name="type_livrable"
            id="Slides de présentation"
            label="Slides de présentation"
          />
          <Field
            component={RadioButton}
            name="type_livrable"
            id="Vidéo"
            label="Vidéo"
          />
          <Field
            component={RadioButton}
            name="type_livrable"
            id="Visites de sites exemplaires"
            label="Visites de sites exemplaires"
          />
          <Field
            component={RadioButton}
            name="echelle_territoire"
            id={tl_autre}
          />
          <Form.Control
            type="text"
            name="echelle_territoire2t"
            placeholder="Autre"
            onChange={(e) => setTl_autre(e.target.value)}
          />
        </RadioButtonGroup>
      </Form.Group>
      <Form.Group>
        <legend>Liens vers des ressources complémentaires </legend>
        <Form.Text className="text-muted">
          Indiquez pour chaque lien ce dont il s’agit (page Web, rapport,
          vidéo, etc)
        </Form.Text>
      </Form.Group>
      <FormQ
        label="Intitulé souhaité pour cette ressource 1:"
        name="liv1_intitule"
        type="text"
      />
      <FormQ
        label="Adresse Web de la ressource 1:"
        name="liv1_adresse"
        type="text"
      />
      <FormQ
        label="Intitulé souhaité pour cette ressource 2:"
        name="liv2_intitule"
        type="text"
      />
      <FormQ
        label="Adresse Web de la ressource 2:"
        name="liv2_adresse"
        type="text"
      />
      <FormQ
        label="Intitulé souhaité pour cette ressource 3:"
        name="liv3_intitule"
        type="text"
      />
      <FormQ
        label="Adresse Web de la ressource 3:"
        name="liv3_adresse"
        type="text"
      />
      <FormQ
        label="Intitulé souhaité pour cette ressource 4:"
        name="liv4_intitule"
        type="text"
      />
      <FormQ
        label="Adresse Web de la ressource 4:"
        name="liv4_adresse"
        type="text"
      />
    </div>
  );
};
