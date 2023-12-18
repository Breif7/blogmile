import React from 'react';
import Grid from '@mui/material/Grid';
import ProductCard from '../components/ProductCard';

function CatalogPage() {
  const products = [
    {
      id: 1,
      image: 'https://via.placeholder.com/150',
      description: 'Producto 1',
      price: 100,
    },
    {
      id: 2,
      image: 'https://via.placeholder.com/150',
      description: 'Producto 2',
      price: 200,
    },
  ];

  return (
    <div>
      <h1>Catálogo de Productos</h1>
      <Grid container spacing={2}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4}>
            <ProductCard
              image={product.image}
              description={product.description}
              price={product.price}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default CatalogPage;
