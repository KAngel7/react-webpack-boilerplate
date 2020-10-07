import React from 'react';
import Header from '../../components/Header';

const TransactionsHistory = () => {
  return (
    <main>
      <Header />

      <div className="styles_body__2t5HW  styles_haveFooter__2fJ9r">
        <div className="styles_main__21Z6r" id="p-wallets">
          <div id="p-wallets--menu--main" className="styles_main__L5OqJ">
            <div className="styles_content__1UzFF">
              <div className="styles_menus__1wHWh">
                <div className="styles_main__2X3da">
                  <a
                    id="p-wallets--menu--balances"
                    className="styles_normal__2IiiS styles__link__38bS2"
                    href="/wallets/balances"
                  >
                    Balance
                  </a>
                </div>
                <div className="styles_main__2X3da">
                  <a
                    id="p-wallets--menu--deposits"
                    className="styles_normal__2IiiS styles__link__38bS2"
                    href="/wallets/deposits"
                  >
                    Deposits
                  </a>
                </div>
                <div className="styles_main__2X3da">
                  <a
                    id="p-wallets--menu--withdrawals"
                    className="styles_normal__2IiiS styles__link__38bS2"
                    href="/wallets/withdrawals"
                  >
                    Withdrawals
                  </a>
                </div>
                <div className="styles_main__2X3da">
                  <a
                    id="p-wallets--menu--orders"
                    className="styles_normal__2IiiS styles__link__38bS2"
                    href="/wallets/orders"
                  >
                    Open Orders
                  </a>
                </div>
                <div className="styles_main__2X3da">
                  <a
                    id="p-wallets--menu--transactions"
                    className="styles_normal__2IiiS styles__link__38bS2 styles_active__2Evxl styles__link__38bS2"
                    href="/wallets/transactions"
                  >
                    Transactions
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="styles_body__tAox4">
            <div className="styles_container__2kE2g styles_main__hw-vD">
              <h2 className="styles_title__3PGgb">Transactions</h2>
              <div className="styles_main__1zpdt styles_transactions__1yKSo grd-v">
                <div className="styles_body__2xX5a styles_body__3L0r7">
                  <div>
                    <div className="styles_select__1tKvN">
                      <h5 className="styles_title__F94PT">Select Account</h5>
                      <div className="styles_main__3EaD8 styles_left__2P1Kf styles_hoverable__2YTrJ">
                        <div className="styles_body__3dd1F  styles_feed__1T7yq">
                          <button
                            id="p-wallets--transactions--body--select--button"
                            type="button"
                            className="styles_main__3ncw2"
                          >
                            <div className="styles_content__3_Q4T">
                              <div
                                id="p-wallets--transactions--body--select--value"
                                data-value="quoine:BTC"
                                className="styles_label__1kLTH"
                              >
                                <span id="p-wallets--transactions--body--select--icon-BTC">
                                  <svg width={24} height={24}>
                                    <foreignObject width={24} height={24}>
                                      <img
                                        alt="BTC"
                                        width={24}
                                        height={24}
                                        src="https://assets.liquid.com/currencies/BTC.svg"
                                      />
                                    </foreignObject>
                                  </svg>
                                </span>
                                <span className="styles_labelText__3K34D">
                                  BTC
                                </span>
                              </div>
                              <div className="styles_icon___I0VY">
                                <i className="icon icon-small-down styles_icon__IoG7F " />
                              </div>
                            </div>
                          </button>
                        </div>
                        <div className="styles_content__2DpoO grd-h styles_customPopContent__2t0BB">
                          <div>
                            <div className="styles_main__2uOHi">
                              <div className="styles_toolbar__3u8rZ">
                                <span className="styles_title__2cw9b">
                                  Currencies
                                </span>
                                <span className="styles_search__1yZQd">
                                  <input
                                    type="text"
                                    id="p-wallets--transactions--body--select--search"
                                    placeholder="Search..."
                                    defaultValue
                                  />
                                  <svg
                                    width={12}
                                    height={12}
                                    viewBox="0 0 12 12"
                                  >
                                    <defs />
                                    <g
                                      id="\uD83D\uDDA5-Layouts"
                                      stroke="none"
                                      strokeWidth={1}
                                      fill="none"
                                      fillRule="evenodd"
                                    >
                                      <g
                                        id="200.01---Wallets-+-Deposits-+-Dropdown"
                                        transform="translate(-498.000000, -664.000000)"
                                        fill="#CED0DA"
                                      >
                                        <path
                                          d="M505.907541,666.60032 C504.441694,665.134474 502.066167,665.134474 500.60032,666.60032 C499.134474,668.066167 499.134474,670.441694 500.60032,671.907541 C502.066167,673.373387 504.441694,673.373387 505.907541,671.907541 C507.373387,670.441694 507.373387,668.066167 505.907541,666.60032 M509.81046,675.81046 C509.516991,676.103179 509.041886,676.103179 508.748416,675.81046 L506.384898,673.446192 C504.326858,674.984843 501.408675,674.839234 499.539026,672.968835 C497.486991,670.91755 497.486991,667.591062 499.539026,665.539026 C501.590311,663.486991 504.91755,663.486991 506.968835,665.539026 C508.839234,667.408675 508.984843,670.326858 507.446192,672.384898 L509.81046,674.749167 C510.103179,675.041886 510.103179,675.516991 509.81046,675.81046"
                                          id="Search-icon"
                                        />
                                      </g>
                                    </g>
                                  </svg>
                                </span>
                              </div>
                              <div className="styles_body__1arNS">
                                <div className="styles_section__16_BV">
                                  <div className="styles_main__3UrE7">
                                    <button
                                      id="p-wallets--transactions--body--select--quoine:USD"
                                      type="button"
                                      className=" styles_item__18hun"
                                    >
                                      <span id="p-wallets--transactions--body--select--icon-USD">
                                        <svg width={24} height={24}>
                                          <foreignObject width={24} height={24}>
                                            <img
                                              alt="USD"
                                              width={24}
                                              height={24}
                                              src="https://assets.liquid.com/currencies/USD.svg"
                                            />
                                          </foreignObject>
                                        </svg>
                                      </span>
                                      <span>USD</span>
                                    </button>
                                    <button
                                      id="p-wallets--transactions--body--select--quoine:EUR"
                                      type="button"
                                      className=" styles_item__18hun"
                                    >
                                      <span id="p-wallets--transactions--body--select--icon-EUR">
                                        <svg width={24} height={24}>
                                          <foreignObject width={24} height={24}>
                                            <img
                                              alt="EUR"
                                              width={24}
                                              height={24}
                                              src="https://assets.liquid.com/currencies/EUR.svg"
                                            />
                                          </foreignObject>
                                        </svg>
                                      </span>
                                      <span>EUR</span>
                                    </button>
                                    <button
                                      id="p-wallets--transactions--body--select--quoine:SGD"
                                      type="button"
                                      className=" styles_item__18hun"
                                    >
                                      <span id="p-wallets--transactions--body--select--icon-SGD">
                                        <svg width={24} height={24}>
                                          <foreignObject width={24} height={24}>
                                            <img
                                              alt="SGD"
                                              width={24}
                                              height={24}
                                              src="https://assets.liquid.com/currencies/SGD.svg"
                                            />
                                          </foreignObject>
                                        </svg>
                                      </span>
                                      <span>SGD</span>
                                    </button>
                                    <button
                                      id="p-wallets--transactions--body--select--quoine:HKD"
                                      type="button"
                                      className=" styles_item__18hun"
                                    >
                                      <span id="p-wallets--transactions--body--select--icon-HKD">
                                        <svg width={24} height={24}>
                                          <foreignObject width={24} height={24}>
                                            <img
                                              alt="HKD"
                                              width={24}
                                              height={24}
                                              src="https://assets.liquid.com/currencies/HKD.svg"
                                            />
                                          </foreignObject>
                                        </svg>
                                      </span>
                                      <span>HKD</span>
                                    </button>
                                    <button
                                      id="p-wallets--transactions--body--select--quoine:AUD"
                                      type="button"
                                      className=" styles_item__18hun"
                                    >
                                      <span id="p-wallets--transactions--body--select--icon-AUD">
                                        <svg width={24} height={24}>
                                          <foreignObject width={24} height={24}>
                                            <img
                                              alt="AUD"
                                              width={24}
                                              height={24}
                                              src="https://assets.liquid.com/currencies/AUD.svg"
                                            />
                                          </foreignObject>
                                        </svg>
                                      </span>
                                      <span>AUD</span>
                                    </button>
                                    <button
                                      id="p-wallets--transactions--body--select--quoine:CNY"
                                      type="button"
                                      className=" styles_item__18hun"
                                    >
                                      <span id="p-wallets--transactions--body--select--icon-CNY">
                                        <svg width={24} height={24}>
                                          <foreignObject width={24} height={24}>
                                            <img
                                              alt="CNY"
                                              width={24}
                                              height={24}
                                              src="https://assets.liquid.com/currencies/CNY.svg"
                                            />
                                          </foreignObject>
                                        </svg>
                                      </span>
                                      <span>CNY</span>
                                    </button>
                                    <button
                                      id="p-wallets--transactions--body--select--quoine:INR"
                                      type="button"
                                      className=" styles_item__18hun"
                                    >
                                      <span id="p-wallets--transactions--body--select--icon-INR">
                                        <svg width={24} height={24}>
                                          <foreignObject width={24} height={24}>
                                            <img
                                              alt="INR"
                                              width={24}
                                              height={24}
                                              src="https://assets.liquid.com/currencies/INR.svg"
                                            />
                                          </foreignObject>
                                        </svg>
                                      </span>
                                      <span>INR</span>
                                    </button>
                                    <button
                                      id="p-wallets--transactions--body--select--quoine:JPY"
                                      type="button"
                                      className=" styles_item__18hun"
                                    >
                                      <span id="p-wallets--transactions--body--select--icon-JPY">
                                        <svg width={24} height={24}>
                                          <foreignObject width={24} height={24}>
                                            <img
                                              alt="JPY"
                                              width={24}
                                              height={24}
                                              src="https://assets.liquid.com/currencies/JPY.svg"
                                            />
                                          </foreignObject>
                                        </svg>
                                      </span>
                                      <span>JPY</span>
                                    </button>
                                    <button
                                      id="p-wallets--transactions--body--select--quoine:PHP"
                                      type="button"
                                      className=" styles_item__18hun"
                                    >
                                      <span id="p-wallets--transactions--body--select--icon-PHP">
                                        <svg width={24} height={24}>
                                          <foreignObject width={24} height={24}>
                                            <img
                                              alt="PHP"
                                              width={24}
                                              height={24}
                                              src="https://assets.liquid.com/currencies/PHP.svg"
                                            />
                                          </foreignObject>
                                        </svg>
                                      </span>
                                      <span>PHP</span>
                                    </button>
                                    <button
                                      id="p-wallets--transactions--body--select--quoine:IDR"
                                      type="button"
                                      className=" styles_item__18hun"
                                    >
                                      <span id="p-wallets--transactions--body--select--icon-IDR">
                                        <svg width={24} height={24}>
                                          <foreignObject width={24} height={24}>
                                            <img
                                              alt="IDR"
                                              width={24}
                                              height={24}
                                              src="https://assets.liquid.com/currencies/IDR.svg"
                                            />
                                          </foreignObject>
                                        </svg>
                                      </span>
                                      <span>IDR</span>
                                    </button>
                                  </div>
                                </div>
                                <div className="styles_section__16_BV">
                                  <div className="styles_main__3UrE7">
                                    <h6 className="styles_title__LGvcW">
                                      Cryptos
                                    </h6>
                                    <button
                                      id="p-wallets--transactions--body--select--quoine:BTC"
                                      type="button"
                                      className=" styles_item__18hun"
                                    >
                                      <span id="p-wallets--transactions--body--select--icon-BTC">
                                        <svg width={24} height={24}>
                                          <foreignObject width={24} height={24}>
                                            <img
                                              alt="BTC"
                                              width={24}
                                              height={24}
                                              src="https://assets.liquid.com/currencies/BTC.svg"
                                            />
                                          </foreignObject>
                                        </svg>
                                      </span>
                                      <span>BTC</span>
                                    </button>
                                    <button
                                      id="p-wallets--transactions--body--select--quoine:ETH"
                                      type="button"
                                      className=" styles_item__18hun"
                                    >
                                      <span id="p-wallets--transactions--body--select--icon-ETH">
                                        <svg width={24} height={24}>
                                          <foreignObject width={24} height={24}>
                                            <img
                                              alt="ETH"
                                              width={24}
                                              height={24}
                                              src="https://assets.liquid.com/currencies/ETH.svg"
                                            />
                                          </foreignObject>
                                        </svg>
                                      </span>
                                      <span>ETH</span>
                                    </button>
                                    <button
                                      id="p-wallets--transactions--body--select--quoine:ETC"
                                      type="button"
                                      className=" styles_item__18hun"
                                    >
                                      <span id="p-wallets--transactions--body--select--icon-ETC">
                                        <svg width={24} height={24}>
                                          <foreignObject width={24} height={24}>
                                            <img
                                              alt="ETC"
                                              width={24}
                                              height={24}
                                              src="https://assets.liquid.com/currencies/ETC.svg"
                                            />
                                          </foreignObject>
                                        </svg>
                                      </span>
                                      <span>ETC</span>
                                    </button>
                                    <button
                                      id="p-wallets--transactions--body--select--quoine:LTC"
                                      type="button"
                                      className=" styles_item__18hun"
                                    >
                                      <span id="p-wallets--transactions--body--select--icon-LTC">
                                        <svg width={24} height={24}>
                                          <foreignObject width={24} height={24}>
                                            <img
                                              alt="LTC"
                                              width={24}
                                              height={24}
                                              src="https://assets.liquid.com/currencies/LTC.svg"
                                            />
                                          </foreignObject>
                                        </svg>
                                      </span>
                                      <span>LTC</span>
                                    </button>
                                    <button
                                      id="p-wallets--transactions--body--select--quoine:XRP"
                                      type="button"
                                      className=" styles_item__18hun"
                                    >
                                      <span id="p-wallets--transactions--body--select--icon-XRP">
                                        <svg width={24} height={24}>
                                          <foreignObject width={24} height={24}>
                                            <img
                                              alt="XRP"
                                              width={24}
                                              height={24}
                                              src="https://assets.liquid.com/currencies/XRP.svg"
                                            />
                                          </foreignObject>
                                        </svg>
                                      </span>
                                      <span>XRP</span>
                                    </button>
                                    <button
                                      id="p-wallets--transactions--body--select--quoine:XLM"
                                      type="button"
                                      className=" styles_item__18hun"
                                    >
                                      <span id="p-wallets--transactions--body--select--icon-XLM">
                                        <svg width={24} height={24}>
                                          <foreignObject width={24} height={24}>
                                            <img
                                              alt="XLM"
                                              width={24}
                                              height={24}
                                              src="https://assets.liquid.com/currencies/XLM.svg"
                                            />
                                          </foreignObject>
                                        </svg>
                                      </span>
                                      <span>XLM</span>
                                    </button>
                                    <button
                                      id="p-wallets--transactions--body--select--quoine:XMR"
                                      type="button"
                                      className=" styles_item__18hun"
                                    >
                                      <span id="p-wallets--transactions--body--select--icon-XMR">
                                        <svg width={24} height={24}>
                                          <foreignObject width={24} height={24}>
                                            <img
                                              alt="XMR"
                                              width={24}
                                              height={24}
                                              src="https://assets.liquid.com/currencies/XMR.svg"
                                            />
                                          </foreignObject>
                                        </svg>
                                      </span>
                                      <span>XMR</span>
                                    </button>
                                    <button
                                      id="p-wallets--transactions--body--select--quoine:ZEC"
                                      type="button"
                                      className=" styles_item__18hun"
                                    >
                                      <span id="p-wallets--transactions--body--select--icon-ZEC">
                                        <svg width={24} height={24}>
                                          <foreignObject width={24} height={24}>
                                            <img
                                              alt="ZEC"
                                              width={24}
                                              height={24}
                                              src="https://assets.liquid.com/currencies/ZEC.svg"
                                            />
                                          </foreignObject>
                                        </svg>
                                      </span>
                                      <span>ZEC</span>
                                    </button>
                                    <button
                                      id="p-wallets--transactions--body--select--quoine:FCT"
                                      type="button"
                                      className=" styles_item__18hun"
                                    >
                                      <span id="p-wallets--transactions--body--select--icon-FCT">
                                        <svg width={24} height={24}>
                                          <foreignObject width={24} height={24}>
                                            <img
                                              alt="FCT"
                                              width={24}
                                              height={24}
                                              src="https://assets.liquid.com/currencies/FCT.svg"
                                            />
                                          </foreignObject>
                                        </svg>
                                      </span>
                                      <span>FCT</span>
                                    </button>
                                    <button
                                      id="p-wallets--transactions--body--select--quoine:NEO"
                                      type="button"
                                      className=" styles_item__18hun"
                                    >
                                      <span id="p-wallets--transactions--body--select--icon-NEO">
                                        <svg width={24} height={24}>
                                          <foreignObject width={24} height={24}>
                                            <img
                                              alt="NEO"
                                              width={24}
                                              height={24}
                                              src="https://assets.liquid.com/currencies/NEO.svg"
                                            />
                                          </foreignObject>
                                        </svg>
                                      </span>
                                      <span>NEO</span>
                                    </button>
                                    <button
                                      id="p-wallets--transactions--body--select--quoine:DASH"
                                      type="button"
                                      className=" styles_item__18hun"
                                    >
                                      <span id="p-wallets--transactions--body--select--icon-DASH">
                                        <svg width={24} height={24}>
                                          <foreignObject width={24} height={24}>
                                            <img
                                              alt="DASH"
                                              width={24}
                                              height={24}
                                              src="https://assets.liquid.com/currencies/DASH.svg"
                                            />
                                          </foreignObject>
                                        </svg>
                                      </span>
                                      <span>DASH</span>
                                    </button>
                                    <button
                                      id="p-wallets--transactions--body--select--quoine:QTUM"
                                      type="button"
                                      className=" styles_item__18hun"
                                    >
                                      <span id="p-wallets--transactions--body--select--icon-QTUM">
                                        <svg width={24} height={24}>
                                          <foreignObject width={24} height={24}>
                                            <img
                                              alt="QTUM"
                                              width={24}
                                              height={24}
                                              src="https://assets.liquid.com/currencies/QTUM.svg"
                                            />
                                          </foreignObject>
                                        </svg>
                                      </span>
                                      <span>QTUM</span>
                                    </button>
                                    <button
                                      id="p-wallets--transactions--body--select--quoine:XEM"
                                      type="button"
                                      className=" styles_item__18hun"
                                    >
                                      <span id="p-wallets--transactions--body--select--icon-XEM">
                                        <svg width={24} height={24}>
                                          <foreignObject width={24} height={24}>
                                            <img
                                              alt="XEM"
                                              width={24}
                                              height={24}
                                              src="https://assets.liquid.com/currencies/XEM.svg"
                                            />
                                          </foreignObject>
                                        </svg>
                                      </span>
                                      <span>XEM</span>
                                    </button>
                                    <button
                                      id="p-wallets--transactions--body--select--quoine:BCH"
                                      type="button"
                                      className=" styles_item__18hun"
                                    >
                                      <span id="p-wallets--transactions--body--select--icon-BCH">
                                        <svg width={24} height={24}>
                                          <foreignObject width={24} height={24}>
                                            <img
                                              alt="BCH"
                                              width={24}
                                              height={24}
                                              src="https://assets.liquid.com/currencies/BCH.svg"
                                            />
                                          </foreignObject>
                                        </svg>
                                      </span>
                                      <span>BCH</span>
                                    </button>
                                    <button
                                      id="p-wallets--transactions--body--select--quoine:UBTC"
                                      type="button"
                                      className=" styles_item__18hun"
                                    >
                                      <span id="p-wallets--transactions--body--select--icon-UBTC">
                                        <svg width={24} height={24}>
                                          <foreignObject width={24} height={24}>
                                            <img
                                              alt="UBTC"
                                              width={24}
                                              height={24}
                                              src="https://assets.liquid.com/currencies/UBTC.svg"
                                            />
                                          </foreignObject>
                                        </svg>
                                      </span>
                                      <span>UBTC</span>
                                    </button>
                                    <button
                                      id="p-wallets--transactions--body--select--quoine:ETN"
                                      type="button"
                                      className=" styles_item__18hun"
                                    >
                                      <span id="p-wallets--transactions--body--select--icon-ETN">
                                        <svg width={24} height={24}>
                                          <foreignObject width={24} height={24}>
                                            <img
                                              alt="ETN"
                                              width={24}
                                              height={24}
                                              src="https://assets.liquid.com/currencies/ETN.svg"
                                            />
                                          </foreignObject>
                                        </svg>
                                      </span>
                                      <span>ETN</span>
                                    </button>
                                    <button
                                      id="p-wallets--transactions--body--select--quoine:TPAY"
                                      type="button"
                                      className=" styles_item__18hun"
                                    >
                                      <span id="p-wallets--transactions--body--select--icon-TPAY">
                                        <svg width={24} height={24}>
                                          <foreignObject width={24} height={24}>
                                            <img
                                              alt="TPAY"
                                              width={24}
                                              height={24}
                                              src="https://assets.liquid.com/currencies/TPAY.svg"
                                            />
                                          </foreignObject>
                                        </svg>
                                      </span>
                                      <span>TPAY</span>
                                    </button>
                                    <button
                                      id="p-wallets--transactions--body--select--quoine:TRX"
                                      type="button"
                                      className=" styles_item__18hun"
                                    >
                                      <span id="p-wallets--transactions--body--select--icon-TRX">
                                        <svg width={24} height={24}>
                                          <foreignObject width={24} height={24}>
                                            <img
                                              alt="TRX"
                                              width={24}
                                              height={24}
                                              src="https://assets.liquid.com/currencies/TRX.svg"
                                            />
                                          </foreignObject>
                                        </svg>
                                      </span>
                                      <span>TRX</span>
                                    </button>
                                    <button
                                      id="p-wallets--transactions--body--select--quoine:VET"
                                      type="button"
                                      className=" styles_item__18hun"
                                    >
                                      <span id="p-wallets--transactions--body--select--icon-VET">
                                        <svg width={24} height={24}>
                                          <foreignObject width={24} height={24}>
                                            <img
                                              alt="VET"
                                              width={24}
                                              height={24}
                                              src="https://assets.liquid.com/currencies/VET.svg"
                                            />
                                          </foreignObject>
                                        </svg>
                                      </span>
                                      <span>VET</span>
                                    </button>
                                    <button
                                      id="p-wallets--transactions--body--select--quoine:SIX"
                                      type="button"
                                      className=" styles_item__18hun"
                                    >
                                      <span id="p-wallets--transactions--body--select--icon-SIX">
                                        <svg width={24} height={24}>
                                          <foreignObject width={24} height={24}>
                                            <img
                                              alt="SIX"
                                              width={24}
                                              height={24}
                                              src="https://assets.liquid.com/currencies/SIX.svg"
                                            />
                                          </foreignObject>
                                        </svg>
                                      </span>
                                      <span>SIX</span>
                                    </button>
                                    <button
                                      id="p-wallets--transactions--body--select--quoine:SPHTX"
                                      type="button"
                                      className=" styles_item__18hun"
                                    >
                                      <span id="p-wallets--transactions--body--select--icon-SPHTX">
                                        <svg width={24} height={24}>
                                          <foreignObject width={24} height={24}>
                                            <img
                                              alt="SPHTX"
                                              width={24}
                                              height={24}
                                              src="https://assets.liquid.com/currencies/SPHTX.svg"
                                            />
                                          </foreignObject>
                                        </svg>
                                      </span>
                                      <span>SPHTX</span>
                                    </button>
                                    <button
                                      id="p-wallets--transactions--body--select--quoine:ONT"
                                      type="button"
                                      className=" styles_item__18hun"
                                    >
                                      <span id="p-wallets--transactions--body--select--icon-ONT">
                                        <svg width={24} height={24}>
                                          <foreignObject width={24} height={24}>
                                            <img
                                              alt="ONT"
                                              width={24}
                                              height={24}
                                              src="https://assets.liquid.com/currencies/ONT.svg"
                                            />
                                          </foreignObject>
                                        </svg>
                                      </span>
                                      <span>ONT</span>
                                    </button>
                                    <button
                                      id="p-wallets--transactions--body--select--quoine:BSV"
                                      type="button"
                                      className=" styles_item__18hun"
                                    >
                                      <span id="p-wallets--transactions--body--select--icon-BSV">
                                        <svg width={24} height={24}>
                                          <foreignObject width={24} height={24}>
                                            <img
                                              alt="BSV"
                                              width={24}
                                              height={24}
                                              src="https://assets.liquid.com/currencies/BSV.svg"
                                            />
                                          </foreignObject>
                                        </svg>
                                      </span>
                                      <span>BSV</span>
                                    </button>
                                    <button
                                      id="p-wallets--transactions--body--select--quoine:RFOX"
                                      type="button"
                                      className=" styles_item__18hun"
                                    >
                                      <span id="p-wallets--transactions--body--select--icon-RFOX">
                                        <svg width={24} height={24}>
                                          <foreignObject width={24} height={24}>
                                            <img
                                              alt="RFOX"
                                              width={24}
                                              height={24}
                                              src="https://assets.liquid.com/currencies/RFOX.svg"
                                            />
                                          </foreignObject>
                                        </svg>
                                      </span>
                                      <span>RFOX</span>
                                    </button>
                                    <button
                                      id="p-wallets--transactions--body--select--quoine:KMD"
                                      type="button"
                                      className=" styles_item__18hun"
                                    >
                                      <span id="p-wallets--transactions--body--select--icon-KMD">
                                        <svg width={24} height={24}>
                                          <foreignObject width={24} height={24}>
                                            <img
                                              alt="KMD"
                                              width={24}
                                              height={24}
                                              src="https://assets.liquid.com/currencies/KMD.svg"
                                            />
                                          </foreignObject>
                                        </svg>
                                      </span>
                                      <span>KMD</span>
                                    </button>
                                    <button
                                      id="p-wallets--transactions--body--select--quoine:TUSD"
                                      type="button"
                                      className=" styles_item__18hun"
                                    >
                                      <span id="p-wallets--transactions--body--select--icon-TUSD">
                                        <svg width={24} height={24}>
                                          <foreignObject width={24} height={24}>
                                            <img
                                              alt="TUSD"
                                              width={24}
                                              height={24}
                                              src="https://assets.liquid.com/currencies/TUSD.svg"
                                            />
                                          </foreignObject>
                                        </svg>
                                      </span>
                                      <span>TUSD</span>
                                    </button>
                                    <button
                                      id="p-wallets--transactions--body--select--quoine:CHI"
                                      type="button"
                                      className=" styles_item__18hun"
                                    >
                                      <span id="p-wallets--transactions--body--select--icon-CHI">
                                        <svg width={24} height={24}>
                                          <foreignObject width={24} height={24}>
                                            <img
                                              alt="CHI"
                                              width={24}
                                              height={24}
                                              src="https://assets.liquid.com/currencies/CHI.svg"
                                            />
                                          </foreignObject>
                                        </svg>
                                      </span>
                                      <span>CHI</span>
                                    </button>
                                    <button
                                      id="p-wallets--transactions--body--select--quoine:ETH3S"
                                      type="button"
                                      className=" styles_item__18hun"
                                    >
                                      <span id="p-wallets--transactions--body--select--icon-ETH3S">
                                        <svg width={24} height={24}>
                                          <foreignObject width={24} height={24}>
                                            <img
                                              alt="ETH3S"
                                              width={24}
                                              height={24}
                                              src="https://assets.liquid.com/currencies/ETH3S.svg"
                                            />
                                          </foreignObject>
                                        </svg>
                                      </span>
                                      <span>ETH3S</span>
                                    </button>
                                    <button
                                      id="p-wallets--transactions--body--select--quoine:BTC3L"
                                      type="button"
                                      className=" styles_item__18hun"
                                    >
                                      <span id="p-wallets--transactions--body--select--icon-BTC3L">
                                        <svg width={24} height={24}>
                                          <foreignObject width={24} height={24}>
                                            <img
                                              alt="BTC3L"
                                              width={24}
                                              height={24}
                                              src="https://assets.liquid.com/currencies/BTC3L.svg"
                                            />
                                          </foreignObject>
                                        </svg>
                                      </span>
                                      <span>BTC3L</span>
                                    </button>
                                    <button
                                      id="p-wallets--transactions--body--select--quoine:ETH3L"
                                      type="button"
                                      className=" styles_item__18hun"
                                    >
                                      <span id="p-wallets--transactions--body--select--icon-ETH3L">
                                        <svg width={24} height={24}>
                                          <foreignObject width={24} height={24}>
                                            <img
                                              alt="ETH3L"
                                              width={24}
                                              height={24}
                                              src="https://assets.liquid.com/currencies/ETH3L.svg"
                                            />
                                          </foreignObject>
                                        </svg>
                                      </span>
                                      <span>ETH3L</span>
                                    </button>
                                    <button
                                      id="p-wallets--transactions--body--select--quoine:WOM"
                                      type="button"
                                      className=" styles_item__18hun"
                                    >
                                      <span id="p-wallets--transactions--body--select--icon-WOM">
                                        <svg width={24} height={24}>
                                          <foreignObject width={24} height={24}>
                                            <img
                                              alt="WOM"
                                              width={24}
                                              height={24}
                                              src="https://assets.liquid.com/currencies/WOM.svg"
                                            />
                                          </foreignObject>
                                        </svg>
                                      </span>
                                      <span>WOM</span>
                                    </button>
                                    <button
                                      id="p-wallets--transactions--body--select--quoine:GUSD"
                                      type="button"
                                      className=" styles_item__18hun"
                                    >
                                      <span id="p-wallets--transactions--body--select--icon-GUSD">
                                        <svg width={24} height={24}>
                                          <foreignObject width={24} height={24}>
                                            <img
                                              alt="GUSD"
                                              width={24}
                                              height={24}
                                              src="https://assets.liquid.com/currencies/GUSD.svg"
                                            />
                                          </foreignObject>
                                        </svg>
                                      </span>
                                      <span>GUSD</span>
                                    </button>
                                    <button
                                      id="p-wallets--transactions--body--select--quoine:MKR"
                                      type="button"
                                      className=" styles_item__18hun"
                                    >
                                      <span id="p-wallets--transactions--body--select--icon-MKR">
                                        <svg width={24} height={24}>
                                          <foreignObject width={24} height={24}>
                                            <img
                                              alt="MKR"
                                              width={24}
                                              height={24}
                                              src="https://assets.liquid.com/currencies/MKR.svg"
                                            />
                                          </foreignObject>
                                        </svg>
                                      </span>
                                      <span>MKR</span>
                                    </button>
                                    <button
                                      id="p-wallets--transactions--body--select--quoine:LINK"
                                      type="button"
                                      className=" styles_item__18hun"
                                    >
                                      <span id="p-wallets--transactions--body--select--icon-LINK">
                                        <svg width={24} height={24}>
                                          <foreignObject width={24} height={24}>
                                            <img
                                              alt="LINK"
                                              width={24}
                                              height={24}
                                              src="https://assets.liquid.com/currencies/LINK.svg"
                                            />
                                          </foreignObject>
                                        </svg>
                                      </span>
                                      <span>LINK</span>
                                    </button>
                                    <button
                                      id="p-wallets--transactions--body--select--quoine:PLG"
                                      type="button"
                                      className=" styles_item__18hun"
                                    >
                                      <span id="p-wallets--transactions--body--select--icon-PLG">
                                        <svg width={24} height={24}>
                                          <foreignObject width={24} height={24}>
                                            <img
                                              alt="PLG"
                                              width={24}
                                              height={24}
                                              src="https://assets.liquid.com/currencies/PLG.svg"
                                            />
                                          </foreignObject>
                                        </svg>
                                      </span>
                                      <span>PLG</span>
                                    </button>
                                    <button
                                      id="p-wallets--transactions--body--select--quoine:BTC3S"
                                      type="button"
                                      className=" styles_item__18hun"
                                    >
                                      <span id="p-wallets--transactions--body--select--icon-BTC3S">
                                        <svg width={24} height={24}>
                                          <foreignObject width={24} height={24}>
                                            <img
                                              alt="BTC3S"
                                              width={24}
                                              height={24}
                                              src="https://assets.liquid.com/currencies/BTC3S.svg"
                                            />
                                          </foreignObject>
                                        </svg>
                                      </span>
                                      <span>BTC3S</span>
                                    </button>
                                    <button
                                      id="p-wallets--transactions--body--select--quoine:SGR"
                                      type="button"
                                      className=" styles_item__18hun"
                                    >
                                      <span id="p-wallets--transactions--body--select--icon-SGR">
                                        <svg width={24} height={24}>
                                          <foreignObject width={24} height={24}>
                                            <img
                                              alt="SGR"
                                              width={24}
                                              height={24}
                                              src="https://assets.liquid.com/currencies/SGR.svg"
                                            />
                                          </foreignObject>
                                        </svg>
                                      </span>
                                      <span>SGR</span>
                                    </button>
                                    <button
                                      id="p-wallets--transactions--body--select--quoine:REN"
                                      type="button"
                                      className=" styles_item__18hun"
                                    >
                                      <span id="p-wallets--transactions--body--select--icon-REN">
                                        <svg width={24} height={24}>
                                          <foreignObject width={24} height={24}>
                                            <img
                                              alt="REN"
                                              width={24}
                                              height={24}
                                              src="https://assets.liquid.com/currencies/REN.svg"
                                            />
                                          </foreignObject>
                                        </svg>
                                      </span>
                                      <span>REN</span>
                                    </button>
                                    <button
                                      id="p-wallets--transactions--body--select--quoine:COMP"
                                      type="button"
                                      className=" styles_item__18hun"
                                    >
                                      <span id="p-wallets--transactions--body--select--icon-COMP">
                                        <svg width={24} height={24}>
                                          <foreignObject width={24} height={24}>
                                            <img
                                              alt="COMP"
                                              width={24}
                                              height={24}
                                              src="https://assets.liquid.com/currencies/COMP.svg"
                                            />
                                          </foreignObject>
                                        </svg>
                                      </span>
                                      <span>COMP</span>
                                    </button>
                                    <button
                                      id="p-wallets--transactions--body--select--quoine:UNI"
                                      type="button"
                                      className=" styles_item__18hun"
                                    >
                                      <span id="p-wallets--transactions--body--select--icon-UNI">
                                        <svg width={24} height={24}>
                                          <foreignObject width={24} height={24}>
                                            <img
                                              alt="UNI"
                                              width={24}
                                              height={24}
                                              src="https://assets.liquid.com/currencies/UNI.svg"
                                            />
                                          </foreignObject>
                                        </svg>
                                      </span>
                                      <span>UNI</span>
                                    </button>
                                    <button
                                      id="p-wallets--transactions--body--select--quoine:KRL"
                                      type="button"
                                      className=" styles_item__18hun"
                                    >
                                      <span id="p-wallets--transactions--body--select--icon-KRL">
                                        <svg width={24} height={24}>
                                          <foreignObject width={24} height={24}>
                                            <img
                                              alt="KRL"
                                              width={24}
                                              height={24}
                                              src="https://assets.liquid.com/currencies/KRL.svg"
                                            />
                                          </foreignObject>
                                        </svg>
                                      </span>
                                      <span>KRL</span>
                                    </button>
                                    <button
                                      id="p-wallets--transactions--body--select--quoine:LND"
                                      type="button"
                                      className=" styles_item__18hun"
                                    >
                                      <span id="p-wallets--transactions--body--select--icon-LND">
                                        <svg width={24} height={24}>
                                          <foreignObject width={24} height={24}>
                                            <img
                                              alt="LND"
                                              width={24}
                                              height={24}
                                              src="https://assets.liquid.com/currencies/LND.svg"
                                            />
                                          </foreignObject>
                                        </svg>
                                      </span>
                                      <span>LND</span>
                                    </button>
                                    <button
                                      id="p-wallets--transactions--body--select--quoine:FANZ"
                                      type="button"
                                      className=" styles_item__18hun"
                                    >
                                      <span id="p-wallets--transactions--body--select--icon-FANZ">
                                        <svg width={24} height={24}>
                                          <foreignObject width={24} height={24}>
                                            <img
                                              alt="FANZ"
                                              width={24}
                                              height={24}
                                              src="https://assets.liquid.com/currencies/FANZ.svg"
                                            />
                                          </foreignObject>
                                        </svg>
                                      </span>
                                      <span>FANZ</span>
                                    </button>
                                    <button
                                      id="p-wallets--transactions--body--select--quoine:PWV"
                                      type="button"
                                      className=" styles_item__18hun"
                                    >
                                      <span id="p-wallets--transactions--body--select--icon-PWV">
                                        <svg width={24} height={24}>
                                          <foreignObject width={24} height={24}>
                                            <img
                                              alt="PWV"
                                              width={24}
                                              height={24}
                                              src="https://assets.liquid.com/currencies/PWV.svg"
                                            />
                                          </foreignObject>
                                        </svg>
                                      </span>
                                      <span>PWV</span>
                                    </button>
                                    <button
                                      id="p-wallets--transactions--body--select--quoine:UBT"
                                      type="button"
                                      className=" styles_item__18hun"
                                    >
                                      <span id="p-wallets--transactions--body--select--icon-UBT">
                                        <svg width={24} height={24}>
                                          <foreignObject width={24} height={24}>
                                            <img
                                              alt="UBT"
                                              width={24}
                                              height={24}
                                              src="https://assets.liquid.com/currencies/UBT.svg"
                                            />
                                          </foreignObject>
                                        </svg>
                                      </span>
                                      <span>UBT</span>
                                    </button>
                                    <button
                                      id="p-wallets--transactions--body--select--quoine:MRK"
                                      type="button"
                                      className=" styles_item__18hun"
                                    >
                                      <span id="p-wallets--transactions--body--select--icon-MRK">
                                        <svg width={24} height={24}>
                                          <foreignObject width={24} height={24}>
                                            <img
                                              alt="MRK"
                                              width={24}
                                              height={24}
                                              src="https://assets.liquid.com/currencies/MRK.svg"
                                            />
                                          </foreignObject>
                                        </svg>
                                      </span>
                                      <span>MRK</span>
                                    </button>
                                    <button
                                      id="p-wallets--transactions--body--select--quoine:VRH"
                                      type="button"
                                      className=" styles_item__18hun"
                                    >
                                      <span id="p-wallets--transactions--body--select--icon-VRH">
                                        <svg width={24} height={24}>
                                          <foreignObject width={24} height={24}>
                                            <img
                                              alt="VRH"
                                              width={24}
                                              height={24}
                                              src="https://assets.liquid.com/currencies/VRH.svg"
                                            />
                                          </foreignObject>
                                        </svg>
                                      </span>
                                      <span>VRH</span>
                                    </button>
                                    <button
                                      id="p-wallets--transactions--body--select--quoine:ALX"
                                      type="button"
                                      className=" styles_item__18hun"
                                    >
                                      <span id="p-wallets--transactions--body--select--icon-ALX">
                                        <svg width={24} height={24}>
                                          <foreignObject width={24} height={24}>
                                            <img
                                              alt="ALX"
                                              width={24}
                                              height={24}
                                              src="https://assets.liquid.com/currencies/ALX.svg"
                                            />
                                          </foreignObject>
                                        </svg>
                                      </span>
                                      <span>ALX</span>
                                    </button>
                                    <button
                                      id="p-wallets--transactions--body--select--quoine:CRPT"
                                      type="button"
                                      className=" styles_item__18hun"
                                    >
                                      <span id="p-wallets--transactions--body--select--icon-CRPT">
                                        <svg width={24} height={24}>
                                          <foreignObject width={24} height={24}>
                                            <img
                                              alt="CRPT"
                                              width={24}
                                              height={24}
                                              src="https://assets.liquid.com/currencies/CRPT.svg"
                                            />
                                          </foreignObject>
                                        </svg>
                                      </span>
                                      <span>CRPT</span>
                                    </button>
                                    <button
                                      id="p-wallets--transactions--body--select--quoine:BNC"
                                      type="button"
                                      className=" styles_item__18hun"
                                    >
                                      <span id="p-wallets--transactions--body--select--icon-BNC">
                                        <svg width={24} height={24}>
                                          <foreignObject width={24} height={24}>
                                            <img
                                              alt="BNC"
                                              width={24}
                                              height={24}
                                              src="https://assets.liquid.com/currencies/BNC.svg"
                                            />
                                          </foreignObject>
                                        </svg>
                                      </span>
                                      <span>BNC</span>
                                    </button>
                                    <button
                                      id="p-wallets--transactions--body--select--quoine:QASH"
                                      type="button"
                                      className=" styles_item__18hun"
                                    >
                                      <span id="p-wallets--transactions--body--select--icon-QASH">
                                        <svg width={24} height={24}>
                                          <foreignObject width={24} height={24}>
                                            <img
                                              alt="QASH"
                                              width={24}
                                              height={24}
                                              src="https://assets.liquid.com/currencies/QASH.svg"
                                            />
                                          </foreignObject>
                                        </svg>
                                      </span>
                                      <span>QASH</span>
                                    </button>
                                    <button
                                      id="p-wallets--transactions--body--select--quoine:RAKU"
                                      type="button"
                                      className=" styles_item__18hun"
                                    >
                                      <span id="p-wallets--transactions--body--select--icon-RAKU">
                                        <svg width={24} height={24}>
                                          <foreignObject width={24} height={24}>
                                            <img
                                              alt="RAKU"
                                              width={24}
                                              height={24}
                                              src="https://assets.liquid.com/currencies/RAKU.svg"
                                            />
                                          </foreignObject>
                                        </svg>
                                      </span>
                                      <span>RAKU</span>
                                    </button>
                                    <button
                                      id="p-wallets--transactions--body--select--quoine:GET"
                                      type="button"
                                      className=" styles_item__18hun"
                                    >
                                      <span id="p-wallets--transactions--body--select--icon-GET">
                                        <svg width={24} height={24}>
                                          <foreignObject width={24} height={24}>
                                            <img
                                              alt="GET"
                                              width={24}
                                              height={24}
                                              src="https://assets.liquid.com/currencies/GET.svg"
                                            />
                                          </foreignObject>
                                        </svg>
                                      </span>
                                      <span>GET</span>
                                    </button>
                                    <button
                                      id="p-wallets--transactions--body--select--quoine:AMLT"
                                      type="button"
                                      className=" styles_item__18hun"
                                    >
                                      <span id="p-wallets--transactions--body--select--icon-AMLT">
                                        <svg width={24} height={24}>
                                          <foreignObject width={24} height={24}>
                                            <img
                                              alt="AMLT"
                                              width={24}
                                              height={24}
                                              src="https://assets.liquid.com/currencies/AMLT.svg"
                                            />
                                          </foreignObject>
                                        </svg>
                                      </span>
                                      <span>AMLT</span>
                                    </button>
                                    <button
                                      id="p-wallets--transactions--body--select--quoine:ILK"
                                      type="button"
                                      className=" styles_item__18hun"
                                    >
                                      <span id="p-wallets--transactions--body--select--icon-ILK">
                                        <svg width={24} height={24}>
                                          <foreignObject width={24} height={24}>
                                            <img
                                              alt="ILK"
                                              width={24}
                                              height={24}
                                              src="https://assets.liquid.com/currencies/ILK.svg"
                                            />
                                          </foreignObject>
                                        </svg>
                                      </span>
                                      <span>ILK</span>
                                    </button>
                                    <button
                                      id="p-wallets--transactions--body--select--quoine:MITH"
                                      type="button"
                                      className=" styles_item__18hun"
                                    >
                                      <span id="p-wallets--transactions--body--select--icon-MITH">
                                        <svg width={24} height={24}>
                                          <foreignObject width={24} height={24}>
                                            <img
                                              alt="MITH"
                                              width={24}
                                              height={24}
                                              src="https://assets.liquid.com/currencies/MITH.svg"
                                            />
                                          </foreignObject>
                                        </svg>
                                      </span>
                                      <span>MITH</span>
                                    </button>
                                    <button
                                      id="p-wallets--transactions--body--select--quoine:DRG"
                                      type="button"
                                      className=" styles_item__18hun"
                                    >
                                      <span id="p-wallets--transactions--body--select--icon-DRG">
                                        <svg width={24} height={24}>
                                          <foreignObject width={24} height={24}>
                                            <img
                                              alt="DRG"
                                              width={24}
                                              height={24}
                                              src="https://assets.liquid.com/currencies/DRG.svg"
                                            />
                                          </foreignObject>
                                        </svg>
                                      </span>
                                      <span>DRG</span>
                                    </button>
                                    <button
                                      id="p-wallets--transactions--body--select--quoine:FSN"
                                      type="button"
                                      className=" styles_item__18hun"
                                    >
                                      <span id="p-wallets--transactions--body--select--icon-FSN">
                                        <svg width={24} height={24}>
                                          <foreignObject width={24} height={24}>
                                            <img
                                              alt="FSN"
                                              width={24}
                                              height={24}
                                              src="https://assets.liquid.com/currencies/FSN.svg"
                                            />
                                          </foreignObject>
                                        </svg>
                                      </span>
                                      <span>FSN</span>
                                    </button>
                                    <button
                                      id="p-wallets--transactions--body--select--quoine:DACS"
                                      type="button"
                                      className=" styles_item__18hun"
                                    >
                                      <span id="p-wallets--transactions--body--select--icon-DACS">
                                        <svg width={24} height={24}>
                                          <foreignObject width={24} height={24}>
                                            <img
                                              alt="DACS"
                                              width={24}
                                              height={24}
                                              src="https://assets.liquid.com/currencies/DACS.svg"
                                            />
                                          </foreignObject>
                                        </svg>
                                      </span>
                                      <span>DACS</span>
                                    </button>
                                    <button
                                      id="p-wallets--transactions--body--select--quoine:GEN"
                                      type="button"
                                      className=" styles_item__18hun"
                                    >
                                      <span id="p-wallets--transactions--body--select--icon-GEN">
                                        <svg width={24} height={24}>
                                          <foreignObject width={24} height={24}>
                                            <img
                                              alt="GEN"
                                              width={24}
                                              height={24}
                                              src="https://assets.liquid.com/currencies/GEN.svg"
                                            />
                                          </foreignObject>
                                        </svg>
                                      </span>
                                      <span>GEN</span>
                                    </button>
                                    <button
                                      id="p-wallets--transactions--body--select--quoine:IHF"
                                      type="button"
                                      className=" styles_item__18hun"
                                    >
                                      <span id="p-wallets--transactions--body--select--icon-IHF">
                                        <svg width={24} height={24}>
                                          <foreignObject width={24} height={24}>
                                            <img
                                              alt="IHF"
                                              width={24}
                                              height={24}
                                              src="https://assets.liquid.com/currencies/IHF.svg"
                                            />
                                          </foreignObject>
                                        </svg>
                                      </span>
                                      <span>IHF</span>
                                    </button>
                                    <button
                                      id="p-wallets--transactions--body--select--quoine:USDC"
                                      type="button"
                                      className=" styles_item__18hun"
                                    >
                                      <span id="p-wallets--transactions--body--select--icon-USDC">
                                        <svg width={24} height={24}>
                                          <foreignObject width={24} height={24}>
                                            <img
                                              alt="USDC"
                                              width={24}
                                              height={24}
                                              src="https://assets.liquid.com/currencies/USDC.svg"
                                            />
                                          </foreignObject>
                                        </svg>
                                      </span>
                                      <span>USDC</span>
                                    </button>
                                    <button
                                      id="p-wallets--transactions--body--select--quoine:ANCT"
                                      type="button"
                                      className=" styles_item__18hun"
                                    >
                                      <span id="p-wallets--transactions--body--select--icon-ANCT">
                                        <svg width={24} height={24}>
                                          <foreignObject width={24} height={24}>
                                            <img
                                              alt="ANCT"
                                              width={24}
                                              height={24}
                                              src="https://assets.liquid.com/currencies/ANCT.svg"
                                            />
                                          </foreignObject>
                                        </svg>
                                      </span>
                                      <span>ANCT</span>
                                    </button>
                                    <button
                                      id="p-wallets--transactions--body--select--quoine:STACS"
                                      type="button"
                                      className=" styles_item__18hun"
                                    >
                                      <span id="p-wallets--transactions--body--select--icon-STACS">
                                        <svg width={24} height={24}>
                                          <foreignObject width={24} height={24}>
                                            <img
                                              alt="STACS"
                                              width={24}
                                              height={24}
                                              src="https://assets.liquid.com/currencies/STACS.svg"
                                            />
                                          </foreignObject>
                                        </svg>
                                      </span>
                                      <span>STACS</span>
                                    </button>
                                    <button
                                      id="p-wallets--transactions--body--select--quoine:QCTN"
                                      type="button"
                                      className=" styles_item__18hun"
                                    >
                                      <span id="p-wallets--transactions--body--select--icon-QCTN">
                                        <svg width={24} height={24}>
                                          <foreignObject width={24} height={24}>
                                            <img
                                              alt="QCTN"
                                              width={24}
                                              height={24}
                                              src="https://assets.liquid.com/currencies/QCTN.svg"
                                            />
                                          </foreignObject>
                                        </svg>
                                      </span>
                                      <span>QCTN</span>
                                    </button>
                                    <button
                                      id="p-wallets--transactions--body--select--quoine:NPLC"
                                      type="button"
                                      className=" styles_item__18hun"
                                    >
                                      <span id="p-wallets--transactions--body--select--icon-NPLC">
                                        <svg width={24} height={24}>
                                          <foreignObject width={24} height={24}>
                                            <img
                                              alt="NPLC"
                                              width={24}
                                              height={24}
                                              src="https://assets.liquid.com/currencies/NPLC.svg"
                                            />
                                          </foreignObject>
                                        </svg>
                                      </span>
                                      <span>NPLC</span>
                                    </button>
                                    <button
                                      id="p-wallets--transactions--body--select--quoine:MITX"
                                      type="button"
                                      className=" styles_item__18hun"
                                    >
                                      <span id="p-wallets--transactions--body--select--icon-MITX">
                                        <svg width={24} height={24}>
                                          <foreignObject width={24} height={24}>
                                            <img
                                              alt="MITX"
                                              width={24}
                                              height={24}
                                              src="https://assets.liquid.com/currencies/MITX.svg"
                                            />
                                          </foreignObject>
                                        </svg>
                                      </span>
                                      <span>MITX</span>
                                    </button>
                                    <button
                                      id="p-wallets--transactions--body--select--quoine:HART"
                                      type="button"
                                      className=" styles_item__18hun"
                                    >
                                      <span id="p-wallets--transactions--body--select--icon-HART">
                                        <svg width={24} height={24}>
                                          <foreignObject width={24} height={24}>
                                            <img
                                              alt="HART"
                                              width={24}
                                              height={24}
                                              src="https://assets.liquid.com/currencies/HART.svg"
                                            />
                                          </foreignObject>
                                        </svg>
                                      </span>
                                      <span>HART</span>
                                    </button>
                                    <button
                                      id="p-wallets--transactions--body--select--quoine:DAI"
                                      type="button"
                                      className=" styles_item__18hun"
                                    >
                                      <span id="p-wallets--transactions--body--select--icon-DAI">
                                        <svg width={24} height={24}>
                                          <foreignObject width={24} height={24}>
                                            <img
                                              alt="DAI"
                                              width={24}
                                              height={24}
                                              src="https://assets.liquid.com/currencies/DAI.svg"
                                            />
                                          </foreignObject>
                                        </svg>
                                      </span>
                                      <span>DAI</span>
                                    </button>
                                    <button
                                      id="p-wallets--transactions--body--select--quoine:CEL"
                                      type="button"
                                      className=" styles_item__18hun"
                                    >
                                      <span id="p-wallets--transactions--body--select--icon-CEL">
                                        <svg width={24} height={24}>
                                          <foreignObject width={24} height={24}>
                                            <img
                                              alt="CEL"
                                              width={24}
                                              height={24}
                                              src="https://assets.liquid.com/currencies/CEL.svg"
                                            />
                                          </foreignObject>
                                        </svg>
                                      </span>
                                      <span>CEL</span>
                                    </button>
                                    <button
                                      id="p-wallets--transactions--body--select--quoine:FTT"
                                      type="button"
                                      className=" styles_item__18hun"
                                    >
                                      <span id="p-wallets--transactions--body--select--icon-FTT">
                                        <svg width={24} height={24}>
                                          <foreignObject width={24} height={24}>
                                            <img
                                              alt="FTT"
                                              width={24}
                                              height={24}
                                              src="https://assets.liquid.com/currencies/FTT.svg"
                                            />
                                          </foreignObject>
                                        </svg>
                                      </span>
                                      <span>FTT</span>
                                    </button>
                                    <button
                                      id="p-wallets--transactions--body--select--quoine:ADH"
                                      type="button"
                                      className=" styles_item__18hun"
                                    >
                                      <span id="p-wallets--transactions--body--select--icon-ADH">
                                        <svg width={24} height={24}>
                                          <foreignObject width={24} height={24}>
                                            <img
                                              alt="ADH"
                                              width={24}
                                              height={24}
                                              src="https://assets.liquid.com/currencies/ADH.svg"
                                            />
                                          </foreignObject>
                                        </svg>
                                      </span>
                                      <span>ADH</span>
                                    </button>
                                    <button
                                      id="p-wallets--transactions--body--select--quoine:COT"
                                      type="button"
                                      className=" styles_item__18hun"
                                    >
                                      <span id="p-wallets--transactions--body--select--icon-COT">
                                        <svg width={24} height={24}>
                                          <foreignObject width={24} height={24}>
                                            <img
                                              alt="COT"
                                              width={24}
                                              height={24}
                                              src="https://assets.liquid.com/currencies/COT.svg"
                                            />
                                          </foreignObject>
                                        </svg>
                                      </span>
                                      <span>COT</span>
                                    </button>
                                    <button
                                      id="p-wallets--transactions--body--select--quoine:GXC"
                                      type="button"
                                      className=" styles_item__18hun"
                                    >
                                      <span id="p-wallets--transactions--body--select--icon-GXC">
                                        <svg width={24} height={24}>
                                          <foreignObject width={24} height={24}>
                                            <img
                                              alt="GXC"
                                              width={24}
                                              height={24}
                                              src="https://assets.liquid.com/currencies/GXC.svg"
                                            />
                                          </foreignObject>
                                        </svg>
                                      </span>
                                      <span>GXC</span>
                                    </button>
                                    <button
                                      id="p-wallets--transactions--body--select--quoine:LIKE"
                                      type="button"
                                      className=" styles_item__18hun"
                                    >
                                      <span id="p-wallets--transactions--body--select--icon-LIKE">
                                        <svg width={24} height={24}>
                                          <foreignObject width={24} height={24}>
                                            <img
                                              alt="LIKE"
                                              width={24}
                                              height={24}
                                              src="https://assets.liquid.com/currencies/LIKE.svg"
                                            />
                                          </foreignObject>
                                        </svg>
                                      </span>
                                      <span>LIKE</span>
                                    </button>
                                    <button
                                      id="p-wallets--transactions--body--select--quoine:DREAM"
                                      type="button"
                                      className=" styles_item__18hun"
                                    >
                                      <span id="p-wallets--transactions--body--select--icon-DREAM">
                                        <svg width={24} height={24}>
                                          <foreignObject width={24} height={24}>
                                            <img
                                              alt="DREAM"
                                              width={24}
                                              height={24}
                                              src="https://assets.liquid.com/currencies/DREAM.svg"
                                            />
                                          </foreignObject>
                                        </svg>
                                      </span>
                                      <span>DREAM</span>
                                    </button>
                                    <button
                                      id="p-wallets--transactions--body--select--quoine:SNIP"
                                      type="button"
                                      className=" styles_item__18hun"
                                    >
                                      <span id="p-wallets--transactions--body--select--icon-SNIP">
                                        <svg width={24} height={24}>
                                          <foreignObject width={24} height={24}>
                                            <img
                                              alt="SNIP"
                                              width={24}
                                              height={24}
                                              src="https://assets.liquid.com/currencies/SNIP.svg"
                                            />
                                          </foreignObject>
                                        </svg>
                                      </span>
                                      <span>SNIP</span>
                                    </button>
                                    <button
                                      id="p-wallets--transactions--body--select--quoine:MCO"
                                      type="button"
                                      className=" styles_item__18hun"
                                    >
                                      <span id="p-wallets--transactions--body--select--icon-MCO">
                                        <svg width={24} height={24}>
                                          <foreignObject width={24} height={24}>
                                            <img
                                              alt="MCO"
                                              width={24}
                                              height={24}
                                              src="https://assets.liquid.com/currencies/MCO.svg"
                                            />
                                          </foreignObject>
                                        </svg>
                                      </span>
                                      <span>MCO</span>
                                    </button>
                                    <button
                                      id="p-wallets--transactions--body--select--quoine:MT"
                                      type="button"
                                      className=" styles_item__18hun"
                                    >
                                      <span id="p-wallets--transactions--body--select--icon-MT">
                                        <svg width={24} height={24}>
                                          <foreignObject width={24} height={24}>
                                            <img
                                              alt="MT"
                                              width={24}
                                              height={24}
                                              src="https://assets.liquid.com/currencies/MT.svg"
                                            />
                                          </foreignObject>
                                        </svg>
                                      </span>
                                      <span>MT</span>
                                    </button>
                                    <button
                                      id="p-wallets--transactions--body--select--quoine:BTRN"
                                      type="button"
                                      className=" styles_item__18hun"
                                    >
                                      <span id="p-wallets--transactions--body--select--icon-BTRN">
                                        <svg width={24} height={24}>
                                          <foreignObject width={24} height={24}>
                                            <img
                                              alt="BTRN"
                                              width={24}
                                              height={24}
                                              src="https://assets.liquid.com/currencies/BTRN.svg"
                                            />
                                          </foreignObject>
                                        </svg>
                                      </span>
                                      <span>BTRN</span>
                                    </button>
                                    <button
                                      id="p-wallets--transactions--body--select--quoine:GZE"
                                      type="button"
                                      className=" styles_item__18hun"
                                    >
                                      <span id="p-wallets--transactions--body--select--icon-GZE">
                                        <svg width={24} height={24}>
                                          <foreignObject width={24} height={24}>
                                            <img
                                              alt="GZE"
                                              width={24}
                                              height={24}
                                              src="https://assets.liquid.com/currencies/GZE.svg"
                                            />
                                          </foreignObject>
                                        </svg>
                                      </span>
                                      <span>GZE</span>
                                    </button>
                                    <button
                                      id="p-wallets--transactions--body--select--quoine:XNK"
                                      type="button"
                                      className=" styles_item__18hun"
                                    >
                                      <span id="p-wallets--transactions--body--select--icon-XNK">
                                        <svg width={24} height={24}>
                                          <foreignObject width={24} height={24}>
                                            <img
                                              alt="XNK"
                                              width={24}
                                              height={24}
                                              src="https://assets.liquid.com/currencies/XNK.svg"
                                            />
                                          </foreignObject>
                                        </svg>
                                      </span>
                                      <span>XNK</span>
                                    </button>
                                    <button
                                      id="p-wallets--transactions--body--select--quoine:THX"
                                      type="button"
                                      className=" styles_item__18hun"
                                    >
                                      <span id="p-wallets--transactions--body--select--icon-THX">
                                        <svg width={24} height={24}>
                                          <foreignObject width={24} height={24}>
                                            <img
                                              alt="THX"
                                              width={24}
                                              height={24}
                                              src="https://assets.liquid.com/currencies/THX.svg"
                                            />
                                          </foreignObject>
                                        </svg>
                                      </span>
                                      <span>THX</span>
                                    </button>
                                    <button
                                      id="p-wallets--transactions--body--select--quoine:FTX"
                                      type="button"
                                      className=" styles_item__18hun"
                                    >
                                      <span id="p-wallets--transactions--body--select--icon-FTX">
                                        <svg width={24} height={24}>
                                          <foreignObject width={24} height={24}>
                                            <img
                                              alt="FTX"
                                              width={24}
                                              height={24}
                                              src="https://assets.liquid.com/currencies/FTX.svg"
                                            />
                                          </foreignObject>
                                        </svg>
                                      </span>
                                      <span>FTX</span>
                                    </button>
                                    <button
                                      id="p-wallets--transactions--body--select--quoine:VUU"
                                      type="button"
                                      className=" styles_item__18hun"
                                    >
                                      <span id="p-wallets--transactions--body--select--icon-VUU">
                                        <svg width={24} height={24}>
                                          <foreignObject width={24} height={24}>
                                            <img
                                              alt="VUU"
                                              width={24}
                                              height={24}
                                              src="https://assets.liquid.com/currencies/VUU.svg"
                                            />
                                          </foreignObject>
                                        </svg>
                                      </span>
                                      <span>VUU</span>
                                    </button>
                                    <button
                                      id="p-wallets--transactions--body--select--quoine:FLIXX"
                                      type="button"
                                      className=" styles_item__18hun"
                                    >
                                      <span id="p-wallets--transactions--body--select--icon-FLIXX">
                                        <svg width={24} height={24}>
                                          <foreignObject width={24} height={24}>
                                            <img
                                              alt="FLIXX"
                                              width={24}
                                              height={24}
                                              src="https://assets.liquid.com/currencies/FLIXX.svg"
                                            />
                                          </foreignObject>
                                        </svg>
                                      </span>
                                      <span>FLIXX</span>
                                    </button>
                                    <button
                                      id="p-wallets--transactions--body--select--quoine:ENJ"
                                      type="button"
                                      className=" styles_item__18hun"
                                    >
                                      <span id="p-wallets--transactions--body--select--icon-ENJ">
                                        <svg width={24} height={24}>
                                          <foreignObject width={24} height={24}>
                                            <img
                                              alt="ENJ"
                                              width={24}
                                              height={24}
                                              src="https://assets.liquid.com/currencies/ENJ.svg"
                                            />
                                          </foreignObject>
                                        </svg>
                                      </span>
                                      <span>ENJ</span>
                                    </button>
                                    <button
                                      id="p-wallets--transactions--body--select--quoine:BRC"
                                      type="button"
                                      className=" styles_item__18hun"
                                    >
                                      <span id="p-wallets--transactions--body--select--icon-BRC">
                                        <svg width={24} height={24}>
                                          <foreignObject width={24} height={24}>
                                            <img
                                              alt="BRC"
                                              width={24}
                                              height={24}
                                              src="https://assets.liquid.com/currencies/BRC.svg"
                                            />
                                          </foreignObject>
                                        </svg>
                                      </span>
                                      <span>BRC</span>
                                    </button>
                                    <button
                                      id="p-wallets--transactions--body--select--quoine:IPSX"
                                      type="button"
                                      className=" styles_item__18hun"
                                    >
                                      <span id="p-wallets--transactions--body--select--icon-IPSX">
                                        <svg width={24} height={24}>
                                          <foreignObject width={24} height={24}>
                                            <img
                                              alt="IPSX"
                                              width={24}
                                              height={24}
                                              src="https://assets.liquid.com/currencies/IPSX.svg"
                                            />
                                          </foreignObject>
                                        </svg>
                                      </span>
                                      <span>IPSX</span>
                                    </button>
                                    <button
                                      id="p-wallets--transactions--body--select--quoine:SNX"
                                      type="button"
                                      className=" styles_item__18hun"
                                    >
                                      <span id="p-wallets--transactions--body--select--icon-SNX">
                                        <svg width={24} height={24}>
                                          <foreignObject width={24} height={24}>
                                            <img
                                              alt="SNX"
                                              width={24}
                                              height={24}
                                              src="https://assets.liquid.com/currencies/SNX.svg"
                                            />
                                          </foreignObject>
                                        </svg>
                                      </span>
                                      <span>SNX</span>
                                    </button>
                                    <button
                                      id="p-wallets--transactions--body--select--quoine:FDX"
                                      type="button"
                                      className=" styles_item__18hun"
                                    >
                                      <span id="p-wallets--transactions--body--select--icon-FDX">
                                        <svg width={24} height={24}>
                                          <foreignObject width={24} height={24}>
                                            <img
                                              alt="FDX"
                                              width={24}
                                              height={24}
                                              src="https://assets.liquid.com/currencies/FDX.svg"
                                            />
                                          </foreignObject>
                                        </svg>
                                      </span>
                                      <span>FDX</span>
                                    </button>
                                    <button
                                      id="p-wallets--transactions--body--select--quoine:ECH"
                                      type="button"
                                      className=" styles_item__18hun"
                                    >
                                      <span id="p-wallets--transactions--body--select--icon-ECH">
                                        <svg width={24} height={24}>
                                          <foreignObject width={24} height={24}>
                                            <img
                                              alt="ECH"
                                              width={24}
                                              height={24}
                                              src="https://assets.liquid.com/currencies/ECH.svg"
                                            />
                                          </foreignObject>
                                        </svg>
                                      </span>
                                      <span>ECH</span>
                                    </button>
                                    <button
                                      id="p-wallets--transactions--body--select--quoine:SER"
                                      type="button"
                                      className=" styles_item__18hun"
                                    >
                                      <span id="p-wallets--transactions--body--select--icon-SER">
                                        <svg width={24} height={24}>
                                          <foreignObject width={24} height={24}>
                                            <img
                                              alt="SER"
                                              width={24}
                                              height={24}
                                              src="https://assets.liquid.com/currencies/SER.svg"
                                            />
                                          </foreignObject>
                                        </svg>
                                      </span>
                                      <span>SER</span>
                                    </button>
                                    <button
                                      id="p-wallets--transactions--body--select--quoine:CAN"
                                      type="button"
                                      className=" styles_item__18hun"
                                    >
                                      <span id="p-wallets--transactions--body--select--icon-CAN">
                                        <svg width={24} height={24}>
                                          <foreignObject width={24} height={24}>
                                            <img
                                              alt="CAN"
                                              width={24}
                                              height={24}
                                              src="https://assets.liquid.com/currencies/CAN.svg"
                                            />
                                          </foreignObject>
                                        </svg>
                                      </span>
                                      <span>CAN</span>
                                    </button>
                                    <button
                                      id="p-wallets--transactions--body--select--quoine:IXT"
                                      type="button"
                                      className=" styles_item__18hun"
                                    >
                                      <span id="p-wallets--transactions--body--select--icon-IXT">
                                        <svg width={24} height={24}>
                                          <foreignObject width={24} height={24}>
                                            <img
                                              alt="IXT"
                                              width={24}
                                              height={24}
                                              src="https://assets.liquid.com/currencies/IXT.svg"
                                            />
                                          </foreignObject>
                                        </svg>
                                      </span>
                                      <span>IXT</span>
                                    </button>
                                    <button
                                      id="p-wallets--transactions--body--select--quoine:IDH"
                                      type="button"
                                      className=" styles_item__18hun"
                                    >
                                      <span id="p-wallets--transactions--body--select--icon-IDH">
                                        <svg width={24} height={24}>
                                          <foreignObject width={24} height={24}>
                                            <img
                                              alt="IDH"
                                              width={24}
                                              height={24}
                                              src="https://assets.liquid.com/currencies/IDH.svg"
                                            />
                                          </foreignObject>
                                        </svg>
                                      </span>
                                      <span>IDH</span>
                                    </button>
                                    <button
                                      id="p-wallets--transactions--body--select--quoine:ORBS"
                                      type="button"
                                      className=" styles_item__18hun"
                                    >
                                      <span id="p-wallets--transactions--body--select--icon-ORBS">
                                        <svg width={24} height={24}>
                                          <foreignObject width={24} height={24}>
                                            <img
                                              alt="ORBS"
                                              width={24}
                                              height={24}
                                              src="https://assets.liquid.com/currencies/ORBS.svg"
                                            />
                                          </foreignObject>
                                        </svg>
                                      </span>
                                      <span>ORBS</span>
                                    </button>
                                    <button
                                      id="p-wallets--transactions--body--select--quoine:CIM"
                                      type="button"
                                      className=" styles_item__18hun"
                                    >
                                      <span id="p-wallets--transactions--body--select--icon-CIM">
                                        <svg width={24} height={24}>
                                          <foreignObject width={24} height={24}>
                                            <img
                                              alt="CIM"
                                              width={24}
                                              height={24}
                                              src="https://assets.liquid.com/currencies/CIM.svg"
                                            />
                                          </foreignObject>
                                        </svg>
                                      </span>
                                      <span>CIM</span>
                                    </button>
                                    <button
                                      id="p-wallets--transactions--body--select--quoine:ROOBEE"
                                      type="button"
                                      className=" styles_item__18hun"
                                    >
                                      <span id="p-wallets--transactions--body--select--icon-ROOBEE">
                                        <svg width={24} height={24}>
                                          <foreignObject width={24} height={24}>
                                            <img
                                              alt="ROOBEE"
                                              width={24}
                                              height={24}
                                              src="https://assets.liquid.com/currencies/ROOBEE.svg"
                                            />
                                          </foreignObject>
                                        </svg>
                                      </span>
                                      <span>ROOBEE</span>
                                    </button>
                                    <button
                                      id="p-wallets--transactions--body--select--quoine:RSR"
                                      type="button"
                                      className=" styles_item__18hun"
                                    >
                                      <span id="p-wallets--transactions--body--select--icon-RSR">
                                        <svg width={24} height={24}>
                                          <foreignObject width={24} height={24}>
                                            <img
                                              alt="RSR"
                                              width={24}
                                              height={24}
                                              src="https://assets.liquid.com/currencies/RSR.svg"
                                            />
                                          </foreignObject>
                                        </svg>
                                      </span>
                                      <span>RSR</span>
                                    </button>
                                    <button
                                      id="p-wallets--transactions--body--select--quoine:DENT"
                                      type="button"
                                      className=" styles_item__18hun"
                                    >
                                      <span id="p-wallets--transactions--body--select--icon-DENT">
                                        <svg width={24} height={24}>
                                          <foreignObject width={24} height={24}>
                                            <img
                                              alt="DENT"
                                              width={24}
                                              height={24}
                                              src="https://assets.liquid.com/currencies/DENT.svg"
                                            />
                                          </foreignObject>
                                        </svg>
                                      </span>
                                      <span>DENT</span>
                                    </button>
                                    <button
                                      id="p-wallets--transactions--body--select--quoine:RSV"
                                      type="button"
                                      className=" styles_item__18hun"
                                    >
                                      <span id="p-wallets--transactions--body--select--icon-RSV">
                                        <svg width={24} height={24}>
                                          <foreignObject width={24} height={24}>
                                            <img
                                              alt="RSV"
                                              width={24}
                                              height={24}
                                              src="https://assets.liquid.com/currencies/RSV.svg"
                                            />
                                          </foreignObject>
                                        </svg>
                                      </span>
                                      <span>RSV</span>
                                    </button>
                                    <button
                                      id="p-wallets--transactions--body--select--quoine:PPP"
                                      type="button"
                                      className=" styles_item__18hun"
                                    >
                                      <span id="p-wallets--transactions--body--select--icon-PPP">
                                        <svg width={24} height={24}>
                                          <foreignObject width={24} height={24}>
                                            <img
                                              alt="PPP"
                                              width={24}
                                              height={24}
                                              src="https://assets.liquid.com/currencies/PPP.svg"
                                            />
                                          </foreignObject>
                                        </svg>
                                      </span>
                                      <span>PPP</span>
                                    </button>
                                    <button
                                      id="p-wallets--transactions--body--select--quoine:MGO"
                                      type="button"
                                      className=" styles_item__18hun"
                                    >
                                      <span id="p-wallets--transactions--body--select--icon-MGO">
                                        <svg width={24} height={24}>
                                          <foreignObject width={24} height={24}>
                                            <img
                                              alt="MGO"
                                              width={24}
                                              height={24}
                                              src="https://assets.liquid.com/currencies/MGO.svg"
                                            />
                                          </foreignObject>
                                        </svg>
                                      </span>
                                      <span>MGO</span>
                                    </button>
                                    <button
                                      id="p-wallets--transactions--body--select--quoine:OAX"
                                      type="button"
                                      className=" styles_item__18hun"
                                    >
                                      <span id="p-wallets--transactions--body--select--icon-OAX">
                                        <svg width={24} height={24}>
                                          <foreignObject width={24} height={24}>
                                            <img
                                              alt="OAX"
                                              width={24}
                                              height={24}
                                              src="https://assets.liquid.com/currencies/OAX.svg"
                                            />
                                          </foreignObject>
                                        </svg>
                                      </span>
                                      <span>OAX</span>
                                    </button>
                                    <button
                                      id="p-wallets--transactions--body--select--quoine:ZPR"
                                      type="button"
                                      className=" styles_item__18hun"
                                    >
                                      <span id="p-wallets--transactions--body--select--icon-ZPR">
                                        <svg width={24} height={24}>
                                          <foreignObject width={24} height={24}>
                                            <img
                                              alt="ZPR"
                                              width={24}
                                              height={24}
                                              src="https://assets.liquid.com/currencies/ZPR.svg"
                                            />
                                          </foreignObject>
                                        </svg>
                                      </span>
                                      <span>ZPR</span>
                                    </button>
                                    <button
                                      id="p-wallets--transactions--body--select--quoine:UKG"
                                      type="button"
                                      className=" styles_item__18hun"
                                    >
                                      <span id="p-wallets--transactions--body--select--icon-UKG">
                                        <svg width={24} height={24}>
                                          <foreignObject width={24} height={24}>
                                            <img
                                              alt="UKG"
                                              width={24}
                                              height={24}
                                              src="https://assets.liquid.com/currencies/UKG.svg"
                                            />
                                          </foreignObject>
                                        </svg>
                                      </span>
                                      <span>UKG</span>
                                    </button>
                                    <button
                                      id="p-wallets--transactions--body--select--quoine:ARE"
                                      type="button"
                                      className=" styles_item__18hun"
                                    >
                                      <span id="p-wallets--transactions--body--select--icon-ARE">
                                        <svg width={24} height={24}>
                                          <foreignObject width={24} height={24}>
                                            <img
                                              alt="ARE"
                                              width={24}
                                              height={24}
                                              src="https://assets.liquid.com/currencies/ARE.svg"
                                            />
                                          </foreignObject>
                                        </svg>
                                      </span>
                                      <span>ARE</span>
                                    </button>
                                    <button
                                      id="p-wallets--transactions--body--select--quoine:GOM2"
                                      type="button"
                                      className=" styles_item__18hun"
                                    >
                                      <span id="p-wallets--transactions--body--select--icon-GOM2">
                                        <svg width={24} height={24}>
                                          <foreignObject width={24} height={24}>
                                            <img
                                              alt="GOM2"
                                              width={24}
                                              height={24}
                                              src="https://assets.liquid.com/currencies/GOM2.svg"
                                            />
                                          </foreignObject>
                                        </svg>
                                      </span>
                                      <span>GOM2</span>
                                    </button>
                                    <button
                                      id="p-wallets--transactions--body--select--quoine:ONG"
                                      type="button"
                                      className=" styles_item__18hun"
                                    >
                                      <span id="p-wallets--transactions--body--select--icon-ONG">
                                        <svg width={24} height={24}>
                                          <foreignObject width={24} height={24}>
                                            <img
                                              alt="ONG"
                                              width={24}
                                              height={24}
                                              src="https://assets.liquid.com/currencies/ONG.svg"
                                            />
                                          </foreignObject>
                                        </svg>
                                      </span>
                                      <span>ONG</span>
                                    </button>
                                    <button
                                      id="p-wallets--transactions--body--select--quoine:XPT"
                                      type="button"
                                      className=" styles_item__18hun"
                                    >
                                      <span id="p-wallets--transactions--body--select--icon-XPT">
                                        <svg width={24} height={24}>
                                          <foreignObject width={24} height={24}>
                                            <img
                                              alt="XPT"
                                              width={24}
                                              height={24}
                                              src="https://assets.liquid.com/currencies/XPT.svg"
                                            />
                                          </foreignObject>
                                        </svg>
                                      </span>
                                      <span>XPT</span>
                                    </button>
                                    <button
                                      id="p-wallets--transactions--body--select--quoine:IDRT"
                                      type="button"
                                      className=" styles_item__18hun"
                                    >
                                      <span id="p-wallets--transactions--body--select--icon-IDRT">
                                        <svg width={24} height={24}>
                                          <foreignObject width={24} height={24}>
                                            <img
                                              alt="IDRT"
                                              width={24}
                                              height={24}
                                              src="https://assets.liquid.com/currencies/IDRT.svg"
                                            />
                                          </foreignObject>
                                        </svg>
                                      </span>
                                      <span>IDRT</span>
                                    </button>
                                    <button
                                      id="p-wallets--transactions--body--select--quoine:GAT"
                                      type="button"
                                      className=" styles_item__18hun"
                                    >
                                      <span id="p-wallets--transactions--body--select--icon-GAT">
                                        <svg width={24} height={24}>
                                          <foreignObject width={24} height={24}>
                                            <img
                                              alt="GAT"
                                              width={24}
                                              height={24}
                                              src="https://assets.liquid.com/currencies/GAT.svg"
                                            />
                                          </foreignObject>
                                        </svg>
                                      </span>
                                      <span>GAT</span>
                                    </button>
                                    <button
                                      id="p-wallets--transactions--body--select--quoine:XES"
                                      type="button"
                                      className=" styles_item__18hun"
                                    >
                                      <span id="p-wallets--transactions--body--select--icon-XES">
                                        <svg width={24} height={24}>
                                          <foreignObject width={24} height={24}>
                                            <img
                                              alt="XES"
                                              width={24}
                                              height={24}
                                              src="https://assets.liquid.com/currencies/XES.svg"
                                            />
                                          </foreignObject>
                                        </svg>
                                      </span>
                                      <span>XES</span>
                                    </button>
                                    <button
                                      id="p-wallets--transactions--body--select--quoine:PMA"
                                      type="button"
                                      className=" styles_item__18hun"
                                    >
                                      <span id="p-wallets--transactions--body--select--icon-PMA">
                                        <svg width={24} height={24}>
                                          <foreignObject width={24} height={24}>
                                            <img
                                              alt="PMA"
                                              width={24}
                                              height={24}
                                              src="https://assets.liquid.com/currencies/PMA.svg"
                                            />
                                          </foreignObject>
                                        </svg>
                                      </span>
                                      <span>PMA</span>
                                    </button>
                                    <button
                                      id="p-wallets--transactions--body--select--quoine:LCX"
                                      type="button"
                                      className=" styles_item__18hun"
                                    >
                                      <span id="p-wallets--transactions--body--select--icon-LCX">
                                        <svg width={24} height={24}>
                                          <foreignObject width={24} height={24}>
                                            <img
                                              alt="LCX"
                                              width={24}
                                              height={24}
                                              src="https://assets.liquid.com/currencies/LCX.svg"
                                            />
                                          </foreignObject>
                                        </svg>
                                      </span>
                                      <span>LCX</span>
                                    </button>
                                    <button
                                      id="p-wallets--transactions--body--select--quoine:BTCSHORT"
                                      type="button"
                                      className=" styles_item__18hun"
                                    >
                                      <span id="p-wallets--transactions--body--select--icon-BTCSHORT">
                                        <svg width={24} height={24}>
                                          <foreignObject width={24} height={24}>
                                            <img
                                              alt="BTCSHORT"
                                              width={24}
                                              height={24}
                                              src="https://assets.liquid.com/currencies/BTCSHORT.svg"
                                            />
                                          </foreignObject>
                                        </svg>
                                      </span>
                                      <span>BTCSHORT</span>
                                    </button>
                                    <button
                                      id="p-wallets--transactions--body--select--quoine:CMCT"
                                      type="button"
                                      className=" styles_item__18hun"
                                    >
                                      <span id="p-wallets--transactions--body--select--icon-CMCT">
                                        <svg width={24} height={24}>
                                          <foreignObject width={24} height={24}>
                                            <img
                                              alt="CMCT"
                                              width={24}
                                              height={24}
                                              src="https://assets.liquid.com/currencies/CMCT.svg"
                                            />
                                          </foreignObject>
                                        </svg>
                                      </span>
                                      <span>CMCT</span>
                                    </button>
                                    <button
                                      id="p-wallets--transactions--body--select--quoine:STAC"
                                      type="button"
                                      className=" styles_item__18hun"
                                    >
                                      <span id="p-wallets--transactions--body--select--icon-STAC">
                                        <svg width={24} height={24}>
                                          <foreignObject width={24} height={24}>
                                            <img
                                              alt="STAC"
                                              width={24}
                                              height={24}
                                              src="https://assets.liquid.com/currencies/STAC.svg"
                                            />
                                          </foreignObject>
                                        </svg>
                                      </span>
                                      <span>STAC</span>
                                    </button>
                                    <button
                                      id="p-wallets--transactions--body--select--quoine:OMG"
                                      type="button"
                                      className=" styles_item__18hun"
                                    >
                                      <span id="p-wallets--transactions--body--select--icon-OMG">
                                        <svg width={24} height={24}>
                                          <foreignObject width={24} height={24}>
                                            <img
                                              alt="OMG"
                                              width={24}
                                              height={24}
                                              src="https://assets.liquid.com/currencies/OMG.svg"
                                            />
                                          </foreignObject>
                                        </svg>
                                      </span>
                                      <span>OMG</span>
                                    </button>
                                    <button
                                      id="p-wallets--transactions--body--select--quoine:1WO"
                                      type="button"
                                      className=" styles_item__18hun"
                                    >
                                      <span id="p-wallets--transactions--body--select--icon-1WO">
                                        <svg width={24} height={24}>
                                          <foreignObject width={24} height={24}>
                                            <img
                                              alt="1WO"
                                              width={24}
                                              height={24}
                                              src="https://assets.liquid.com/currencies/1WO.svg"
                                            />
                                          </foreignObject>
                                        </svg>
                                      </span>
                                      <span>1WO</span>
                                    </button>
                                    <button
                                      id="p-wallets--transactions--body--select--quoine:THRT"
                                      type="button"
                                      className=" styles_item__18hun"
                                    >
                                      <span id="p-wallets--transactions--body--select--icon-THRT">
                                        <svg width={24} height={24}>
                                          <foreignObject width={24} height={24}>
                                            <img
                                              alt="THRT"
                                              width={24}
                                              height={24}
                                              src="https://assets.liquid.com/currencies/THRT.svg"
                                            />
                                          </foreignObject>
                                        </svg>
                                      </span>
                                      <span>THRT</span>
                                    </button>
                                    <button
                                      id="p-wallets--transactions--body--select--quoine:STORJ"
                                      type="button"
                                      className=" styles_item__18hun"
                                    >
                                      <span id="p-wallets--transactions--body--select--icon-STORJ">
                                        <svg width={24} height={24}>
                                          <foreignObject width={24} height={24}>
                                            <img
                                              alt="STORJ"
                                              width={24}
                                              height={24}
                                              src="https://assets.liquid.com/currencies/STORJ.svg"
                                            />
                                          </foreignObject>
                                        </svg>
                                      </span>
                                      <span>STORJ</span>
                                    </button>
                                    <button
                                      id="p-wallets--transactions--body--select--quoine:SAL"
                                      type="button"
                                      className=" styles_item__18hun"
                                    >
                                      <span id="p-wallets--transactions--body--select--icon-SAL">
                                        <svg width={24} height={24}>
                                          <foreignObject width={24} height={24}>
                                            <img
                                              alt="SAL"
                                              width={24}
                                              height={24}
                                              src="https://assets.liquid.com/currencies/SAL.svg"
                                            />
                                          </foreignObject>
                                        </svg>
                                      </span>
                                      <span>SAL</span>
                                    </button>
                                    <button
                                      id="p-wallets--transactions--body--select--quoine:NII"
                                      type="button"
                                      className=" styles_item__18hun"
                                    >
                                      <span id="p-wallets--transactions--body--select--icon-NII">
                                        <svg width={24} height={24}>
                                          <foreignObject width={24} height={24}>
                                            <img
                                              alt="NII"
                                              width={24}
                                              height={24}
                                              src="https://assets.liquid.com/currencies/NII.svg"
                                            />
                                          </foreignObject>
                                        </svg>
                                      </span>
                                      <span>NII</span>
                                    </button>
                                    <button
                                      id="p-wallets--transactions--body--select--quoine:WABI"
                                      type="button"
                                      className=" styles_item__18hun"
                                    >
                                      <span id="p-wallets--transactions--body--select--icon-WABI">
                                        <svg width={24} height={24}>
                                          <foreignObject width={24} height={24}>
                                            <img
                                              alt="WABI"
                                              width={24}
                                              height={24}
                                              src="https://assets.liquid.com/currencies/WABI.svg"
                                            />
                                          </foreignObject>
                                        </svg>
                                      </span>
                                      <span>WABI</span>
                                    </button>
                                    <button
                                      id="p-wallets--transactions--body--select--quoine:HYDRO"
                                      type="button"
                                      className=" styles_item__18hun"
                                    >
                                      <span id="p-wallets--transactions--body--select--icon-HYDRO">
                                        <svg width={24} height={24}>
                                          <foreignObject width={24} height={24}>
                                            <img
                                              alt="HYDRO"
                                              width={24}
                                              height={24}
                                              src="https://assets.liquid.com/currencies/HYDRO.svg"
                                            />
                                          </foreignObject>
                                        </svg>
                                      </span>
                                      <span>HYDRO</span>
                                    </button>
                                    <button
                                      id="p-wallets--transactions--body--select--quoine:WIN"
                                      type="button"
                                      className=" styles_item__18hun"
                                    >
                                      <span id="p-wallets--transactions--body--select--icon-WIN">
                                        <svg width={24} height={24}>
                                          <foreignObject width={24} height={24}>
                                            <img
                                              alt="WIN"
                                              width={24}
                                              height={24}
                                              src="https://assets.liquid.com/currencies/WIN.svg"
                                            />
                                          </foreignObject>
                                        </svg>
                                      </span>
                                      <span>WIN</span>
                                    </button>
                                    <button
                                      id="p-wallets--transactions--body--select--quoine:PPL"
                                      type="button"
                                      className=" styles_item__18hun"
                                    >
                                      <span id="p-wallets--transactions--body--select--icon-PPL">
                                        <svg width={24} height={24}>
                                          <foreignObject width={24} height={24}>
                                            <img
                                              alt="PPL"
                                              width={24}
                                              height={24}
                                              src="https://assets.liquid.com/currencies/PPL.svg"
                                            />
                                          </foreignObject>
                                        </svg>
                                      </span>
                                      <span>PPL</span>
                                    </button>
                                    <button
                                      id="p-wallets--transactions--body--select--quoine:TPT"
                                      type="button"
                                      className=" styles_item__18hun"
                                    >
                                      <span id="p-wallets--transactions--body--select--icon-TPT">
                                        <svg width={24} height={24}>
                                          <foreignObject width={24} height={24}>
                                            <img
                                              alt="TPT"
                                              width={24}
                                              height={24}
                                              src="https://assets.liquid.com/currencies/TPT.svg"
                                            />
                                          </foreignObject>
                                        </svg>
                                      </span>
                                      <span>TPT</span>
                                    </button>
                                    <button
                                      id="p-wallets--transactions--body--select--quoine:IND"
                                      type="button"
                                      className=" styles_item__18hun"
                                    >
                                      <span id="p-wallets--transactions--body--select--icon-IND">
                                        <svg width={24} height={24}>
                                          <foreignObject width={24} height={24}>
                                            <img
                                              alt="IND"
                                              width={24}
                                              height={24}
                                              src="https://assets.liquid.com/currencies/IND.svg"
                                            />
                                          </foreignObject>
                                        </svg>
                                      </span>
                                      <span>IND</span>
                                    </button>
                                    <button
                                      id="p-wallets--transactions--body--select--quoine:MTN"
                                      type="button"
                                      className=" styles_item__18hun"
                                    >
                                      <span id="p-wallets--transactions--body--select--icon-MTN">
                                        <svg width={24} height={24}>
                                          <foreignObject width={24} height={24}>
                                            <img
                                              alt="MTN"
                                              width={24}
                                              height={24}
                                              src="https://assets.liquid.com/currencies/MTN.svg"
                                            />
                                          </foreignObject>
                                        </svg>
                                      </span>
                                      <span>MTN</span>
                                    </button>
                                    <button
                                      id="p-wallets--transactions--body--select--quoine:FLP"
                                      type="button"
                                      className=" styles_item__18hun"
                                    >
                                      <span id="p-wallets--transactions--body--select--icon-FLP">
                                        <svg width={24} height={24}>
                                          <foreignObject width={24} height={24}>
                                            <img
                                              alt="FLP"
                                              width={24}
                                              height={24}
                                              src="https://assets.liquid.com/currencies/FLP.svg"
                                            />
                                          </foreignObject>
                                        </svg>
                                      </span>
                                      <span>FLP</span>
                                    </button>
                                    <button
                                      id="p-wallets--transactions--body--select--quoine:USDT"
                                      type="button"
                                      className=" styles_item__18hun"
                                    >
                                      <span id="p-wallets--transactions--body--select--icon-USDT">
                                        <svg width={24} height={24}>
                                          <foreignObject width={24} height={24}>
                                            <img
                                              alt="USDT"
                                              width={24}
                                              height={24}
                                              src="https://assets.liquid.com/currencies/USDT.svg"
                                            />
                                          </foreignObject>
                                        </svg>
                                      </span>
                                      <span>USDT</span>
                                    </button>
                                    <button
                                      id="p-wallets--transactions--body--select--quoine:MIOTA"
                                      type="button"
                                      className=" styles_item__18hun"
                                    >
                                      <span id="p-wallets--transactions--body--select--icon-MIOTA">
                                        <svg width={24} height={24}>
                                          <foreignObject width={24} height={24}>
                                            <img
                                              alt="MIOTA"
                                              width={24}
                                              height={24}
                                              src="https://assets.liquid.com/currencies/MIOTA.svg"
                                            />
                                          </foreignObject>
                                        </svg>
                                      </span>
                                      <span>MIOTA</span>
                                    </button>
                                    <button
                                      id="p-wallets--transactions--body--select--quoine:MNR"
                                      type="button"
                                      className=" styles_item__18hun"
                                    >
                                      <span id="p-wallets--transactions--body--select--icon-MNR">
                                        <svg width={24} height={24}>
                                          <foreignObject width={24} height={24}>
                                            <img
                                              alt="MNR"
                                              width={24}
                                              height={24}
                                              src="https://assets.liquid.com/currencies/MNR.svg"
                                            />
                                          </foreignObject>
                                        </svg>
                                      </span>
                                      <span>MNR</span>
                                    </button>
                                    <button
                                      id="p-wallets--transactions--body--select--quoine:TEM"
                                      type="button"
                                      className=" styles_item__18hun"
                                    >
                                      <span id="p-wallets--transactions--body--select--icon-TEM">
                                        <svg width={24} height={24}>
                                          <foreignObject width={24} height={24}>
                                            <img
                                              alt="TEM"
                                              width={24}
                                              height={24}
                                              src="https://assets.liquid.com/currencies/TEM.svg"
                                            />
                                          </foreignObject>
                                        </svg>
                                      </span>
                                      <span>TEM</span>
                                    </button>
                                    <button
                                      id="p-wallets--transactions--body--select--quoine:BTCV"
                                      type="button"
                                      className=" styles_item__18hun"
                                    >
                                      <span id="p-wallets--transactions--body--select--icon-BTCV">
                                        <svg width={24} height={24}>
                                          <foreignObject width={24} height={24}>
                                            <img
                                              alt="BTCV"
                                              width={24}
                                              height={24}
                                              src="https://assets.liquid.com/currencies/BTCV.svg"
                                            />
                                          </foreignObject>
                                        </svg>
                                      </span>
                                      <span>BTCV</span>
                                    </button>
                                    <button
                                      id="p-wallets--transactions--body--select--quoine:MTC"
                                      type="button"
                                      className=" styles_item__18hun"
                                    >
                                      <span id="p-wallets--transactions--body--select--icon-MTC">
                                        <svg width={24} height={24}>
                                          <foreignObject width={24} height={24}>
                                            <img
                                              alt="MTC"
                                              width={24}
                                              height={24}
                                              src="https://assets.liquid.com/currencies/MTC.svg"
                                            />
                                          </foreignObject>
                                        </svg>
                                      </span>
                                      <span>MTC</span>
                                    </button>
                                    <button
                                      id="p-wallets--transactions--body--select--quoine:PCI"
                                      type="button"
                                      className=" styles_item__18hun"
                                    >
                                      <span id="p-wallets--transactions--body--select--icon-PCI">
                                        <svg width={24} height={24}>
                                          <foreignObject width={24} height={24}>
                                            <img
                                              alt="PCI"
                                              width={24}
                                              height={24}
                                              src="https://assets.liquid.com/currencies/PCI.svg"
                                            />
                                          </foreignObject>
                                        </svg>
                                      </span>
                                      <span>PCI</span>
                                    </button>
                                    <button
                                      id="p-wallets--transactions--body--select--quoine:XTZ"
                                      type="button"
                                      className=" styles_item__18hun"
                                    >
                                      <span id="p-wallets--transactions--body--select--icon-XTZ">
                                        <svg width={24} height={24}>
                                          <foreignObject width={24} height={24}>
                                            <img
                                              alt="XTZ"
                                              width={24}
                                              height={24}
                                              src="https://assets.liquid.com/currencies/XTZ.svg"
                                            />
                                          </foreignObject>
                                        </svg>
                                      </span>
                                      <span>XTZ</span>
                                    </button>
                                    <button
                                      id="p-wallets--transactions--body--select--quoine:EWT"
                                      type="button"
                                      className=" styles_item__18hun"
                                    >
                                      <span id="p-wallets--transactions--body--select--icon-EWT">
                                        <svg width={24} height={24}>
                                          <foreignObject width={24} height={24}>
                                            <img
                                              alt="EWT"
                                              width={24}
                                              height={24}
                                              src="https://assets.liquid.com/currencies/EWT.svg"
                                            />
                                          </foreignObject>
                                        </svg>
                                      </span>
                                      <span>EWT</span>
                                    </button>
                                    <button
                                      id="p-wallets--transactions--body--select--quoine:KLAY"
                                      type="button"
                                      className=" styles_item__18hun"
                                    >
                                      <span id="p-wallets--transactions--body--select--icon-KLAY">
                                        <svg width={24} height={24}>
                                          <foreignObject width={24} height={24}>
                                            <img
                                              alt="KLAY"
                                              width={24}
                                              height={24}
                                              src="https://assets.liquid.com/currencies/KLAY.svg"
                                            />
                                          </foreignObject>
                                        </svg>
                                      </span>
                                      <span>KLAY</span>
                                    </button>
                                    <button
                                      id="p-wallets--transactions--body--select--quoine:CLRX"
                                      type="button"
                                      className=" styles_item__18hun"
                                    >
                                      <span id="p-wallets--transactions--body--select--icon-CLRX">
                                        <svg width={24} height={24}>
                                          <foreignObject width={24} height={24}>
                                            <img
                                              alt="CLRX"
                                              width={24}
                                              height={24}
                                              src="https://assets.liquid.com/currencies/CLRX.svg"
                                            />
                                          </foreignObject>
                                        </svg>
                                      </span>
                                      <span>CLRX</span>
                                    </button>
                                    <button
                                      id="p-wallets--transactions--body--select--quoine:TFT"
                                      type="button"
                                      className=" styles_item__18hun"
                                    >
                                      <span id="p-wallets--transactions--body--select--icon-TFT">
                                        <svg width={24} height={24}>
                                          <foreignObject width={24} height={24}>
                                            <img
                                              alt="TFT"
                                              width={24}
                                              height={24}
                                              src="https://assets.liquid.com/currencies/TFT.svg"
                                            />
                                          </foreignObject>
                                        </svg>
                                      </span>
                                      <span>TFT</span>
                                    </button>
                                    <button
                                      id="p-wallets--transactions--body--select--quoine:ATOM"
                                      type="button"
                                      className=" styles_item__18hun"
                                    >
                                      <span id="p-wallets--transactions--body--select--icon-ATOM">
                                        <svg width={24} height={24}>
                                          <foreignObject width={24} height={24}>
                                            <img
                                              alt="ATOM"
                                              width={24}
                                              height={24}
                                              src="https://assets.liquid.com/currencies/ATOM.svg"
                                            />
                                          </foreignObject>
                                        </svg>
                                      </span>
                                      <span>ATOM</span>
                                    </button>
                                    <button
                                      id="p-wallets--transactions--body--select--quoine:EGLD"
                                      type="button"
                                      className=" styles_item__18hun"
                                    >
                                      <span id="p-wallets--transactions--body--select--icon-EGLD">
                                        <svg width={24} height={24}>
                                          <foreignObject width={24} height={24}>
                                            <img
                                              alt="EGLD"
                                              width={24}
                                              height={24}
                                              src="https://assets.liquid.com/currencies/EGLD.svg"
                                            />
                                          </foreignObject>
                                        </svg>
                                      </span>
                                      <span>EGLD</span>
                                    </button>
                                    <button
                                      id="p-wallets--transactions--body--select--quoine:HOT"
                                      type="button"
                                      className=" styles_item__18hun"
                                    >
                                      <span id="p-wallets--transactions--body--select--icon-HOT">
                                        <svg width={24} height={24}>
                                          <foreignObject width={24} height={24}>
                                            <img
                                              alt="HOT"
                                              width={24}
                                              height={24}
                                              src="https://assets.liquid.com/currencies/HOT.svg"
                                            />
                                          </foreignObject>
                                        </svg>
                                      </span>
                                      <span>HOT</span>
                                    </button>
                                    <button
                                      id="p-wallets--transactions--body--select--quoine:WLO"
                                      type="button"
                                      className=" styles_item__18hun"
                                    >
                                      <span id="p-wallets--transactions--body--select--icon-WLO">
                                        <svg width={24} height={24}>
                                          <foreignObject width={24} height={24}>
                                            <img
                                              alt="WLO"
                                              width={24}
                                              height={24}
                                              src="https://assets.liquid.com/currencies/WLO.svg"
                                            />
                                          </foreignObject>
                                        </svg>
                                      </span>
                                      <span>WLO</span>
                                    </button>
                                    <button
                                      id="p-wallets--transactions--body--select--quoine:RIF"
                                      type="button"
                                      className=" styles_item__18hun"
                                    >
                                      <span id="p-wallets--transactions--body--select--icon-RIF">
                                        <svg width={24} height={24}>
                                          <foreignObject width={24} height={24}>
                                            <img
                                              alt="RIF"
                                              width={24}
                                              height={24}
                                              src="https://assets.liquid.com/currencies/RIF.svg"
                                            />
                                          </foreignObject>
                                        </svg>
                                      </span>
                                      <span>RIF</span>
                                    </button>
                                    <button
                                      id="p-wallets--transactions--body--select--quoine:RBTC"
                                      type="button"
                                      className=" styles_item__18hun"
                                    >
                                      <span id="p-wallets--transactions--body--select--icon-RBTC">
                                        <svg width={24} height={24}>
                                          <foreignObject width={24} height={24}>
                                            <img
                                              alt="RBTC"
                                              width={24}
                                              height={24}
                                              src="https://assets.liquid.com/currencies/RBTC.svg"
                                            />
                                          </foreignObject>
                                        </svg>
                                      </span>
                                      <span>RBTC</span>
                                    </button>
                                    <button
                                      id="p-wallets--transactions--body--select--quoine:HBAR"
                                      type="button"
                                      className=" styles_item__18hun"
                                    >
                                      <span id="p-wallets--transactions--body--select--icon-HBAR">
                                        <svg width={24} height={24}>
                                          <foreignObject width={24} height={24}>
                                            <img
                                              alt="HBAR"
                                              width={24}
                                              height={24}
                                              src="https://assets.liquid.com/currencies/HBAR.svg"
                                            />
                                          </foreignObject>
                                        </svg>
                                      </span>
                                      <span>HBAR</span>
                                    </button>
                                    <button
                                      id="p-wallets--transactions--body--select--quoine:FLEX"
                                      type="button"
                                      className=" styles_item__18hun"
                                    >
                                      <span id="p-wallets--transactions--body--select--icon-FLEX">
                                        <svg width={24} height={24}>
                                          <foreignObject width={24} height={24}>
                                            <img
                                              alt="FLEX"
                                              width={24}
                                              height={24}
                                              src="https://assets.liquid.com/currencies/FLEX.svg"
                                            />
                                          </foreignObject>
                                        </svg>
                                      </span>
                                      <span>FLEX</span>
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="styles_wrapperList__3we9x">
                      <div className="styles_list__3YLhI">
                        <div>
                          <div className="styles_main__26IVR overide_main__2WT44">
                            <div
                              id="p-wallets--transactions--body--body--body--id"
                              data-value="id"
                              role="button"
                              tabIndex={-1}
                              className="styles_item__1OtmZ styles_id__QTKpM"
                            >
                              ID
                            </div>
                            <div
                              id="p-wallets--transactions--body--body--body--side"
                              data-value="side"
                              role="button"
                              tabIndex={-1}
                              className="styles_item__1OtmZ styles_side__3v-mb"
                            >
                              Direction
                            </div>
                            <div
                              id="p-wallets--transactions--body--body--body--type"
                              data-value="type"
                              role="button"
                              tabIndex={-1}
                              className="styles_item__1OtmZ styles_type__3nFWK"
                            >
                              Type
                            </div>
                            <div
                              id="p-wallets--transactions--body--body--body--quantity-gross"
                              data-value="quantity-gross"
                              role="button"
                              tabIndex={-1}
                              className="styles_item__1OtmZ"
                            >
                              Amount
                            </div>
                            <div
                              id="p-wallets--transactions--body--body--body--created"
                              data-value="created"
                              role="button"
                              tabIndex={-1}
                              className="styles_item__1OtmZ styles_created__35Uaz"
                            >
                              Created (YY/MM/DD)
                            </div>
                          </div>
                          <div id="p-wallets--transactions--body--body--body--models">
                            <div
                              className="styles_item__12f4x"
                              data-index="p-wallets--transactions--body--body--body--model-0"
                            />
                            <div
                              className="styles_item__12f4x"
                              data-index="p-wallets--transactions--body--body--body--model-1"
                            />
                            <div
                              className="styles_item__12f4x"
                              data-index="p-wallets--transactions--body--body--body--model-2"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="styles_divider__2ZMkN" />
              <h2 className="styles_title__3PGgb">Overview Report</h2>
              <div className="styles_report__3MZti">
                <div className="styles_main__1zpdt styles_main__zfXuo grd-v">
                  <div className="styles_body__2xX5a ">
                    <div className="styles_range__3osy-">
                      <div className="styles_main__23xNI">
                        <h6>Select Range</h6>
                        <div className="styles_main-justify__1WT2n styles_main__3mpta ">
                          <div className="styles_label-justify__39oQa styles_label__3SrJB">
                            From&nbsp;
                          </div>
                          <div className="styles_children-justify__PMdBl styles_children__3Rv6q">
                            <div className="styles_main__2_REq">
                              <div className="styles_input__swfM_">
                                <button
                                  id="p-wallets--report--range--frm--year--button"
                                  type="button"
                                  className="styles_main__VKWEX"
                                >
                                  <div className="styles_content__22jau ">
                                    <div
                                      id="p-wallets--report--range--frm--year--value"
                                      data-value={2020}
                                      className="styles_label__2Zm-v"
                                    >
                                      <span className="styles_labelText__3SjQt">
                                        2020
                                      </span>
                                    </div>
                                    <div className="styles_icon__16oM1">
                                      <i className="icon icon-small-down styles_icon__IoG7F " />
                                    </div>
                                  </div>
                                </button>
                              </div>
                              <div className="styles_month__ruHXO styles_input__swfM_">
                                <button
                                  id="p-wallets--report--range--frm--month--button"
                                  type="button"
                                  className="styles_main__VKWEX"
                                >
                                  <div className="styles_content__22jau ">
                                    <div
                                      id="p-wallets--report--range--frm--month--value"
                                      data-value={7}
                                      className="styles_label__2Zm-v"
                                    >
                                      <span className="styles_labelText__3SjQt">
                                        Jul
                                      </span>
                                    </div>
                                    <div className="styles_icon__16oM1">
                                      <i className="icon icon-small-down styles_icon__IoG7F " />
                                    </div>
                                  </div>
                                </button>
                              </div>
                              <div className="styles_input__swfM_">
                                <button
                                  id="p-wallets--report--range--frm--date--button"
                                  type="button"
                                  className="styles_main__VKWEX"
                                >
                                  <div className="styles_content__22jau ">
                                    <div
                                      id="p-wallets--report--range--frm--date--value"
                                      data-value={5}
                                      className="styles_label__2Zm-v"
                                    >
                                      <span className="styles_labelText__3SjQt">
                                        05
                                      </span>
                                    </div>
                                    <div className="styles_icon__16oM1">
                                      <i className="icon icon-small-down styles_icon__IoG7F " />
                                    </div>
                                  </div>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <hr className="styles_hr__1Zlb1" />
                        <div className="styles_main-justify__1WT2n styles_main__3mpta ">
                          <div className="styles_label-justify__39oQa styles_label__3SrJB">
                            To&nbsp;
                          </div>
                          <div className="styles_children-justify__PMdBl styles_children__3Rv6q">
                            <div className="styles_main__2_REq">
                              <div className="styles_input__swfM_">
                                <button
                                  id="p-wallets--report--range--to--year--button"
                                  type="button"
                                  className="styles_main__VKWEX"
                                >
                                  <div className="styles_content__22jau ">
                                    <div
                                      id="p-wallets--report--range--to--year--value"
                                      data-value={2020}
                                      className="styles_label__2Zm-v"
                                    >
                                      <span className="styles_labelText__3SjQt">
                                        2020
                                      </span>
                                    </div>
                                    <div className="styles_icon__16oM1">
                                      <i className="icon icon-small-down styles_icon__IoG7F " />
                                    </div>
                                  </div>
                                </button>
                              </div>
                              <div className="styles_month__ruHXO styles_input__swfM_">
                                <button
                                  id="p-wallets--report--range--to--month--button"
                                  type="button"
                                  className="styles_main__VKWEX"
                                >
                                  <div className="styles_content__22jau ">
                                    <div
                                      id="p-wallets--report--range--to--month--value"
                                      data-value={10}
                                      className="styles_label__2Zm-v"
                                    >
                                      <span className="styles_labelText__3SjQt">
                                        Oct
                                      </span>
                                    </div>
                                    <div className="styles_icon__16oM1">
                                      <i className="icon icon-small-down styles_icon__IoG7F " />
                                    </div>
                                  </div>
                                </button>
                              </div>
                              <div className="styles_input__swfM_">
                                <button
                                  id="p-wallets--report--range--to--date--button"
                                  type="button"
                                  className="styles_main__VKWEX"
                                >
                                  <div className="styles_content__22jau ">
                                    <div
                                      id="p-wallets--report--range--to--date--value"
                                      data-value={3}
                                      className="styles_label__2Zm-v"
                                    >
                                      <span className="styles_labelText__3SjQt">
                                        03
                                      </span>
                                    </div>
                                    <div className="styles_icon__16oM1">
                                      <i className="icon icon-small-down styles_icon__IoG7F " />
                                    </div>
                                  </div>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="styles_main__3x9Mn">
                        <h6>Transacted Volume:</h6>
                        <div>
                          <p className="styles_empty__9cI9g">
                            Accounts with zero transacted volume during selected
                            period will not be displayed.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="styles_main__1vStR">
                      <button
                        type="button"
                        id="p-wallets--report--report--submit"
                        className="styles_main__1rTEz styles_outline-primary__a2hOw styles_main__drfz7 false "
                      >
                        <div className>Send Report via Email</div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default TransactionsHistory;
