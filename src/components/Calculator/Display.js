import React from 'react';
import PropTypes from 'prop-types';

const Display = (props) => (
    <div className="display text-right">
        <div className="display-active">{props.expression}</div>
        <div className="display-typing"><h2>{props.value}</h2></div>
    </div>
);

Display.propTypes = {
    expression: PropTypes.string,
    value: PropTypes.string
};

export default Display;