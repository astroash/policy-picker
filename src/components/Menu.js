import React from 'react';
import { Link } from 'react-router-dom';

const Menu = props => {
  return (
    <ul
      className={`menu sans-serif list w-100 bg-white tc f2 mw6 hot-pink ${props.css}`}>
      <Link style={{ textDecoration: 'none' }} to="/">
        <li className="hot-pink">Home</li>
      </Link>
      <Link style={{ textDecoration: 'none' }} to="/tax">
        <li className="hot-pink">Tax</li>
      </Link>
      <Link style={{ textDecoration: 'none' }} to="/ownership">
        <li className="hot-pink">Ownership</li>
      </Link>
      <Link style={{ textDecoration: 'none' }} to="/technology">
        <li className="hot-pink">Technology</li>
      </Link>
      <Link style={{ textDecoration: 'none' }} to="/welfare">
        <li className="hot-pink">Welfare</li>
      </Link>
      <Link style={{ textDecoration: 'none' }} to="/workplace">
        <li className="hot-pink">Workplace</li>
      </Link>
      <Link style={{ textDecoration: 'none' }} to="/askanon">
        <li className="hot-pink">Ask</li>
      </Link>
    </ul>
  );
};

export default Menu;
