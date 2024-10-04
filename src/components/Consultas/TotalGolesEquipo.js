// src/components/Consultas/TotalGolesEquipo.js

import React, { useState, useEffect } from 'react';
import equipoService from '../../services/equipoService';
import { Table, Form, Button } from 'react-bootstrap';

const TotalGolesEquipo = () => {
  const [equipos, setEquipos] = useState([]);
  const [totalGoles, setTotalGoles] = useState(null);
  const [selectedEquipo, setSelectedEquipo] = useState('');

  useEffect(() => {
    const fetchEquipos = async () => {
      try {
        const data = await equipoService.getEquipos();
        setEquipos(data);
      } catch (error) {
        console.error('Error fetching equipos:', error);
      }
    };

    fetchEquipos();
  }, []);

  const handleBuscarGoles = async () => {
    if (selectedEquipo) {
      try {
        const data = await equipoService.getTotalGolesPorEquipo(selectedEquipo);
        setTotalGoles(data.total_goles); // Asegúrate de acceder a la propiedad correcta
      } catch (error) {
        console.error('Error fetching total de goles por equipo:', error);
      }
    } else {
      setTotalGoles(null);
    }
  };

  return (
    <div>
      <h1>Total de Goles por Equipo</h1>
      <Form>
        <Form.Group controlId="formEquipoSelect">
          <Form.Label>Selecciona un Equipo</Form.Label>
          <Form.Control as="select" value={selectedEquipo} onChange={(e) => setSelectedEquipo(e.target.value)}>
            <option value="">Selecciona un equipo</option>
            {equipos.map((equipo) => (
              <option key={equipo.id} value={equipo.id}>{equipo.nombre}</option>
            ))}
          </Form.Control>
        </Form.Group>
        <Button variant="primary" onClick={handleBuscarGoles}>Buscar Goles</Button>
      </Form>
      {totalGoles !== null && (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Total de Goles</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{totalGoles}</td>
            </tr>
          </tbody>
        </Table>
      )}
    </div>
  );
};

export default TotalGolesEquipo;
