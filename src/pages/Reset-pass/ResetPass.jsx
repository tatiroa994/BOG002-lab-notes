import React, { useState } from "react";
import "./ResetPass.scss";
import ButtonMain from "../../commons/components/Button-main/Button-main";
import Card from "../../commons/components/Card/Card";
import Input from "../../commons/components/Input/Input";
import LabelText from "../../commons/components/Label-text/LabelText";
import LinkRedirect from "../../commons/components/link/Link";
import { auth } from "../../firebaseConfig";

export default function ResetPass() {
  const [inputValueEmail, setInputValueEmail] = useState("");

  const handleChangeEmail = (event) => {
    setInputValueEmail(event.target.value);
  };

  const ResetPassword = (event) => {
    event.preventDefault();
    
   auth.sendPasswordResetEmail(inputValueEmail);
     console.log("Correo enviado");
    
    setInputValueEmail("");
  };

  return (
    <section className="reset-pass-section">
      <Card orientation="vertical">
        <form onSubmit={ResetPassword} className="form-login">
          <LabelText textLabel="Correo electronico" />
          <Input
            textInput="ingrese correo"
            typeInput="email"
            onChange={handleChangeEmail}
            value={inputValueEmail}
          />
          <ButtonMain type="submit" text="restablecer" />
        </form>
        <LinkRedirect href="/login" text="Volver al inicio" />
      </Card>
      <div className="img-container"></div>
    </section>
  );
}
