import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./Containers/Home";
import Offer from "./Containers/Offer";
import Cookies from "js-cookie";
import Header from "./Components/Header";
import Signup from "./Containers/Signup";
import Login from "./Containers/Login";
import Publish from "./Containers/Publish";
import Payment from "./Containers/Payment";
import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe(
    "pk_test_51IpwLhAnDVZqZrIt5QrrxDPSmMAClzP5wMMB93brXD1FT7GNmHiVTNp8s6t3mZYE2UUHFtwJKNCUpxzvE9gi6O99001llPT3Wz"
);

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
        <Elements stripe={stripePromise}>
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
                    <Route path="/publish">
                        <Publish token={token} />
                    </Route>
                    <Route path="/payment">
                        <Payment token={token} />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </Router>
        </Elements>
    );
}

export default App;
