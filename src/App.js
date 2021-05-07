import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Containers/Home";
import Offer from "./Containers/Offer";
import Cookies from "js-cookie";
import Header from "./Components/Header";
import Signup from "./Containers/Signup";
import Login from "./Containers/Login";
import { useState } from "react";

function App() {
    const [token, setToken] = useState(Cookies.get("Token"));
    const [emailFromCookies, setEmailFromCookies] = useState(
        Cookies.get("Email")
    );

    const [signupModal, setSignupModal] = useState(false);
    const [loginModal, setLoginModal] = useState(false);

    const setCookie = (cookieName, cookieValue) => {
        if (cookieValue) {
            Cookies.set(cookieName, cookieValue);
            if (cookieName === "Token") setToken(cookieValue);
            if (cookieName === "Email") setEmailFromCookies(cookieValue);
        } else {
            Cookies.remove("Token");
            setToken(null);
        }
    };

    return (
        <Router>
            {signupModal && (
                <Signup
                    setSignupModal={setSignupModal}
                    setLoginModal={setLoginModal}
                />
            )}
            {loginModal && (
                <Login
                    setSignupModal={setSignupModal}
                    setLoginModal={setLoginModal}
                    setCookie={setCookie}
                    emailFromCookies={emailFromCookies}
                />
            )}

            <Header
                token={token}
                setCookie={setCookie}
                signupModal={signupModal}
                setSignupModal={setSignupModal}
                loginModal={loginModal}
                setLoginModal={setLoginModal}
            />
            <Switch>
                <Route path="/offer/:id">
                    <Offer />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
