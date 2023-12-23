import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import ProductCard from '../components/ProductCard';


function loadProducts(setProducts) {
  fetch('http://localhost:8001/api/products')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(products => {
      setProducts(products);
    })
    .catch(error => {
      console.error('There has been a problem with your fetch operation:', error);
    });
}



function CatalogPage() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    loadProducts(setProducts);
  }, []);

  return (
    <div>
      <h1>Catálogo de Productos</h1>
      <Grid container spacing={2}>
        {products.map((product) => (
          <Grid item key={product.ProductId} xs={12} sm={6} md={4}>
            <ProductCard
              image={product.ImageURLs}
              description={product.Description}
              price={product.Price}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default CatalogPage;
