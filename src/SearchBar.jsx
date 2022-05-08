import React from "react";

const SearchBar = ({searchTerm, setSearchTerm, searchMovies}) => {
    return(
        <div className="search">
            <input placeholder="Search for movies"
                value={searchTerm}
                onChange={(e)=> setSearchTerm(e.target.value)}
            />
            
            <button onClick={() => searchMovies(searchTerm)}>
                Search
            </button>
        </div>
    );
}



export default SearchBar;