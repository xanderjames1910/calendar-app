import React, { Component } from 'react';

import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class addReminder extends Component {
  handleSubmit = e => {
    e.preventDefault();
  };

  render() {
    return (
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-md-6'>
            <Form onSubmit={this.handleSubmit} noValidate>
              <Card className='shadow-sm'>
                <Card.Header as='h5' className='text-center'>
                  Crear un recordatorio
                </Card.Header>
                <Card.Body>
                  <Card.Title className='text-center'>Fecha seleccionada</Card.Title>
                  <Form.Group controlId='formGroupNombre'>
                    <Form.Label>Nombre del recordatorio</Form.Label>
                    <Form.Control
                      type='text'
                      name='nombreRecordatorio'
                      placeholder='Escriba el nombre del recordatorio'
                      onChange={this.handleChange}
                    />
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
                    <Form.Label>Descripción del recordatorio</Form.Label>
                    <Form.Control
                      type='text'
                      name='content'
                      placeholder='Explique brevemente el recordatorio'
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

export default addReminder;
