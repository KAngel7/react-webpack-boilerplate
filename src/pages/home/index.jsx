import React from 'react';
import PropTypes from 'prop-types';
import style from './style';

const Home = ({ title }) => <div className={style.home}>{title}</div>;

Home.propTypes = {
  title: PropTypes.string,
};

export default Home;
