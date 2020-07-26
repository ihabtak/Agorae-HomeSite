import React, { useState } from "react";
import "./nouveauItem.css";
import { MultiStep } from "./MultiStep";
import Button from "react-bootstrap/Button";

const NouveauItem = () => {
  const [form, setform] = useState("1");
  return (
    <div className="ctt">
      <h1>Proposition d'item </h1>
      <Button variant="light" onClick={() => setform("1")}>
        Proposer une nouvelle initiative{" "}
      </Button>
      <br />
      <Button variant="light" onClick={() => setform("2")}>
        Proposer un nouveau élément de diagnostic
      </Button>
      {form === "1" ? <MultiStep item="1" /> : <MultiStep item="2" />}
    </div>
  );
};

export default NouveauItem;
