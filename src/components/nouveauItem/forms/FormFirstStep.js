import React, { Fragment } from "react";
import FormQ from "../formComponents/FormQ";
import FormC from "../formComponents/FormC";

export const FormFirstStep = (formikProps) => {
  const {item} = formikProps;
  let legend_i;
  if (item === "1") {
    legend_i="Nouvelle initiative:";
  } else {
    legend_i="Nouveau élément de diagnostic:"
  }
  return (
    <Fragment>
      <legend>{legend_i}</legend>
      <FormC
        label="Collectif concerné par l’item"
        slabel=" (Si votre organisation est liée à un un key-player soutenant Map21
      cela permettra l’apposition à votre item du tag correspondant)"
        required
        name="cc_item"
        other
        place_h="Autre"
        label_other=""
        v_other=""
        options={[{ id: "UTT", value: "UTT" }]}
      />
      <FormC
        label="Faites vous partie de cette organisation ?"
        required
        name="pdc_organisation"
        options={[
          { id: "OUI", value: "Oui" },
          { id: "NON", value: "Non" },
        ]}
      />

      <FormQ
        label="Nom"
        legend="Renseignements et engagement contributeur :"
        name="nom"
        type="text"
      />
      <FormQ label="Prénom" name="prenom" type="text" />
    </Fragment>
  );
};
