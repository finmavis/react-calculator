import React from 'react';
import PropTypes from 'prop-types';

import Button from '../UI/Button';

const Keypad = props => (
  <div className='keypad d-flex flex-wrap'>
    <Button click={e => props.click(e)} operator='clearAll'>
      CE
    </Button>
    <Button click={e => props.click(e)} operator='clear'>
      C
    </Button>
    <Button click={e => props.click(e)} operator='clearValue'>
      <i className='fas fa-angle-left' />
    </Button>
    <Button click={e => props.click(e)} operator='operation' value='/'>
      ÷
    </Button>
    <Button click={e => props.click(e)} value='7'>
      7
    </Button>
    <Button click={e => props.click(e)} value='8'>
      8
    </Button>
    <Button click={e => props.click(e)} value='9'>
      9
    </Button>
    <Button click={e => props.click(e)} operator='operation' value='*'>
      ×
    </Button>
    <Button click={e => props.click(e)} value='4'>
      4
    </Button>
    <Button click={e => props.click(e)} value='5'>
      5
    </Button>
    <Button click={e => props.click(e)} value='6'>
      6
    </Button>
    <Button click={e => props.click(e)} operator='operation' value='-'>
      −
    </Button>
    <Button click={e => props.click(e)} value='1'>
      1
    </Button>
    <Button click={e => props.click(e)} value='2'>
      2
    </Button>
    <Button click={e => props.click(e)} value='3'>
      3
    </Button>
    <Button click={e => props.click(e)} operator='operation' value='+'>
      +
    </Button>
    <Button click={e => props.click(e)} operator='negate'>
      ±
    </Button>
    <Button click={e => props.click(e)} value='0'>
      0
    </Button>
    <Button click={e => props.click(e)} operator='decimal' value='.'>
      .
    </Button>
    <Button click={e => props.click(e)} operator='result' value='='>
      =
    </Button>
  </div>
);

Keypad.propTypes = {
  click: PropTypes.func,
};

export default Keypad;
