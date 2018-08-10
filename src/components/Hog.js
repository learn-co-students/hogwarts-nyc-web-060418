import React from 'react';

export default class Hog extends React.Component {

  state = {
    name: this.props.hog.name,
    specialty: "",
    greased: "",
    'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water': "",
    'highest medal achieved': ""
  }

  addImage = () => {
    const imgName = this.props.hog.name.split(" ").join("_");
    this.props.hog.img = `./hog-imgs/${imgName.toLowerCase()}.jpg`
    return this.props.hog.img
  }

  handleClick = () => {
    this.setState({
      name: this.props.hog.name,
      specialty: this.props.hog.specialty,
      greased: this.props.hog.greased,
      'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water': this.props.hog['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'],
      'highest medal achieved': this.props.hog['highest medal achieved']
    })
  }

  render()  {
    console.log(this.props.img)
    return (
      <div className="pigTile">
        <h1>{this.props.hog.name}</h1>

        <img src={this.addImage()} alt={this.props.hog.name} onClick={this.handleClick}/>
        <p> {this.state.specialty} </p>
        <p> {this.state.greased} </p>
        <p> {this.state['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']} </p>
        <p> {this.state['highest medal achieved']} </p>
      </div>
    )
  }
}
