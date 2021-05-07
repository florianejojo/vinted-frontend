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
            <Header
                userConnected={userConnected}
                setToken={setToken}
                signupModal={signupModal}
                setSignupModal={setSignupModal}
            />
            <Switch>
                <Route path="/offer/:id">
                    <Offer />
                </Route>
                {/* <Route path="/Signup">
                    <Signup />
                </Route> */}
                <Route path="/Login">
                    <Login setToken={setToken} />
                </Route>
                <Route path="/">
                    {signupModal && <Signup setSignupModal={setSignupModal} />}

                    <Home />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
