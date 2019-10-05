import React from 'react';
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader/root';
import App from './app';
import './i18n';

const HotApp = hot(App);

ReactDOM.render(<HotApp />, document.getElementById('app'));
