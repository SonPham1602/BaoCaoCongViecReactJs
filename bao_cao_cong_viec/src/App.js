import React from "react";
import "./App.css";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage"
import Dashboard from './pages/Dashboard'
import PositionCompany from './pages/Choose.Position.Company'
import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { HashRouter as Router, Route, Switch } from "react-router-dom";
// import MyRouter from "./share/myrouter";

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
                        <Route exact path="/home" component={Dashboard}></Route>
                    </Switch>
                    
                </Router>            
            </div>
        );
    }
}


export default App;
