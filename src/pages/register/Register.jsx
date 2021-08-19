import React, { useState } from "react";
import "./Register.scss";
import Card from "../../commons/components/Card/Card";
import InputPassword from "../../commons/components/Input-password/InputPassword";
import Input from "../../commons/components/Input/Input";
import LabelText from "../../commons/components/Label-text/LabelText";
import Title from "../../commons/components/Title/Title";
import ButtonMain from "../../commons/components/Button-main/Button-main";
import ImgText from "../../commons/components/Img-text/ImgText";
import LinkRedirect from "../../commons/components/link/Link";

function Register() {
  const [inputValueName, setInputValueName] = useState("");
  const [inputValueEmail, setInputValueEmail] = useState("");
  const [inputValuePassword, setInputValuePassword] = useState("");

  const handleChangeEmail = (event) => {
    setInputValueEmail(event.target.value);
  };

  const handleChangeName = (event) => {
    setInputValueName(event.target.value);
  };

  const handleChangePassword = (event) => {
    setInputValuePassword(event.target.value);
  };

  const registerUser = (event) => {
    event.preventDefault();
    console.log(inputValueName);
    console.log(inputValueEmail);
    console.log(inputValuePassword);
    setInputValueName("");
    setInputValueEmail("");
    setInputValuePassword("");
  };

  return (
    <section className="register-section">
      <Card orientation="vertical">
        <Title text="Registrate" />
        <form onSubmit={registerUser} className="form-register">
          <LabelText textLabel="Nombre:" />
          <Input
            textInput="Ingresa tu nombre"
            typeInput="text"
            onChange={handleChangeName}
            value={inputValueName}
          />
          <LabelText textLabel="Correo electronico:" />
          <Input
            textInput="Ingresa tu correo"
            typeInput="email"
            onChange={handleChangeEmail}
            value={inputValueEmail}
          />
          <LabelText textLabel="Contraseña:" />
          <InputPassword
            onChangeInput={handleChangePassword}
            value={inputValuePassword}
          />
          <ButtonMain text="Registro" type="submit" />
        </form>
        <LinkRedirect
          href="/login"
          text="¿Ya tienes una cuenta?  Incia sesion"
        />
      </Card>
      <ImgText text="Notas" imgUrl="assets/register-logo.png" />
    </section>
  );
}

export default Register;
