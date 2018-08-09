import React, { Component } from 'react';
import Pig from "./Pig";

class PigContainer extends Component {
    
   
    mapPigs = () => {
        return this.props.pigs.map((pig) => {
            return <Pig key={pig.name} pig={pig}/>
        })
    }
    
    render() {
        return (
            <div className="ui grid container">
                {this.mapPigs()}
            </div>
        );
    }
}

export default PigContainer;
