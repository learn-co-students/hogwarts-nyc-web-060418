import React from 'react';

export default class Filter extends React.Component {

filterByGrease = (event) => {
  let untouchedHogs = this.props.hogs
  if (event.target.value === "greased") {
    let greasedHogs = this.props.hogs.filter(hog => hog.greased === true)
    this.props.resetHogs(greasedHogs);
  }
  if (event.target.value === "non-greased") {
    let nonGreasedHogs = this.props.hogs.filter(hog => hog.greased === false)
    this.props.resetHogs(nonGreasedHogs);
  }
}

render () {
  return (
    <div>

      <form >
        <fieldset>
          <legend>Filter By:</legend>
          <input type='radio' value="greased" onClick={this.filterByGrease} name="FilterBy" />
          <label> Greased</label>
          <br/>
          <input type='radio' value="non-greased" onClick={this.filterByGrease} name="FilterBy" />
          <label> Totally not Greased</label>
        </fieldset>
      </form>

    </div>
  )
}

}
