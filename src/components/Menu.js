import React from 'react';
import { Link } from 'react-router-dom';
import IconNoBg from './IconNoBg';

const Menu = ({ changeTopic, toggleMenu, cssImg }) => {
  return (
    <ul
      className={`menu sans-serif list w-100 bg-white tc f3 mw6 hot-pink ${cssImg}`}>
      <Link
        to="/"
        style={{ textDecoration: 'none' }}
        onClick={() => {
          toggleMenu();
          changeTopic('Home');
        }}>
        <li className="hot-pink" changeTopic={changeTopic}>
          <IconNoBg topic="Home" cssImg="home-no-bg" />Home
        </li>
      </Link>
      <Link
        to="/tax"
        style={{ textDecoration: 'none' }}
        onClick={() => {
          toggleMenu();
          changeTopic('Tax');
        }}>
        <li className="hot-pink" changeTopic={changeTopic}>
          <IconNoBg topic="Tax" cssImg="tax-no-bg" />Tax
        </li>
      </Link>
      <Link
        to="/ownership"
        style={{ textDecoration: 'none' }}
        onClick={() => {
          toggleMenu();
          changeTopic('Ownership');
        }}>
        <li className="hot-pink" changeTopic={changeTopic}>
          <IconNoBg topic="Ownership" cssImg="own-no-bg" />Ownership
        </li>
      </Link>
      <Link
        to="/technology"
        style={{ textDecoration: 'none' }}
        onClick={() => {
          toggleMenu();
          changeTopic('Technology');
        }}>
        <li className="hot-pink" changeTopic={changeTopic}>
          <IconNoBg topic="Technology" cssImg="tech-no-bg" />Technology
        </li>
      </Link>
      <Link
        to="/welfare"
        style={{ textDecoration: 'none' }}
        onClick={() => {
          toggleMenu();
          changeTopic('Welfare');
        }}>
        <li className="hot-pink" changeTopic={changeTopic}>
          <IconNoBg topic="Welfare" cssImg="wel-no-bg" />Welfare
        </li>
      </Link>
      <Link
        to="/workplace"
        style={{ textDecoration: 'none' }}
        onClick={() => {
          toggleMenu();
          changeTopic('Workplace');
        }}>
        <li className="hot-pink">
          <IconNoBg
            topic="Workplace"
            cssImg="work-no-bg"
            changeTopic={changeTopic}
          />Workplace
        </li>
      </Link>
      <Link
        to="/askanon"
        style={{ textDecoration: 'none' }}
        onClick={() => {
          toggleMenu();
          changeTopic('Askanon');
        }}>
        <li className="hot-pink" changeTopic={changeTopic}>
          <IconNoBg topic="Ask an MP" cssImg="ask-no-bg" />Ask
        </li>
      </Link>
    </ul>
  );
};

export default Menu;
