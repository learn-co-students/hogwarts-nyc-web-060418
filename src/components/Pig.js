import React, { Component } from 'react';

class Pig extends Component {

    state = {
        isClicked: false
    }

    handleClick = () => {
        if (this.state.isClicked === false){
            this.setState({
                isClicked: true
            })
        } else {
            this.setState({
                isClicked: false
            })
        }
    }
    
    showStatsFn = () => {
        let photoFileName;
        photoFileName = this.props.pig.name.replace(/ /g, "_").toLowerCase()

        if (this.state.isClicked === false){
            return (
                <div>
                <h2>{this.props.pig.name}</h2>
                <img src={`../hog-imgs/${photoFileName}.jpg`} alt={this.props.pig.name} />
                </div>
            )
        } else {
            return(
                <div>
                    <h2>{this.props.pig.name}</h2>
                    <p>Speciality: {this.props.pig.specialty}</p>
                    <p>Highest Medal: {this.props.pig['highest medal achieved']}  </p>
                    <p>Weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water: {this.props.pig['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']}  </p>
                </div>
            )
        }
    }
    
    render() {

        return (
            <div className="ui eight wide column" onClick={this.handleClick}>
                {this.showStatsFn()}
            </div>
        );
    }
}

export default Pig;
