import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

function ProductCard({ image, description, price }) {
  return (
    <Card>
      <CardMedia
        component="img"
        height="140"
        image={image}
        alt="Producto"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Precio: ${price}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default ProductCard;
