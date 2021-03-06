import axios from "axios";
import { useState } from "react";

const Login = ({
    emailFromCookies,
    setCookie,
    setLoginModal,
    setSignupModal,
}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

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
        console.log("ok");
        setCookie("Token", response.data.token);
        setCookie("Email", email);
        setLoginModal(false);
    };

    return (
        <div>
            <div
                className="behindModal"
                onClick={() => {
                    setLoginModal(false);
                }}
            ></div>
            <form onSubmit={handleSubmit} className="container modal">
                <h2>Se connecter</h2>

                <input
                    type="text"
                    placeholder="Adresse email"
                    // value={emailFromCookies}
                    onChange={(event) => {
                        setEmail(event.target.value);
                        console.log(email);
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
                <p
                    className="link"
                    onClick={() => {
                        setLoginModal(false);
                        setSignupModal(true);
                    }}
                >
                    Pas encore de compte ? Inscris-toi!
                </p>
            </form>
        </div>
    );
};

export default Login;
