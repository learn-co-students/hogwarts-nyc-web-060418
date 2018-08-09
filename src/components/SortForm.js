import React, { Component } from 'react';

class SortForm extends Component {
    render() {
        return (
            <form onChange={(e)=> {debugger; console.log(e.target)}}>
                
                <button onClick={this.props.sortByName}>Sort Alphabetically By Name</button>
                <button onClick={this.props.sortByWeight}>Sort Heavy to Light </button>
                <button onClick={this.props.filterGrease}>Show only the Greasy Boys </button>
                                
            </form>
        );
    }
}

export default SortForm;
