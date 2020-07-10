import React from "react";
import Button from "react-bootstrap/Button";

export const StepButton = (props) => {
  switch (props.Rstep) {
    case 1:
      return (
        <div>
          <Button color="primary" onClick={() => props.btnStep(1)}>
            Suivant
          </Button>
        </div>
      );
    case 10:
      return (
        <div>
          <Button color="primary" onClick={() => props.btnStep(-1)}>
            Retour
          </Button>
          <Button color="primary" type="submit" disabled={props.isSubmitting}>
            Envoyer
          </Button>
        </div>
      );
    default:
      return (
        <div>
          <Button color="primary" onClick={() => props.btnStep(-1)}>
            Retour
          </Button>
          <Button color="primary" onClick={() => props.btnStep(1)}>
            Suivant
          </Button>
        </div>
      );
  }
};
