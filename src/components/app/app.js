import React from 'react';
import { Router } from "@reach/router"

import Navbar from '../navbar/navbar';
import Home from '../home/home';
import Starred from '../starred-functions/starred-functions';
import Your from '../your-functions/your-functions';
import SignIn from '../sign-in/sign-in';

import './app.scss';

function App() {
  return (
      <div className="app">
        <Navbar />
        <Router>

          <Home path="/"/>
          <Starred path="starred"/>
          <Your path="your"/>

          <SignIn path="signin"/>

        </Router>
      </div>
  );
}

export default App;
