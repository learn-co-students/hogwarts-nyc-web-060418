import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import Barn from './Barn'

class App extends Component {
  render() {
    return (
      <div className="App">
          < Nav />
          <Barn hogData={hogs}/>

      </div>
    )
  }
}

export default App;
