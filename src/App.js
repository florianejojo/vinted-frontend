import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Containers/Home";
import Offer from "./Containers/Offer";
import Cookies from "js-cookie";
import Header from "./Components/Header";
import Signup from "./Containers/Signup";

function App() {
    Cookies.set("testCookie", "123");
    Cookies.get("123");
    return (
        <Router>
            <Switch>
                <Route path="/offer/:id">
                    <Header />
                    <Offer />
                </Route>
                <Route path="/Signup">
                    <Header />
                    <Signup />
                </Route>
                <Route path="/">
                    <Header />
                    <Home />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
