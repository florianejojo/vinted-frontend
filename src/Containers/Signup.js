import { useState } from "react";
import axios from "axios";

const Signup = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    //

    const handleSubmit = async (event) => {
        event.preventDefault();
        const userInfos = {
            email,
            username,
            password,
            // phone: "",
            // avatar: "",
        };
        console.log(userInfos);
        const response = await axios.post(
            "https://vintedreplica.herokuapp.com/user/signup",
            { userInfos }
        );
        console.log(response.data);
    };

    // console.log(name);

    return (
        <form onSubmit={handleSubmit} className="signup container">
            <h2>S'inscrire</h2>

            <input
                type="text"
                placeholder="Nom d'utilisateur"
                onChange={(event) => {
                    setUsername(event.target.value);
                }}
            />
            <input
                type="text"
                placeholder="Email"
                onChange={(event) => {
                    setEmail(event.target.value);
                }}
            />
            <input
                type="text"
                placeholder="Mot de passe"
                onChange={(event) => {
                    setPassword(event.target.value);
                }}
            />
            <div>
                <input type="checkbox" />
                <p>S'inscrire à notre Newsletter</p>
            </div>

            <button type="submit">S'inscrire</button>

            <button>Tu as déjà un compte, connecte-toi</button>
        </form>
    );
};

export default Signup;
