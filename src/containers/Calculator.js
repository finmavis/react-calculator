import React, { Component } from 'react';
import math from 'mathjs';

import History from '../components/Calculator/History';
import Keypad from '../components/Calculator/Keypad';
import Display from '../components/Calculator/Display';

import Button from '../components/UI/Button';

class Calculator extends Component {
  state = {
    showHistory: false,
    history: [],
    register: [],
    expression: '',
    currentValue: '',
  };

  clickHandler = e => {
    const operator = e.target.getAttribute('operator');
    const value = e.target.getAttribute('value');

    switch (operator) {
      case 'operation':
        this.operationHandler(value);
        break;
      case 'result':
        this.getResult();
        break;
      case 'decimal':
        this.decimalHanlder();
        break;
      case 'negate':
        this.negateHandler();
        break;
      case 'clear':
        this.clearHandler();
        break;
      case 'clearValue':
        this.clearValueHandler();
        break;
      case 'clearAll':
        this.clearAllHandler();
        break;
      default:
        this.inputHandler(value);
        break;
    }
  };

  inputHandler = value => {
    this.setState(prevState => ({
      currentValue: prevState.currentValue += value,
    }));
  };

  operationHandler = value => {
    if (this.state.currentValue === '') {
      return;
    }
    const newRegister = [
      ...this.state.register,
      this.state.currentValue,
      value,
    ];
    this.setState({
      register: newRegister,
      expression: newRegister.join(' '),
      currentValue: '',
    });
  };

  toggleHistoryHandler = () => {
    this.setState({ showHistory: !this.state.showHistory });
  };

  loadHistoryHandler = i => {
    const history = {
      ...this.state.history[i],
    };
    this.setState({
      expression: history.expression,
      currentValue: history.currentValue,
    });
  };

  deleteHistoryHandler = () => {
    this.setState({
      history: [],
      showHistory: false,
    });
  };

  getResult = () => {
    if (this.state.currentValue === '' || this.state.expression === '') {
      return;
    }

    const beforeResult = this.state.register
      .concat(this.state.currentValue)
      .join(' ');
    const result = math.eval(beforeResult).toString();
    const newHistory = {
      expression: beforeResult,
      currentValue: result,
    };
    const history = this.state.history.concat(newHistory);

    this.setState({
      register: [],
      expression: '',
      currentValue: result,
      history: history,
    });
  };

  decimalHanlder = () => {
    if (this.state.currentValue.indexOf('.') >= 0) {
      return;
    }
    if (this.state.currentValue === '') {
      this.setState(prevState => ({
        currentValue: prevState.currentValue += '0.',
      }));
    } else {
      this.setState(prevState => ({
        currentValue: prevState.currentValue += '.',
      }));
    }
  };

  negateHandler = () => {
    if (this.state.currentValue === '') {
      return;
    }
    const negateValue = (+this.state.currentValue * -1).toString();
    this.setState({
      currentValue: negateValue,
    });
  };

  clearValueHandler = () => {
    this.setState({ currentValue: '' });
  };

  clearHandler = () => {
    this.setState({
      register: [],
      expression: '',
      currentValue: '',
    });
  };

  clearAllHandler = () => {
    this.setState({
      history: [],
      expression: '',
      currentValue: '',
    });
  };

  render() {
    return (
      <div className='wrapper d-flex justify-content-center align-items-center'>
        <div className='calculator-wrapper'>
          <Display
            expression={this.state.expression}
            value={this.state.currentValue}
          />
          <div className='controls-history'>
            <Button type='block' click={this.toggleHistoryHandler}>
              <i className='fas fa-history' />
            </Button>
          </div>
          {this.state.showHistory ? (
            <History
              history={this.state.history}
              deleteHistory={this.deleteHistoryHandler}
              loadHistory={i => this.loadHistoryHandler(i)}
            />
          ) : (
            <Keypad click={e => this.clickHandler(e)} />
          )}
        </div>
      </div>
    );
  }
}

export default Calculator;
