import React from 'react';
import Header from '../../components/Header';

const Order = () => {
  return (
    <main>
      <link type="text/css" href="/css/deposits.css" rel="stylesheet" />
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
                    className="styles_normal__2IiiS styles__link__38bS2 styles_active__2Evxl styles__link__38bS2"
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
            <div className="styles_container__2kE2g styles_main__2gb6R">
              <h2 className="styles_header__1ay01">Open Orders</h2>
              <div className="styles_body__2idlR">
                <div className="styles_main__2BFQy">
                  <h4>No Orders</h4>
                  <p>You have no orders.</p>
                  <p>
                    Once placed, orders are displayed here. Live orders can be
                    edited or cancelled.
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
    </main>
  );
};

export default Order;
