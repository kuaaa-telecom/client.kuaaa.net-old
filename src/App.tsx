import React from 'react';
import LoginBox from "./components/Login/LoginBox";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import LoginPage from "./pages/LoginPage";

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path={"/"} component={LoginPage}/>
            </Switch>
        </Router>
    );
}

export default App;
