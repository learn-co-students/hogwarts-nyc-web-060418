import React, { Component } from 'react';

class BackCard extends Component {
    render() {
        return (
            <div>
                <h3>
                    {this.props.backName}
                </h3>
                <p>
                <strong>Specialty: </strong> {this.props.backSpecialty}
                </p>
                <p>
                <strong>Greased: </strong> {this.props.backGreased ? "true" : "false"}
                </p>
                <p>
                <strong>Weight: </strong> {this.props.backWeight}
                </p>
                <p>
                <strong>Highest Medal Achieved: </strong> {this.props.backMedal}
                </p>
            </div>
        );
    }
}

export default BackCard;
