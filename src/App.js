import React from 'react';
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Root from './routes/Root';
import Login from './routes/Login';
import PrivateRoute from "./common/PrivatRoute";

const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <PrivateRoute component={Root} exact path="/"/>
                <Route component={Login} exact path="/login" />
            </Switch>
        </BrowserRouter>
    );
 };

export default App;
