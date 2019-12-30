import React from "react";

import "./styles/BadgesList.css";

import Loader from "./Loader";

class BadgesList extends React.Component {
  state = {
    nextPage: 1,
    loading: true,
    error: null,
    data: {
      results: []
    }
  };

  componentDidMount() {
    this.fetchCharacters();
  }

  fetchCharacters = async () => {
    this.setState({ loading: true, error: null });

    try {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character/?page=${this.state.nextPage}`
      );
      const data = await response.json();

      this.setState({
        loading: false,
        data: {
          info: data.info,
          results: [].concat(this.state.data.results, data.results)
        },
        nextPage: this.state.nextPage + 1
      });
    } catch (error) {
      this.setState({
        loading: false,
        error: error
      });
    }
  };

  render() {
    if (this.state.error) {
      return `Error: ${this.state.error.message}`;
    }
    return (
      <div className="container BadgesList">
        {this.state.data.results.map(character => {
          return (
            <div className="row BadgesListItem mb-3" key={character.id}>
              <div className="col-3">
                <img
                  src={character.image}
                  className="img-fluid BadgesListItem__avatar"
                  alt="avatarPerson"
                ></img>
              </div>
              <div className="col-9">
                <ul className="list-unstyled">
                  <li>
                    <h6 className="font-weight-bold">{character.name}</h6>
                    <h6 className="BadgesListItem__twitter">
                      <span>{character.species}</span>
                    </h6>
                    <h6>{character.origin.name}</h6>
                    <h6>{character.status}</h6>
                  </li>
                </ul>
              </div>
            </div>
          );
        })}

        {this.state.loading && (
          <div className="loader container">
            <Loader />
          </div>
        )}

        {!this.state.loading && (
          <button
            className="btn btn-secondary"
            onClick={() => this.fetchCharacters()}
          >
            Load more
          </button>
        )}
      </div>
    );
  }
}

export default BadgesList;
