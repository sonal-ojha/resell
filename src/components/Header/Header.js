import React from 'react';
import { Link, HashRouter as Router } from 'react-router-dom';

import './header.css';

import R from '../../assets/R.png';
import user from '../../assets/user.svg';
import cart from '../../assets/cart.svg';

function Header() {
  return (
    <header className="header_container">
      <Router>
        <Link to="/">
          <div className="logo_header">
            <img src={R} width="80" height="80" />
          </div>
        </Link>
        <Link to="/buy">
          <div className="header_text">
            Buy
        </div>
        </Link>
        <Link to="/sell">
          <div className="header_text">
            Sell
        </div>
        </Link>
        <Link to="/checkout/cart">
          <div className="header_text">
            <img src={cart} alt="Cart" width="20" height="20" />
          </div>
        </Link>
        <Link to="/user">
          <div className="header_text">
            <img src={user} alt="User Profile" width="23" height="23" />
          </div>
        </Link>
      </Router>
    </header>
  );
}

export default Header;
