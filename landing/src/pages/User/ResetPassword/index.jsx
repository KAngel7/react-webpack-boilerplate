import React from 'react';
import Header from '../../../components/Header';

const ResetPassword = () => {
  return (
    <>
      <Header />
      <div className="css-vwpxuw">
        <main className="css-8fbwj6">
          <div className="css-yqufh">
            <div data-bn-type="text" className="css-9wmh66">
              <div data-bn-type="text" className="css-v2pqf8">
                {' '}
                Đặt lại mật khẩu đăng nhập
              </div>
              <div className="css-1makqp6">
                <div className="css-160xsrp">
                  <div className="css-ausf47">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="css-1oxr1zy"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12 20c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zm0 2c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm1.012-16h-2.009v8h2.009V6zm-2.009 9.991h2.009V18h-2.009v-2.009z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <div className="css-1ajax7x">
                    Vì lí do an ninh, chức năng rút tiền sẽ bị vô hiệu hoá trong
                    vòng 24 giờ sau khi thay đổi phương thức bảo mật.
                  </div>
                </div>
              </div>
            </div>
            <div className="css-vurnku">
              <div className="css-1cwscra">
                <div className="css-1eewrf">
                  <div className="active css-74gvqa">Email</div>
                </div>
              </div>
              <div className="css-gnqbje" />
              <div className="css-1bzb8nq" />
            </div>
            <form action="#" autoComplete="off">
              <div className="css-hlfj64">
                <div value className="css-15651n7">
                  <div className="css-kc8d2n">
                    <div data-bn-type="text" className="css-itrsu7">
                      Nhập để đặt lại mật khẩu.
                    </div>
                  </div>
                  <div className=" css-hiy16i">
                    <div className=" css-wng3sm">
                      <input
                        data-bn-type="input"
                        name="email"
                        className="css-1thkju"
                      />
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
                id="forget-password-email"
                type="submit"
                className="css-1l5sce"
              >
                Tiếp
              </button>
            </form>
          </div>
          <div />
        </main>
        <div data-bn-type="text" className="css-1aw68ke">
          © 2020 BNX. All rights reserved
        </div>
      </div>
    </>
  );
};

export default ResetPassword;
