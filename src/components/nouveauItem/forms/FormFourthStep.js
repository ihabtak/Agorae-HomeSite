import React, { Fragment } from "react";
import Form from "react-bootstrap/Form";
import FormQ from "../formComponents/FormQ";
import FormC from "../formComponents/FormC";

export const FormFourthStep = (formikProps) => {
  const  {item}  = formikProps;
  let lbl1, lbl2, leg, item_name, item_type;
  if (item === "1") {
    lbl1 = "Nom de l'initiative";
    lbl2 = "Type d'initiative";
    leg = "Description de l’initiative";
    item_name = "nom_i";
    item_type = "type_i";
  } else {
    lbl1 = "Nom de l'élément";
    lbl2 = "Type d'élément";
    leg = "Description de l’élément";
    item_name = "nom_d";
    item_type = "type_d";
  }

  return (
    <Fragment>
      <Form.Group>
        <legend>{leg}</legend>
        <Form.Text className="text-muted">
          Ces renseignements, après vérification éventuelle, seront publics
          figureront dans la base Agorae Map21
        </Form.Text>
      </Form.Group>
      <FormQ
        slabel="(max. 30 caractères, mais un code court d’une dizaine de caractères
          est conseillé)"
        label={lbl1}
        required
        name={item_name}
        type="text"
      />

      {item === "1" ? (
        <FormC
          label={lbl2}
          required
          name={item_type}
          slabel="(choisir dans la liste ci-dessous , si « autre », merci de préciser)"
          other
          place_h="Autre"
          label_other=""
          v_other=""
          options={[
            { id: "Dissémination", value: "Dissémination" },
            { id: "Module de formation", value: "Module de formation" },
            {
              id: "Plateforme de mise en relation territoriale",
              value: "Plateforme de mise en relation territoriale",
            },
            { id: "Projet de recherche", value: "Projet de recherche" },
            {
              id: "Projet de recherche-action",
              value: "Projet de recherche-action",
            },
            {
              id: "Projet du plan de transition d'une organisation",
              value: "Projet du plan de transition d'une organisation",
            },
            { id: "Projet étudiant", value: "Projet étudiant" },
            {
              id: "Projet étudiant dans le cadre d’une UE",
              value: "Projet étudiant dans le cadre d’une UE",
            },
            { id: "Projet industriel", value: "Projet industriel" },
            { id: "Projet MIND", value: "Projet MIND" },
            { id: "Synergie industrielle", value: "Synergie industrielle" },
          ]}
        />
      ) : (
        <FormC
          label={lbl2}
          required
          name="type_i"
          slabel="(choisir dans la liste ci-dessous , si « autre », merci de préciser)"
          other
          place_h="Autre"
          label_other=""
          v_other=""
          options={[
            { id: "Article scientifique", value: "Article scientifique" },
            { id: "Classement", value: "Classement" },
          ]}
        />
      )}
    </Fragment>
  );
};
