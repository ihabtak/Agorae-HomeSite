import React, { Fragment } from "react";
import Form from "react-bootstrap/Form";
import FormQ from "../formComponents/FormQ";
import FormC from "../formComponents/FormC";

export const FormEighthStep = (formikProps) => {
  const {item} = formikProps;
  return (
    <Fragment>
      <Form.Group>
        <legend>Livrables intéressants à partager </legend>
      </Form.Group>
      {item === "1" ? (
        <FormC
          label="Type de livrable:"
          name="type_livrable"
          other
          place_h="Autre"
          label_other=""
          v_other=""
          options={[
            { id: "Algorithme", value: "Algorithme" },
            { id: "Ateliers participatifs", value: "Ateliers participatifs" },
            { id: "Démo en ligne", value: "Démo en ligne" },
            {
              id: "Élément d’infrastructure",
              value: "Élément d’infrastructure",
            },
            { id: "Formations", value: "Formations" },
            { id: "Logiciel", value: "Logiciel" },
            { id: "Maquette", value: "Maquette" },
            { id: "Outil de fabrication", value: "Outil de fabrication" },
            { id: "Plateforme Web", value: "Plateforme Web" },
            { id: "Présentation", value: "Présentation" },
            { id: "Rapport", value: "Rapport" },
            { id: "Rapport, vidéo", value: "Rapport, vidéo" },
            { id: "Services", value: "Services" },
            { id: "Slides de présentation", value: "Slides de présentation" },
            { id: "Vidéo", value: "Vidéo" },
            {
              id: "Visites de sites exemplaires",
              value: "Visites de sites exemplaires",
            },
          ]}
        />
      ) : null}

      <Form.Group>
        <legend>Liens vers des ressources complémentaires </legend>
        <Form.Text className="text-muted">
          Indiquez pour chaque lien ce dont il s’agit (page Web, rapport, vidéo,
          etc)
        </Form.Text>
      </Form.Group>
      <FormQ
        label="Intitulé souhaité pour cette ressource 1:"
        name="liv1_intitule"
        type="text"
      />
      <FormQ
        label="Adresse Web de la ressource 1:"
        name="liv1_adresse"
        type="text"
      />
      <FormQ
        label="Intitulé souhaité pour cette ressource 2:"
        name="liv2_intitule"
        type="text"
      />
      <FormQ
        label="Adresse Web de la ressource 2:"
        name="liv2_adresse"
        type="text"
      />
      <FormQ
        label="Intitulé souhaité pour cette ressource 3:"
        name="liv3_intitule"
        type="text"
      />
      <FormQ
        label="Adresse Web de la ressource 3:"
        name="liv3_adresse"
        type="text"
      />
      <FormQ
        label="Intitulé souhaité pour cette ressource 4:"
        name="liv4_intitule"
        type="text"
      />
      <FormQ
        label="Adresse Web de la ressource 4:"
        name="liv4_adresse"
        type="text"
      />
    </Fragment>
  );
};
