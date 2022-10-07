import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./style.css"
import Home from './pages/Home';
import Estoque from './pages/Estoque';
import Historico from './pages/Historico';
import Metricas from './pages/Metricas';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
         <Route path="/" element={<Home/>} />
         <Route path="estoque" element={<Estoque/>} />
         <Route path="historico" element={<Historico/>} />]
         <Route path="metricas" element={<Metricas/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

