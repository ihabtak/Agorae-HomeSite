import React, {Fragment} from "react";
import Button from "react-bootstrap/Button";

export const StepButton = (props) => {
  switch (props.Rstep) {
    case 1:
      return (
        <Fragment>
          <Button color="primary" onClick={() => props.btnStep(1)}>
            Suivant
          </Button>
        </Fragment>
      );
      case 6:
        if(props.Ritem ==="1"){
          return (
            <Fragment>
              <Button color="primary" onClick={() => props.btnStep(-1)}>
                Retour
              </Button>
              <Button color="primary" onClick={() => props.btnStep(1)}>
                Suivant
              </Button>
            </Fragment>
          );
        }else{
          return (
            <Fragment>
              <Button color="primary" onClick={() => props.btnStep(-1)}>
                Retour
              </Button>
              <Button color="primary" onClick={() => props.btnStep(2)}>
                Suivant
              </Button>
            </Fragment>
          );
        };
        case 8:
          if(props.Ritem ==="1"){
            return (
              <Fragment>
                <Button color="primary" onClick={() => props.btnStep(-1)}>
                  Retour
                </Button>
                <Button color="primary" onClick={() => props.btnStep(1)}>
                  Suivant
                </Button>
              </Fragment>
            );
          }else{
            return (
              <Fragment>
                <Button color="primary" onClick={() => props.btnStep(-2)}>
                  Retour
                </Button>
                <Button color="primary" onClick={() => props.btnStep(1)}>
                  Suivant
                </Button>
              </Fragment>
            );
          }
    case 10:
      return (
        <Fragment>
          <Button color="primary" onClick={() => props.btnStep(-1)}>
            Retour
          </Button>
          <Button color="primary" type="submit" disabled={props.isSubmitting}>
            Envoyer
          </Button>
        </Fragment>
      );
    default:
      return (
        <Fragment>
          <Button color="primary" onClick={() => props.btnStep(-1)}>
            Retour
          </Button>
          <Button color="primary" onClick={() => props.btnStep(1)}>
            Suivant
          </Button>
        </Fragment>
      );
  }
};
