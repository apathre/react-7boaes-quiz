import React, { Component } from 'react';

class User extends React.Component{
   constructor(props){
     super(props);
   }
   render(){
     return(
       <div>
         <button className="user-button"> Hello from User !!</button>
       </div>
     );
   }

}
export default User;