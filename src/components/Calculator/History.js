import React from 'react';
import PropTypes from 'prop-types';

const History = (props) => (
    <div className="history-display">
        <button type="button" className="btn delete-history" onClick={props.deleteHistory}><i className="fas fa-trash"></i></button>
        {(props.history).map((val, i) => (
        <div className="history-item text-right" key={i} onClick={() => props.loadHistory(i)}>
            <div><small>{val.expression}</small></div>
            <div><strong>{val.currentValue}</strong></div>
        </div>
        ))}
    </div>
);

History.propTypes = {
    deleteHistory: PropTypes.func,
    history: PropTypes.array,
    loadHistory: PropTypes.func
};

export default History;