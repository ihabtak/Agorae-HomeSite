import React, { Fragment } from "react";
import Form from "react-bootstrap/Form";
import FormQ from "../formComponents/FormQ";
import FormC from "../formComponents/FormC";

export const FormSixthStep = (formikProps) => {
  const { item, values } = formikProps;
  let item_date, date_lbl;
  if (item === "1") {
    item_date = "date_d_i";
    date_lbl = "Date de début";
  } else {
    item_date = "date_d";
    date_lbl = "Date des éléments";
  }
  return (
    <Fragment>
      <Form.Group>
        <legend>Description de l’initiative</legend>
        <Form.Text className="text-muted">
          Ces renseignements, après vérification éventuelle, seront publics
          figureront dans la base Agorae Map21
        </Form.Text>
      </Form.Group>
      {item === "1" ? (
        <Fragment>
          <FormC
            label="Statut de l'initiative"
            required
            name="status_i"
            slabel="(choisir dans la liste ci-dessous , si « autre », merci de préciser)"
            other
            place_h="Autre"
            label_other=""
            v_other=""
            options={[
              { id: "En cours", value: "En cours" },
              { id: "En préparation", value: "En préparation" },
              {
                id: "Idée de projet",
                value: "Idée de projet",
              },
              {
                id: "Pleinement opérationnel",
                value: "Pleinement opérationnel",
              },
              {
                id: "Terminée",
                value: "Terminée",
              },
            ]}
          />
          {values.status_i.includes("En cours") ? (
            <FormC
              label="Avancée de l'initiative"
              name="avancee_i"
              slabel="(indiquez un chiffre suivant l’échelle de 1 à 10 suivante)"
              options={[
                {
                  id: "1",
                  value: "1 (préparation, travail initial sur le concept)",
                },
                { id: "2", value: "2 (en phase de lancement)" },
                {
                  id: "3",
                  value:
                    "3 (stand-by : initiative en cours, mais temporairement mise en attente)",
                },
                { id: "4", value: "4 (en cours - accompli environ 15%)" },
                {
                  id: "5",
                  value: "5 (en cours – accompli 30%)",
                },
                {
                  id: "6",
                  value: "6 (en cours - accompli 50%)",
                },
                {
                  id: "7",
                  value: "7 (en cours- accompli 70%)",
                },
                {
                  id: "8",
                  value: "8 (en cours- accompli 90%)",
                },
                {
                  id: "9",
                  value: "9 (initiative terminée ou phase de déploiement)",
                },
                {
                  id: "10",
                  value:
                    "10 (l’initiative est achevée au niveau développement mais contribue à un service qui est toujours opérationnel)",
                },
              ]}
            />
          ) : null}
        </Fragment>
      ) : null}
      <FormQ
        label={date_lbl}
        required
        slabel="mois (facultatif)/ année (requis)"
        name={item_date}
        type="text"
      />
      {item === "1"? (
        <Fragment>
          <FormQ
            label="Date de fin"
            slabel="mois/année (facultatif)"
            name="date_f_i"
            type="text"
          />
          <FormC
            label="S’agit il d’un projet industriel ?"
            required
            name="projet_industriel"
            options={[
              { id: "OUI", value: "Oui" },
              { id: "NON", value: "Non" },
            ]}
          />
          {values.projet_industriel.includes("OUI") ? (
            <FormQ
              label="Mentionner la ou les partenaire(s) industriel(s)"
              required
              rows="3"
              name="partenaire_industriel"
              type="textarea"
            />
          ) : null}
        </Fragment>
      ) : null}
      {item === "2" ? <FormQ label="Référence" name="ref_e" type="text" /> : null}
    </Fragment>
  );
};
