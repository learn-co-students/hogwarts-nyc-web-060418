import React, { Component } from 'react';

class SortForm extends Component {
    render() {
        return (
            <form>
                
                <button onClick={this.props.sortByName}>Sort Alphabetically By Name</button>
                <button onClick={this.props.sortByWeight}>Sort Heavy to Light </button>
                <select name="Greased?">
                    <option value="all">All Pigs</option>
                    <option value="greased">Greased Pigs</option>
                    <option value="not-greased">Not Greased</option>
                </select>
                                
            </form>
        );
    }
}

export default SortForm;
