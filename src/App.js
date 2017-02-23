import React, { Component } from 'react';
import Header from './Header';
import Timer from './Timer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        {this.props.children}
        <Timer />
      </div>
    );
  }
}

export default App;
