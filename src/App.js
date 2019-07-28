import React from "react";
import "./App.css";
import Moive from "./Movie";

const movieTitles = ["Matrix", "Full Metal Jacket", "Oldboy", "Star Wars"];
const movieImages = [
  "https://en.wikipedia.org/wiki/The_Matrix#/media/File:The_Matrix_Poster.jpg",
  "http://thumbnail.egloos.net/600x0/http://pds25.egloos.com/pds/201507/13/40/b0113440_55a2ef988b4f8.jpg",
  "http://movie.phinf.naver.net/20111222_177/1324537084439rmrVk_JPEG/movie_image.jpg",
  "http://moonhak.co.kr/home/wp-content/uploads/bookcover/%EC%8A%A4%ED%83%80%EC%9B%8C%EC%A6%88-%EC%94%A8%EB%84%A4%EC%95%84%ED%8A%B84_%ED%91%9C1_web.jpg"
];
function App() {
  return (
    <div className="App">
      <Moive title={movieTitles[0]} poster={movieImages[0]} />
      <Moive title={movieTitles[1]} poster={movieImages[1]} />
      <Moive title={movieTitles[2]} poster={movieImages[2]} />
      <Moive title={movieTitles[3]} poster={movieImages[3]} />
    </div>
  );
}

export default App;
