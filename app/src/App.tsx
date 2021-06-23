import React from 'react';
import './App.css';
import './scss/index.scss';
interface AppProps {}

function App({}: AppProps) {
  return (
    <div className="App">
      <h1>Hello From App</h1>
      <img src="/assets/HedgwigLogoLight.png" alt="" />
    </div>
  );
}

export default App;
