import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import PigContainer from './PigContainer';
import SortForm from './SortForm';

class App extends Component {

  state = {
    pigList: hogs
  }
  
  render() {
    return (
      <div className="App">
          < Nav />
          <SortForm />
          <br/>
          <PigContainer pigs={this.state.pigList}/>

      </div>
    )
  }
}

export default App;
