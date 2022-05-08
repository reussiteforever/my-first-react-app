import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import SearchBar from "./SearchBar";

const API_URL = 'http://www.omdbapi.com/?apikey=e8db45';

const App = () => {

    const [movies, setMovies] = useState();
    const [searchTerm, setSearchTerm] = useState('');

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        setMovies(data.Search);
    }

    useEffect(()=>{
        searchMovies('Spiderman');
    }, []);

    return (
        <div className="app">
            <h1>kibeemiku</h1>

            <SearchBar 
                searchTerm={searchTerm} 
                setSearchTerm={setSearchTerm}
                searchMovies={searchMovies}
            />

            {
                movies?.length > 0
                ? (
                    <div className="container">
                        {
                            movies.map((movie) => (
                                <MovieCard movie={movie}/>
                            ))
                        }
                    </div>
                ) : (
                    <div className="enmpty">
                        <h2>No movies found</h2>
                    </div>
                )
                
            }
            
        </div>
    );
}

export default App;