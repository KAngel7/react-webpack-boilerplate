import React from 'react';
import PropTypes from 'prop-types';
import { Trans } from 'react-i18next';
import style from './style.css';

const HelloWorld = ({ title }) => (
  <div className={style.home}>
    {title}
    <Trans i18nKey="welcomeMsg" />
  </div>
);

HelloWorld.propTypes = {
  title: PropTypes.string,
};

export default HelloWorld;
