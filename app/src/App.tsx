import React, { useEffect } from 'react';
import './App.css';
import './scss/index.scss';
interface AppProps {}

function App({}: AppProps) {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('pwa/sw.js');
    }
  }, []);
  return (
    <div className="App">
      <h1>Hello From App</h1>
      <img src="/assets/HedgwigLogoLight.png" alt="" />
    </div>
  );
}

export default App;
