import React from 'react';
import NavLink from './NavLink';

require('./App.css');

const URL = 'https://github.com/kamidox/react-hacker-news';

// react/prefer-stateless-function
export default function (props) {
  return (
    <div className="app">
      <div className="header">
        <a href={URL} className="header__logo">
          <img src="imgs/favicon.ico" alt="" width="16px" />
        </a>
        <NavLink to="/" onlyActiveOnIndex className="homelink">
        Hacker News</NavLink>
        <NavLink to="/news">News</NavLink>{' | '}
        <NavLink to="/best">Best</NavLink>{' | '}
        <NavLink to="/show">Show</NavLink>{' | '}
        <NavLink to="/jobs">Jobs</NavLink>{' | '}
        <NavLink to="/ask">Ask</NavLink>
      </div>
      <div className="content">
        {props.children}
      </div>
      <div className="footer">
        <a href={URL}>kamidox/react-hacker-news</a>
      </div>
    </div>
  );
}
