import React, { Component } from 'react';

import Aux from './components/AuxWrap';
import Header from './components/Header';
import Calculator from './containers/Calculator';

class App extends Component {
  state = {
    title: 'React Calculator'
  }

  render() {
    return (
      <Aux>
        <Header
          icon="fas fa-calculator"
          title={this.state.title} />
        <Calculator />
      </Aux>
    );
  }
}

export default App;
