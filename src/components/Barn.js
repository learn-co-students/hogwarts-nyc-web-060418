import React, { Component } from 'react';
import Hog from './Hog'
import Form from './Form'

class Barn extends Component {
    
    state = {
        hogData: this.props.hogData
    }

   renderPigs = () => {
       return this.state.hogData.map(hogObj => <Hog key={hogObj.name} hog={hogObj} />)
   }

   sortName = () => {
       let sortArray = this.props.hogData
       sortArray.sort( (a,b) => {return (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0)})
       this.setState({
           hogData: sortArray
       })
   }

   sortWeight = () => {

       let sortArray = this.props.hogData
       sortArray.sort((a, b) => {
           return (a.weight > b.weight) ? 1 : ((b.weight > a.weight) ? -1 : 0)
       })
       this.setState({
           hogData: sortArray
       })
   }


   filterGreased = () => {
       let newArray = this.props.hogData.filter( hog => hog.greased )
       this.setState({
           hogData: newArray
       })
   }
    
    render() {
        return (
            <div>
                <Form sortNameMethod={this.sortName} sortWeightMethod={this.sortWeight} filterGreasedMethod={this.filterGreased}/><hr /><hr />
                <div className='ui grid container'>
                    {this.renderPigs()}
                </div>
            </div>
        );
    }
}

export default Barn;
