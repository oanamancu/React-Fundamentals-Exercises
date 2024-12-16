import PropTypes from "prop-types";

const User = ({user, showGames}) => (
    <li className="user">
        <p>Username: {user.username}</p>
        <p>Games: {showGames ? user.gamesCount : '*'}</p>
    </li>
)

User.propTypes = {
    user: PropTypes.object.isRequired,
    showGames: PropTypes.bool.isRequired
}

export default User;