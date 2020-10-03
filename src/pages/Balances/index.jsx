import React from 'react';

import Header from '../../components/Header';

const Balances = () => {
  return (
    <>
      <Header />
      <div className="styles_body__2t5HW  styles_haveFooter__2fJ9r">
        <link rel="stylesheet" type="text/css" href="/css/core-liquid.css" />
        <link rel="stylesheet" type="text/css" href="/css/balances.css" />
        <div className="styles_main__21Z6r" id="p-wallets">
          <div id="p-wallets--menu--main" className="styles_main__L5OqJ">
            <div className="styles_content__1UzFF">
              <div className="styles_menus__1wHWh">
                <div className="styles_main__2X3da">
                  <a
                    id="p-wallets--menu--balances"
                    className="styles_normal__2IiiS styles__link__38bS2 styles_active__2Evxl styles__link__38bS2"
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
                    className="styles_normal__2IiiS styles__link__38bS2"
                    href="/wallets/transactions"
                  >
                    Transactions
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="styles_body__tAox4">
            <div>
              <div className="styles_main__2rKVl">
                <div className="styles_total__2DGL2">
                  <div className="styles_container__2kE2g ">
                    <div className="styles_row__3yCaM ">
                      <div className="styles_col-lg-4__3MuuY styles_item__wE37l">
                        <div className="styles_content__1H-rz">
                          <h6 className="styles_title__2KJ-y">
                            Estimated balance
                          </h6>
                          <h1 className="styles_value__1wigq">
                            <span>
                              <span
                                className="styles_main__3UZrp"
                                title="0.00000000"
                                id="p-wallets--est--est-home"
                                data-value="0"
                              >
                                0.000
                              </span>
                            </span>
                            <small>USD</small>
                          </h1>
                          <div className="styles_est__2dsmz">
                            <span>
                              <span>≈ </span>
                              <span
                                className="styles_main__3UZrp"
                                title="0.00000000"
                                id="p-wallets--est--est-home-btc"
                                data-value="0"
                              >
                                0.
                                <span
                                  id="p-wallets--est--est-home-btc--zeros"
                                  className="styles_light__2wN1U"
                                >
                                  00000000
                                </span>
                              </span>
                            </span>
                            <small>BTC</small>
                          </div>
                        </div>
                      </div>
                      <div className="styles_col-lg-4__3MuuY styles_item__wE37l">
                        <div className="styles_content__1H-rz">
                          <h6 className="styles_title__2KJ-y">
                            Available balance
                          </h6>
                          <h1 className="styles_value__1wigq styles_positive__2KC-u">
                            <span>
                              <span
                                className="styles_main__3UZrp"
                                title="0.00000000"
                                id="p-wallets--est--est-available"
                                data-value="0"
                              >
                                0.000
                              </span>
                            </span>
                            <small>USD</small>
                          </h1>
                          <div className="styles_est__2dsmz">
                            <span>
                              <span>≈ </span>
                              <span
                                className="styles_main__3UZrp"
                                title="0.00000000"
                                id="p-wallets--est--est-available-btc"
                                data-value="0"
                              >
                                0.
                                <span
                                  id="p-wallets--est--est-available-btc--zeros"
                                  className="styles_light__2wN1U"
                                >
                                  00000000
                                </span>
                              </span>
                            </span>
                            <small>BTC</small>
                          </div>
                        </div>
                      </div>
                      <div className="styles_col-lg-4__3MuuY styles_item__wE37l">
                        <div className="styles_content__1H-rz">
                          <h6 className="styles_title__2KJ-y">In orders</h6>
                          <h1 className="styles_value__1wigq styles_negative__1mp50">
                            <span>
                              <span
                                className="styles_main__3UZrp"
                                title="0.00000000"
                                id="p-wallets--est--est-inorder"
                                data-value="0"
                              >
                                0.000
                              </span>
                            </span>
                            <small>USD</small>
                          </h1>
                          <div className="styles_est__2dsmz">
                            <span>
                              <span>≈ </span>
                              <span
                                className="styles_main__3UZrp"
                                title="0.00000000"
                                id="p-wallets--est--est-inorder-btc"
                                data-value="0"
                              >
                                0.
                                <span
                                  id="p-wallets--est--est-inorder-btc--zeros"
                                  className="styles_light__2wN1U"
                                >
                                  00000000
                                </span>
                              </span>
                            </span>
                            <small>BTC</small>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="styles_container__2kE2g styles_body__278Ex">
                  <div className="styles_main__3d383">
                    <h2 className="styles_title__3PoCW">Balance</h2>
                    <div className="styles_main__1zpdt styles_body__2yIa8">
                      <div className="styles_body__2xX5a styles_wrapperBody__1c7n6">
                        <div className="styles_main__1U8zJ">
                          <div className="styles_left__2GLl3">
                            <div
                              className="styles_toggle__2kfAq"
                              id="p-wallets--body--toolbar--filter"
                            >
                              <label
                                className="styles_switch__2tUuh"
                                htmlFor="p-wallets--body--toolbar--non-zero"
                              >
                                <input
                                  id="p-wallets--body--toolbar--non-zero"
                                  type="checkbox"
                                  checked=""
                                />
                                <span className="styles_slider__2g9-Y "></span>
                              </label>
                              <span className="styles_hideText__UkZi0">
                                Show zero balance wallets
                              </span>
                            </div>
                          </div>
                          <div className="styles_right__14fBA">
                            <div className="styles_main__3sCW8 ">
                              <input
                                title=""
                                className="styles_search__2dwUt styles_input__1gyBP"
                                id="p-wallets--body--toolbar--search"
                                type="text"
                                placeholder="Search in my balances..."
                                value=""
                              />
                            </div>
                            <i className="icon icon-search"></i>
                          </div>
                        </div>
                        <div className="styles_wrapperList__3AdQ2">
                          <div className="styles_list__3kgHD">
                            <p className="styles_message__tb_Wl">
                              No assets found
                            </p>
                          </div>
                        </div>
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

export default Balances;
