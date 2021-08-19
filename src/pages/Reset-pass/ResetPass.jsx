import React, { useState } from "react";
import "./ResetPass.scss";
import ButtonMain from "../../commons/components/Button-main/Button-main";
import Card from "../../commons/components/Card/Card";
import Input from "../../commons/components/Input/Input";
import LabelText from "../../commons/components/Label-text/LabelText";

export default function ResetPass() {
  const [inputValueEmail, setInputValueEmail] = useState("");

  const handleChangeEmail = (event) => {
    setInputValueEmail(event.target.value);
  };

  const ResetPassword = (event) => {
    event.preventDefault();
    console.log(inputValueEmail);
    setInputValueEmail("");
  };

  return (
    <section className="reset-pass-section">
      <Card>
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
      </Card>
      <div className="img-container">

      </div>
    </section>
  );
}
