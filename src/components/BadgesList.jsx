import React from "react";
import { Link } from "react-router-dom";

import "./styles/BadgesList.css";
import Gravatar from "../components/Gravatar";

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
            <Link
              className="text-reset text-decoration-none"
              to={`/badges/${badge.id}/edit`}
            >
              <div className="row BadgesListItem mb-3" key={badge.id}>
                <div className="col-3">
                  <Gravatar
                    email={badge.email}
                    className="img-fluid BadgesListItem__avatar"
                    alt="avatarPerson"
                  />
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
            </Link>
          );
        })}
      </div>
    );
  }
}

export default BadgesList;
