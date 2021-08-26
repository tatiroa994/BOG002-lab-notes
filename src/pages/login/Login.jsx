import React, { useState } from "react";
import "./Login.scss";
import ButtonGoogle from "../../commons/components/Button-google/ButtonGoogle";
import Card from "../../commons/components/Card/Card";
import InputPassword from "../../commons/components/Input-password/InputPassword";
import Input from "../../commons/components/Input/Input";
import LabelText from "../../commons/components/Label-text/LabelText";
import Title from "../../commons/components/Title/Title";
import ButtonMain from "../../commons/components/Button-main/Button-main";
import ImgText from "../../commons/components/Img-text/ImgText";
import LinkRedirect from "../../commons/components/link/Link";
import { auth, googleAuthProvider } from "../../firebaseConfig";

export default function Login() {
  const [inputValueEmail, setInputValueEmail] = useState("");
  const [inputValuePassword, setInputValuePassword] = useState("");
  
  const handleChangeEmail = (event) => {
    setInputValueEmail(event.target.value);
  };

  const handleChangePassword = (event) => {
    setInputValuePassword(event.target.value);
  };

  const login = (event) => {
    event.preventDefault();
    auth
      .signInWithEmailAndPassword(inputValueEmail, inputValuePassword)
      .then((res) => console.log("usuario logueado"))
      .catch((err) => console.log(err.message));
  };

  const loginWithProvider = (provider) => {
    auth
      .signInWithPopup(provider)
      .then((res) => console.log("Bienvenido"))
      .catch((err) => console.log(err.message));
  };

  return (
    <section className="login-section">
      <Card orientation="vertical">
        <Title text="Iniciar sesión" />
        <div>
          <ButtonGoogle onClick={() => loginWithProvider(googleAuthProvider)} />
        </div>
        <form onSubmit={login} className="form-login">
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
          <ButtonMain text="Inicia sesión" type="submit" />
        </form>
        <LinkRedirect
          href="/resetPass"
          text="¿Olvidaste tu  contraseña? Restablecer"
        />
        <LinkRedirect
          href="/register"
          text="¿No tienes una cuenta?  Regístrate"
        />
      </Card>
      <ImgText text="Notas" imgUrl="assets/login-logo.png" />
    </section>
  );
}
