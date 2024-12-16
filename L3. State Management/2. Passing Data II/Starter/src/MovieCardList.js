import MovieCard from "./MovieCard";

const MovieCardList = ({users, movies, moviesUsers}) => {
    const movieCards = Object.keys(movies).map((movie) => { console.log("movie: " + movie);
        return (<MovieCard key = {movie} users={users} moviesUsers = {moviesUsers[movie]} movieName={movies[movie].name}/>
    )});
    return <ul>{movieCards}</ul>
}

export default MovieCardList;