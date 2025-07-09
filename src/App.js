// App.js

import React, { useState } from 'react';
import { useEffect } from 'react';
import './App.css';
import MovieCard from './MovieCard';

const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=3ac612e8';
const App = () => {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState([]);
    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        setMovies(data.Search);
    }
    useEffect(() => {
        searchMovies('Avengers');
    }, []);
    return (
        <div className="app">
            <h1>Movie Center</h1>

            <div className="search">
                <input
                    placeholder="Search for Movies"
                    value={searchTerm}
                    onChange={(e) => { setSearchTerm(e.target.value) }}
                />
                <img
                    src=
"https://media.geeksforgeeks.org/wp-content/uploads/20230626112934/search.png"
                    alt="search icon"
                    onClick={() => searchMovies(searchTerm)}
                />
            </div>

            {
                movies?.length > 0
                    ? (<div className="container">
                        {movies.map((movie) => (
                            <MovieCard movie={movie} />
                        ))}
                    </div>) : (
                        <div className="empty">
                            <h2>No Movies found</h2>
                        </div>
                    )
            }
        </div>
    );
}
export default App;