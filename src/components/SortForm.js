import React, { Component } from 'react';

class SortForm extends Component {
    render() {
        return (
            <form>
                
                <button onClick={this.props.sortByName}>Sort Alphabetically By Name</button>
                <button onClick={this.props.sortByWeight}>Sort Heavy to Light </button>
                <br/>
                Greased?
                <input type="checkbox" value="true"/>  <br/>
                                
            </form>
        );
    }
}

export default SortForm;
