import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navigation from './navigation';

import Index from './pages/index';

const Test = () => <h2>Test</h2>;

const Routes = () => (
  <Router>
    <div>
      <Navigation />

      <Route exact path="/" component={Index} />
      <Route path="/test" component={Test} />
    </div>
  </Router>
);

export default Routes;
