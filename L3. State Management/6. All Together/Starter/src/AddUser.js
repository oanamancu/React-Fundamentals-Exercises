import { useState } from "react";

const AddUser = ({users, onAddUser}) => {
    const [user, setUser] = useState ({
      username: '',
      firstName: '',
      lastName: '',
      gamesCount: 0
    })

    const [userExists, setUserExists] = useState (false);

    const userAlreadyExists = (user) => {
        return users.filter(u => u.username === user.username).length === 0 ? false : true;
    }

    const handleUserSubmit = (event) => {
        event.preventDefault();
        setUserExists(userAlreadyExists(user));
        if(!userExists) {
            onAddUser(user);
            setUserExists(true);
        }
    }

    const isDisabled = () => {
        return user.firstName === '' || user.lastName === '' || user.username === '';
    }

    const handleInputChange = (event) => {
        const {name, value} = event.target;
        setUser({...user, [name]: value});
    }

    return (
        <div>
            <h1>New User</h1>
            <form onSubmit={handleUserSubmit}>
                <div>
                    <input
                        type = "text"
                        name="firstName"
                        placeholder="Enter First Name"
                        value={user.firstName}
                        onChange={handleInputChange}
                    />
                    <input
                        type = "text"
                        name="lastName"
                        placeholder="Enter Last Name"
                        value={user.lastName}
                        onChange={handleInputChange}
                    />
                    <input
                        type = "text"
                        name="username"
                        placeholder="Enter Username"
                        value={user.username}
                        onChange={handleInputChange}
                    />
                </div>
                <button disabled={isDisabled()}>Add</button>
            </form>
        </div>
    )
}

export default AddUser;