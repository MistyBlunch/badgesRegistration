import React from "react";

import "./styles/BadgeNew.css";
import header from "../images/badge-header.svg";
import Badge from "../components/Badge";
import BadgeFormu from "../components/BadgeFormu";
import Navbar from "../components/Navbar";

class BadgeNew extends React.Component {
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
                firstName="Grace"
                lastName="Alvarado"
                twitter="MistyBlunch"
                jobTitle="Junior dev"
                avatarUrl="https://avatars2.githubusercontent.com/u/29315728?s=400&u=641b014614edcc6eef166c51579d76eea1d31a4b&v=4"
              />
            </div>

            <div className="col-6">
              <BadgeFormu />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BadgeNew;
