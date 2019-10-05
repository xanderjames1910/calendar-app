import React, { Component } from 'react';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class viewDay extends Component {
  editReminder = e => {
    this.props.history.push('/add-reminder/');
  };

  render() {
    return (
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-md-6'>
            <Card>
              <Card.Header as='h5'>Nombre del Recordatorio</Card.Header>
              <Card.Body>
                <Card.Text>Cumpleaños Madre</Card.Text>
                <Card.Text>Quito</Card.Text>
                <Card.Text>Recordarme comprar las flores y el pastel para el Cumpleaños de mi madre.</Card.Text>
              </Card.Body>
              <Card.Footer>
                <Button variant='primary' type='submit' className='shadow-sm mr-3'>
                  Regresar al Calendario
                </Button>
                <Button variant='primary' onClick={this.editReminder} className='shadow-sm ml-3'>
                  Editar día
                </Button>
              </Card.Footer>
            </Card>
          </div>
        </div>
      </div>
    );
  }
}

export default viewDay;
