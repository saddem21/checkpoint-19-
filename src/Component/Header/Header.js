import React, { Fragment } from 'react';
import './Header.css';
import Card from '../Card/Card';



const Header = ({ searchMovie, query, setQuery, movies,rating }) => {
    return (
        <Fragment>
            <div className="header">
                <h1 className="title">Movie-search</h1>

                {/*Search form*/}

                <div className="search">
                    <form className="search-form"  >
                        <label
                            htmlFor="query"
                            className="name"
                        >
                        </label>
                        <input
                            type="text"
                            name="query"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                        />
                        <button type="submit" onSubmit={searchMovie}>Search</button>
                    </form>
                </div>
            </div>

            <div className="list-movie">
                <Card movies={movies} query={query} rating={rating}/>
            </div>
        </Fragment>
    )

    
}

export default Header;