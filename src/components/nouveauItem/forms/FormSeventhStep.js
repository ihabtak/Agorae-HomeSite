import React, { Fragment } from "react";
import Form from "react-bootstrap/Form";
import FormQ from "../formComponents/FormQ";
import FormC from "../formComponents/FormC";

export const FormSeventhStep = (formikProps) => {
  const { values } = formikProps;

  return (
    <Fragment>
      <Form.Group>
        <legend>Description de l’initiative</legend>
        <Form.Text className="text-muted">
          Ces renseignements, après vérification éventuelle, seront publics
          figureront dans la base Agorae Map21
        </Form.Text>
      </Form.Group>
      <FormC
        label="S’agit il d’un projet de recherche ?"
        name="projet_recherche"
        options={[
          { id: "OUI", value: "Oui" },
          { id: "NON", value: "Non" },
        ]}
      />
      {values.projet_recherche.includes("OUI") ? (
        <FormQ
          label="Mentionner la ou les équipe(s) de recherche:"
          rows="3"
          name="equipe_recherche"
          type="textarea"
        />
      ) : null}
      <FormC
        label="S’agit il d’un projet à caractère territorial ?"
        name="projet_ct"
        options={[
          { id: "OUI", value: "Oui" },
          { id: "NON", value: "Non" },
        ]}
      />

      {values.projet_ct.includes("OUI") ? (
        <Fragment>
          <FormC
            label="Échelle du territoire"
            name="echelle_territoire"
            other
            place_h="Autre"
            label_other=""
            v_other=""
            options={[
              { id: "National", value: "National" },
              { id: "Régional", value: "Régional" },
              {
                id: "Local",
                value: "Local",
              },
            ]}
          />
          {values.echelle_territoire.includes("Local") ? (
            <Fragment>
              <FormQ
                label="Code département concerné"
                name="code_depart"
                type="text"
              />
              <FormQ label="Ville" name="ville" type="text" />
            </Fragment>
          ) : null}
          <FormQ
            label="Mentionner la ou les équipe(s) de recherche"
            rows="3"
            name="partenaire_territorial"
            type="textarea"
          />
        </Fragment>
      ) : null}
      <FormQ
        label="Partenaire(s) associatif(s)"
        rows="3"
        name="partenaire_asso"
        type="textarea"
      />
    </Fragment>
  );
};
