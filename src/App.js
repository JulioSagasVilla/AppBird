import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import Inicio from './pages/Inicio';
import ListadoAves from './pages/ListadoAves';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/aves" element={<ListadoAves />} />
        </Routes>
        <Footer />
      </Box>
    </Router>
  );
}

export default App;