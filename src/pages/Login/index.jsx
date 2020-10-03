/* eslint-disable react/prop-types */
import React from 'react';
import { useForm } from 'react-hook-form';
import Header from '../../components/Header';
import { InputEmail, InputPassword } from './Components';

// TODO: make button component, popup notification, side effect.

const Login = () => {
  const { handleSubmit, register, errors } = useForm();

  const onSubmit = data => console.log(data);

  return (
    <>
      <Header />
      <div className="css-vwpxuw">
        <main className="css-8fbwj6">
          <div className="css-1naf0np">
            <div className="css-yqufh">
              <div className="css-leflpn">
                <div className="css-knmrty">Đăng nhập</div>
              </div>
              <div className="css-vurnku">
                <div className="css-gnqbje">
                  <form onSubmit={handleSubmit(onSubmit)} noValidate>
                    <div className="css-hlfj64">
                      <InputEmail
                        inputRef={register({
                          required: 'Hãy nhập email của bạn',
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: 'Hãy nhập một địa chỉ email chính xác',
                          },
                        })}
                        errors={errors}
                      />
                      <InputPassword
                        inputRef={register({
                          required: 'Hãy nhập mật khẩu của bạn',
                        })}
                        errors={errors}
                      />
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
                <a
                  data-bn-type="link"
                  className="css-6mzef3"
                  href="/reset-password"
                >
                  Quên mật khẩu?
                </a>
                <div className="css-1uwb95w">
                  <a data-bn-type="link" target="_blank" className="css-8v3e3g">
                    Quét để đăng nhập
                  </a>
                  <a
                    data-bn-type="link"
                    className="css-1vmx8j8"
                    href="/register"
                  >
                    Đăng ký miễn phí
                  </a>
                </div>
              </div>
            </div>
          </div>
        </main>
        <div data-bn-type="text" className="css-1aw68ke">
          © 2017 - 2020 Binance.com. All rights reserved
        </div>
      </div>
    </>
  );
};

export default Login;
