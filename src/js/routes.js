import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Index from './pages/index';
import Test from './pages/test';

const Routes = () => (
  <Router>
    <div>
      <Route exact path="/" component={Index} />
      <Route path="/test" component={Test} />
    </div>
  </Router>
);

export default Routes;
