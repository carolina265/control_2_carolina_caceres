import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Plantilla from './componentes/Plantilla';
import Datos from './componentes/Datos';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Plantilla />} />
        <Route path="/otra" element={<Datos />} />
      </Routes>
    </Router>
  );
}

export default App;
