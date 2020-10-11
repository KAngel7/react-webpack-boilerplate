/* eslint-disable react/prop-types */
import React from 'react';
import style from './style.scss';

const tableData = [
  {
    tradingLink: '/trading/BNB_USDT',
    src: './images/home/coin-logo/BNB.png',
    shortName: 'BNB',
    longName: 'BNB',
    latestPrice: '₫640,108.13',
    changeRate: 5.55,
    chartSrc: './kline/BNBUSDT.svg',
  },
  {
    tradingLink: '/trading/BTC_USDT',
    src: './images/home/coin-logo/BTC.png',
    shortName: 'BTC',
    longName: 'Bitcoin',
    latestPrice: '₫248,731,102.49',
    changeRate: -1.09,
    chartSrc: './kline/BTCUSDT.svg',
  },
  {
    tradingLink: '/trading/ETH_USDT',
    src: './images/home/coin-logo/ETH.png',
    shortName: 'ETH',
    longName: 'Ethereum',
    latestPrice: '₫8,224,632.91',
    changeRate: -0.43,
    chartSrc: './kline/ETHUSDT.svg',
  },
];

const MarketTable = ({ showViewMoreBtn }) => {
  return (
    <div className={`${style.container}`}>
      <div className={`${style.table}`}>
        <div className={`${style.tableHeader}`}>
          <div
            data-area="left"
            className={`${style.tableCell} ${style.width1}`}
          >
            <div
              type="text"
              title="Tên"
              className={` ${style.cellContentLeft}`}
            >
              Tên
            </div>
          </div>
          <div
            data-area="left"
            className={`${style.tableCell} ${style.width2}`}
          >
            <div
              type="text"
              title="Giá gần nhất"
              className={` ${style.cellContentLeft}`}
            >
              Giá gần nhất
            </div>
          </div>
          <div
            data-area="left"
            className={`${style.tableCell} ${style.width2}`}
          >
            <div
              type="text"
              title="Biến động giá 24h"
              className={`${style.cellContentRight}`}
            >
              Biến động giá 24h
            </div>
          </div>
          <div
            data-area="left"
            className={`${style.tableCellHidden} ${style.width3}`}
          >
            <div
              type="text"
              title="Thị trường"
              className={`${style.cellContentLeft}`}
            >
              Thị trường
            </div>
          </div>
        </div>
        {tableData.map((d, i) => {
          return (
            <a
              key={`table-data-coin-${i}`}
              href={d.tradingLink}
              className={`${style.tableRow}`}
            >
              <div
                data-area="left"
                className={`${style.tableCell} ${style.width1}`}
              >
                <div className={`${style.coinIconWrapper}`}>
                  <img
                    className={`lozad-load lozad-loaded ${style.coinIcon}`}
                    alt={d.shortName}
                    data-src={d.src}
                    src={d.src}
                  />
                </div>
                <div className={`${style.coinNameWrapper}`}>
                  <div type="text" className={`${style.coinShortName}`}>
                    {d.shortName}
                  </div>
                  <div type="text" className={`${style.coinLongName}`}>
                    {d.longName}
                  </div>
                </div>
              </div>
              <div
                data-area="left"
                className={`${style.tableCell} ${style.width2}`}
              >
                <div type="text">{d.latestPrice}</div>
              </div>
              <div
                data-area="left"
                className={`${style.tableCell} ${style.width2}`}
              >
                <div
                  type="text"
                  className={`${style.cellContentRight} ${
                    d.changeRate > 0 ? style.increaseRate : style.decreaseRate
                  }`}
                >
                  {d.changeRate > 0
                    ? `+${d.changeRate} %`
                    : `${d.changeRate} %`}
                </div>
              </div>
              <div
                data-area="left"
                className={`${style.tableCellHidden} ${style.width3}`}
              >
                <div
                  className={`lozad-load lozad-loaded ${style.chartDisplay}`}
                  alt={`${d.shortName}USDT`}
                  data-src={d.chartSrc}
                  id={`a${i + 2}`}
                ></div>
              </div>
            </a>
          );
        })}
        {showViewMoreBtn && (
          <div className={`${style.watchMoreBtn}`}>
            <a
              aria-label="markets"
              href="/markets"
              className={`${style.linkHoverableBtn}`}
            >
              <div type="text">Xem thêm thị trường</div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                className={`icon-dir ${style.icon}`}
              >
                <path
                  d="M13.5 12L7 18.6 8.4 20l8-8-8-8L7 5.4l6.5 6.6z"
                  fill="currentColor"
                ></path>
              </svg>
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default MarketTable;
