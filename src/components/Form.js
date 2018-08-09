import React, { Component } from 'react';

class Form extends Component {
    render() {
        return (
            <div>
                <button onClick={this.props.sortNameMethod}>
                    Name From A To Z
                < /button> &emsp; &emsp;
                <button onClick={this.props.sortWeightMethod}>
                    Weight From Low To High
                < /button> &emsp; &emsp;
                <button onClick={this.props.filterGreasedMethod}>
                    Show Only Greased Hogs
                </button>
            </div>
        );
    }
}

export default Form;
