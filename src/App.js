import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import Container from 'react-bootstrap/Container';
import MenuBar from './components/layout/Navbar';
import Calendar from './components/Calendar';
import addReminder from './components/addReminder';
import viewDay from './components/viewDay';

function App() {
  return (
    <Router>
      <div className='App'>
        <MenuBar />
        <Container style={{ marginTop: 90 }}>
          <Switch>
            <Route exact path='/' component={Calendar} />
            <Route exact path='/add-reminder' component={addReminder} />
            <Route exact path='/view-day' component={viewDay} />
          </Switch>
        </Container>
      </div>
    </Router>
  );
}

export default App;
