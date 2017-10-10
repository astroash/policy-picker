import React from 'react';
import IconNoBg from './IconNoBg';
import { Link } from 'react-router-dom';

const Menu = ({cssImg, changeTopic, toggleMenu}) => {
  return (
    <ul
      className={`menu sans-serif list w-100 bg-white tc f2 mw6 hot-pink ${cssImg}`}>
      <Link to="/" style={{ textDecoration: 'none' }} onClick={() => {
        toggleMenu();
        changeTopic('Home');
      }}>
        <li className="hot-pink">Home</li>
      </Link>
      <Link to="/tax" style={{ textDecoration: 'none' }} onClick={() => {
        toggleMenu();
        changeTopic('Tax');
      }}>
        <li className="hot-pink">
          <IconNoBg topic="Tax" cssImg="tax-no-bg" changeTopic={changeTopic}/>Tax</li>
      </Link>
      <Link to="/ownership" style={{ textDecoration: 'none' }} onClick={() => {
        toggleMenu();
        changeTopic('Ownership');
      }}>
        <li className="hot-pink">
          <IconNoBg topic="Ownership" cssImg="own-no-bg" changeTopic={changeTopic}/>Ownership</li>
      </Link>
      <Link to="/technology" style={{ textDecoration: 'none' }} onClick={() => {
        toggleMenu();
        changeTopic('Technology');
      }}>
        <li className="hot-pink">
          <IconNoBg topic="Technology" cssImg="tech-no-bg" changeTopic={changeTopic}/>Technology</li>
      </Link>
      <Link to="/welfare" style={{ textDecoration: 'none' }} onClick={() => {
        toggleMenu();
        changeTopic('Welfare');
      }}>
        <li className="hot-pink">
          <IconNoBg topic="Welfare" cssImg="wel-no-bg" changeTopic={changeTopic}/>Welfare</li>
      </Link>
      <Link to="/workplace" style={{ textDecoration: 'none' }} onClick={() => {
        toggleMenu();
        changeTopic('Workplace');
      }}>
        <li className="hot-pink">
          <IconNoBg topic="Workplace" cssImg="work-no-bg" changeTopic={changeTopic}/>Workplace</li>
      </Link>
      <Link to="/askanon" style={{ textDecoration: 'none' }} onClick={() => {
        toggleMenu();
        changeTopic('Askanon');
      }}>
        <li className="hot-pink">
          <IconNoBg topic="Askanon" cssImg="ask-no-bg" changeTopic={changeTopic}/>Ask</li>
      </Link>
    </ul>
  );
};

export default Menu;
