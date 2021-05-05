import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Containers/Home";
import Offer from "./Containers/Offer";

function App() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route path="/offer/:id">
                        <Offer />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
