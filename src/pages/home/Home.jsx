import React, { Component } from "react";
import { Link } from "react-router-dom";
import ButtonMain from "../../commons/components/Button-main/Button-main";
import Card from "../../commons/components/Card/Card";
import ImgText from "../../commons/components/Img-text/ImgText";

import "./Home.scss";

class Home extends Component {
  render() {
    return (
      <section className="home-container">
        <ImgText text="Notas" imgUrl="assets/home-logo.png" />
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
