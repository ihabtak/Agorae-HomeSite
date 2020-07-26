import React from "react";
import Form from "react-bootstrap/Form";
import FormQ from "../formComponents/FormQ";

export const FormFifthStep = (props) => {
  const {item} = props;
  let item_resume, item_sres, item_summary, item_csum;
  if (item === "1") {
    item_resume = "resume_i";
    item_sres = "suite_resume";
    item_summary = "summary_i";
    item_csum = "conti_summary";
  } else {
    item_resume = "resume_d";
    item_sres = "dsuite_resume";
    item_summary = "summary_d";
    item_csum = "dconti_summary";
  }

  return (
    <div>
      <Form.Group>
        <legend>Description de l’initiative</legend>
        <Form.Text className="text-muted">
          Ces renseignements, après vérification éventuelle, seront publics
          figureront dans la base Agorae Map21
        </Form.Text>
      </Form.Group>
      <FormQ
        label="Résumé"
        slabel="(max. 250 car.)"
        required
        rows="3"
        name={item_resume}
        type="textarea"
      />
      <FormQ
        label="Suite du résumé"
        rows="3"
        name={item_sres}
        type="textarea"
      />
      <FormQ
        label="Summary"
        slabel="(recommandé, max. 250 car.)"
        rows="3"
        name={item_summary}
        type="textarea"
      />
      <FormQ
        label="Continuation of the summary"
        slabel="(facultatif)"
        rows="3"
        name={item_csum}
        type="textarea"
      />
    </div>
  );
};
