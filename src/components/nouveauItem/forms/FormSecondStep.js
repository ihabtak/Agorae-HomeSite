import React, { Fragment } from "react";
import FormQ from "../formComponents/FormQ";
import FormC from "../formComponents/FormC";

export const FormSecondStep = (formikProps) => {
  const {item} = formikProps;
  let lr_label, lr_fId, lr_fLabel, lr_sId, lr_sLabel;
  if (item === "1") {
    lr_label = "Par rapport à l’initiative que vous décrivez ci-dessous";
    lr_fId = "Responsable ou personnellement impliqué dans cette initiative";
    lr_fLabel =
      "Êtes-vous responsable ou personnellement impliqué dans cette initiative ?";
    lr_sId = "En rapport avec les porteurs de cette initiative";
    lr_sLabel =
      "Sinon, êtes vous en rapport avec les porteurs de cette initiative ?";
  } else {
    lr_label = "Par rapport à l’élément que vous décrivez ci-dessous";
    lr_fId = "Responsable ou personnellement impliqué dans cette élément";
    lr_fLabel =
      "Êtes-vous responsable ou personnellement impliqué dans cette élément ?";
    lr_sId = "En rapport avec les porteurs de cette élément";
    lr_sLabel =
      "Sinon, êtes vous en rapport avec les porteurs de cette élément ?";
  }

  return (
    <Fragment>
      <FormQ
        label="Surnom ou pseudo"
        required
        legend="Renseignements et engagement contributeur :"
        name="pseudo"
        type="text"
      />
      <FormQ label="Adresse e-mail" required name="email" type="email" />
      <FormC
        label={lr_label}
        required
        name="r_item"
        other
        place_h=""
        label_other="Ou sinon, vous en avez entendu parler ? Par quel canal ?"
        v_other="Entendu parler, par le canal : "
        options={[
          { id: lr_fId, value: lr_fLabel },
          { id: lr_sId, value: lr_sLabel },
        ]}
      />
    </Fragment>
  );
};
