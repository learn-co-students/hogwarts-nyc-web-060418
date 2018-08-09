import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import PigContainer from './PigContainer';
import SortForm from './SortForm';

class App extends Component {

  state = {
    pigList: hogs,
    onlyGreased: false
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

  sortPigsWeight = () => {
    let sortedArr = [...this.state.pigList]

    return sortedArr.sort(
      (pigObj1, pigObj2) => {
        if (pigObj1['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'] < pigObj2['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']) {
          return -1;
        } else if (pigObj1['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'] > pigObj2['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']) {
          return 1;
        } else {
          return 0
        }
      }
    )
  }

  clickAndSortName = (event) => {
    event.preventDefault()
    this.setState({
      ...this.state,
      pigList: this.sortPigsAlpha()
    })
  }
  
  clickAndSortWeight = (event) => {
    event.preventDefault()
    this.setState({
      ...this.state,
      pigList: this.sortPigsWeight().reverse()
    })
  }

  addOrRemoveGrease = () => {
    if (this.state.onlyGreased === false){
      this.setState({
        ...this.state,
        onlyGreased: true
      })
    } else if (this.state.onlyGreased === true){
      this.setState({
        ...this.state,
        onlyGreased: false
      })
    }
  }


  
  render() {

    return (
      <div className="App">
          < Nav />
          <SortForm sortByName={this.clickAndSortName} sortByWeight={this.clickAndSortWeight}/>
          <br/>
          <PigContainer pigs={this.state.pigList}/>

      </div>
    )
  }
}

export default App;
