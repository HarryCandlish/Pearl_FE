import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'

import Navigation from './layout/Navigation'
import Home from './pages/Home'

function App() {
  return (
    <Router>
      <Navigation/>
      <Route exact path='/' component={Home}/>
    </Router>
  );
}

export default App;
