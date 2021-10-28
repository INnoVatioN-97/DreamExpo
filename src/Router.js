import React from 'react';
import CentralMonitoring from './CentralMonitoring';
import LCDMonitor from './LCDMonitor';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

const AppRouter = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <CentralMonitoring />
                </Route>
                <Route exact path="/LCD">
                    <LCDMonitor />
                </Route>
            </Switch>
        </Router>
    );
};

export default AppRouter;
