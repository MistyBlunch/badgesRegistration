import React from "react";

import "./styles/BadgeNew.css";
import header from "../images/platziconf-logo.svg";
import Badge from "../components/Badge";
import BadgeFormu from "../components/BadgeFormu";
import PageLoading from "../components/PageLoading";
import api from "../api";

class BadgeNew extends React.Component {
  state = {
    loading: false,
    error: null,
    form: {
      /* Para que la información sea considerada 
      commo controlada, da un valor inicial*/
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
        // Dejamos caer todos los valores que hay en el this.state.form
        ...this.state.form,
        // Y añadimo uno o sobreescribimos los valores ya guardados, solo del campo especificado
        [e.target.name]: e.target.value
      }
    });
  };

  handleSubmit = async e => {
    e.preventDefault();
    this.setState({ loading: true, error: null });

    try {
      await api.badges.create(this.state.form);
      this.setState({ loading: false });

      this.props.history.push("/badgesRegistration/badges");
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  render() {
    if (this.state.loading) {
      return <PageLoading />;
    }
    return (
      <React.Fragment>
        <div className="BadgeNew__hero">
          <img
            className="BadgeNew__hero-image img-fluid"
            src={header}
            alt="Logo"
          />
        </div>

        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge
                firstName={this.state.form.firstName || "FIRST_NAME"}
                lastName={this.state.form.lastName || "LAST_NAME"}
                twitter={this.state.form.twitter || "twitter"}
                jobTitle={this.state.form.jobTitle || "JOB_TITLE"}
                email={this.state.form.email || "EMAIL"}
                avatarUrl="https://avatars2.githubusercontent.com/u/29315728?s=400&u=641b014614edcc6eef166c51579d76eea1d31a4b&v=4"
              />
            </div>

            <div className="col-6">
              <h1>New Attendant</h1>
              <BadgeFormu
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
                formValues={this.state.form}
                error={this.state.error}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default BadgeNew;
