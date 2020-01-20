import React from 'react';
import PropTypes from 'prop-types';
import style from './style';

const Bar = ({ value, limit }) => {
  const percent = limit ? ((value * 100) / limit).toFixed(0) : 0;
  const percentColor = value > limit ? 'red' : 'rgb(164, 164, 255)';
  return (
    <div className={style.bar}>
      <div
        className={style.percent}
        style={{
          width: `${percent}%`,
          backgroundColor: percentColor,
        }}
      />
      <span>{`${percent}%`}</span>
    </div>
  );
};

Bar.propTypes = {
  value: PropTypes.number,
  limit: PropTypes.number,
};

export default Bar;
