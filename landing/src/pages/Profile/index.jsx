import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { AuthContext } from '../../services/context';
import TfaModal from './TfaModal';
import DisableTfaModal from './DisableTfaModal';
import './style';

const Profile = () => {
  const { authenticated, user } = useContext(AuthContext);
  if (!authenticated) {
    return null;
  }
  const initialTfa = window.location.search === '?tfa=true';
  const [showTFA, setShowTFA] = useState(initialTfa);
  const [showDisableTFA, setShowDisableTFA] = useState(false);
  return (
    <>
      <Header />
      <link type="text/css" href="/css/deposits.css" rel="stylesheet" />
      <div className="styles_container__2kE2g Settings_main__1T00C">
        <div className="Settings_title__1AnJK" />
        <div className="Settings_body__1dyzZ">
          <div className="SettingsHeader_main__1LlAP">
            <h4>Thông tin tài khoản</h4>
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
                <p className="ProfileAvatar_title__Uw3gF">Ảnh đại diện</p>
                <Link
                  id="profile--button"
                  className="ProfileAvatar_update__3JS-o"
                  to="#"
                  rel="noopener noreferrer"
                >
                  Cập nhật
                </Link>
                <hr className="styles_line__1Z7ek" />
                <div className="SettingsField2_field__rOv6D ProfileAvatar_field__bJyq6">
                  <span className="SettingsField2_label__2mWfS">Họ và tên</span>
                  <p className="SettingsField2_value__1lnL2 ">{`${user.first_name} ${user.last_name}`}</p>
                </div>
                <hr className="styles_line__1Z7ek" />
                <div className="SettingsField2_field__rOv6D ProfileAvatar_field__bJyq6">
                  <span className="SettingsField2_label__2mWfS">
                    Địa chỉ email
                  </span>
                  <p className="SettingsField2_value__1lnL2 ">{user.email}</p>
                </div>
                {/* <div className="SettingsField2_field__rOv6D undefined">
                  <span className="SettingsField2_label__2mWfS">
                    ID người dùng
                  </span>
                  <p className="SettingsField2_value__1lnL2 ">816434</p>
                </div> */}
              </div>
              <div className="styles_col-md-6__2EhLs ">
                <p className="KYCVerify_verify__3RZse">
                  Trạng thái &amp; Bảo mật
                </p>
                <div
                  id="profile--status"
                  data-value="pending"
                  className="KYCStatus_main__xI6_H"
                >
                  <div className="KYCStatus_note__NfG0D">
                    <span className="styles_primary-3__1vvdt">
                      <span className="KYCStatus_status__66R1g">
                        Trạng thái tài khoản
                      </span>
                      <span>: </span>
                    </span>
                    <span
                      className={
                        user.status === 'ACTIVATED'
                          ? 'KYCStatus_approved__2Xk2K'
                          : 'KYCStatus_pending__yMB23'
                      }
                    >
                      <span className="KYCStatus_title__3TtYK">
                        {user.status}
                      </span>
                    </span>
                    {user.status !== 'ACTIVATED' && (
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
                    )}
                  </div>
                  <span className="styles_primary-3__1vvdt">
                    <p>
                      <span>{}</span>
                    </p>
                  </span>
                </div>
                {user.enable_tfa ? (
                  <div>
                    <p className="KYCVerify_tfaDisabled__2A-p8">
                      Trạng thái 2FA: Đang bật
                    </p>
                    <button
                      type="button"
                      id="profile--2fa"
                      className="styles_main__1rTEz styles_secondary__2Gxp8 "
                      to="#"
                      onClick={() => setShowDisableTFA(true)}
                    >
                      Tắt 2FA
                    </button>
                  </div>
                ) : (
                  <div>
                    <p className="KYCVerify_tfaDisabled__2A-p8">
                      Bạn đang chưa bật bảo mật 2FA, hãy bật 2FA để bảo vệ tài
                      khoản của bạn tốt hơn
                    </p>
                    <button
                      type="button"
                      id="profile--2fa"
                      className="styles_main__1rTEz styles_primary__3XxmD "
                      to="#"
                      onClick={() => setShowTFA(true)}
                    >
                      Bật 2FA ngay
                    </button>
                  </div>
                )}
              </div>
            </div>
            {/* <hr className="styles_line__1Z7ek" />
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
            </div> */}
            <hr className="styles_line__1Z7ek" />
            <div className="SettingsField2_field__rOv6D undefined">
              <span className="SettingsField2_label__2mWfS">
                Loại tài khoản
              </span>
              <p className="SettingsField2_value__1lnL2 ">
                <span id="profile--type" data-value="individual">
                  Cá nhân
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      {showTFA && <TfaModal onClose={() => setShowTFA(false)} />}
      {showDisableTFA && (
        <DisableTfaModal onClose={() => setShowDisableTFA(false)} />
      )}
      <Footer />
    </>
  );
};

export default Profile;
