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

  sortPigsAlpha = () => {
    let sortedArr = [...this.state.pigList]
    // debugger;
    return sortedArr.sort(
      (pigObj1, pigObj2) => {
        if (pigObj1.name < pigObj2.name){
          return -1;
        } else if (pigObj1.name > pigObj2.name){
          return 1;
        } else {
          return 0
        }
      }
    )
  }

  
  render() {

    this.sortPigsAlpha()
    debugger;

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
