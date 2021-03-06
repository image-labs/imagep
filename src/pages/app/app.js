import React from 'react';
import Env from '../../commons/utils/env';
import { HashRouter, Route, Switch } from "react-router-dom";

import Navbar from '../../components/navbar/navbar';
import SignIn from '../sign-in/sign-in';

import Editor from '../editor/editor';
import Starred from '../starred-functions/starred-functions';
import Your from '../your-functions/your-functions';
import Gallery from '../gallery/gallery';

import './app.scss';

function App() {
  return (
      <div className={"app" + (Env.isTouch ? " is-touch" : "")}>
        <Navbar />
        <HashRouter basename='/'>
          <Switch>
            <Route path="/signin" component={SignIn} />

            <Route path="/starred" component={Starred} />
            <Route path="/your" component={Your} />
            <Route path="/gallery" component={Gallery} />

            <Route exact path="/:id?" component={Editor} />
          </Switch>
        </HashRouter>
      </div>
  );
}

export default App;
