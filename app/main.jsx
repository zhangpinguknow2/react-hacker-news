import log from 'loglevel';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, hashHistory } from 'react-router';
import routes from './components/Routes';

log.setLevel('silent');

ReactDOM.render(
  <Router history={hashHistory} routes={routes} />,
  document.body.appendChild(document.createElement('div'))
);