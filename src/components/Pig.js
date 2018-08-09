import React, { Component } from 'react';

class Pig extends Component {

    state = {
        isClicked: true
    }
    
    reviewProps = () => {
        debugger;
    }
    
    render() {
        let photoFileName; 
        photoFileName = this.props.pig.name.replace(/ /g, "_").toLowerCase()
        // debugger;
        return (
            <div className="ui eight wide column">
                <h2>{this.props.pig.name}</h2>
                <p>Speciality: {this.props.pig.specialty}</p>
                <img src= {`../hog-imgs/${photoFileName}.jpg`} alt={this.props.pig.name}/>
                

                {/* <img src = {`/public/hog-imgs/${photoFileName}.jpg' alt = ${this.props.pig.name}`}/> */}


            </div>
        );
    }
}

export default Pig;
