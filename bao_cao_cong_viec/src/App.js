import React from "react";
import "./App.css";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage"
import Dashboard from './pages/Dashboard'
import PositionCompany from './pages/Choose.Position.Company'

import { HashRouter as Router, Route, Switch } from "react-router-dom";

class App extends React.Component{
    constructor()
    {
        super()
        this.state = {
            user:{

            },

        }
    }
    
    render(){
        return (
            <div className="App">
                <Router>
                    <Switch>
                        <Route exact path="/" component={LoginPage}></Route>
                        <Route exact path="/register" component={RegisterPage}></Route>
                        <Route exact path="/position" component={PositionCompany}></Route>
                        <Route exact path="/dashboard" component={Dashboard}></Route>
                    </Switch>
                    
                </Router>
            
            </div>
        );
    }
}


export default App;
