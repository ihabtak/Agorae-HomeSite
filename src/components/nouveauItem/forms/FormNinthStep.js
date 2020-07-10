import React from "react";
import Form from "react-bootstrap/Form";
import { Field } from "formik";
import { RadioButton } from "../formComponents/RadioButton";
import { RadioButtonGroup } from "../formComponents/RadioButtonGroup";

export const FormNinthStep = (formikProps) => {
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
        <legend>Thèmes de Map21 </legend>
      </Form.Group>
      <Form.Group controlId="themeMap21Control">
        <Form.Label>
          Mentionnez entre 6 et 10 thèmes déjà existants dans Map2, dont
          obligatoirement 1 thème du Point de vue 1, et si faisant appel à
          plusieurs points de vue. Pour les projets terminés, se limiter à 6
          thèmes maximum.
        </Form.Label>
        <Form.Control
          as="textarea"
          rows="3"
          name="themeMap21"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.themeMap21}
          className={touched.themeMap21 && errors.themeMap21 ? "error" : null}
        />
        {touched.themeMap21 && errors.themeMap21 ? (
          <div className="error-message">{errors.themeMap21}</div>
        ) : null}
      </Form.Group>
      <Form.Group controlId="new_topicsControl">
        <RadioButtonGroup
          id="new_topics"
          label="Thèmes à créer pour votre initiative ? "
          value={values.new_topics}
          error={errors.new_topics}
          touched={touched.new_topics}
          key="new_topicsRadio"
          className="mb-3"
        >
          <Form.Label>
            Souhaiteriez-vous pour votre initiative des thèmes ne figurant pas
            encore dans la page (sous réserve d’acceptation par le groupe
            administrateur de la cartographie){" "}
          </Form.Label>
          <Field
            component={RadioButton}
            name="new_topics"
            id="OUI"
            label="Oui"
          />
          <Field
            component={RadioButton}
            name="new_topics"
            id="NON"
            label="Non"
          />
        </RadioButtonGroup>
      </Form.Group>
      {values.new_topics.includes("OUI") ? (
        <div>
          <Form.Group>
            <Form.Label>Thèmes à créer pour votre initiative ? </Form.Label>
            <Form.Label>
              Les thèmes doivent être proposés en en anglais, et ne pas dépasser
              25 caractères
            </Form.Label>
          </Form.Group>
          <Form.Group controlId="topic1Control">
            <Form.Label>Thème souhaité 1:</Form.Label>
            <Form.Control
              type="text"
              name="topic1"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.topic1}
              className={touched.topic1 && errors.topic1 ? "error" : null}
            />
            {touched.topic1 && errors.topic1 ? (
              <div className="error-message">{errors.topic1}</div>
            ) : null}
          </Form.Group>
          <Form.Group controlId="cta_topic1Control">
            <Form.Label>Chemin ou thème-ascendant du thème 1:</Form.Label>
            <Form.Control
              type="text"
              name="cta_topic1"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.cta_topic1}
              className={
                touched.cta_topic1 && errors.cta_topic1 ? "error" : null
              }
            />
            {touched.cta_topic1 && errors.cta_topic1 ? (
              <div className="error-message">{errors.cta_topic1}</div>
            ) : null}
          </Form.Group>
          <Form.Group controlId="topic2Control">
            <Form.Label>Thème souhaité 2:</Form.Label>
            <Form.Control
              type="text"
              name="topic2"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.topic2}
              className={touched.topic2 && errors.topic2 ? "error" : null}
            />
            {touched.topic2 && errors.topic2 ? (
              <div className="error-message">{errors.topic2}</div>
            ) : null}
          </Form.Group>
          <Form.Group controlId="cta_topic2Control">
            <Form.Label>Chemin ou thème-ascendant du thème 2:</Form.Label>
            <Form.Control
              type="text"
              name="cta_topic2"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.cta_topic2}
              className={
                touched.cta_topic2 && errors.cta_topic2 ? "error" : null
              }
            />
            {touched.cta_topic2 && errors.cta_topic2 ? (
              <div className="error-message">{errors.cta_topic2}</div>
            ) : null}
          </Form.Group>
          <Form.Group controlId="topic3Control">
            <Form.Label>Thème souhaité 3:</Form.Label>
            <Form.Control
              type="text"
              name="topic3"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.topic3}
              className={touched.topic3 && errors.topic3 ? "error" : null}
            />
            {touched.topic3 && errors.topic3 ? (
              <div className="error-message">{errors.topic3}</div>
            ) : null}
          </Form.Group>
          <Form.Group controlId="cta_topic3Control">
            <Form.Label>Chemin ou thème-ascendant du thème 3:</Form.Label>
            <Form.Control
              type="text"
              name="cta_topic3"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.cta_topic3}
              className={
                touched.cta_topic3 && errors.cta_topic3 ? "error" : null
              }
            />
            {touched.cta_topic3 && errors.cta_topic3 ? (
              <div className="error-message">{errors.cta_topic3}</div>
            ) : null}
          </Form.Group>
          <Form.Group controlId="topic4Control">
            <Form.Label>Thème souhaité 4:</Form.Label>
            <Form.Control
              type="text"
              name="topic4"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.topic4}
              className={touched.topic4 && errors.topic4 ? "error" : null}
            />
            {touched.topic4 && errors.topic4 ? (
              <div className="error-message">{errors.topic4}</div>
            ) : null}
          </Form.Group>
          <Form.Group controlId="cta_topic4Control">
            <Form.Label>Chemin ou thème-ascendant du thème 4:</Form.Label>
            <Form.Control
              type="text"
              name="cta_topic4"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.cta_topic4}
              className={
                touched.cta_topic4 && errors.cta_topic4 ? "error" : null
              }
            />
            {touched.cta_topic4 && errors.cta_topic4 ? (
              <div className="error-message">{errors.cta_topic4}</div>
            ) : null}
          </Form.Group>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};
