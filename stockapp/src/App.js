import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
//import Form from 'react-bootstrap/Form';
//import FormControl from 'react-bootstrap/FormControl';
//import Button from 'react-bootstrap/Button'
import './App.css';

class App extends Component {

    state = { username: null };

    componentDidMount() {
        fetch('/api/getUsername')
            .then(res => res.json())
            .then(user => this.setState({ username: user.username }));
    }

  render() {
    //const { username } = this.state;
    return (
      <div className="App">

        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">STOCK WEB</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#home">Stock Info</Nav.Link>
          </Nav>
        </Navbar>
      </div>
    );
  }
}

export default App;