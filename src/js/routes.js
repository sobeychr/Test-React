import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Index from './pages/index';

const Routes = () => (
  <Router>
    <div>
      <Route exact path="/" component={Index} />
    </div>
  </Router>
);

export default Routes;
