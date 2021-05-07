import { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";

const Signup = ({ setSignupModal }) => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [token, setToken] = useState("");
    // const [checkB, setCheckB] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const userInfos = {
            email,
            username,
            password,
        };

        const response = await axios.post(
            "https://vintedreplica.herokuapp.com/user/signup",
            userInfos
        );
        setToken(response.data.token);
        Cookies.set("token", token);
    };

    console.log(token);

    return (
        <div>
            <div
                className="behindModal"
                onClick={() => {
                    setSignupModal(false);
                }}
            ></div>
            <form onSubmit={handleSubmit} className="modal">
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
                    type="password"
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
        </div>
    );
};

export default Signup;
