import React, { Component } from "react";
import "./App.css";
import Movie from "./Movie";

class App extends Component {
  state = {
    movies: [
      {
        title: "Matrix",
        poster:
          "https://ww.namu.la/s/55124e2f2db85e2884d6215ef8ae5a74481a740eb4909053f9b2167da422c8f88284dc6c339eebc2e3f07588defcdf6c44470195281490d953087875ea5a9a94735f95fbd119bb887e79fa6174802369aedc1a2b565f1317f73e8f9853a31983"
      },
      {
        title: "Full Metal Jacket",
        poster:
          "http://thumbnail.egloos.net/600x0/http://pds25.egloos.com/pds/201507/13/40/b0113440_55a2ef988b4f8.jpg"
      },
      {
        title: "Oldboy",
        poster:
          "http://movie.phinf.naver.net/20111222_177/1324537084439rmrVk_JPEG/movie_image.jpg"
      },
      {
        title: "Star Wars",
        poster:
          "http://moonhak.co.kr/home/wp-content/uploads/bookcover/%EC%8A%A4%ED%83%80%EC%9B%8C%EC%A6%88-%EC%94%A8%EB%84%A4%EC%95%84%ED%8A%B84_%ED%91%9C1_web.jpg"
      }
    ]
  };
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        movies: [
          ...this.state.movies,
          {
            title: "Transpotting",
            poster:
              "https://upload.wikimedia.org/wikipedia/en/7/71/Trainspotting_ver2.jpg"
          }
        ]
      });
    }, 1000);
  }
  render() {
    return (
      <div className="App">
        {this.state.movies.map((movie, index) => {
          return (
            <Movie title={movie.title} poster={movie.poster} key={index} />
          );
        })}
      </div>
    );
  }
}

export default App;
