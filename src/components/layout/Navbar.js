import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

const MenuBar = () => {
  return (
    <Navbar collapseOnSelect expand='lg' bg='primary' variant='dark' fixed='top' className='shadow-sm'>
      <Container>
        <LinkContainer to='/'>
          <Nav.Link>
            <Button variant='primary' block className='text-left mb-0' as='h5'>
              <strong>Calendar APP</strong>
            </Button>
          </Nav.Link>
        </LinkContainer>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='mr-auto'>
            <LinkContainer to='/'>
              <Nav.Link>
                <Button variant='primary' block className='text-left'>
                  Calendario
                </Button>
              </Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MenuBar;
