import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import style from './style';
import Bar from './Bar';
import { getData } from '../../services/api';

const Home = ({ title }) => {
  const [data, setData] = useState({
    bars: [],
    buttons: [],
    limit: 0,
  });
  const [currentBarIndex, setCurrentBarIndex] = useState(0);
  useEffect(() => {
    const fetchData = async () => {
      const result = await getData();
      setData(result.data);
    };
    fetchData();
  }, []);
  const updateBar = (index, value) => {
    const updatedBars = [...data.bars];
    let updatedValue = updatedBars[index] + value;
    if (updatedValue < 0) {
      updatedValue = 0;
    }
    updatedBars[index] = updatedValue;
    setData({
      ...data,
      bars: updatedBars,
    });
  };
  return (
    <div className={style.home}>
      <p>{title}</p>
      {data.bars.map((barValue, i) => (
        <Bar key={i} value={barValue} limit={data.limit} />
      ))}
      <select onChange={e => setCurrentBarIndex(e.currentTarget.value)}>
        {data.bars.map((barValue, i) => (
          <option value={i} key={i}>{`#progress${i + 1}`}</option>
        ))}
      </select>
      {data.buttons.map((item, i) => (
        <button
          type="button"
          key={i}
          onClick={() => updateBar(currentBarIndex, item)}
        >
          {item}
        </button>
      ))}
    </div>
  );
};

Home.propTypes = {
  title: PropTypes.string,
};

export default Home;
