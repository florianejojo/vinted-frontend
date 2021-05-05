import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Containers/Home";
import Offer from "./Containers/Offer";

function App() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route path="/offer">
                        <Offer>
                            <Link to="/">Home Link</Link>
                        </Offer>
                    </Route>
                    <Route path="/">
                        <Home></Home>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
