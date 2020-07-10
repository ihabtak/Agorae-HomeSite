import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { Field } from "formik";
import { RadioButton } from "../formComponents/RadioButton";
import { RadioButtonGroup } from "../formComponents/RadioButtonGroup";

export const FormEighthStep = (formikProps) => {
  const [tl_autre, setTl_autre] = useState("Autre");
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
        <legend>Livrables intéressants à partager </legend>
      </Form.Group>
      <Form.Group controlId="type_livrableControl">
        <RadioButtonGroup
          id="type_livrable"
          label="Type de livrable:"
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
        <Form.Label>Liens vers des ressources complémentaires </Form.Label>
        <Form.Label>
          (indiquez pour chaque lien ce dont il s’agit (page Web, rapport,
          vidéo, etc){" "}
        </Form.Label>
      </Form.Group>
      <Form.Group controlId="liv1_intituleControl">
        <Form.Label>Intitulé souhaité pour cette ressource 1:</Form.Label>
        <Form.Control
          type="text"
          name="liv1_intitule"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.liv1_intitule}
          className={
            touched.liv1_intitule && errors.liv1_intitule ? "error" : null
          }
        />
        {touched.liv1_intitule && errors.liv1_intitule ? (
          <div className="error-message">{errors.liv1_intitule}</div>
        ) : null}
      </Form.Group>
      <Form.Group controlId="liv1_adresseControl">
        <Form.Label>Adresse Web de la ressource 1:</Form.Label>
        <Form.Control
          type="text"
          name="liv1_adresse"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.liv1_adresse}
          className={
            touched.liv1_adresse && errors.liv1_adresse ? "error" : null
          }
        />
        {touched.liv1_adresse && errors.liv1_adresse ? (
          <div className="error-message">{errors.liv1_adresse}</div>
        ) : null}
      </Form.Group>
      <Form.Group controlId="liv2_intituleControl">
        <Form.Label>Intitulé souhaité pour cette ressource 2:</Form.Label>
        <Form.Control
          type="text"
          name="liv2_intitule"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.liv2_intitule}
          className={
            touched.liv2_intitule && errors.liv2_intitule ? "error" : null
          }
        />
        {touched.liv2_intitule && errors.liv2_intitule ? (
          <div className="error-message">{errors.liv2_intitule}</div>
        ) : null}
      </Form.Group>
      <Form.Group controlId="liv2_adresseControl">
        <Form.Label>Adresse Web de la ressource 2:</Form.Label>
        <Form.Control
          type="text"
          name="liv2_adresse"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.liv2_adresse}
          className={
            touched.liv2_adresse && errors.liv2_adresse ? "error" : null
          }
        />
        {touched.liv2_adresse && errors.liv2_adresse ? (
          <div className="error-message">{errors.liv2_adresse}</div>
        ) : null}
      </Form.Group>
      <Form.Group controlId="liv3_intituleControl">
        <Form.Label>Intitulé souhaité pour cette ressource 3:</Form.Label>
        <Form.Control
          type="text"
          name="liv3_intitule"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.liv3_intitule}
          className={
            touched.liv3_intitule && errors.liv3_intitule ? "error" : null
          }
        />
        {touched.liv3_intitule && errors.liv3_intitule ? (
          <div className="error-message">{errors.liv3_intitule}</div>
        ) : null}
      </Form.Group>
      <Form.Group controlId="liv3_adresseControl">
        <Form.Label>Adresse Web de la ressource 3:</Form.Label>
        <Form.Control
          type="text"
          name="liv3_adresse"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.liv3_adresse}
          className={
            touched.liv3_adresse && errors.liv3_adresse ? "error" : null
          }
        />
        {touched.liv3_adresse && errors.liv3_adresse ? (
          <div className="error-message">{errors.liv3_adresse}</div>
        ) : null}
      </Form.Group>
      <Form.Group controlId="liv4_intituleControl">
        <Form.Label>Intitulé souhaité pour cette ressource 4:</Form.Label>
        <Form.Control
          type="text"
          name="liv4_intitule"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.liv4_intitule}
          className={
            touched.liv4_intitule && errors.liv4_intitule ? "error" : null
          }
        />
        {touched.liv4_intitule && errors.liv4_intitule ? (
          <div className="error-message">{errors.liv4_intitule}</div>
        ) : null}
      </Form.Group>
      <Form.Group controlId="liv4_adresseControl">
        <Form.Label>Adresse Web de la ressource 4:</Form.Label>
        <Form.Control
          type="text"
          name="liv4_adresse"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.liv4_adresse}
          className={
            touched.liv4_adresse && errors.liv4_adresse ? "error" : null
          }
        />
        {touched.liv4_adresse && errors.liv4_adresse ? (
          <div className="error-message">{errors.liv1_adresse}</div>
        ) : null}
      </Form.Group>
    </div>
  );
};
