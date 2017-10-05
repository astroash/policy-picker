import React from 'react';
import IconNoBg from './IconNoBg';
import { Link } from 'react-router-dom';

const Menu = ({css, changeTopic, toggleMenu}) => {
  return (
    <ul
      className={`menu sans-serif list w-100 bg-white tc f2 mw6 hot-pink ${css}`}>
      <Link to="/" style={{ textDecoration: 'none' }} onClick={() => {
        toggleMenu()
        changeTopic('Home')
        return
      }}>
        <li className="hot-pink">Home</li>
      </Link>
      <Link to="/tax" style={{ textDecoration: 'none' }} onClick={() => {
        toggleMenu()
        changeTopic('Tax')
        return
      }}>
        <li className="hot-pink">
          <IconNoBg topic="Tax" css="tax-no-bg" changeTopic={changeTopic}/>Tax</li>
      </Link>
      <Link to="/ownership" style={{ textDecoration: 'none' }} onClick={() => {
        toggleMenu()
        changeTopic('Ownership')
        return
      }}>
        <li className="hot-pink">
          <IconNoBg topic="Ownership" css="own-no-bg" changeTopic={changeTopic}/>Ownership</li>
      </Link>
      <Link to="/technology" style={{ textDecoration: 'none' }} onClick={() => {
        toggleMenu()
        changeTopic('Technology')
        return
      }}>
        <li className="hot-pink">
          <IconNoBg topic="Technology" css="tech-no-bg" changeTopic={changeTopic}/>Technology</li>
      </Link>
      <Link to="/welfare" style={{ textDecoration: 'none' }} onClick={() => {
        toggleMenu()
        changeTopic('Welfare')
        return
      }}>
        <li className="hot-pink">
          <IconNoBg topic="Welfare" css="wel-no-bg" changeTopic={changeTopic}/>Welfare</li>
      </Link>
      <Link to="/workplace" style={{ textDecoration: 'none' }} onClick={() => {
        toggleMenu()
        changeTopic('Workplace')
        return
      }}>
        <li className="hot-pink">
          <IconNoBg topic="Workplace" css="work-no-bg" changeTopic={changeTopic}/>Workplace</li>
      </Link>
      <Link to="/askanon" style={{ textDecoration: 'none' }} onClick={() => {
        toggleMenu()
        changeTopic('Askanon')
        return
      }}>
        <li className="hot-pink">
          <IconNoBg topic="Askanon" css="ask-no-bg" changeTopic={changeTopic}/>Ask</li>
      </Link>
    </ul>
  );
};

export default Menu;
