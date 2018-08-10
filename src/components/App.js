import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import HogContainer from './HogContainer';
import Sort from './Sort';
import Filter from './Filter';

class App extends Component {
  state = {
    hogs: [...hogs]
  }

  resetHogs = (newArr) => {
    this.setState({
      hogs: newArr
    })
  }

  render() {
    return (
      <div className="App">
          < Nav />
          <Sort hogs={this.state.hogs} resetHogs={this.resetHogs} />
          <Filter hogs={this.state.hogs} resetHogs={this.resetHogs}/>
          <HogContainer hogs={this.state.hogs}  />

      </div>
    )
  }
}

export default App;
