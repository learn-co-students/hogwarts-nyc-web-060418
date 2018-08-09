import React, { Component } from 'react';
import FrontCard from './FrontCard'
import BackCard from './BackCard'

class Hog extends Component {

    state = {
        facingFront: true
    }

    frontOrBack = () => {
        let display = this.state.facingFront ? <FrontCard frontName={this.props.hog.name} frontImage={this.props.hog.image}/> : <BackCard backName={this.props.hog.name} backSpecialty={this.props.hog.specialty} backGreased={this.props.hog.greased} backWeight={this.props.hog.weight} backMedal={this.props.hog.medal}/>
        return display
    }

    handleClick = (event) => {
        this.setState({
            facingFront: !this.state.facingFront
        })
    }

    render() {
        return (
            <div onClick={this.handleClick}className='ui eight wide column'>
                {this.frontOrBack()}
            </div>
        );
    }
}

export default Hog;
