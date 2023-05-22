import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const HorizontalNav = ({ pages }) => {
    return (
        <nav className="horizontal-nav">
            <ul>
                {pages.map((page, key) => {
                    return (
                        <li key={key}>
                            <NavLink
                                className={(nav) =>
                                    nav.isActive ? `active` : ''
                                }
                                to={page[1]}
                            >
                                {page[0]}
                            </NavLink>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};

HorizontalNav.propTypes = {
    pages: PropTypes.arrayOf(
        PropTypes.arrayOf(
            PropTypes.oneOfType([PropTypes.string, PropTypes.string.isRequired])
        ).isRequired
    ).isRequired,
};

export default HorizontalNav;
