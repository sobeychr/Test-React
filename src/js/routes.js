import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const Home = () => <h1>Home</h1>;

const Test = () => <h2>Test</h2>;

const Routes = () => (
  <Router>
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/test">Test</Link>
      </nav>

      <Route exact path="/" component={Home} />
      <Route path="/test" component={Test} />
    </div>
  </Router>
);

export default Routes;
