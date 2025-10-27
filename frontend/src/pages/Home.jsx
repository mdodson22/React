import MovieCard from "../components/MovieCard"
import { useState } from "react";

function Home() {
    const [searchQuery, setSearchQuery] = useState("")


    const movies = [
        {id: 1, title: "The Princess Bride", release_date: "1987"}, /// Lesson One, The History of AI
        {id: 2, title: "Dead Poets Society", release_date: "1989"},
        {id: 3, title: "The Truman Show", release_date: "1998"},
        {id: 4, title: "About Time", release_date: "2013"}
    ]

    const handleSearch = () => {
        e.preventDefault()
        alert(searchQuery)
    }

    return (
        <div className="home">
            <form onSubmit={handleSearch} className="search-form">
                <input 
                type="text" 
                placeholder="Search for movies ..." 
                className="search-input"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                />
            </form>
            <button type="submit" className="search-button">Search</button>
            <div className="movies-grid-structure">
            {movies.map( // map of lessons, grid structure 
                (movie) => 
                // movie.title.toLowerCase().startsWith(searchQuery) && 
                    (<MovieCard movie={movie} key={movie.id} />
                    )
            )}
        </div>
    </div>
    );

}

    export default Home;