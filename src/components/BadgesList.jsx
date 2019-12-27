import React from "react";
import "./styles/BadgesList.css";

class BadgesList extends React.Component {
  render() {
    return (
      <div className="container BadgesList">
        {this.props.badges.map(badges => {
          return (
            <div className="row BadgesListItem mb-3" key={badges.id}>
              <div className="col-3">
                <img
                  src={badges.avatarUrl}
                  className="img-fluid BadgesListItem__avatar"
                  alt="avatarPerson"
                ></img>
              </div>
              <div className="col-9">
                <ul className="list-unstyled">
                  <li>
                    <h6 className="font-weight-bold">
                      {badges.firstName} {badges.lastName}
                    </h6>
                    <h6 className="BadgesListItem__twitter">
                      <i className="fab fa-twitter mr-1"></i>
                      <a
                        className="text-decoration-none"
                        href={"https://twitter.com/" + badges.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span>@{badges.twitter}</span>
                      </a>
                    </h6>
                    <h6>{badges.jobTitle}</h6>
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
