import React from 'react';
import { Main } from './components/main';
import { NavBar } from './components/NavBar';
import './scss/index.scss';
interface AppProps {}

function App({}: AppProps) {
  return (
    <div className="App">
      <NavBar />
      <Main />
    </div>
  );
}

export default App;
