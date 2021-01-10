import './App.css';
import {BrowserRouter as Router, Switch, Link, Route} from "react-router-dom";
import About from "./components/About";
import Login from "./components/Login";
import CandidateList from "./components/CandidateList";
import Candidate from "./components/Candidate";

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <About/>
                </Route>
                <Route path="/login">
                    <Login/>
                </Route>
                <Route path="/kandidati">
                    <CandidateList/>
                </Route>
                <Route path="/kandidat/:id">
                    <Candidate/>
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
