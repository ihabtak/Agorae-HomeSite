import React from 'react'
import "./Contact.css"
//import { ContactForm } from "./Form"
import ReactContactForm from 'react-mail-form';

export const Contact = () => (
        <div className="ctt">
            <h1>Contact form</h1>
            <ReactContactForm to="ihabtak@gmail.com" />
        </div>
)