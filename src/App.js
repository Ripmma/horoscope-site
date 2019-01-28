import React, { Component } from 'react';
import { Container } from 'reactstrap';

import NavBar from './components/Navbar';
import Cal from './components/Calendar';

class App extends Component {
  render() {
    return (
      <div>
          <NavBar />
          <Container>
            <center>
              <br/>
              <h1>Horoscope Reader</h1>
              <p className="lead">Please input your birthday!</p>
              <Cal />
            </center>
          </Container>
      </div>
    );
  }
}

export default App;
