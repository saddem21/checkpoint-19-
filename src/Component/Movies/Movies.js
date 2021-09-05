import React, { useState } from "react";
import Header from "../Header/Header";
import axios from "axios";
import "./Movies.css";
import film4 from "./film1.jpg";
import StarRatingComponent from "react-star-rating-component";
import film5 from "./film2.jpg";
import film6 from "./film3.jpg";
import Movieadd from "./Movieadd";

const Movies = () => {

  const [movies, setMovies] = useState([
    { Id: 1,Poster: film4, Title: "Les misérables", Year: "2019", Rating: 7 },
    { Id: 2,
      Rating: 7,
      Poster: film5,
      Title: "Drunk",
      Year: "2020",
    },
    { Id: 3,Poster: film6,Title:"Rocketman",Year: "2019", Rating:6}
  ]);
  const [query, setQuery] = useState("");
  console.log(query);
 
  const [rating, setRating] = useState(0);

  const ratefunc = (nextvalue) => {
    setRating(nextvalue);
  };
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const addMovie= (movie)=>{ setMovies(movies.concat(movie))}
  return (
    <div className="shoppies">
      <button className="button1" style={{border: "4px solid maroon"}} onClick={handleShow}>Add a new movie</button>
      <Header
        query={query}
        setQuery={setQuery}
        movies={movies}
        rating={rating}
      />
      {/*Display movies*/}
      <StarRatingComponent
        name="rate1"
        starCount={10}
        value={rating}
        onStarClick={(nextvalue) => ratefunc(nextvalue)}
      />
      <Movieadd
      handleClose={handleClose} show={show} addMovie={addMovie}/>
    </div>
  );
};

export default Movies;
