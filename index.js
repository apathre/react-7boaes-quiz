import React, { Component } from 'react';
import { render } from 'react-dom';
import User from './components/user/user';
import Admin from './components/admin/admin';
import './style.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
       
        <p>
          Start editing to see some magic happen :)
        </p>
        <User/>
        <Admin/>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
