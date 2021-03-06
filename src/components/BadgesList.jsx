import React from "react";
import { Link } from "react-router-dom";

import "./styles/BadgesList.css";
import Gravatar from "../components/Gravatar";

class BadgesListItem extends React.Component {
  render() {
    return (
      <div className="BadgesListItem mb-3">
        <Gravatar
          className="BadgesListItem__avatar"
          email={this.props.badge.email}
        />

        <div>
          <strong>
            {this.props.badge.firstName} {this.props.badge.lastName}
          </strong>
          <br />
          <h6 className="BadgesListItem__twitter">
            <i className="fab fa-twitter mr-1"></i>
            <span>@{this.props.badge.twitter}</span>
          </h6>
          {this.props.badge.jobTitle}
        </div>
      </div>
    );
  }
}

function useSearchBadges(badges) {
  const [query, setQuery] = React.useState("");
  const [filteredBadges, setfilteredBadges] = React.useState(badges);

  React.useMemo(() => {
    const result = badges.filter(badge => {
      return `${badge.firstName} ${badge.lastName} ${badge.twitter}`
        .toLowerCase()
        .includes(query.toLowerCase());
    });

    setfilteredBadges(result);
  }, [badges, query]);

  return { query, setQuery, filteredBadges };
}

function BadgesList(props) {
  const badges = props.badges;

  const { query, setQuery, filteredBadges } = useSearchBadges(badges);

  if (badges.length === 0 || filteredBadges.length === 0) {
    return (
      <div>
        <div className="form-group mb-4">
          <label>Filter Badges</label>
          <input
            type="text"
            className="form-control"
            value={query}
            onChange={e => {
              setQuery(e.target.value);
            }}
          />
        </div>
        <h3>No badges were found :c</h3>
        <Link className="btn btn-primary" to="/badgesRegistration/badges/new">
          Create new badge
        </Link>
      </div>
    );
  }
  return (
    <div className="BadgesList">
      <div className="form-group">
        <label>Filter Badges</label>
        <input
          type="text"
          className="form-control"
          value={query}
          onChange={e => {
            setQuery(e.target.value);
          }}
        />
      </div>
      <ul className="list-unstyled">
        {filteredBadges.map(badge => {
          return (
            <li key={badge.id}>
              <Link
                className="text-reset text-decoration-none"
                to={`/badgesRegistration/badges/${badge.id}`}
              >
                <BadgesListItem badge={badge} />
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default BadgesList;
