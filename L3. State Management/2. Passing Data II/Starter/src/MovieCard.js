const MovieCard = ({users, movieName, moviesUsers}) => {
    console.log("id: " + movieName);
    return (
    <li key = {movieName}>
        <h3>{movieName}</h3>
        <p>Liked By: 
            {moviesUsers !== undefined ? moviesUsers.map(id => ` ${users[id].name} |` ) : ''}
        </p>
    </li>
)}

export default MovieCard;