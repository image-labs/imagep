import React from 'react';
import Navbar from '../navbar/navbar';
import { useAuth0 } from "../../commons/utils/auth0";

import './app.scss';

function App() {
  const { loading } = useAuth0();
  if (loading) {
    return (
      <div>Loading...</div>
    );
  }

  return (
    <div className="app">
      <header>
        <Navbar />
      </header>
    </div>
  );
}

export default App;
