// src/components/Inicio.js

import React from 'react';
import { Container, Table } from 'react-bootstrap';

const Inicio = () => {
  return (
    <Container className="d-flex flex-column align-items-center mt-5">
      <img 
      src="/logo_UDB.png" 
      alt="lOGO-UDB" 
      className="img-fluid mb-4"
      style={{ maxWidth: '200px', height: 'auto' }} 
      />
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Carnet</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>ALEJANDRA DEL CARMEN</td>
            <td>PONCE LÓPEZ</td>
            <td>PL210665</td>
          </tr>
          <tr>
            <td>DAVID ELEAZAR</td>
            <td>GUZMÁN GUARDADO</td>
            <td>GG171680</td>
          </tr>
          <tr>
            <td>MARÍA JOSÉ</td>
            <td>TORRES MOLINA</td>
            <td>TM210066</td>
          </tr>
          <tr>
            <td>LEÓN MARROQUÍN</td>
            <td>RONALD VLADIMIR</td>
            <td>LM192213 </td>
          </tr>
          <tr>
            <td>OSWALDO ENRIQUE</td>
            <td>HERNÁNDEZ TORRES</td>
            <td>HT192210</td>
          </tr>
          <tr>
            <td>CARLOS ALBERTO</td>
            <td>AMAYA CÁRCAMO</td>
            <td>AC220139</td>
          </tr>

        </tbody>
      </Table>
    </Container>
  );
};

export default Inicio;
