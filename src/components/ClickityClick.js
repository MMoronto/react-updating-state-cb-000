import React from 'react';

class ClickityClick extends React.Component {
  constructor() {
    super();
    
    // Define the initial state:
    this.state = {
      hasBeenClicked: false
    };
  }
  
  handleClick = () => {
    this.setState({
      hasBeenClicked: true
<<<<<<< HEAD
    })
=======
    }, () => console.log(this.state.hasBeenClicked)) // prints true
>>>>>>> a6a90aabd1610ea898e8dbe8a851ce3e2192a8f8
  };
  
  
  render() {
    return (
      <div>
<<<<<<< HEAD
        <p>I was {this.state.hasBeenClicked ? null : 'not'} clicked!</p>
=======
        <p></p>
>>>>>>> a6a90aabd1610ea898e8dbe8a851ce3e2192a8f8
        <button onClick={this.handleClick}>Click me!</button>
      </div>
      );
  }
}

export default ClickityClick;
