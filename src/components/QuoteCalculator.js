import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';

function QuoteCalculator() {
  // Inicializa el estado con strings para simplificar el manejo de los campos vacíos
  const [dimensions, setDimensions] = useState({
    length: '1',
    width: '1',
    height: '1'
  });
  const [result, setResult] = useState('');

  const handleChange = (e) => {
    setDimensions({
      ...dimensions,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Convierte los valores a números y calcula el resultado
    const lengthNum = Number(dimensions.length);
    const widthNum = Number(dimensions.width);
    const heightNum = Number(dimensions.height);
    if (!isNaN(lengthNum) && !isNaN(widthNum) && !isNaN(heightNum)) {
      const multiplicationResult = lengthNum * widthNum * heightNum;
      setResult(multiplicationResult);
    } else {
      setResult('Error en los datos ingresados');
    }
  };

  return (
    <div>
      <h1>Cotizador</h1>
      <form onSubmit={handleSubmit}>
        <TextField
          data-testid="input-length"
          label="Largo (cm)"
          type="number"
          name="length"
          value={dimensions.length}
          onChange={handleChange}
          margin="normal"
        />
        <TextField
          data-testid="input-width"
          label="Ancho (cm)"
          type="number"
          name="width"
          value={dimensions.width}
          onChange={handleChange}
          margin="normal"
        />
        <TextField
          data-testid="input-height"
          label="Alto (cm)"
          type="number"
          name="height"
          value={dimensions.height}
          onChange={handleChange}
          margin="normal"
        />
        <Button data-testid="submit-button" type="submit" variant="contained" color="primary">
          Calcular
        </Button>
      </form>
      <div data-testid="result">
        <h2>Resultado</h2>
        <p>{result} cm³</p>
      </div>
    </div>
  );
}

export default QuoteCalculator;
