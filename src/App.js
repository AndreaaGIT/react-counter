import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
 state = {

  counter : 0

 }

  render() {

    return (
      <div>
       <h1>Counter: {this.state.counter }</h1>
       <button onClick={()=> this.setState({counter:this.state.counter + 1}) }>Increment</button>
       <button onClick={()=> this.setState({counter:this.state.counter - 1})}>decrement</button>


      </div>

    );

  }
}

export default App;
