import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import MainList from './pages/MainList';
import Followed from './pages/Followed';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ContextCart, { CartElement } from './context';

function Main() {
  const [cart, setCart] = useState<CartElement[]>([])

  return (
      <ContextCart.Provider value={{cart, setCart}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/MainList" element={<MainList  />} />
          <Route path="/Followed" element={<Followed />} />
          <Route path="*" element={<App/>} />
        </Routes>
      </BrowserRouter>
      </ContextCart.Provider>
  )
}


const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <Main/>
);

