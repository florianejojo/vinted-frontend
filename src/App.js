import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Containers/Home";
import Offer from "./Containers/Offer";
import Cookies from "js-cookie";
import Header from "./Components/Header";
import Signup from "./Containers/Signup";
import Login from "./Containers/Login";
import { useState } from "react";

function App() {
    const [userConnected, setUserConnected] = useState(Cookies.get("Token"));
    const [signupModal, setSignupModal] = useState(false);
    const [loginModal, setLoginModal] = useState(false);

    const setToken = (token) => {
        if (token) {
            Cookies.set("Token", token);
            setUserConnected(token);
        } else {
            Cookies.remove("Token");
            setUserConnected(null);
        }
    };

    return (
        <Router>
            {signupModal && <Signup setSignupModal={setSignupModal} />}
            {loginModal && <Login setLoginModal={setLoginModal} />}

            <Header
                userConnected={userConnected}
                setToken={setToken}
                signupModal={signupModal}
                setSignupModal={setSignupModal}
                loginModal={loginModal}
                setLoginModal={setLoginModal}
            />
            <Switch>
                <Route path="/offer/:id">
                    <Offer />
                </Route>
                {/* <Route path="/Login">
                    <Login setToken={setToken} />
                </Route> */}
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
