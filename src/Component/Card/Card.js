import React from 'react';
import {Link,Route} from "react-router-dom"; 

const Card = ({movies,query,rating}) => {
    console.log(rating,movies)
    return (

        <div className="cardlist__movies">
            {movies.filter((movie)=>movie.Title.toLowerCase()
    .includes(query.toString().toLowerCase())&& movie.Rating>=rating).map((movie, index) => (
                <div className="card" key={index}>
                
                    <img
                        className="movie__image"
                        src= {movie.Poster}
                        alt="postal"
                    />
                    
                    <div className="flex__card">
                        <h2>Title ({movie.Title})</h2>
                        <h2 style={{color: "dodgerblue"}}>Year ({movie.Year})</h2>
                        <h2 style={{color: "orangered"}}>{movie.Rating}</h2>
                        <br />
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Card;