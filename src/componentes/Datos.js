import React from 'react';
import './Datos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function Datos() {
const navigate = useNavigate();
  return (
    <div className="datos-container">
      <h1>Otra Página</h1>
      <Button variant="secondary" onClick={() => navigate("/")}>
        volver
      </Button>
    </div>
  );
}

export default Datos;
