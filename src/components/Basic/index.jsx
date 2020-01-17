import React from 'react';
import PropTypes from 'prop-types';
import style from './style';

const Basic = ({ title }) => <div className={style.basic}>{title}</div>;

Basic.propTypes = {
  title: PropTypes.string,
};

export default Basic;
