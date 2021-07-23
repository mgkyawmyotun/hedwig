import React, { useEffect } from 'react';
import { Main } from './components/Main';
import { NavBar } from './components/NavBar';
import './scss/index.scss';
import { setDefaultMode } from './utils';
interface AppProps {}

function App({}: AppProps) {
  useEffect(() => {
    setDefaultMode();
  }, []);
  return (
    <div className="App">
      <NavBar />
      <Main />
    </div>
  );
}

export default App;
