import React, { Component, Fragment } from 'react';

import Header from './components/Header';
import Calculator from './containers/Calculator';
import Footer from './components/Footer';

class App extends Component {
  state = {
    title: 'React Calculator',
  };

  render() {
    return (
      <Fragment>
        <Header icon='fas fa-calculator' title={this.state.title} />
        <Calculator />
        <Footer />
      </Fragment>
    );
  }
}

export default App;
