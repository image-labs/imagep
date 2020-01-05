import React from 'react';
import { HashRouter, Route } from "react-router-dom";

import Navbar from '../navbar/navbar';
import SignIn from '../sign-in/sign-in';

import Home from '../home/home';
import Starred from '../starred-functions/starred-functions';
import Your from '../your-functions/your-functions';
import Gallery from '../gallery/gallery';

import './app.scss';

function App() {
  return (
      <div className="app">
        <Navbar />
        <HashRouter basename='/'>

          <Route exact path="/" component={Home} />
          <Route path="/starred" component={Starred} />
          <Route path="/your" component={Your} />
          <Route path="/gallery" component={Gallery} />

          <Route path="/signin" component={SignIn} />

        </HashRouter>
      </div>
  );
}

export default App;
