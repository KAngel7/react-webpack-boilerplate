/* eslint-disable react/prop-types */
import React from 'react';
import style from './style.scss';

const Loading = () => {
  return (
    <div className={style.loadingWrapper}>
      <div className={style.loading}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loading;
