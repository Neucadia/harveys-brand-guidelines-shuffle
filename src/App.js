import React from 'react';
import {
  Routes,
  Route
} from 'react-router-dom';

import IndexPage from './pages/Index.js';
import ColorsPage from './pages/Colors.js';

function App() {
  return (
    <Routes>
      <Route path="/" element={<IndexPage />} />
         
      <Route path="/colors" element={<ColorsPage />} />
    </Routes>
  );
}

export default App;
