import React, { Component } from "react";
import { Link } from "react-router-dom";
import ButtonMain from "../../commons/components/Button-main/Button-main";
import Card from "../../commons/components/Card/Card";

import "./Home.scss";

class Home extends Component {
  render() {
    return (
      <section className="home-container">
        <img src="assets/home-logo.png" alt="" />
        <p>Notas & Notas</p>
        <Card orientation="vertical">
          <Link to="/login">
            <ButtonMain text="Iniciar sesión" />
          </Link>
          <Link to="/register">
            <ButtonMain text="Registrate" />
          </Link>
        </Card>

        <Card orientation="horizontal">
          <Link to="/login">
            <ButtonMain text="Iniciar sesión" />
          </Link>
          <Link to="/register">
            <ButtonMain text="Registrate" />
          </Link>
        </Card>
      </section>
    );
  }
}

export default Home;
