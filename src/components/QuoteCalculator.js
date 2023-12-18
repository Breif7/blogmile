import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';

function QuoteCalculator() {
  const [dimensions, setDimensions] = useState({
    length: 0,
    width: 0,
    height: 0
  });
  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    setDimensions({
      ...dimensions,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { length, width, height } = dimensions;
    const multiplicationResult = length * width * height;
    setResult(multiplicationResult);
  };

  return (
    <div>
      <h1>Cotizador</h1>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Largo (cm)"
          type="number"
          name="length"
          value={dimensions.length}
          onChange={handleChange}
          margin="normal"
        />
        <TextField
          label="Ancho (cm)"
          type="number"
          name="width"
          value={dimensions.width}
          onChange={handleChange}
          margin="normal"
        />
        <TextField
          label="Alto (cm)"
          type="number"
          name="height"
          value={dimensions.height}
          onChange={handleChange}
          margin="normal"
        />
        <Button type="submit" variant="contained" color="primary">
          Calcular
        </Button>
      </form>
      {result !== null && (
        <div>
          <h2>Resultado</h2>
          <p>{result} cm³</p>
        </div>
      )}
    </div>
  );
}

export default QuoteCalculator;
