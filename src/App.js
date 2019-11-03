import React from 'react';
import { Switch, BrowserRouter } from 'react-router-dom';
import { Root, Login, Registration } from './routes';
import PrivateRoute from './common/components/PrivatRoute';
import PublicOnlyRoute from './common/components/PublicOnlyRoute';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <PrivateRoute component={Root} exact path="/" />
        <PublicOnlyRoute component={Login} exact path="/login" />
        <PublicOnlyRoute component={Registration} exact path="/registration" />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
