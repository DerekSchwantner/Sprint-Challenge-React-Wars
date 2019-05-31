import React, { Component } from "react";
import "./App.css";
import CharList from "./components/CharList";

import "./components/StarWars.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      previousPage: "",
      nextPage: "",
      currentPage: `https://swapi.co/api/people/?page=1`
    };
  }

  componentDidMount() {
    this.getCharacters("https://swapi.co/api/people/");
  }

  getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({
          starwarsChars: data.results,
          previousPage: data.previous,
          nextPage: data.next
        });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  nextPage = () => {
    if (this.state.nextPage === null) {
      this.getCharacters(this.state.currentPage);
    } else {
      this.getCharacters(this.state.nextPage);
    }
  };

  previousPage = () => {
    if (this.state.previousPage === null) {
      this.getCharacters(this.state.currentPage);
    } else {
      this.getCharacters(this.state.previousPage);
    }
  };

  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <div className="button-container">
          <button className="btn" onClick={this.previousPage}>
            Previous Page
          </button>
          <button className="btn" onClick={this.nextPage}>
            Next Page
          </button>
        </div>
        <CharList chars={this.state.starwarsChars} />
      </div>
    );
  }
}

export default App;
