import React, { Fragment } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import './assets/css/style.css';
import './assets/vendors/css/vendor-bundle-base.css';
import './assets/vendors/mdi/css/materialdesignicons.min.css';
import Home from './layout/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
