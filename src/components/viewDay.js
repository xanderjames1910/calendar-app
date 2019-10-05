import React, { Component } from 'react';

import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class viewDay extends Component {
  render() {
    return (
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-md-4'>
            <Form onSubmit={this.handleSubmit} noValidate>
              <Card className='shadow-sm'>
                <Card.Header as='h5' className='text-center'>
                  Crear un recordatorio
                </Card.Header>
                <Card.Body>
                  <Card.Title>Fecha seleccionada</Card.Title>
                  <Form.Group controlId='formGroupNombre'>
                    <Form.Label>Nombre del recordatorio</Form.Label>
                    <Form.Control type='text' name='email' placeholder='Escriba el nombre del recordatorio' onChange={this.handleChange} />
                  </Form.Group>
                  <Form.Group controlId='formGroupCudad'>
                    <Form.Label>Ciudad del recordatorio</Form.Label>
                    <Form.Control
                      type='text'
                      name='ciudad'
                      placeholder='Ingrese la ciudad del recordatorio'
                      onChange={this.handleChange}
                    />
                  </Form.Group>
                  <Form.Group controlId='formGroupProjectContent'>
                    <Form.Label>Descripción del proyecto</Form.Label>
                    <Form.Control
                      type='text'
                      name='content'
                      placeholder='Explique brevemente el proyecto'
                      as='textarea'
                      rows='3'
                      onChange={this.handleChange}
                    />
                  </Form.Group>
                </Card.Body>
                <Card.Footer>
                  <Button variant='primary' type='submit' block className='shadow-sm'>
                    Guardar Recordatorio
                  </Button>
                </Card.Footer>
              </Card>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}

export default viewDay;
