import React, { useState } from "react";
import Header from "../Header/Header";
import axios from "axios";
import "./Movies.css";
import film4 from "./film1.jpg";
import StarRatingComponent from "react-star-rating-component";
import { Button, Modal } from "react-bootstrap";
import film5 from "./film2.jpg";
import film6 from "./film3.jpg";

const Movies = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [movies, setMovies] = useState([
    { Poster: film4, Title: "Les misérables", Year: "2019", Rating: 7 },
    {
      Rating: 7,
      Poster: film5,
      Title: "Drunk",
      Year: "2020",
    },
    {Poster: film6,Title:"Rocketman",Year: "2019", Rating:6}
  ]);
  const [query, setQuery] = useState("");
  console.log(query);
  const addmovie=(addedmovie)=>{
    setMovies([...movies,addedmovie])
  }
  const [rating, setRating] = useState(0);

  const ratefunc = (nextvalue) => {
    setRating(nextvalue);
  };
  const [addedmovie,setAddedmovie]= useState({Poster:"",Title:"",Year:"",Rating:""})
  const handlechange=(e)=>{setAddedmovie({...addedmovie,[e.target.name]:e.target.value})}

console.log(addedmovie)
  /* const searchMovie = async (e) => {
        e.preventDefault();

        const API_KEY = "f2384efa";
        const apiURI = `http://www.omdbapi.com/?i=tt3896198&apikey=f2384efa`;

        try {
            const response = await axios.get(apiURI);
            const data = response.data.Search
            console.log(data)
            setMovies(data);

        } catch (err) {
            console.error(err);
        }
    }

    console.log(movies, "movies");

 */
  return (
    <div className="shoppies">
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
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>
      <div >
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <label> poster<input type="text" onchange={handlechange} name="Poster"/></label>
              <br/>
              <label> title<input type="text" onchange={handlechange} name="Title"/></label>
              <br/>
              <label> year<input type="text" onchange={handlechange} name="Year"/></label>
              <br/>
              <label> rating<input type="text" onchange={handlechange} name="Rating"/></label>
              <br/>

          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={()=>{handleClose()
            ;
            addmovie(addedmovie);
            setAddedmovie({Poster:"",Title:"",Year:"",Rating:""})
}
            }>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};

export default Movies;
