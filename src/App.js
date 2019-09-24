import React from 'react';
import { Switch, BrowserRouter } from "react-router-dom";
import Root from './routes/Root';
import Login from './routes/Login';
import PrivateRoute from "./common/components/PrivatRoute";
import PublicOnlyRoute from "./common/components/PublicOnlyRoute";

const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <PrivateRoute component={Root} exact path="/"/>
                <PublicOnlyRoute component={Login} exact path="/login" />
            </Switch>
        </BrowserRouter>
    );
 };

export default App;
