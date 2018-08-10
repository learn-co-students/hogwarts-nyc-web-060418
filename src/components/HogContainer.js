import React from 'react';
import Hog from './Hog';

export default class HogContainer extends React.Component {

  hogsMapper = () => {
    return this.props.hogs.map(hogObj => <Hog img={'../hog-imgs/augustus_gloop.jpg'} key={hogObj.name} hog={hogObj} />)
  }

  render() {
    return (
      <div>
        {this.hogsMapper()}
      </div>
    )
  };
}
