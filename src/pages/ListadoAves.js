import React, { useState, useEffect } from 'react';
import AveCard from '../components/AveCard';
import { Container, Typography, Grid, CircularProgress } from '@mui/material';

function ListadoAves() {
  const [aves, setAves] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://xeno-canto.org/api/2/recordings?query=cnt:guatemala')
      .then((response) => response.json())
      .then((data) => {
        setAves(data.recordings);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error al obtener los datos:', error);
        setLoading(false);
        alert('Ocurrió un error al obtener los datos de las aves.');
      });
  }, []);

  if (loading) {
    return (
      <Container sx={{ mt: 5, textAlign: 'center' }}>
        <CircularProgress />
        <Typography>Cargando...</Typography>
      </Container>
    );
  }

  return (
    <Container sx={{ mt: 5 }}>
      <Typography variant="h3" align="center" gutterBottom>
        Aves de Guatemala
      </Typography>
      <Grid container spacing={4}>
        {aves.map((ave) => (
          <Grid item key={ave.id} xs={12} sm={6} md={4} lg={3}>
            <AveCard ave={ave} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default ListadoAves;