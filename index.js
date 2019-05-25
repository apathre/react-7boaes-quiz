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
       <div className="heading">
        <h1>Test App</h1>
       </div>
        <div className="subtitle-text">
          Start editing to see some magic happen :)
        </div>
        <div className="user-button">
        <User/>
        </div>
        <div className="admin-button">
        <Admin/>
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
