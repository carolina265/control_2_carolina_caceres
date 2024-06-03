import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Plantilla.css';
import gatoImage from './gatito.jpg'; // Importa la imagen
function Plantilla() {
  const [titulo, setTitulo] = useState('Hola Mundo'); // Estado local para el título
  const [texto, setTexto] = useState(''); // Estado local para el texto del formulario
  const navigate = useNavigate();

  const handleChange = (event) => {
    setTexto(event.target.value);
  };

  const mostrarTexto = () => {
    setTitulo(texto !== '' ? texto : 'Hola Mundo');
    setTexto('');
  };

  return (
    <div className="plantilla-container"><center><Container>
    <h1>{titulo}</h1>
    <img src={gatoImage} alt="Gato" width="200" height="150"/> {/* Agrega la imagen */}
    <Form>
      <Form.Group controlId="formBasicInput">
        <Form.Label>Ingrese algo</Form.Label>
        <Form.Control type="text" placeholder="Ingrese texto aquí" value={texto} onChange={handleChange} />
      </Form.Group>
      <Button variant="primary" onClick={mostrarTexto}>
        Mostrar
      </Button>
      <Button variant="secondary" onClick={() => navigate("/otra")}>
        Otra Página
      </Button>
    </Form>
  </Container></center></div>
    
  );
}

export default Plantilla;
