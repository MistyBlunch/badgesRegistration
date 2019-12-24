import React from "react";

import "./styles/BadgeNew.css";
import header from "../images/badge-header.svg";
import Badge from "../components/Badge";
import BadgeFormu from "../components/BadgeFormu";
import Navbar from "../components/Navbar";

class BadgeNew extends React.Component {
  // Forma 1
  /* state = { form: {} };

  handleChange = e => {
    const nextForm = this.state.form;
    nextForm[e.target.name] = e.target.value;

    this.setState({
      form: nextForm
    });
  }; */

  // Forma 2
  state = {
    form: {
      // Para que la información sea considerada commo controlada, da un valor inicial
      firstName: "",
      lastName: "",
      jobTitle: "",
      email: "",
      twitter: ""
    }
  };

  handleChange = e => {
    this.setState({
      form: {
        // Dejamos caer todos los valores que hay en el thi.state.form
        ...this.state.form,
        // Y añadimo uno o sobreescribimos los valores ya guardados, solo del campo especificado
        [e.target.name]: e.target.value
      }
    });
  };

  render() {
    return (
      <div>
        <Navbar />
        <div className="BadgeNew__hero">
          <img className="img-fluid" src={header} alt="Logo" />
        </div>

        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge
                firstName={this.state.form.firstName}
                lastName={this.state.form.lastName}
                twitter={this.state.form.twitter}
                jobTitle={this.state.form.jobTitle}
                email={this.state.form.email}
                avatarUrl="https://avatars2.githubusercontent.com/u/29315728?s=400&u=641b014614edcc6eef166c51579d76eea1d31a4b&v=4"
              />
            </div>

            <div className="col-6">
              <BadgeFormu
                onChange={this.handleChange}
                formValues={this.state.form}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BadgeNew;
