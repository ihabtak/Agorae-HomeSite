import React from "react";
import Form from "react-bootstrap/Form";
import FormQ from "../formComponents/FormQ";
import FormC from "../formComponents/FormC";

export const FormNinthStep = (formikProps) => {
  const { item, values } = formikProps;
  let lbl1, lbl2;
  if (item === "1") {
    lbl1 = "Thèmes à créer pour votre initiative ?";
    lbl2 =
      "Souhaiteriez-vous pour votre initiative des thèmes ne figurant pas encore dans la page (sous réserve d’acceptation par le groupe administrateur de la cartographie)";
  } else {
    lbl1 = "Thèmes à créer pour votre élément ?";
    lbl2 =
      "Souhaiteriez-vous pour votre élément des thèmes ne figurant pas encore dans la page (sous réserve d’acceptation par le groupe administrateur de la cartographie)";
  }
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
      <FormC
        label={lbl1}
        slabel={lbl2}
        name="new_topics"
        options={[
          { id: "OUI", value: "Oui" },
          { id: "NON", value: "Non" },
        ]}
      />
      {values.new_topics.includes("OUI") ? (
        <div>
          <Form.Group>
            <Form.Label>
              Les thèmes doivent être proposés en en anglais, et ne pas dépasser
              25 caractères
            </Form.Label>
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
