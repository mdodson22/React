import MovieCard from "../components/MovieCard"

function Home() {
    const movies = [
        {id: 1, title: "The Princess Bride", release_date: "1987"},
        {id: 2, title: "Dead Poets Society", release_date: "1989"},
        {id: 3, title: "The Truman Show", release_date: "1998"},
        {id: 4, title: "About Time", release_date: "2013"}
    ]

    const handle = () => {

    }

    return (
        <div className="home">
            <form onSubmit={handleSearch} className="search-form">
                <input type="text" placeholder="Search for movies ..." className="search-input"/>
            </form>
            <div className="movies-grid-structure">
            {movies.map((movie) => (<MovieCard movie={movie} key={movie.id} />
            ))}
        </div>
    </div>
    );

}

    export default Home;