import React from "react";
import { Link } from "react-router-dom";

import "./styles/BadgesList.css";

class BadgesList extends React.Component {
  render() {
    if (this.props.badges.length === 0) {
      return (
        <div>
          <h3>No badges were found :c</h3>
          <Link className="btn btn-primary" to="/badges/new">
            Create new badge
          </Link>
        </div>
      );
    }
    return (
      <div className="container BadgesList">
        {this.props.badges.map(badge => {
          return (
            <div className="row BadgesListItem mb-3" key={badge.id}>
              <div className="col-3">
                <img
                  src={badge.avatarUrl}
                  className="img-fluid BadgesListItem__avatar"
                  alt="avatarPerson"
                ></img>
              </div>
              <div className="col-9">
                <ul className="list-unstyled">
                  <li>
                    <h6 className="font-weight-bold">
                      {badge.firstName} {badge.lastName}
                    </h6>
                    <h6 className="BadgesListItem__twitter">
                      <i className="fab fa-twitter mr-1"></i>
                      <a
                        className="text-decoration-none"
                        href={"https://twitter.com/" + badge.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span>@{badge.twitter}</span>
                      </a>
                    </h6>
                    <h6>{badge.jobTitle}</h6>
                  </li>
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default BadgesList;
