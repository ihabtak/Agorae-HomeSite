import React from "react";
import Form from "react-bootstrap/Form";
import FormQ from "../formComponents/FormQ";

export const FormTenthStep = () => {
  return (
    <div>
      <Form.Group>
        <legend>Renseignement complémentaires </legend>
        <Form.Text className="text-muted">
          Ces éléments et commentaires sont destinés à interagir avec le
          staff-Map21, et ne figureront pas la base
        </Form.Text>
      </Form.Group>
      <FormQ
        label="Votre message :"
        required
        rows="6"
        name="message"
        type="textarea"
      />
    </div>
  );
};
