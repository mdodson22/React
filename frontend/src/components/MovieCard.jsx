// step #1: define a function 
//step #2: add props (e.g., {movie})
// step #3: define class name (e.g. "movie-card") (in JSX, rather than using class, which is a reserved keyword in JavaScript, use className so no conflicts)
function MovieCard({movie}) { // movie is an object, information about movie 
    
    function onClick() { // any time "favorite-btn" is pressed, function called
        alert("clicked")
    }
    
    return 

    <div className="movie-card">
        <div className="movie-poster">
            <img src={movie.url} alt={movie.title} />
            <div className="movie-overlay">
                <button className="favorite-btn" onClick={onClick}>
                    ❤︎
                </button>
            </div>
        </div>
        <div className="movie-info">
            <h3>{movie.title}</h3> 
            <p>{movie.release_date}</p>
        </div>
    </div>
}

export default MovieCard