import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Index from './pages/index';
import Css from './pages/css';
import Html from './pages/html';

const Routes = () => (
    <Router>
        <div>
            <Route exact path="/" component={Index} />
            <Route path="/css" component={Css} />
            <Route path="/html" component={Html} />
        </div>
    </Router>
);

export default Routes;
