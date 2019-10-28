import React from 'react';
import { Router } from "@reach/router"

import Navbar from '../navbar/navbar';
import Home from '../home/home';
import Starred from '../starred/starred';
import Your from '../your/your';

import './app.scss';

function App() {
  return (
      <div className="app">
        <Navbar />
        <Router>
          <Home path="/"/>
          <Starred path="starred"/>
          <Your path="your"/>
        </Router>
      </div>
  );
}

export default App;
