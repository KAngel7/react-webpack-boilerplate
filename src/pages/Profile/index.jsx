import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './style';

const Profile = () => {
  return (
    <>
      <Header />
      <link type="text/css" href="/css/deposits.css" rel="stylesheet" />
      <div className="styles_container__2kE2g Settings_main__1T00C">
        <h2 className="Settings_title__1AnJK">Profile</h2>
        <div className="Settings_body__1dyzZ">
          <div className="SettingsHeader_main__1LlAP">
            <h4>My Profile</h4>
          </div>
          <div className="SettingsBody_main__1DbFm">
            <div className="styles_row__3yCaM ">
              <div className="styles_col-md-6__2EhLs ">
                <img
                  alt="Gravatar for khanh@codelynx.io"
                  src="//www.gravatar.com/avatar/df486fab63dc2b4d25f27269b1bccc43?d=mp&amp;r=g&amp;s=50"
                  srcSet="//www.gravatar.com/avatar/df486fab63dc2b4d25f27269b1bccc43?d=mp&amp;r=g&amp;s=100 2x"
                  height="50"
                  width="50"
                  className="react-gravatar ProfileAvatar_avatar__iRyo3"
                />
                <p className="ProfileAvatar_title__Uw3gF">Your avatar</p>
                <Link
                  id="profile--button"
                  className="ProfileAvatar_update__3JS-o"
                  to="https://en.gravatar.com/emails/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Update
                </Link>
                <hr className="styles_line__1Z7ek" />
                <div className="SettingsField2_field__rOv6D ProfileAvatar_field__bJyq6">
                  <span className="SettingsField2_label__2mWfS">Full Name</span>
                  <p className="SettingsField2_value__1lnL2 ">Khanh Nguyen</p>
                </div>
                <hr className="styles_line__1Z7ek" />
                <div className="SettingsField2_field__rOv6D ProfileAvatar_field__bJyq6">
                  <span className="SettingsField2_label__2mWfS">
                    Email Address
                  </span>
                  <p className="SettingsField2_value__1lnL2 ">
                    khanh@codelynx.io
                  </p>
                </div>
                <div className="SettingsField2_field__rOv6D undefined">
                  <span className="SettingsField2_label__2mWfS">User ID</span>
                  <p className="SettingsField2_value__1lnL2 ">816434</p>
                </div>
              </div>
              <div className="styles_col-md-6__2EhLs ">
                <p className="KYCVerify_verify__3RZse">Verify &amp; Upgrade</p>
                <div
                  id="profile--status"
                  data-value="pending"
                  className="KYCStatus_main__xI6_H"
                >
                  <div className="KYCStatus_note__NfG0D">
                    <span className="styles_primary-3__1vvdt">
                      <span className="KYCStatus_status__66R1g">
                        Account Status
                      </span>
                      <span>: </span>
                    </span>
                    <span className="KYCStatus_pending__yMB23">
                      <span className="KYCStatus_title__3TtYK">Pending</span>
                    </span>
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      className="StatusIcon_main__1dY9G"
                    >
                      <g fill="none" fillRule="evenodd">
                        <path fill="#FFF" d="M5 4H7V11H5z"></path>
                        <path
                          fill="#FA0"
                          d="M6.733 1.212c.214.126.393.304.522.516l4.527 7.486c.431.712.202 1.639-.511 2.069-.236.142-.506.217-.78.217H1.51C.676 11.5 0 10.825 0 9.993c0-.271.073-.537.212-.77l4.453-7.485c.425-.716 1.352-.952 2.068-.526zM6 8.5c-.414 0-.75.336-.75.75s.336.75.75.75.75-.336.75-.75S6.414 8.5 6 8.5zM6.75 4h-1.5v3h1.5V4z"
                        ></path>
                      </g>
                    </svg>
                  </div>
                  <span className="styles_primary-3__1vvdt">
                    <p>
                      <span>
                        Your account is unverified. Get verified to enable
                        funding, trading, and withdrawal.
                      </span>
                    </p>
                  </span>
                </div>
                <div>
                  <p className="KYCVerify_tfaDisabled__2A-p8">
                    Your 2-factor authentication method is disabled or outdated.
                    Please set up 2-factor authentication first in Settings &gt;
                    Security.
                  </p>
                  <Link
                    id="profile--2fa"
                    className="styles_main__1rTEz styles_primary__3XxmD "
                    to="https://app.liquid.com/settings/security"
                  >
                    Enable 2FA Now
                  </Link>
                </div>
              </div>
            </div>
            <hr className="styles_line__1Z7ek" />
            <div className="SettingsField2_field__rOv6D undefined">
              <span className="SettingsField2_label__2mWfS">Joined Since</span>
              <p className="SettingsField2_value__1lnL2 ">
                <span
                  className="styles_main__3xY0A"
                  id="profile--since"
                  data-value="1602345248"
                >
                  20/10/10
                </span>
              </p>
            </div>
            <hr className="styles_line__1Z7ek" />
            <div className="SettingsField2_field__rOv6D undefined">
              <span className="SettingsField2_label__2mWfS">Type</span>
              <p className="SettingsField2_value__1lnL2 ">
                <span id="profile--type" data-value="individual">
                  Personal
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Profile;
