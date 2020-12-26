import React from 'react';
import './Header.scss';

// components

// icons

// Images

import Banner from '../common/assets/images/Main.png';

const classes = {
  menu: { item: " flex link pv3 ph3 f6 br1 bg-near-white dim " }
}

function Header() {
  return (
    <div className="Header">
      {/* <a href="https://github.com/EvilSpark/react-redux-boilerplate/">
        <img src={Banner} alt="react-boilerplate - Logo" />
      </a> */}

      <ul className=" flex w-100 justify-start ph3 pv3 f5 fw7  black  bg-white">
        <a className={ classes.menu.item } href="/">Home</a>
        <a className={ classes.menu.item }href="/features">Features</a>
        <a className={ classes.menu.item }href="https://github.com/EvilSpark/react-redux-boilerplate">
          Github
        </a>
      </ul>
    </div>
  );
}

export default Header;
