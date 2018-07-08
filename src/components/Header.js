import React from 'react';
import PropTypes from 'prop-types';

const Header = (props) => (
    <nav className="navbar navbar-expand navbar-dark bg-dark justify-content-center">
        <a className="navbar-brand" href="/"><i className={props.icon}></i> {props.title}</a>
    </nav>
);

Header.propTypes = {
    icon: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
};

export default Header;