import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Index from './page/index';
import Css from './page/css';
import Html from './page/html';
import Page404 from './page/page404';
import Timestamp from './page/timestamp';
import Youtube from './page/youtube';

const Routes = () => (
    <Router>
        <Switch>
            <Route exact path="/" component={Index} />
            <Route path="/css" component={Css} />
            <Route path="/html" component={Html} />
            <Route path="/timestamp" component={Timestamp} />
            <Route path="/youtube" component={Youtube} />
            <Route component={Page404} />
        </Switch>
    </Router>
);

export default Routes;
