import React from 'react';
import logo from '../../images/Logo.svg';

import './Header.css';
const Header = () => {
    return (
        <nav>
            <img src={logo} alt="Logo" />
            <div className="menu">
                <a href="/order">Order</a>
                <a href="/order-review">Order Review</a>
                <a href="/manage-inventory">Manage Inventory</a>
                <a href="/login">Login</a>
            </div>
        </nav>
    );
};

export default Header;