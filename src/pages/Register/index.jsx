import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import { register } from '../../services/apiv1/user';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const handleSubmitRegister = async () => {
    const { status } = await register(email, password, firstName, lastName);
    if (status === 200) {
      // todo
    }
  };
  return (
    <>
      <Header />
      <div>
        <div className="css-vwpxuw">
          <main className="css-8fbwj6">
            <div className="css-49kyll">
              <div data-bn-type="text" className="css-1lx7oj">
                <div data-bn-type="text" className="css-v2pqf8">
                  {' '}
                  Tạo tài khoản miễn phí
                </div>
                <div data-bn-type="text" className="css-glhroo">
                  Chào mừng đến với BNX
                </div>
              </div>
              <div className="css-vurnku">
                <form
                  onSubmit={e => {
                    e.preventDefault();
                    handleSubmitRegister();
                  }}
                >
                  <div className="css-hlfj64">
                    <div value className="css-15651n7">
                      <div className="css-kc8d2n">
                        <div data-bn-type="text" className="css-itrsu7">
                          Tên
                        </div>
                      </div>
                      <div className=" css-hiy16i">
                        <div className=" css-wng3sm">
                          <input
                            data-bn-type="input"
                            name="firstName"
                            className="css-1thkju"
                            value={firstName}
                            onChange={e => setFirstName(e.currentTarget.value)}
                          />
                        </div>
                      </div>
                      <div
                        data-bn-type="text"
                        className="help_default css-jiaj3x"
                      />
                    </div>

                    <div value className="css-15651n7">
                      <div className="css-kc8d2n">
                        <div data-bn-type="text" className="css-itrsu7">
                          Họ
                        </div>
                      </div>
                      <div className=" css-hiy16i">
                        <div className=" css-wng3sm">
                          <input
                            data-bn-type="input"
                            name="lastName"
                            className="css-1thkju"
                            value={lastName}
                            onChange={e => setLastName(e.currentTarget.value)}
                          />
                        </div>
                      </div>
                      <div
                        data-bn-type="text"
                        className="help_default css-jiaj3x"
                      />
                    </div>

                    <div value className="css-15651n7">
                      <div className="css-kc8d2n">
                        <div data-bn-type="text" className="css-itrsu7">
                          Email
                        </div>
                      </div>
                      <div className=" css-hiy16i">
                        <div className=" css-wng3sm">
                          <input
                            data-bn-type="input"
                            name="email"
                            className="css-1thkju"
                            value={email}
                            onChange={e => setEmail(e.currentTarget.value)}
                          />
                        </div>
                      </div>
                      <div
                        data-bn-type="text"
                        className="help_default css-jiaj3x"
                      />
                    </div>
                    <div className="css-15651n7">
                      <div className="css-kc8d2n">
                        <div data-bn-type="text" className="css-itrsu7">
                          Mật khẩu
                        </div>
                      </div>
                      <div className=" css-hiy16i">
                        <div className="css-1fymml5">
                          <div
                            className="css-1eeb0a2"
                            data-popper-reference-hidden="false"
                            data-popper-escaped="false"
                            data-popper-placement="bottom"
                            style={{
                              position: 'absolute',
                              left: '84px',
                              top: '52px',
                              transition:
                                'opacity 120ms ease-in-out 0s, transform 120ms ease-in-out 0s',
                              opacity: 0,
                              transform: 'translate3d(0px, 6px, 0px)',
                              visibility: 'hidden',
                            }}
                          >
                            <div className="css-vurnku">
                              * Tối thiểu là 8 ký tự
                              <br />* Tối thiểu 1 ký tự IN HOA
                              <br />* Tối thiểu 1 chữ số
                            </div>
                            <i className="gap-fill" />
                          </div>
                          <div className=" css-wng3sm">
                            <input
                              data-bn-type="input"
                              name="password"
                              type="password"
                              className="css-1thkju"
                              value={password}
                              onChange={e => setPassword(e.currentTarget.value)}
                            />
                            <div className="bn-input-suffix css-vurnku">
                              <div className="css-1jdwzw9">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  className="css-1d9nz27"
                                >
                                  <path
                                    d="M13.03 15.652l1.712 1.71c-.73.219-1.481.329-2.242.329a7.92 7.92 0 01-5.576-2.299L3 11.505l2.913-2.948 2.393 2.378c-.02.18-.02.35 0 .53a4.23 4.23 0 004.194 4.227c.18 0 .35-.01.53-.04zM22 11.505l-3.934-3.997A7.842 7.842 0 0012.5 5.239c-.76 0-1.511.11-2.242.33l1.712 1.699c.18-.01.35-.01.53 0a4.232 4.232 0 014.235 4.227c0 .78-.21 1.539-.621 2.199L6.434 4 5.022 5.42l11.292 11.272.71.71L18.638 19l1.411-1.41-2.102-2.088L22 11.505z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        data-bn-type="text"
                        className="help_default css-jiaj3x"
                      />
                    </div>
                    <div value className="css-15651n7">
                      <div className="css-xrxl27">
                        <div data-bn-type="text" className="css-itrsu7">
                          ID giới thiệu (không bắt buộc)
                        </div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          className="css-193gxw5"
                        >
                          <path d="M16 9v2l-4 4.24L8 11V9h8z" />
                        </svg>
                      </div>
                      <div className="hide css-hiy16i">
                        <div className=" css-wng3sm">
                          <input
                            data-bn-type="input"
                            readOnly
                            name="agentId"
                            className="css-1thkju"
                            defaultValue
                          />
                        </div>
                      </div>
                      <div
                        data-bn-type="text"
                        className="help_default css-jiaj3x"
                      />
                    </div>
                    <div className="css-xvxpe5">
                      <div className=" css-hiy16i">
                        <label
                          htmlFor="click-registration-termAndCondition"
                          className="css-1d61qm3"
                        >
                          <div className="css-s6cz5e">
                            <input
                              type="checkbox"
                              data-bn-type="checkbox"
                              hidden
                              id="click-registration-termAndCondition"
                              name="agreement"
                              className="css-p19g2b"
                              defaultValue="true"
                              defaultChecked
                            />
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              aria-hidden="true"
                              className="css-mkf9mu"
                              data-indeterminate="false"
                            >
                              <path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                            </svg>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              aria-hidden="true"
                              className="css-2s0lax"
                              data-indeterminate="false"
                            >
                              <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" />
                            </svg>
                          </div>
                          <div className="css-1yig44t">
                            Tôi đã đọc và đồng ý với Điều khoản Dịch vụ&nbsp;
                            <Link
                              to="/terms"
                              id="RegisterForm-a-termsOfUse"
                              className="css-vurnku"
                            >
                              Điều khoản của BNX
                            </Link>
                          </div>
                        </label>
                      </div>
                    </div>
                  </div>
                  <button
                    data-bn-type="button"
                    id="click-registration-submit"
                    type="submit"
                    className="css-1l5sce"
                  >
                    Tạo tài khoản
                  </button>
                </form>
                <div className="css-1t7hq76">
                  Đã đăng ký rồi?&nbsp;
                  <Link
                    data-bn-type="link"
                    id="RegisterForm-a-login"
                    className="css-13685xg"
                    to="/login"
                  >
                    Đăng nhập
                  </Link>
                </div>
                <div className="i-geetest" />
              </div>
            </div>
          </main>
          <div data-bn-type="text" className="css-1aw68ke">
            © 2020 BNX. All rights reserved
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
