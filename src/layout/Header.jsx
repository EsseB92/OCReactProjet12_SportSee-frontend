import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logoFull.png';
import HorizontalNav from '../components/HorizontalNav';

const Header = ({ userId }) => {
    const pages = [
        ['Accueil', `/user/${userId}`],
        ['Profil', '/profil'],
        ['Réglages', '/settings'],
        ['Communauté', '/community'],
    ];

    return (
        <header className="header">
            <Link to="/" className="header__logo">
                <img src={logo} alt="logo" />
            </Link>
            <HorizontalNav pages={pages} />
        </header>
    );
};

export default Header;
