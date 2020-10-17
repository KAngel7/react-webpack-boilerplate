import React from 'react';
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader/root';
import Modal from 'react-modal';

import App from './app';
import './i18n';

const HotApp = hot(App);

ReactDOM.render(<HotApp />, document.getElementById('app'));
Modal.setAppElement('#app');
