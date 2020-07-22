import React from "react";
import Form from "react-bootstrap/Form";
import FormQ from "../formComponents/FormQ";

export const FormFifthStep = () => {
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
        name="resume_i"
        type="textarea"
      />
      <FormQ
        label="Suite du résumé"
        rows="3"
        name="suite_resume"
        type="textarea"
      />
      <FormQ
        label="Summary"
        slabel="(recommandé, max. 250 car.)"
        rows="3"
        name="summary_i"
        type="textarea"
      />
      <FormQ
        label="Continuation of the summary"
        slabel="(facultatif)"
        rows="3"
        name="conti_summary"
        type="textarea"
      />
    </div>
  );
};
