import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Header from '../../components/Header';
import { signUp } from '../../services/apiv1/user';
import style from './style.scss';

import {
  InputEmail,
  InputPassword,
  InputFirstName,
  InputLastName,
} from './Components';

const Register = () => {
  const { handleSubmit, register, errors, reset } = useForm({
    mode: 'all',
  });
  const [errorString, setErrorString] = useState('');
  const [ableToSubmit, setAbleToSubmit] = useState(false);

  const onSubmit = async values => {
    const { firstName, lastName, email, password } = values;
    try {
      const { status } = await signUp(email, password, firstName, lastName);
      if (status === 200) {
        window.location = '/login';
      }
    } catch (ex) {
      if (ex.response) {
        const { data } = ex.response;
        setErrorString(data.message);
      }
    }
    reset(
      {
        email: '',
        password: '',
        firstName: '',
        lastName: '',
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
                <div className={`${style.errorHelper}`}>{errorString}</div>
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  noValidate
                  autoComplete="off"
                >
                  <div className="css-hlfj64">
                    <InputFirstName
                      inputRef={register({
                        required: 'Vui lòng nhập tên của bạn',
                      })}
                      errors={errors}
                    />
                    <InputLastName
                      inputRef={register({
                        required: 'Hãy nhập họ của bạn',
                      })}
                      errors={errors}
                    />
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
                        pattern: {
                          value: /^((?=.*\d)(?=.*[A-Z]).{8,})$/,
                          message: 'Mật khẩu không đúng định dạng',
                        },
                      })}
                      errors={errors}
                    />
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
                              checked={ableToSubmit}
                              onChange={e => {
                                setAbleToSubmit(e.target.checked);
                              }}
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
                    disabled={!ableToSubmit}
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
