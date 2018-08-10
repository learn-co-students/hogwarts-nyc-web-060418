import React from 'react';

export default class Sort extends React.Component {

  sortByName = () => {
    // console.log(this.props.hogs.map(hog => hog.name).sort())
    const newNameSort = this.props.hogs.sort((a, b) => {
      if (a.name < b.name) {
        return -1
      } else if (a.name > b.name) {
        return 1
      } else {
        return 0
      }
    });
    this.props.resetHogs(newNameSort)
  }

  sortByWeight = () => {
    const newWeightSort = this.props.hogs.sort((a, b) => {
      if (a['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'] < b['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']) {
        return -1
      } else if (a['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'] > b['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']) {
        return 1
      } else {
        return 0
      }
    });
    this.props.resetHogs(newWeightSort)
  }

  render(){
    return (
      <div>

        <form >
          <fieldset>
            <legend>Sort By:</legend>
            <input type='radio' value="name" onClick={this.sortByName} name="sortBy" />
            <label> Name</label>
            <br/>
            <input type='radio' value="weight" onClick={this.sortByWeight} name="sortBy" />
            <label> Weight</label>
          </fieldset>
        </form>

      </div>
    )
  }

}
