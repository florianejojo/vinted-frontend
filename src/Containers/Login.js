import axios from "axios";
import { useState } from "react";
// import Cookies from "js-cookie";
import { useHistory } from "react-router-dom";

const Login = ({ setToken }) => {
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
        console.log(response.data.token);

        // setToken(response.data.token);
        setToken(response.data.token);

        // Cookies.set("token", token);

        history.push("/");
    };

    return (
        <form onSubmit={handleSubmit} className="signup container">
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
    );
};

export default Login;
