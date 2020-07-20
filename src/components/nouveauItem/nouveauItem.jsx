import React from 'react'
import "./nouveauItem.css"
import {MultiStep} from "./MultiStep"
import Button from "react-bootstrap/Button";


export const nouveauItem = () => (
    <div className="ctt">
    <h1>Proposition d'item </h1>
    <Button variant="light">Proposer une nouvelle initiative </Button> <br/>
    <MultiStep item="1"/>
    </div>
)
