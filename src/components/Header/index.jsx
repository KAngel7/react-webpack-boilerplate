import React from 'react';
import style from './style.scss';

const Header = props => {
  // const { userData } = props || {};
  const userData = {
    id: '181998',
    name: 'Quang',
    email: 'ntquang98@gmail.com',
    status: 'PENDING',
  };

  return (
    <header className={` ${style.header}`}>
      <div className={`${style.leftWrapper}`}>
        <a href="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 5120 1024"
            className="css-1e2tyca"
          >
            <path
              d="M230.997333 512L116.053333 626.986667 0 512l116.010667-116.010667L230.997333 512zM512 230.997333l197.973333 197.973334 116.053334-115.968L512 0 197.973333 314.026667l116.053334 115.968L512 230.997333z m395.989333 164.992L793.002667 512l116.010666 116.010667L1024.981333 512l-116.992-116.010667zM512 793.002667l-197.973333-198.997334-116.053334 116.010667L512 1024l314.026667-314.026667-116.053334-115.968L512 793.002667z m0-165.973334l116.010667-116.053333L512 396.032 395.989333 512 512 626.986667z m1220.010667 11.946667v-1.962667c0-75.008-40.021333-113.024-105.002667-138.026666 39.978667-21.973333 73.984-58.026667 73.984-121.002667v-1.962667c0-88.021333-70.997333-145.024-185.002667-145.024h-260.992v561.024h267.008c126.976 0.981333 210.005333-51.029333 210.005334-153.002666z m-154.026667-239.957333c0 41.984-34.005333 58.965333-89.002667 58.965333h-113.962666V338.986667h121.984c52.010667 0 80.981333 20.992 80.981333 58.026666v2.005334z m31.018667 224c0 41.984-32.981333 61.013333-87.04 61.013333h-146.944v-123.050667h142.976c63.018667 0 91.008 23.04 91.008 61.013334v1.024z m381.994666 169.984V230.997333h-123.989333v561.024h123.989333v0.981334z m664.021334 0V230.997333h-122.026667v346.026667l-262.997333-346.026667h-114.005334v561.024h122.026667v-356.010666l272 356.992h104.96z m683.946666 0L3098.026667 228.010667h-113.962667l-241.024 564.992h127.018667l50.986666-125.994667h237.013334l50.986666 125.994667h130.005334z m-224.981333-235.008h-148.992l75.008-181.973334 73.984 181.973334z m814.037333 235.008V230.997333h-122.026666v346.026667l-262.997334-346.026667h-114.005333v561.024h122.026667v-356.010666l272 356.992h104.96z m636.970667-91.008l-78.976-78.976c-44.032 39.978667-83.029333 65.962667-148.010667 65.962666-96 0-162.986667-80-162.986666-176v-2.986666c0-96 67.968-174.976 162.986666-174.976 55.978667 0 100.010667 23.978667 144 62.976l78.976-91.008c-51.968-50.986667-114.986667-86.997333-220.970666-86.997334-171.989333 0-292.992 130.986667-292.992 290.005334V512c0 160.981333 122.965333 288.981333 288 288.981333 107.989333 1.024 171.989333-36.992 229.973333-98.986666z m527.018667 91.008v-109.994667h-305.024v-118.016h265.002666v-109.994667h-265.002666V340.992h301.013333V230.997333h-422.997333v561.024h427.008v0.981334z"
              p-id="2935"
            ></path>
          </svg>
        </a>

        <div className="css-1w2cmbz">
          <span className="hoverstatus css-1qqh4qo">
            Mua Crypto<div className="css-1rktosy">EUR</div>
          </span>
        </div>
        <a
          target="_self"
          id="ba-tableMarkets"
          href="/markets"
          className="css-1t0260p"
        >
          Thị trường
        </a>
        <div className="css-1w2cmbz">
          <span className="hoverstatus css-1qqh4qo">
            <a
              target="_self"
              id="ba-tableMarkets"
              href="/trading"
              className="css-1t0260p"
            >
              Giao dịch
            </a>
          </span>
        </div>
      </div>
      {userData ? (
        <div className="styles_right__2p6KI">
          <div className="styles_rightContent__2wL9Y">
            <a
              id="quick-exchange-nav--wallets-orders--link"
              className="styles_main__159n1"
              href="/wallets/orders"
            >
              Orders
            </a>
            <div className="styles_main__3EaD8 styles_left__2P1Kf styles_hoverable__2YTrJ">
              <div className="styles_body__3dd1F styles_popupBody__2dnU5 styles_feed__1T7yq">
                <a
                  id="quick-exchange-nav--fund-title--link"
                  className="styles_contentPopBody__2AtB2 styles_main__159n1 styles_active__2Qw29"
                  href="/wallets/balances"
                >
                  Wallets
                </a>
              </div>
              <div className="styles_content__2DpoO styles_popupContent__20--_ styles_arrowUp__VLlKP">
                <ul className="styles_contentDropdown__21lgr">
                  <li>
                    <a
                      id="quick-exchange-nav--wallets-balances--link"
                      className="styles_itemDropdown__EBiWd styles_main__159n1"
                      href="/wallets/balances"
                    >
                      Balances
                    </a>
                  </li>
                  <li>
                    <a
                      id="quick-exchange-nav--wallets-withdrawals--link"
                      className="styles_itemDropdown__EBiWd styles_main__159n1"
                      href="/wallets/withdrawals"
                    >
                      Withdrawals
                    </a>
                  </li>
                  <li>
                    <a
                      id="quick-exchange-nav--wallets-transactions--link"
                      className="styles_itemDropdown__EBiWd styles_main__159n1 styles_active__2Qw29"
                      href="/wallets/transactions"
                    >
                      Transactions History
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <a
              id="quick-exchange-nav--wallets-deposits--link"
              className="styles_walletsDeposits__CbGeZ styles__buttonInNav__JD0Hw styles_main__159n1"
              href="/wallets/deposits"
            >
              Deposits
            </a>
            <span className="styles_divider__3c7k5">|</span>
          </div>
          <div className="styles_main__3EaD8 styles_right__2PfIe styles_hoverable__2YTrJ">
            <div className="styles_body__3dd1F styles_wrapperAvatar__2P3Ob styles_feed__1T7yq">
              <img
                alt="Gravatar for aquarius.superstar@gmail.com"
                src="//www.gravatar.com/avatar/eb39c10b62faa2a6a36b0cff03e04763?d=mp&r=g&s=50"
                srcSet="//www.gravatar.com/avatar/eb39c10b62faa2a6a36b0cff03e04763?d=mp&r=g&s=100 2x"
                height={50}
                width={50}
                className="react-gravatar styles_avatar__2jdKR"
              />
            </div>
            <div className="styles_content__2DpoO styles_popupContent__UqE4a styles_arrowUp__VLlKP">
              <div
                id="quick-exchange-nav--user--profile-user"
                className="styles_wrapperProfileUser__3mswR"
              >
                <div className="styles_contentProfileUser__1MHyh">
                  <img
                    alt="Gravatar for aquarius.superstar@gmail.com"
                    src="//www.gravatar.com/avatar/eb39c10b62faa2a6a36b0cff03e04763?d=mp&r=g&s=50"
                    srcSet="//www.gravatar.com/avatar/eb39c10b62faa2a6a36b0cff03e04763?d=mp&r=g&s=100 2x"
                    height={50}
                    width={50}
                    className="react-gravatar styles_avatarProfileUser__RtmT5"
                  />
                  <div className="styles_infoProfileUser__HssgI">
                    <h3 className="styles_nameProfileUser__yMp0W">
                      Quang Nguyen
                    </h3>
                    <p
                      title="aquarius.superstar@gmail.com"
                      className="styles_emailProfileUser__2qeNF"
                    >
                      aquarius.superstar@gmail.com
                    </p>
                    <p className="styles_idProfileUser__3WeDL">
                      <span className="styles_userId__22d4X">ID: 814069</span>
                      <a href="/settings/profile">
                        <span className="styles_userStatus__3xnee">
                          Pending
                        </span>
                        <svg
                          width={12}
                          height={12}
                          viewBox="0 0 12 12"
                          className="StatusIcon_main__1dY9G"
                        >
                          <g fill="none" fillRule="evenodd">
                            <path fill="#FFF" d="M5 4H7V11H5z" />
                            <path
                              fill="#FA0"
                              d="M6.733 1.212c.214.126.393.304.522.516l4.527 7.486c.431.712.202 1.639-.511 2.069-.236.142-.506.217-.78.217H1.51C.676 11.5 0 10.825 0 9.993c0-.271.073-.537.212-.77l4.453-7.485c.425-.716 1.352-.952 2.068-.526zM6 8.5c-.414 0-.75.336-.75.75s.336.75.75.75.75-.336.75-.75S6.414 8.5 6 8.5zM6.75 4h-1.5v3h1.5V4z"
                            />
                          </g>
                        </svg>
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <ul className="styles_wrapperLinkProfileUser__3uc61">
                <li className="styles_itemLink__1Pvgv">
                  <a
                    id="--my-profile--link"
                    className="styles_itemLinkProfileUser__-3t2u styles_main__159n1"
                    href="/settings/profile"
                  >
                    My Profile
                  </a>
                </li>
                <li className="styles_itemLink__1Pvgv">
                  <a
                    id="--application-settings--link"
                    className="styles_itemLinkProfileUser__-3t2u styles_main__159n1"
                    href="/settings/application"
                  >
                    Application Settings
                  </a>
                </li>
                <li className="styles_itemLink__1Pvgv">
                  <a
                    id="--settings-security--link"
                    className="styles_itemLinkProfileUser__-3t2u styles_main__159n1"
                    href="/settings/security"
                  >
                    Security
                  </a>
                </li>
                <li className="styles_itemLink__1Pvgv">
                  <a
                    id="--settings-fees--link"
                    className="styles_itemLinkProfileUser__-3t2u styles_main__159n1"
                    href="/settings/fees"
                  >
                    Fees
                  </a>
                </li>
              </ul>
              <div>
                <a
                  id="quick-exchange-nav--user--customer-support--a-link"
                  href="https://help.liquid.com"
                  className="styles_itemLinkProfileUser__-3t2u styles_main__159n1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Customer Support
                </a>
              </div>
              <a
                id="quick-exchange-nav--user--log-out--link"
                className="styles_itemLinkProfileUserLogout__c6lyd styles_main__159n1"
                href="/sign-out"
              >
                <svg width={20} height={12}>
                  <path
                    d="M8.5 6h-8m3-3l-3 3 3 3m3-6.5v-1a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1v-1"
                    stroke="#153DB4"
                    fill="none"
                    fillRule="evenodd"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Logout
              </a>
            </div>
          </div>
          <div className="styles_wrapperHamburger__Ko0q0">
            <div>
              <button
                id="top-menu--button"
                type="button"
                className="colors_accent__kt2vh styles_inline__3aUdv styles_text__PvLrZ styles_subMenu__2qRie"
              >
                <i className="icon icon-menu-right styles_icon__3wSBF " />
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="styles_right__2p6KI">
          <div className="styles_hiddenSm__1tdzy styles_contentWrp__2L2a5">
            <a
              id="quick-exchange-nav--sign-in"
              className="styles_linkSignIn__3HCtB"
              href="https://app.liquid.com/sign-in"
            >
              Sign In
            </a>
            <a
              className="styles_linkSignUp__QOaQk styles__buttonInNav__JD0Hw"
              id="quick-exchange-nav--sign-up"
              href="https://www.liquid.com/sign-up"
              rel="noopener nofollow noreferrer"
            >
              Sign Up
            </a>
          </div>
          <div className="styles_wrapperHamburger__Ko0q0">
            <div>
              <button
                id="top-menu--button"
                type="button"
                className="colors_accent__kt2vh styles_inline__3aUdv styles_text__PvLrZ styles_subMenu__2qRie"
              >
                <i className="icon icon-menu-right styles_icon__3wSBF "></i>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
export default Header;
