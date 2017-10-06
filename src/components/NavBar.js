import React from 'react';

const NavBar = props => {
  return (
    <nav className={`${props.css}`}>
      <button className="burger" onClick={props.toggleMenu} />
    </nav>
  );
};

export default NavBar;
