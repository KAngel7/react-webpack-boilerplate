/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

const Trading = () => {
  return (
    <>
      <link rel="stylesheet" type="text/css" href="./css/core-liquid.css" />
      <div id="top-menu" className="styles_menu__hioJE styles_fixed__3VPAK">
        <div className="styles_main__1Yig1 styles_wrapperMainMenu__3hD9h">
          <div className="styles_left__3iolo">
            <div className="styles_wrapperLeft__1tYJ5">
              <a className="styles_mainLogo__35aF6" href="/vision">
                <svg
                  width="32"
                  height="32"
                  className="styles_imgLogoDashboard__2bnEN"
                >
                  <g fill="#0090FF" fillRule="evenodd">
                    <path d="M30.647 0H9.904a.962.962 0 0 0-.966.957v4.157c0 .89.728 1.612 1.627 1.612h3.505a1.62 1.62 0 0 1 1.628 1.612v5.891c0 .89.728 1.612 1.627 1.612h5.188c.89-.001 1.615.705 1.63 1.586.01.674.02 3.42.02 3.42 0 .89.728 1.612 1.627 1.612h4.857a.962.962 0 0 0 .967-.957V.957A.962.962 0 0 0 30.647 0M21.049 23.096H10.45a1.62 1.62 0 0 1-1.627-1.612v-11.02a1.62 1.62 0 0 0-1.627-1.612H.966A.962.962 0 0 0 0 9.81v20.545c0 .529.433.957.966.957H21.71a.962.962 0 0 0 .966-.957v-5.647a1.62 1.62 0 0 0-1.627-1.611"></path>
                  </g>
                </svg>
              </a>
              <div className="styles_main__E_BmW">
                <div className="styles_outer__1t4Le">
                  <div className="styles_main__3EaD8 styles_tradingBlock__4Yt7S styles_hoverable__2YTrJ">
                    <div className="styles_body__3dd1F styles_body___lYnW styles_feed__1T7yq">
                      <span className="styles_pill__2BiXH styles_spot__3NMoK">
                        Spot
                      </span>
                      <div className="styles_wrapperArrow__1FXbD">
                        <div className="styles_arrow__3SjVJ"></div>
                      </div>
                    </div>
                    <div className="styles_content__2DpoO styles_content__3AP_U">
                      <ul className="styles_list__Kqa3G">
                        <li>
                          <a
                            className="styles_listItem__3ULRz"
                            title="Spot"
                            href="/exchange"
                          >
                            Spot
                          </a>
                        </li>
                        <li>
                          <a
                            className="styles_listItem__3ULRz"
                            title="Margin"
                            href="/margin"
                          >
                            Margin
                          </a>
                        </li>
                        <li>
                          <a
                            className="styles_listItem__3ULRz"
                            title="Infinity"
                            href="/infinity"
                          >
                            Infinity
                          </a>
                        </li>
                        <li>
                          <a
                            className="styles_listItem__3ULRz"
                            title="Perpetual"
                            href="/perpetual"
                          >
                            Perpetual
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="styles_divider__3PLhU"></div>
                  <div
                    id="menu--market-pop"
                    className="styles_wrapperProductPop__1LyVS"
                  >
                    <div id="menu--market-pop">
                      <div className="styles_main__3EaD8 styles_hoverable__2YTrJ">
                        <div className="styles_body__3dd1F styles_body__1_SNE styles_feed__1T7yq">
                          <span className="">
                            <strong>BTC</strong>&nbsp;/&nbsp;USD
                          </span>
                          <div className="styles_wrapperArrow__1FXbD">
                            <div className="styles_arrow__3SjVJ"></div>
                          </div>
                        </div>
                        <div className="styles_content__2DpoO styles_content__DicmM">
                          <div className="styles_header__2K1l-">
                            <h6>Select Market</h6>
                            <input
                              placeholder="Search..."
                              className="styles_pure__1G2ap "
                              type="text"
                              value=""
                            />
                          </div>
                          <div className="styles_toolbar__3QVXY">
                            <div className="styles_main__2dqv7">
                              <button
                                id="menu--product-pop--productView--content--FAV"
                                type="button"
                                className=" styles_btn__1YGpA styles_active__1slcJ "
                              >
                                <i className="icon icon-star-f"></i>
                              </button>
                              <button
                                id="menu--product-pop--productView--content--USD"
                                type="button"
                                className=" styles_btn__1YGpA  "
                              >
                                USD
                              </button>
                              <button
                                id="menu--product-pop--productView--content--BTC"
                                type="button"
                                className=" styles_btn__1YGpA  "
                              >
                                BTC
                              </button>
                              <button
                                id="menu--product-pop--productView--content--ETH"
                                type="button"
                                className=" styles_btn__1YGpA  "
                              >
                                ETH
                              </button>
                              <button
                                id="menu--product-pop--productView--content--QASH"
                                type="button"
                                className=" styles_btn__1YGpA  "
                              >
                                QASH
                              </button>
                              <button
                                id="menu--product-pop--productView--content--..."
                                type="button"
                                className=" styles_btn__1YGpA  "
                              >
                                ...
                              </button>
                            </div>
                          </div>
                          <div className="styles_list__3dbVV">
                            <div
                              role="button"
                              tabIndex="0"
                              id="menu--product-pop--productView--content--BTC / USD"
                              className="styles_market__2XcEE"
                            >
                              <button
                                id="menu--product-pop--productView--content--BTC / USD--star"
                                type="button"
                                className="styles_favbtn__1bZ0r"
                              >
                                <i className="icon icon-star-f  "></i>
                              </button>
                              <div className="styles_symbol__1pX2M">
                                <span id="menu--product-pop--productView--content">
                                  <svg width="24" height="24">
                                    <foreignObject width="24" height="24">
                                      <img
                                        alt="BTC"
                                        width="24"
                                        height="24"
                                        src="https://assets.liquid.com/currencies/BTC.svg"
                                      />
                                    </foreignObject>
                                  </svg>
                                </span>
                                <span>BTC / USD</span>
                              </div>
                              <div className="styles_price__2411P">
                                <span
                                  id="money2"
                                  className="styles_main__3hU35"
                                  title="10566.51"
                                  data-value="10566.51"
                                >
                                  <span id="money2--symbol">$</span>
                                  <span id="money2--significant">
                                    10,566.510
                                  </span>
                                </span>
                              </div>
                              <div className="styles_change__qudHI">
                                <span className="styles_down__3ZvsZ">
                                  <span
                                    id="menu--product-pop--productView--content--BTC / USD--percent"
                                    title="-0.008148633477638847"
                                  >
                                    -0.81%
                                  </span>
                                  <i className="icon icon-tail-down  "></i>
                                </span>
                              </div>
                            </div>
                            <div
                              role="button"
                              tabIndex="0"
                              id="menu--product-pop--productView--content--ETH / USD"
                              className="styles_market__2XcEE"
                            >
                              <button
                                id="menu--product-pop--productView--content--ETH / USD--star"
                                type="button"
                                className="styles_favbtn__1bZ0r"
                              >
                                <i className="icon icon-star-f  "></i>
                              </button>
                              <div className="styles_symbol__1pX2M">
                                <span id="menu--product-pop--productView--content">
                                  <svg width="24" height="24">
                                    <foreignObject width="24" height="24">
                                      <img
                                        alt="ETH"
                                        width="24"
                                        height="24"
                                        src="https://assets.liquid.com/currencies/ETH.svg"
                                      />
                                    </foreignObject>
                                  </svg>
                                </span>
                                <span>ETH / USD</span>
                              </div>
                              <div className="styles_price__2411P">
                                <span
                                  id="money2"
                                  className="styles_main__3hU35"
                                  title="347.6"
                                  data-value="347.6"
                                >
                                  <span id="money2--symbol">$</span>
                                  <span id="money2--significant">347.600</span>
                                </span>
                              </div>
                              <div className="styles_change__qudHI">
                                <span className="styles_down__3ZvsZ">
                                  <span
                                    id="menu--product-pop--productView--content--ETH / USD--percent"
                                    title="-0.015074237787600569"
                                  >
                                    -1.51%
                                  </span>
                                  <i className="icon icon-tail-down  "></i>
                                </span>
                              </div>
                            </div>
                            <div
                              role="button"
                              tabIndex="0"
                              id="menu--product-pop--productView--content--QASH / USD"
                              className="styles_market__2XcEE"
                            >
                              <button
                                id="menu--product-pop--productView--content--QASH / USD--star"
                                type="button"
                                className="styles_favbtn__1bZ0r"
                              >
                                <i className="icon icon-star-f  "></i>
                              </button>
                              <div className="styles_symbol__1pX2M">
                                <span id="menu--product-pop--productView--content">
                                  <svg width="24" height="24">
                                    <foreignObject width="24" height="24">
                                      <img
                                        alt="QASH"
                                        width="24"
                                        height="24"
                                        src="https://assets.liquid.com/currencies/QASH.svg"
                                      />
                                    </foreignObject>
                                  </svg>
                                </span>
                                <span>QASH / USD</span>
                              </div>
                              <div className="styles_price__2411P">
                                <span
                                  id="money2"
                                  className="styles_main__3hU35"
                                  title="0.03694"
                                  data-value="0.03694"
                                >
                                  <span id="money2--symbol">$</span>
                                  <span id="money2--significant">0.037</span>
                                </span>
                              </div>
                              <div className="styles_change__qudHI">
                                <span className="styles_down__3ZvsZ">
                                  <span
                                    id="menu--product-pop--productView--content--QASH / USD--percent"
                                    title="-0.01572075672795098"
                                  >
                                    -1.57%
                                  </span>
                                  <i className="icon icon-tail-down  "></i>
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="styles_divider__3PLhU"></div>
                  <div className="styles_wrapperDetail__9uGIF">
                    <div className="styles_main__1lk98">
                      <div className="styles_lastPrice__1tzUt">
                        <div className="styles_title__3T5QR">Last Price</div>
                        <div className="styles_content__g_toU">
                          <span className="styles_main__1rvwL styles_lastPriveValue__8ShCi styles_positive__2NzuR">
                            <span
                              id="menu--detail--last"
                              className="styles_main__3hU35"
                              title="10566.51"
                              data-value="10566.51"
                            >
                              <span id="menu--detail--last--symbol">$</span>
                              <span id="menu--detail--last--significant">
                                10,566.510
                              </span>
                            </span>
                          </span>
                        </div>
                      </div>
                      <div className="styles_item__JCGem">
                        <div className="styles_title__3T5QR">24h Change</div>
                        <div className="styles_content__g_toU">
                          <span className="styles_down__3ZvsZ">
                            <span
                              id="menu--detail--percent"
                              title="-0.007981020549179856"
                            >
                              -0.80%
                            </span>
                            <i className="icon icon-tail-down  "></i>
                          </span>
                        </div>
                      </div>
                      <div className="styles_itemAlignRight__3nR8E">
                        <div className="styles_title__3T5QR">24h High</div>
                        <div className="styles_content__g_toU">
                          <span className="styles_main__1rvwL">
                            <span
                              id="menu--detail--high"
                              className="styles_main__3hU35"
                              title="10668.84"
                              data-value="10668.84"
                            >
                              <span id="menu--detail--high--symbol">$</span>
                              <span id="menu--detail--high--significant">
                                10,668.840
                              </span>
                            </span>
                          </span>
                        </div>
                      </div>
                      <div className="styles_itemAlignRight__3nR8E">
                        <div className="styles_title__3T5QR">24h Low</div>
                        <div className="styles_content__g_toU">
                          <span className="styles_main__1rvwL">
                            <span
                              id="menu--detail--low"
                              className="styles_main__3hU35"
                              title="10383.63"
                              data-value="10383.63"
                            >
                              <span id="menu--detail--low--symbol">$</span>
                              <span id="menu--detail--low--significant">
                                10,383.630
                              </span>
                            </span>
                          </span>
                        </div>
                      </div>
                      <div className="styles_itemAlignRight__3nR8E">
                        <div className="styles_title__3T5QR">24h Volume</div>
                        <div className="styles_content__g_toU">
                          <span
                            id="menu--detail--volume"
                            className="styles_main__3hU35"
                            title="224.68982526"
                            data-value="224.68982526"
                          >
                            <span id="menu--detail--volume--significant">
                              224.69
                            </span>
                            <span id="menu--detail--volume--symbol"> BTC</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="styles_divider__3PLhU"></div>
                  <div
                    id="menu--workspace"
                    className="styles_wrapperWorkspaces__z01jo"
                  >
                    <div className="styles_main__3EaD8 styles_center__r2tiz styles_hoverable__2YTrJ">
                      <div className="styles_body__3dd1F styles_popBody__2x6xG styles_feed__1T7yq">
                        <svg width="16" height="16">
                          <g
                            stroke="#4B6389"
                            fill="none"
                            fillRule="evenodd"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <circle cx="8" cy="8" r="2.5"></circle>
                            <path d="M15.5 9V7l-2.177-.363a5.463 5.463 0 0 0-.595-1.437l1.283-1.796-1.415-1.414L10.8 3.272a5.463 5.463 0 0 0-1.437-.595L9 .5H7l-.363 2.177a5.463 5.463 0 0 0-1.437.595L3.404 1.99 1.99 3.404 3.272 5.2a5.463 5.463 0 0 0-.595 1.437L.5 7v2l2.177.363c.131.512.332.994.595 1.437L1.99 12.596l1.414 1.414L5.2 12.728c.443.263.925.464 1.437.595L7 15.5h2l.363-2.177a5.463 5.463 0 0 0 1.437-.595l1.796 1.283 1.414-1.414-1.282-1.797c.263-.443.464-.925.595-1.437L15.5 9z"></path>
                          </g>
                        </svg>
                      </div>
                      <div className="styles_content__2DpoO styles_popContent__1Jsfu">
                        <a
                          href="/exchange/BTCUSD"
                          className="styles_workspace__pfGXw styles_active__gFCVc"
                        >
                          Standard - TradingView
                        </a>
                        <a
                          href="/exchange/BTCUSD"
                          className="styles_workspace__pfGXw"
                        >
                          Standard - CryptoWatch
                        </a>
                        <h6 className="styles_title__1fK0c">
                          Custom Workspaces
                        </h6>
                        <p>
                          You can customize how your workspaces are displayed
                          and saved.
                        </p>
                        <h6 className="styles_title__1fK0c">Your Workspaces</h6>
                        <button
                          className="styles_workspace__pfGXw styles_new__3HtWU"
                          type="button"
                        >
                          Create your first custom workspace
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="styles_body__2t5HW">
        <div className="styles_main__3OIwS" id="pro-trading-dashboard">
          <div className="styles_spotContainer__2Sp3k">
            <div className="styles_box__2VJDo styles_chart__1iTkb">
              <div className="styles_main__saomR" id="panel--chart">
                <div className="AuthWrapper_wrapper__24dvs">
                  <div className="styles_main__2YbVl">
                    <div className="styles_body__N9wz1">
                      <div className="styles_main__41oFr">
                        <div className="styles_toolbar__D0twK styles_hide__3NX_7">
                          <div className="styles_main__kGHUI ">
                            <div className="styles_item__2cY3v">
                              <div className="styles_main-inline-block__1rgYM styles_main__3mpta ">
                                <div className="styles_label-inline-block__1J7la styles_label__3SrJB">
                                  Provider&nbsp;
                                </div>
                                <div className="styles_children-inline-block__WAThp styles_children__3Rv6q">
                                  <button
                                    id="chart--toolbar--provider--button"
                                    type="button"
                                    className="styles_main__VKWEX"
                                  >
                                    <div className="styles_content__22jau ">
                                      <div
                                        id="chart--toolbar--provider--value"
                                        data-value="trading-view"
                                        className="styles_label__2Zm-v"
                                      >
                                        <span className="styles_labelText__3SjQt">
                                          TradingView
                                        </span>
                                      </div>
                                      <div className="styles_icon__16oM1">
                                        <i className="icon icon-small-down styles_icon__IoG7F "></i>
                                      </div>
                                    </div>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="styles_content__1J-Fh">
                          <div className="styles_body__UcsuF">
                            <div className="styles_root__rQeEB">
                              <div
                                id="chart-did-4761"
                                className="styles_main__22qeF styles_trading-view__1foyV"
                              ></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="styles_boxMultiPanel__t8sNY">
              <input
                className="styles_check__1s0OU"
                type="checkbox"
                id="x-orderbook-tradefeed-responsive"
              />
              <div className="styles_box__2VJDo styles_boxOrderBook__2wo8m">
                <div className="styles_main__saomR" id="panel--order-book">
                  <div className="AuthWrapper_wrapper__24dvs">
                    <div className="styles_main__2YbVl ">
                      <div className="styles_body__N9wz1">
                        <div className="styles_main__41oFr">
                          <div className="styles_content__1J-Fh">
                            <div className="styles_header__2hX-Y">
                              <div className="styles_main__2YbVl ">
                                <div className="styles_header__18m0T">
                                  <div className="styles_noSwitcher__7rRMs">
                                    Order Book
                                  </div>
                                  <div className="styles_panelSwitcher__1t1dl">
                                    <div className="styles_main__3EaD8 styles_left__2P1Kf styles_hoverable__2YTrJ">
                                      <div className="styles_body__3dd1F styles_switchPopoverBody__2OyQS styles_feed__1T7yq">
                                        <div className="styles_popBodyButton__2tc-k">
                                          Order Book
                                        </div>
                                        <div className="styles_arrow__2QFgV"></div>
                                      </div>
                                      <div className="styles_content__2DpoO  styles_popContent__100YS">
                                        <label className="styles_contentLabel__6RHDF">
                                          Order Book
                                          <i className="icon icon-check styles_check__2J714 "></i>
                                        </label>
                                        <label
                                          className="styles_contentLabel__6RHDF"
                                          htmlFor="x-orderbook-tradefeed-responsive"
                                        >
                                          Trade Feed
                                        </label>
                                      </div>
                                    </div>
                                  </div>
                                  <span className="styles_label__169t9">
                                    Grouping: (0)
                                  </span>
                                  <div className="styles_groupingItem__2kPuY">
                                    <button
                                      className="styles_button__3KLPQ"
                                      disabled=""
                                      type="button"
                                    >
                                      <div className="styles_minus__9G1KF"></div>
                                    </button>
                                    <button
                                      className="styles_button__3KLPQ"
                                      type="button"
                                    >
                                      <div className="styles_plus__11FOP"></div>
                                    </button>
                                  </div>
                                </div>
                                <div className="styles_main__U3vVI">
                                  <div className="styles-common_main__2rYf_ styles_main__27DPr styles_fixed__3dGZj">
                                    <div
                                      id="order-book--header--price"
                                      className="styles_item__1y6i1 styles-common_item__qg8NV price"
                                    >
                                      Price
                                    </div>
                                    <div
                                      id="order-book--header--quantity"
                                      className="styles_item__1y6i1 styles-common_item__qg8NV quantity"
                                    >
                                      Quantity
                                    </div>
                                    <div
                                      id="order-book--header--cumulative"
                                      className="styles_item__1y6i1 styles-common_item__qg8NV cumulative"
                                    >
                                      Total BTC
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="styles_body__UcsuF">
                              <div className="OrderBookStyles_orderBook__3AAnf">
                                <div className="OrderBookStyles_orderBookSideAsk__3_13c"></div>
                                <div className="OrderBookStyles_spread__2my1Y">
                                  <div className="styles_spread__27pCa">
                                    <div className="styles_spreadTitle__22bOH">
                                      Spread
                                    </div>
                                    <div className="styles_spreadValue__3R_Xz">
                                      <span className="styles_main__1rvwL">
                                        <span className="styles_item__3AoSp">
                                          $
                                          <span
                                            role="button"
                                            tabIndex="-1"
                                            title="22.8799999999992"
                                            className="style_numberCell__2MNWK"
                                          >
                                            <span className="numbercell__significant">
                                              22.88
                                            </span>
                                            <span className="numbercell__zeros"></span>
                                          </span>
                                        </span>
                                      </span>
                                    </div>
                                    <div></div>
                                  </div>
                                </div>
                                <div className="OrderBookStyles_orderBookSideBid__2YML4"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="styles_box__2VJDo styles_boxExecutionBook__31au8">
                <div className=" styles_main__saomR" id="panel--execution-book">
                  <div className="AuthWrapper_wrapper__24dvs">
                    <div className="styles_main__2YbVl ">
                      <div className="styles_header__AdnlQ">
                        <div className="styles_main__3EaD8 styles_left__2P1Kf styles_hoverable__2YTrJ">
                          <div className="styles_body__3dd1F styles_switchPopoverBody__wyag5 styles_feed__1T7yq">
                            <div className="styles_popBodyButton__1r-cd">
                              Trade Feed
                            </div>
                            <div className="styles_arrow__2SRT5"></div>
                          </div>
                          <div className="styles_content__2DpoO  styles_popContent__2v52a">
                            <div role="button" tabIndex="-1">
                              <label
                                className="styles_contentLabel__2itmW"
                                htmlFor="x-orderbook-tradefeed-responsive"
                              >
                                Order Book
                              </label>
                            </div>
                            <div role="button" tabIndex="-1">
                              <label className="styles_contentLabel__2itmW">
                                Trade Feed
                                <i className="icon icon-check styles_check__1r-fq "></i>
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="styles_body__N9wz1 styles_body__bbLMN">
                        <div
                          id="executions--models"
                          className="styles_list__2leAr"
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="styles_box__2VJDo styles_orderPanel__1sPFb undefined">
              <div className=" styles_main__saomR" id="panel--order-entry">
                <div className="AuthWrapper_wrapper__24dvs">
                  <div className="styles_main__2YbVl">
                    <div className="styles_body__N9wz1">
                      <form>
                        <div className="styles_formInner__ur3i9">
                          <div className="styles_container__UYRBD styles_formBlock__icrZV">
                            <button
                              type="button"
                              id="order-entry--spot--button-buy"
                              className="styles_btn__2oTRi styles_btnBuy__1wL43 styles_active__1SlVv"
                            >
                              Buy
                            </button>
                            <button
                              type="button"
                              id="order-entry--spot--button-sell"
                              className="styles_btn__2oTRi styles_btnSell__1cYHs"
                            >
                              Sell
                            </button>
                          </div>
                          <div className="styles_orderTypesContainer__2RYpf styles_formBlock__icrZV">
                            <button
                              type="button"
                              className="styles_groupBtn__JBMV3 GroupBtn_btn__f88ve GroupBtn_active__5rpSj"
                            >
                              <span className="HintCommon_hint__1FXyI ">
                                Limit
                              </span>
                            </button>
                            <button
                              type="button"
                              className="styles_groupBtn__JBMV3 GroupBtn_btn__f88ve "
                            >
                              <span className="HintCommon_hint__1FXyI ">
                                Market
                              </span>
                            </button>
                            <div className="GroupBtnCustom_typePulldown__2jUKy ">
                              <button
                                className="GroupBtnCustom_selector__27vcY"
                                type="button"
                              >
                                <span className="GroupBtnCustom_panelTitle__3O70X">
                                  Stop
                                </span>
                                <div className="GroupBtnCustom_wrapperArrow__2dVMa ">
                                  <div className="GroupBtnCustom_arrow__-wy-P"></div>
                                </div>
                              </button>
                            </div>
                          </div>
                          <div className="styles_formBlockLimitPrice__gi29V undefined">
                            <div className="styles_main-block-large__NcL2U styles_main__3mpta ">
                              <div className="styles_label-block-large__29xAT styles_label__3SrJB">
                                <span className="HintCommon_hint__1FXyI ">
                                  Price
                                </span>
                                &nbsp;
                              </div>
                              <div className="styles_children-block-large__2Mofu styles_children__3Rv6q">
                                <div className="styles_main__3lIYn">
                                  <input
                                    id="order-entry--spot--price--value"
                                    min="0.01"
                                    step="0.01"
                                    placeholder="0.00"
                                    required=""
                                    autoComplete="off"
                                    className="styles_pure__1G2ap styles_text__1KTZc"
                                    type="number"
                                    value=""
                                    style={{ paddingRight: '108px' }}
                                  />
                                  <span className="styles_currency__R6gF_">
                                    USD
                                    <span className="styles_buttons__vNdhU">
                                      <button
                                        id="order-entry--spot--price--minus"
                                        type="button"
                                        className="styles_icon__2HJy2 styles_button__2h4XH"
                                      >
                                        －
                                      </button>
                                      <button
                                        id="order-entry--spot--price--plus"
                                        type="button"
                                        className="styles_icon__2HJy2 styles_button__2h4XH"
                                      >
                                        ＋
                                      </button>
                                    </span>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="PostOnly_postOnlyCheckBoxLimit__oOlzm">
                            <label
                              className=" styles_main__N6NYt"
                              htmlFor="order-entry--spot--post-only--checked"
                            >
                              <input
                                id="order-entry--spot--post-only--checked"
                                className="styles_input__2U7CA"
                                type="checkbox"
                              />
                              <span className="styles_check__w94zy"></span>
                              <span className="HintCommon_hint__1FXyI ">
                                <span className="PostOnly_postOnlyCheckBoxText__10ju2">
                                  Post Only
                                </span>
                              </span>
                            </label>
                          </div>
                          <div className="styles_formBlockLimitQuantity__2lMd6">
                            <div className="styles_main-block-large__NcL2U styles_main__3mpta ">
                              <div className="styles_label-block-large__29xAT styles_label__3SrJB">
                                <span className="HintCommon_hint__1FXyI ">
                                  Quantity
                                </span>
                                &nbsp;
                              </div>
                              <div className="styles_children-block-large__2Mofu styles_children__3Rv6q">
                                <div className="styles_main__3lIYn">
                                  <input
                                    id="order-entry--spot--quantity--value"
                                    min="0.001"
                                    step="0.001"
                                    placeholder="0.000000"
                                    required=""
                                    autoComplete="off"
                                    className="styles_pure__1G2ap styles_text__1KTZc"
                                    type="text"
                                    value=""
                                    style={{ paddingRight: '106px' }}
                                  />
                                  <span className="styles_currency__R6gF_">
                                    BTC
                                    <span className="styles_buttons__vNdhU">
                                      <button
                                        id="order-entry--spot--quantity--minus"
                                        type="button"
                                        className="styles_icon__2HJy2 styles_button__2h4XH"
                                      >
                                        －
                                      </button>
                                      <button
                                        id="order-entry--spot--quantity--plus"
                                        type="button"
                                        className="styles_icon__2HJy2 styles_button__2h4XH"
                                      >
                                        ＋
                                      </button>
                                    </span>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            id="order-entry--spot--quantity-percent"
                            className="styles_list__3eYRQ styles_formBlock__icrZV"
                          >
                            <div className="styles_item__dg96B">
                              <div className="styles_main__1RpHi">
                                <input
                                  id="order-entry--spot--quantity-percent--0.25--input"
                                  className="styles_input__gAght"
                                  type="radio"
                                  name="order-entry--spot--quantity-percent"
                                  value="0.25"
                                />
                                <label
                                  id="order-entry--spot--quantity-percent--0.25--label"
                                  className="styles_label__qBLpi styles_check__38VfN"
                                  htmlFor="order-entry--spot--quantity-percent--0.25--input"
                                >
                                  25%
                                </label>
                              </div>
                            </div>
                            <div className="styles_item__dg96B">
                              <div className="styles_main__1RpHi">
                                <input
                                  id="order-entry--spot--quantity-percent--0.5--input"
                                  className="styles_input__gAght"
                                  type="radio"
                                  name="order-entry--spot--quantity-percent"
                                  value="0.5"
                                />
                                <label
                                  id="order-entry--spot--quantity-percent--0.5--label"
                                  className="styles_label__qBLpi styles_check__38VfN"
                                  htmlFor="order-entry--spot--quantity-percent--0.5--input"
                                >
                                  50%
                                </label>
                              </div>
                            </div>
                            <div className="styles_item__dg96B">
                              <div className="styles_main__1RpHi">
                                <input
                                  id="order-entry--spot--quantity-percent--0.75--input"
                                  className="styles_input__gAght"
                                  type="radio"
                                  name="order-entry--spot--quantity-percent"
                                  value="0.75"
                                />
                                <label
                                  id="order-entry--spot--quantity-percent--0.75--label"
                                  className="styles_label__qBLpi styles_check__38VfN"
                                  htmlFor="order-entry--spot--quantity-percent--0.75--input"
                                >
                                  75%
                                </label>
                              </div>
                            </div>
                            <div className="styles_item__dg96B">
                              <div className="styles_main__1RpHi">
                                <input
                                  id="order-entry--spot--quantity-percent--1--input"
                                  className="styles_input__gAght"
                                  type="radio"
                                  name="order-entry--spot--quantity-percent"
                                  value="1"
                                />
                                <label
                                  id="order-entry--spot--quantity-percent--1--label"
                                  className="styles_label__qBLpi styles_check__38VfN"
                                  htmlFor="order-entry--spot--quantity-percent--1--input"
                                >
                                  100%
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className="styles_orderBalance__BGsCK">
                            <span className="styles_title__1oiDT">
                              Free Balance
                            </span>
                            <span
                              id="order-entry--spot--order-balance"
                              className="styles_main__3hU35"
                              title="0"
                              data-value="0"
                            >
                              <span id="order-entry--spot--order-balance--significant">
                                0.000
                              </span>
                              <span id="order-entry--spot--order-balance--symbol">
                                {' '}
                                USD
                              </span>
                            </span>
                          </div>
                          <div className="styles_main__kHejA">
                            <div>
                              <span className="HintCommon_hint__1FXyI ">
                                <span>Cost</span>
                                <svg
                                  height="19"
                                  viewBox="0 0 24 24"
                                  width="19"
                                  className="styles_attention__22vYn"
                                >
                                  <path
                                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"
                                    fillRule="nonzero"
                                  ></path>
                                </svg>
                              </span>
                            </div>
                            <div>
                              <span className="styles_main__1rvwL">
                                <span
                                  className="styles_main__3UZrp"
                                  title="0.00000000"
                                  id="order-entry--spot--order-calculator--cost"
                                  data-value="0"
                                >
                                  $0.000
                                </span>
                              </span>
                            </div>
                          </div>
                          <div className="AuthWrapper_wrapper__24dvs">
                            <div className="styles_formBlock__icrZV">
                              <p className="styles_msg__2one0">
                                Your account does not have permission to trade
                                Spot, view your account abilities in your
                                profile or
                                <a
                                  href="https://help.liquid.com"
                                  rel="noopener noreferrer"
                                  target="_blank"
                                >
                                  contact customer support
                                </a>
                                .
                              </p>
                            </div>
                            <button
                              id="button2"
                              className="styles_main__1rTEz styles_primary__3XxmD styles_large__3mDiO styles_button__vsICp styles_disabled__EXkew"
                              disabled=""
                              type="button"
                            >
                              Place buy order
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="styles_box__2VJDo styles_spotList__jO_jw">
              <div className="styles_main__3mqPq">
                <div>
                  <div className="styles_main__3IKza">
                    <li>
                      <button
                        id="tab-switchable-container--type--OrderListOpen"
                        className="styles_btn__1FU3v styles_active__1mBMl"
                        value="OrderListOpen"
                        type="button"
                      >
                        Open Orders
                      </button>
                    </li>
                    <li>
                      <button
                        id="tab-switchable-container--type--OrderListOther"
                        className="styles_btn__1FU3v "
                        value="OrderListOther"
                        type="button"
                      >
                        Order History
                      </button>
                    </li>
                    <li>
                      <button
                        id="tab-switchable-container--type--ExecutionList"
                        className="styles_btn__1FU3v "
                        value="ExecutionList"
                        type="button"
                      >
                        Executions
                      </button>
                    </li>
                  </div>
                </div>
                <div className="styles_container__2gkhS">
                  <div className=" styles_main__saomR" id="panel--order-list">
                    <div className="AuthWrapper_wrapper__24dvs">
                      <div>
                        <table
                          id="order-list"
                          className="sc-fzokOt kyNeax sc-fzomME hhnKZs"
                        >
                          <tr>
                            <th style={{ paddingLeft: '30px' }}>Account</th>
                            <th style={{ paddingLeft: '30px' }}>Symbol</th>
                            <th style={{ minWidth: '140px' }}>
                              <label
                                className="CheckboxFilter_check__59_F1 styles_main__N6NYt"
                                htmlFor="order-list-leverage-margin-type-header--hideOtherPairs--checked"
                              >
                                <input
                                  id="order-list-leverage-margin-type-header--hideOtherPairs--checked"
                                  className="styles_input__2U7CA"
                                  type="checkbox"
                                />
                                <span className="styles_check__w94zy"></span>
                                <span className="CheckboxFilter_label__ZYFdt">
                                  Hide other pairs
                                </span>
                              </label>
                            </th>
                            <th style={{ minWidth: '80px' }}>Side</th>
                            <th>Quantity</th>
                            <th style={{ minWidth: '140px' }}>Filled</th>
                            <th>Price</th>
                            <th>ID</th>
                            <th>Type</th>
                            <th style={{ minWidth: '160px' }}>
                              Updated (YY/MM/DD)
                            </th>
                          </tr>
                        </table>
                      </div>
                      <div className="styles_main__2BFQy">
                        <h4>No Orders</h4>
                        <p>You have no orders.</p>
                        <p>
                          Once placed, orders are displayed here. Live orders
                          can be edited or cancelled.
                        </p>
                        <a
                          href="https://help.liquid.com/en/articles/2275776-how-to-place-a-limit-order"
                          className="styles_main__3JWER "
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          See tutorial↗
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Trading;
