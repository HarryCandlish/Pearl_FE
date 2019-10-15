import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'

import Navigation from './layout/Navigation'

function App() {
  return (
    <Router>
      <Navigation/>
    </Router>
  );
}

export default App;
