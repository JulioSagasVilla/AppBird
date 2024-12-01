import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
} from '@mui/material';

function Inicio() {
  const [nombreCompleto, setNombreCompleto] = useState('');
  const [numeroCarnet, setNumeroCarnet] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nombreCompleto && numeroCarnet) {
      navigate('/aves');
    } else {
      alert('Por favor, completa todos los campos.');
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 5 }}>
      <Typography variant="h3" align="center" gutterBottom>
        Inicio
      </Typography>
      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
        <TextField
          label="Nombre Completo"
          variant="outlined"
          fullWidth
          margin="normal"
          value={nombreCompleto}
          onChange={(e) => setNombreCompleto(e.target.value)}
        />
        <TextField
          label="Número de Carnet"
          variant="outlined"
          fullWidth
          margin="normal"
          value={numeroCarnet}
          onChange={(e) => setNumeroCarnet(e.target.value)}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          size="large"
          sx={{
            mt: 2,
            transition: 'transform 0.2s',
            '&:active': {
              transform: 'scale(0.95)',
            },
          }}
        >
          Cargar
        </Button>
      </Box>
    </Container>
  );
}

export default Inicio;