import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="css-2qpcvm">
      <div className="css-1tr0qpm">
        <div className="css-138yzuf">
          <div className="css-19ph8gz">
            <div className="css-vurnku">
              <div data-bn-type="text" className="css-1jsf87b">
                Về chúng tôi
              </div>
              <Link to="/blog" className="css-1rf5m8d">
                <div data-bn-type="text" className="css-1cjl26j">
                  BNX Blog{' '}
                </div>
              </Link>
              <Link to="/terms" className="css-1rf5m8d">
                <div data-bn-type="text" className="css-1cjl26j">
                  Điều khoản{' '}
                </div>
              </Link>
              <Link to="/privacy" className="css-1rf5m8d">
                <div data-bn-type="text" className="css-1cjl26j">
                  Riêng tư{' '}
                </div>
              </Link>
            </div>
          </div>
          <div className="css-19ph8gz">
            <div className="css-vurnku">
              <div data-bn-type="text" className="css-1jsf87b">
                Dịch vụ
              </div>
              <Link to="/buy-sell-crypto" className="css-1rf5m8d">
                <div data-bn-type="text" className="css-1cjl26j">
                  Mua tiền mã hóa{' '}
                </div>
              </Link>
              <Link to="/fee/schedule" className="css-1rf5m8d">
                <div data-bn-type="text" className="css-1cjl26j">
                  Phí giao dịch{' '}
                </div>
              </Link>
              <Link to="/activity/referral" className="css-1rf5m8d">
                <div data-bn-type="text" className="css-1cjl26j">
                  Giới thiệu{' '}
                </div>
              </Link>
              <Link to="/bnb" className="css-1rf5m8d">
                <div data-bn-type="text" className="css-1cjl26j">
                  BNB{' '}
                </div>
              </Link>
              <Link to="/busd" className="css-1rf5m8d">
                <div data-bn-type="text" className="css-1cjl26j">
                  Mua BUSD{' '}
                </div>
              </Link>
            </div>
          </div>
          <div className="css-19ph8gz">
            <div className="css-vurnku">
              <div data-bn-type="text" className="css-1jsf87b">
                Hỗ trợ
              </div>
              <Link to="/support" className="css-1rf5m8d">
                <div data-bn-type="text" className="css-1cjl26j">
                  Trung tâm trợ giúp{' '}
                </div>
              </Link>
              <Link to="/support/requests/new" className="css-1rf5m8d">
                <div data-bn-type="text" className="css-1cjl26j">
                  Gửi yêu cầu hỗ trợ{' '}
                </div>
              </Link>
            </div>
          </div>
        </div>
        {/* <div className="css-1ti7za9">
        <div data-bn-type="text" className="css-1jsf87b">
          Cộng đồng
        </div>
        <div className="css-vurnku">
          <Link
            to="/community"
            className="css-132wsgo"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="css-rneb1u"
              fill="currentColor"
            >
              <use xlinkHref="#icon-h-telegram"></use>
            </svg>
          </Link>
        </div>
        <div className="css-ybbx55">
          <button type="button" className="css-1h70oqo">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="css-f18x6c"
              fill="currentColor"
            >
              <use xlinkHref="#icon-h-diqiu"></use>
            </svg>
            <div data-bn-type="text" className="css-n8a3xt">
              Tiếng Việt
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              id="i"
              className="css-1seeaip"
              fill="currentColor"
            >
              <use xlinkHref="#icon-h-dropdown-arrow"></use>
            </svg>
          </button>
          <div
            className="css-gv1gi9"
            id="cus1"
            data-popper-reference-hidden="true"
            data-popper-escaped="true"
            data-popper-placement="top-start"
          >
            <div className="css-1cuoy00">
              <div className="css-uliqdc">
                <div className="css-4m887f">English</div>
                <div className="css-4m887f">繁體中文</div>
                <div className="css-4m887f">Русский</div>
                <div className="css-4m887f">Français</div>
                <div className="css-4m887f">Tiếng Việt</div>
                <div className="css-4m887f">Nederlands</div>
                <div className="css-4m887f">Italiano</div>
                <div className="css-4m887f">Bahasa</div>
                <div className="css-4m887f">Filipino</div>
                <div className="css-4m887f">العربية</div>
              </div>
              <div className="css-uliqdc">
                <div className="css-4m887f">简体中文</div>
                <div className="css-4m887f">한국어</div>
                <div className="css-4m887f">Español</div>
                <div className="css-4m887f">Deutsch</div>
                <div className="css-4m887f">Türkçe</div>
                <div className="css-4m887f">Português</div>
                <div className="css-4m887f">Polski</div>
                <div className="css-4m887f">Українська</div>
                <div className="css-4m887f">日本語</div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      </div>
      {/* <div className="css-1jcqx7s">
      <h4 data-bn-type="text" className="css-90tmb0">
        Cộng đồng
      </h4>
    </div> */}
      <div className="css-19590jh">
        <div data-bn-type="text" className="css-1n6gnxm">
          © 2020 BNX. All rights reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
