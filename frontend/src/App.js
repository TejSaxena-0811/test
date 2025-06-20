import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import ProductSpec from './pages/ProductSpec';
import ArchitectureUpload from './components/ArchitectureUpload'; // Import the new component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product-spec" element={<ProductSpec />} />
        <Route path="/architecture" element={<ArchitectureUpload />} /> {/* New Route */}
      </Routes>
    </Router>
  );
}

export default App;
