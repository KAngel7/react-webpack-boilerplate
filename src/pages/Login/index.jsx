import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import { validate } from '../../services/apiv1/auth';
import { saveAuthToken } from '../../services/auth';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmitLogin = async () => {
    const { status, data } = await validate(email, password);
    if (status === 200) {
      saveAuthToken(data.access_token);
    }
  };
  return (
    <>
      <Header />
      <div className="css-vwpxuw">
        <main className="css-8fbwj6">
          <div className="css-1naf0np">
            <div className="css-yqufh">
              <div data-bn-type="text" className="css-leflpn">
                <div data-bn-type="text" className="css-knmrty">
                  Đăng nhập
                </div>
                <div data-bn-type="text" className="css-9c9luh">
                  Hãy đảm bảo rằng bạn đang truy cập URL chính xác:
                </div>
                <div data-bn-type="text" className="css-gflt22">
                  <div className="css-1ur07bk">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="css-1n28jb0"
                    >
                      <path
                        d="M16.27 10.5V8.07C16.27 5.82 14.45 4 12.2 4S8.13 5.82 8.13 8.07v2.43H6v8.94h12.43V10.5h-2.16zm-3.07 6.46h-2v-4h2v4zm1.07-6.46h-4.14V8.07c0-1.14.93-2.07 2.07-2.07 1.14 0 2.07.93 2.07 2.07v2.43z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <div dir="ltr" className="css-vurnku">
                    <span data-bn-type="text" className="css-17gij7">
                      BNX
                    </span>
                  </div>
                </div>
              </div>
              <div className="css-vurnku">
                <div className="css-gnqbje">
                  <form
                    onSubmit={e => {
                      e.preventDefault();
                      handleSubmitLogin();
                    }}
                  >
                    <div className="css-hlfj64">
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
                              autoComplete="section-email email"
                              type="email"
                              name="email"
                              value={email}
                              onChange={e => setEmail(e.currentTarget.value)}
                              className="css-1thkju"
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
                          <div className=" css-wng3sm">
                            <input
                              data-bn-type="input"
                              autoComplete="section-email current-password"
                              name="password"
                              type="password"
                              value={password}
                              onChange={e => setPassword(e.currentTarget.value)}
                              className="css-1thkju"
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
                        <div
                          data-bn-type="text"
                          className="help_default css-jiaj3x"
                        />
                      </div>
                    </div>
                    <button
                      data-bn-type="button"
                      id="click_login_submit"
                      type="submit"
                      className="css-1l5sce"
                    >
                      Đăng nhập
                    </button>
                  </form>
                </div>
                <div className="css-1bzb8nq" />
              </div>
              <div className="i-geetest" />
              <div className="css-1xks0kt">
                <Link
                  data-bn-type="link"
                  className="css-6mzef3"
                  to="/reset-password"
                >
                  Quên mật khẩu?
                </Link>
                <div className="css-1uwb95w">
                  <Link
                    data-bn-type="link"
                    target="_blank"
                    className="css-8v3e3g"
                  >
                    Quét để đăng nhập
                  </Link>
                  <Link
                    data-bn-type="link"
                    className="css-1vmx8j8"
                    to="/register"
                  >
                    Đăng ký miễn phí
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </main>
        <div data-bn-type="text" className="css-1aw68ke">
          © 2020 BNX. All rights reserved
        </div>
      </div>
    </>
  );
};

export default Login;
