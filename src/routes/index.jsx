import React from "react";
import { Switch, Route } from 'react-router-dom';

import Home from '../views/components/Home/Home'
import { GuestRoute, PrivateRoute } from '../state/util/route';

import SignupContainer from '../views/components/Session/SignupContainer';
import LoginContainer from '../views/components/Session/LoginContainer';
import MainContainer from '../views/components/Main/MainContainer';

const App = () => {
    return (
    <Switch>
        <Route exact path="/" component={Home} />
        <GuestRoute exact path="/login" component={LoginContainer} />
        <GuestRoute exact path="/signup" component={SignupContainer} />
        <PrivateRoute exact path="/app" component={MainContainer} />
    </Switch>
    );
}

export default App;