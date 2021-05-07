import axios from "axios";
import { useState } from "react";
// import Cookies from "js-cookie";
import { useHistory } from "react-router-dom";

const Login = ({ setToken, setLoginModal }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();

    const handleSubmit = async (event) => {
        event.preventDefault();
        const userInfos = {
            email,
            password,
        };

        const response = await axios.post(
            "https://vintedreplica.herokuapp.com/user/login",
            userInfos
        );

        setToken(response.data.token);
        history.push("/");
    };

    return (
        <div>
            <div
                className="behindModal"
                onClick={() => {
                    setLoginModal(false);
                }}
            ></div>
            <form onSubmit={handleSubmit} className="signup container modal">
                <h2>Se connecter</h2>

                <input
                    type="text"
                    placeholder="Adresse email"
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

                <button type="submit">Se connecter</button>
                <button>Pas encore de compte ? Inscris-toi!</button>
            </form>
        </div>
    );
};

export default Login;
