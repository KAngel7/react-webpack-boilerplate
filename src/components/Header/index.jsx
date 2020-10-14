import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import style from './style.scss';
import { AuthContext } from '../../services/context';

const Header = () => {
  const { authenticated, user, logout } = useContext(AuthContext);
  return (
    <header className={` ${style.header}`}>
      <div className={`${style.leftWrapper}`}>
        <Link to="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="60"
            viewBox="0 0 512 512"
            width="100"
          >
            <g xmlns="http://www.w3.org/2000/svg">
              <path
                d="m494.995 457h-477.99c-9.392 0-17.005-7.613-17.005-17.005v-269.982c0-9.391 7.613-17.005 17.005-17.005h477.991c9.391 0 17.005 7.613 17.005 17.005v269.982c-.001 9.392-7.614 17.005-17.006 17.005z"
                fill="#8ac9fe"
              />
              <path
                d="m494.978 153.009h-41.698v228.4c0 9.382-7.621 16.988-17.022 16.988h-436.258v41.616c0 9.381 7.621 16.987 17.022 16.987h477.957c9.401 0 17.022-7.606 17.022-16.988v-270.015c-.001-9.383-7.622-16.988-17.023-16.988z"
                fill="#60b7ff"
              />
              <path
                d="m30.659 423.432v-236.856c0-1.657 1.343-3 3-3h444.683c1.657 0 3 1.343 3 3v236.856c0 1.657-1.343 3-3 3h-444.683c-1.657 0-3-1.343-3-3z"
                fill="#eaf6ff"
              />
              <path
                d="m453.28 183.577c0 118.642-96.37 214.82-215.248 214.82h-207.373v25.036c0 1.657 1.343 3 3 3h444.683c1.657 0 3-1.343 3-3v-236.857c0-1.657-1.343-3-3-3z"
                fill="#d8ecfe"
              />
              <g>
                <ellipse
                  cx="256"
                  cy="167.551"
                  fill="#fd9468"
                  rx="112.926"
                  ry="112.551"
                />
                <path
                  d="m284.578 58.639c14.772 19.026 23.568 42.895 23.568 68.814 0 62.16-50.559 112.551-112.926 112.551-9.874 0-19.45-1.267-28.578-3.639 20.654 26.603 52.997 43.737 89.358 43.737 62.367 0 112.926-50.391 112.926-112.551 0-52.32-35.819-96.297-84.348-108.912z"
                  fill="#fe7d43"
                />
                <ellipse
                  cx="256"
                  cy="167.55"
                  fill="#fee45a"
                  rx="81.246"
                  ry="80.966"
                />
                <path
                  d="m305.566 103.463c1.684 7.731 2.58 15.756 2.58 23.99 0 55.032-39.63 100.831-91.996 110.613 11.784 6.64 25.376 10.45 39.851 10.45 44.799 0 81.245-36.321 81.245-80.966 0-26.059-12.431-49.267-31.68-64.087z"
                  fill="#fed230"
                />
                <path
                  d="m297.109 185.357c0-9.079-4.676-17.085-11.748-21.757 2.993-4.242 4.758-9.406 4.758-14.977 0-11.652-7.699-21.542-18.286-24.875v-4.808c0-4.259-3.459-7.711-7.726-7.711s-7.726 3.452-7.726 7.711v3.605h-5.066v-3.605c0-4.259-3.459-7.711-7.726-7.711s-7.726 3.452-7.726 7.711v3.605h-1.492-.898-10.854c-4.267 0-7.726 3.452-7.726 7.711s3.459 7.711 7.726 7.711h3.127v29.023 29.023h-3.127c-4.267 0-7.726 3.452-7.726 7.711s3.459 7.711 7.726 7.711h10.854.898 1.492v3.604c0 4.259 3.459 7.711 7.726 7.711s7.726-3.452 7.726-7.711v-3.604h5.066v3.604c0 4.259 3.459 7.711 7.726 7.711s7.726-3.452 7.726-7.711v-3.626c14.014-.451 25.276-11.962 25.276-26.056zm-33.12-26.077h-22.792v-21.312h22.792c5.887 0 10.677 4.78 10.677 10.656s-4.789 10.656-10.677 10.656zm6.99 36.734h-29.782v-21.312h22.792 6.99c5.887 0 10.677 4.78 10.677 10.657 0 5.875-4.789 10.655-10.677 10.655z"
                  fill="#fd9468"
                />
              </g>
              <path
                d="m416.404 353.822c-4.811 0-9.191 1.797-12.538 4.737-3.347-2.939-7.727-4.737-12.538-4.737-10.492 0-18.997 8.48-18.997 18.94s8.505 18.94 18.997 18.94c4.811 0 9.191-1.797 12.538-4.737 3.347 2.939 7.727 4.737 12.538 4.737 10.492 0 18.997-8.48 18.997-18.94s-8.506-18.94-18.997-18.94z"
                fill="#fd9468"
              />
              <g>
                <g>
                  <path
                    d="m143.364 325.452h-60.886c-4.267 0-7.726-3.452-7.726-7.711s3.459-7.711 7.726-7.711h60.886c4.267 0 7.726 3.452 7.726 7.711s-3.459 7.711-7.726 7.711z"
                    fill="#c4e2ff"
                  />
                </g>
              </g>
              <g>
                <g>
                  <path
                    d="m238.322 325.452h-60.885c-4.267 0-7.726-3.452-7.726-7.711s3.459-7.711 7.726-7.711h60.885c4.267 0 7.726 3.452 7.726 7.711.001 4.259-3.458 7.711-7.726 7.711z"
                    fill="#c4e2ff"
                  />
                </g>
              </g>
              <g>
                <g>
                  <path
                    d="m332.436 325.452h-60.885c-4.267 0-7.726-3.452-7.726-7.711s3.459-7.711 7.726-7.711h60.885c4.267 0 7.726 3.452 7.726 7.711s-3.459 7.711-7.726 7.711z"
                    fill="#c4e2ff"
                  />
                </g>
              </g>
              <g>
                <g>
                  <path
                    d="m427.478 325.452h-60.885c-4.267 0-7.726-3.452-7.726-7.711s3.459-7.711 7.726-7.711h60.885c4.267 0 7.726 3.452 7.726 7.711s-3.459 7.711-7.726 7.711z"
                    fill="#c4e2ff"
                  />
                </g>
              </g>
              <g>
                <g>
                  <path
                    d="m242.204 381.492h-162.491c-4.267 0-7.726-3.452-7.726-7.711s3.459-7.711 7.726-7.711h162.491c4.267 0 7.726 3.452 7.726 7.711s-3.459 7.711-7.726 7.711z"
                    fill="#c4e2ff"
                  />
                </g>
              </g>
            </g>
          </svg>
        </Link>
        <Link
          target="_self"
          id="ba-tableMarkets"
          to="/trading"
          className="css-1t0260p"
        >
          <div className="css-1w2cmbz">
            <span className="hoverstatus css-1qqh4qo">
              Mua Crypto<div className="css-1rktosy">VND</div>
            </span>
          </div>
        </Link>
        <Link
          target="_self"
          id="ba-tableMarkets"
          to="/markets"
          className="css-1t0260p css-1qqh4qo"
        >
          Thị trường
        </Link>
      </div>
      {authenticated ? (
        <div className="styles_right__2p6KI">
          <div className="styles_rightContent__2wL9Y">
            <Link
              target="_self"
              id="ba-tableMarkets"
              to="/wallets/orders"
              className="css-1t0260p css-1qqh4qo"
            >
              Lệnh mua/bán
            </Link>
            <div className="styles_main__3EaD8 styles_left__2P1Kf styles_hoverable__2YTrJ">
              <div className="styles_body__3dd1F styles_popupBody__2dnU5 styles_feed__1T7yq">
                <Link
                  target="_self"
                  id="ba-tableMarkets"
                  to="/wallets/balances"
                  className="css-1t0260p css-1qqh4qo"
                >
                  Ví của tôi
                </Link>
              </div>
              <div className="styles_content__2DpoO styles_popupContent__20--_ styles_arrowUp__VLlKP">
                <ul className="styles_contentDropdown__21lgr">
                  <li>
                    <Link
                      id="quick-exchange-nav--wallets-balances--link"
                      className="styles_itemDropdown__EBiWd styles_main__159n1"
                      to="/wallets/balances"
                    >
                      Số dư
                    </Link>
                  </li>
                  <li>
                    <Link
                      id="quick-exchange-nav--wallets-withdrawals--link"
                      className="styles_itemDropdown__EBiWd styles_main__159n1"
                      to="/wallets/withdrawals"
                    >
                      Rút tiền
                    </Link>
                  </li>
                  <li>
                    <Link
                      id="quick-exchange-nav--wallets-transactions--link"
                      className="styles_itemDropdown__EBiWd styles_main__159n1 styles_active__2Qw29"
                      to="/wallets/transactions"
                    >
                      Lịch sử giao dịch
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <Link
              target="_self"
              id="ba-tableMarkets"
              to="/wallets/deposits"
              className="css-1t0260p css-1qqh4qo"
            >
              Nạp tiền
            </Link>
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
                      {`${user.first_name} ${user.last_name}`}
                    </h3>
                    <p
                      title="aquarius.superstar@gmail.com"
                      className="styles_emailProfileUser__2qeNF"
                    >
                      {user.email}
                    </p>
                    <p className="styles_idProfileUser__3WeDL">
                      <span className="styles_userId__22d4X">ID: 814069</span>
                      <Link to="/settings/profile">
                        <span className="styles_userStatus__3xnee">
                          {user.status}
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
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
              <ul className="styles_wrapperLinkProfileUser__3uc61">
                <li className="styles_itemLink__1Pvgv">
                  <Link
                    id="--my-profile--link"
                    className="styles_itemLinkProfileUser__-3t2u styles_main__159n1"
                    to="/settings/profile"
                  >
                    Thông tin tài khoản
                  </Link>
                </li>
              </ul>
              <Link
                id="quick-exchange-nav--user--log-out--link"
                className="styles_itemLinkProfileUserLogout__c6lyd styles_main__159n1"
                onClick={logout}
                to="/"
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
                Đăng xuất
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div className="styles_right__2p6KI">
          <div className="styles_hiddenSm__1tdzy styles_contentWrp__2L2a5">
            <Link id="header_login" to="/login" class="css-1yztfkw">
              Đăng nhập
            </Link>
            <Link
              className="css-p93cyt"
              id="quick-exchange-nav--sign-up"
              to="/register"
              rel="noopener nofollow noreferrer"
            >
              <button type="button" id="header_register" className="css-yotb4s">
                Đăng ký
              </button>
            </Link>
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
