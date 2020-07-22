import React from "react";
import Form from "react-bootstrap/Form";
import { Field } from "formik";
import { RadioButton } from "../formComponents/RadioButton";
import { RadioButtonGroup } from "../formComponents/RadioButtonGroup";
import FormQ from "../formComponents/FormQ";

export const FormNinthStep = (formikProps) => {
  const { values, errors, touched} = formikProps;
  return (
    <div>
      <Form.Group>
        <legend>Thèmes de Map21 </legend>
      </Form.Group>
      <FormQ
        label="Mentionnez entre 6 et 10 thèmes déjà existants dans Map2, dont
        obligatoirement 1 thème du Point de vue 1, et si faisant appel à
        plusieurs points de vue. Pour les projets terminés, se limiter à 6
        thèmes maximum."
        rows="3"
        name="themeMap21"
        type="textarea"
      />

      <Form.Group controlId="new_topicsControl">
        <Form.Label>Thèmes à créer pour votre initiative ?</Form.Label>
        <Form.Text className="text-muted">
          Souhaiteriez-vous pour votre initiative des thèmes ne figurant pas
          encore dans la page (sous réserve d’acceptation par le groupe
          administrateur de la cartographie){" "}
        </Form.Text>
        <RadioButtonGroup
          id="new_topics"
          value={values.new_topics}
          error={errors.new_topics}
          touched={touched.new_topics}
          key="new_topicsRadio"
          className="mb-3"
        >
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
            <Form.Text className="text-muted">
              Les thèmes doivent être proposés en en anglais, et ne pas dépasser
              25 caractères
            </Form.Text>
          </Form.Group>
          <FormQ label="Thème souhaité 1:" name="topic1" type="text" />
          <FormQ
            label="Chemin ou thème-ascendant du thème 1:"
            name="cta_topic1"
            type="text"
          />
          <FormQ label="Thème souhaité 2:" name="topic2" type="text" />
          <FormQ
            label="Chemin ou thème-ascendant du thème 2:"
            name="cta_topic2"
            type="text"
          />
          <FormQ label="Thème souhaité 3:" name="topic3" type="text" />
          <FormQ
            label="Chemin ou thème-ascendant du thème 3:"
            name="cta_topic3"
            type="text"
          />
          <FormQ label="Thème souhaité 4:" name="topic4" type="text" />
          <FormQ
            label="Chemin ou thème-ascendant du thème 4:"
            name="cta_topic4"
            type="text"
          />

        </div>
      ) : null}
    </div>
  );
};
