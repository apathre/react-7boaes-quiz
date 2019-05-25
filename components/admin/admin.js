import React, { Component } from 'react';

class Admin extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div>
        <br/>
        <button className="admin-button">Hello from Admin !!</button>
      </div>
        
    );
  }
}
export default Admin;