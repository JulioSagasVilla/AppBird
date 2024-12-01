import React from 'react';
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button,
} from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

function AveCard({ ave }) {
  const {
    en, // Nombre en inglés (Nombre común)
    family, // Familia
    loc, // Ubicación
    rec, // Descubridor (Grabador)
    sono: { medium } = {}, // Imagen mediana
    file, // Archivo de audio
  } = ave;

  const imagenAve = medium || 'https://via.placeholder.com/300';

  const reproducirAudio = () => {
    const audio = new Audio(file);
    audio.play();
  };

  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        transition: 'transform 0.2s',
        '&:hover': {
          transform: 'scale(1.05)',
        },
      }}
    >
      <CardMedia
        component="img"
        image={imagenAve}
        alt={en}
        height="200"
      />
      <CardContent>
        <Typography variant="h5" component="div">
          {en}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <strong>Familia:</strong> {family}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <strong>Ubicación:</strong> {loc}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <strong>Descubridor:</strong> {rec}
        </Typography>
      </CardContent>
      {file && (
        <CardActions>
          <Button
            size="small"
            color="primary"
            onClick={reproducirAudio}
            startIcon={<PlayArrowIcon />}
          >
            Reproducir sonido
          </Button>
        </CardActions>
      )}
    </Card>
  );
}

export default AveCard;