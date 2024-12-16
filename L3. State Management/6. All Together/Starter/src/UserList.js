import PropTypes from "prop-types";
import User from "./User";
import { useState } from "react";

const UserList = ({users}) => {
    const [showGames, setShowGames] = useState(true);

    const toggleGamesPlayed = () => {
        setShowGames(!showGames);
    }

    const gamesPlayedButton = (
        <div>
            <button className="smallButton" onClick={toggleGamesPlayed}>
                {showGames ? 'Hide ' : 'Show '}
                the Number of Games Played
            </button>
        </div>
    );

    return (
        <div>
            {users && users.length ? gamesPlayedButton : ""}
            <h1>Users</h1>
            <ol>
                {users.map((user) => (
                    <User key={user.username} user={user} showGames={showGames}/>
                ))}
            </ol>
        </div>
    )
}

UserList.propTypes = {
    users: PropTypes.array.isRequired
}

export default UserList;