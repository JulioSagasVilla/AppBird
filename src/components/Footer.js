import React from 'react';
import { Box, Typography } from '@mui/material';

function Footer() {
  return (
    <Box
      sx={{
        mt: 'auto',
        py: 2,
        backgroundColor: 'primary.main',
        color: 'white',
        textAlign: 'center',
      }}
    >
      <Typography variant="body1">
        Desarrollado por Julio Sagastume Villavicencio - Número de Carnet: 23004956
      </Typography>
    </Box>
  );
}

export default Footer;