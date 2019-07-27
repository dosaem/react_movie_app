import React, { Component } from "react";
import "./Movie.css";

class Movie extends Component {
  render() {
    return (
      <div>
        <MoviePoster />
        <h1>hello this is a moive</h1>
      </div>
    );
  }
}

class MoviePoster extends Component {
  render() {
    return (
      <img src="https://upload.wikimedia.org/wikipedia/en/9/9d/Mockingjay_Part_2_Poster.jpg" />
    );
  }
}

export default Movie;
