import React, { Component } from 'react';
import { ButtonToolbar, Button } from 'react-bootstrap';
import './App.css';

class App extends Component {

    state = { username: null };

    componentDidMount() {
        fetch('/api/getUsername')
            .then(res => res.json())
            .then(user => this.setState({ username: user.username }));
    }

  render() {
    const { username } = this.state;
    return (
      <div className="App">
          <div>
              {username ? <h1>Stock web - {`Hello ${username}`}</h1> : <h1>Loading.. please wait!</h1>}
          </div>

          <ButtonToolbar>
          {/* Standard button */}
          <Button>Default</Button>
          {/* Provides extra visual weight and identifies the primary action in a set of buttons */}
          <Button bsStyle="primary">Primary</Button>
          {/* Indicates a successful or positive action */}
          <Button bsStyle="success">Success</Button>
          {/* Contextual button for informational alert messages */}
          <Button bsStyle="info">Info</Button>
          {/* Indicates caution should be taken with this action */}
          <Button bsStyle="warning">Warning</Button>
          {/* Indicates a dangerous or potentially negative action */}
          <Button bsStyle="danger">Danger</Button>
          {/* Deemphasize a button by making it look like a link while maintaining button behavior */}
          <Button bsStyle="link">Link</Button>
        </ButtonToolbar>

      </div>
    );
  }
}

export default App;