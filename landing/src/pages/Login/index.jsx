import React, { useContext, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Header from '../../components/Header';
import { validate, validateWithCode } from '../../services/apiv1/auth';
import { AuthContext } from '../../services/context';
import { InputEmail, InputPassword, InputTfa } from './Components';
import style from './style.scss';

const Login = () => {
  const { handleSubmit, register, errors, reset } = useForm({
    mode: 'all',
  });
  const history = useHistory();
  const [errorString, setErrorString] = useState('');
  const [showInputTfa, setShowInputTfa] = useState(false);
  const { login } = useContext(AuthContext);
  const [storeData, setStoreData] = useState({});
  const submitLogin = async values => {
    const { email, password } = values;
    try {
      const { status, data } = await validate(email, password);
      if (status === 200) {
        if (data.verify_code) {
          setStoreData({ email, password });
          setShowInputTfa(true);
          setErrorString('');
        } else {
          login(data.access_token);
          setErrorString('');
          const firstTimeLoginEmail = localStorage.getItem(
            'firstTimeLoginEmail',
          );
          if (firstTimeLoginEmail === email) {
            history.push('/settings/profile?tfa=true');
          } else {
            history.push('/');
          }
          localStorage.removeItem('firstTimeLoginEmail');
        }
      }
    } catch (ex) {
      if (ex.response) {
        const { data } = ex.response;
        setErrorString(data.message);
      } else {
        setErrorString("Something's wrong");
      }
      reset(
        {
          email: '',
          password: '',
        },
        {
          errors: true, // errors will not be reset
          dirtyFields: true, // dirtyFields will not be reset
          isDirty: true, // dirty will not be reset
          isSubmitted: false,
          touched: false,
          isValid: false,
          submitCount: false,
        },
      );
    }
  };
  const submitTfa = async values => {
    const { tfaCode } = values;
    const { email, password } = storeData;
    try {
      const { status, data } = await validateWithCode(email, password, tfaCode);
      if (status === 200) {
        login(data.access_token);
        setErrorString('');
        history.push('/');
      }
    } catch (ex) {
      if (ex.response) {
        const { data } = ex.response;
        setErrorString(data.message);
      } else {
        setErrorString("Something's wrong");
      }
      reset(
        {
          email: '',
          password: '',
          tfaCode: '',
        },
        {
          errors: true, // errors will not be reset
          dirtyFields: true, // dirtyFields will not be reset
          isDirty: true, // dirty will not be reset
          isSubmitted: false,
          touched: false,
          isValid: false,
          submitCount: false,
        },
      );
    }
  };
  return (
    <>
      <Header />
      <div className="css-vwpxuw">
        <main className="css-8fbwj6">
          <div className="css-1naf0np">
            {!showInputTfa ? (
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
                    <form onSubmit={handleSubmit(submitLogin)} noValidate>
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
                          reset={reset}
                        />
                        <InputPassword
                          inputRef={register({
                            required: 'Hãy nhập mật khẩu của bạn',
                          })}
                          errors={errors}
                          reset={reset}
                        />
                        <div className={`${style.errorHelper}`}>
                          {errorString}
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
                    to="/forgot-password"
                  >
                    Quên mật khẩu?
                  </Link>
                  <div className="css-1uwb95w">
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
            ) : (
              <div className="css-yqufh">
                <div data-bn-type="text" className="css-leflpn">
                  <div data-bn-type="text" className="css-knmrty">
                    Nhập mã 2FA
                  </div>
                </div>
                <div className="css-vurnku">
                  <div className="css-gnqbje">
                    <form onSubmit={handleSubmit(submitTfa)} noValidate>
                      <div className="css-hlfj64">
                        <InputTfa
                          inputRef={register({
                            required: 'Hãy nhập mã 2FA',
                          })}
                          errors={errors}
                          reset={reset}
                        />
                        <div className={`${style.errorHelper}`}>
                          {errorString}
                        </div>
                      </div>
                      <button
                        data-bn-type="button"
                        id="click_login_submit"
                        type="submit"
                        className="css-1l5sce"
                      >
                        Xác nhận
                      </button>
                    </form>
                  </div>
                  <div className="css-1bzb8nq" />
                </div>
              </div>
            )}
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
