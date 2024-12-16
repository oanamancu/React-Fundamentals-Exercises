const ListFavoritesMoviesByPerson = ({profiles, users, movies}) => (
    <ol>
        {
            profiles.map( profile => {
                const userName =  users[profile.userID].name;
                const favMovie = movies[profile.favoriteMovieID].name;

                return (
                    <li key = {profile.id}>
                        <p>{`${userName}'s favorite movie is ${favMovie}`}</p>
                    </li>
                )
            })
        }
    </ol>
)

export default ListFavoritesMoviesByPerson;