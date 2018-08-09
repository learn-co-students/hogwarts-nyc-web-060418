import React, { Component } from 'react';

class FrontCard extends Component {
    render() {
        return (
            <div>
                <h3>{this.props.frontName}
                </h3>
                <img src={this.props.frontImage} alt="" />
            </div>
        );
    }
}

export default FrontCard;
