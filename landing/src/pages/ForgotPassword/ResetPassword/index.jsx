import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { resetPassword } from '../../../services/apiv1/user';
import style from './style.scss';
// eslint-disable-next-line react/prop-types
const ResetPassword = ({ email }) => {
  const { handleSubmit, register, errors } = useForm({
    mode: 'all',
  });
  const history = useHistory();
  const [errorString, setErrorString] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);
  const onSubmit = async values => {
    const { newPassword, tfaCode, token } = values;
    try {
      const { status } = await resetPassword(newPassword, token, tfaCode);
      if (status === 200) {
        setShowSuccess(true);
      }
    } catch (ex) {
      if (ex.response) {
        const { data } = ex.response;
        setErrorString(data.message);
      }
    }
  };
  return (
    <main className="css-8fbwj6">
      {!showSuccess && (
        <div className="css-yqufh">
          <div data-bn-type="text" className="css-9wmh66">
            <div data-bn-type="text" className="css-v2pqf8">
              {' '}
              Đặt lại mật khẩu đăng nhập
            </div>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="css-hlfj64">
              <div value className="css-15651n7">
                <div className="css-kc8d2n">
                  <div data-bn-type="text" className="css-itrsu7">
                    Nhập email của bạn để đặt lại mật khẩu
                  </div>
                </div>
                <div className=" css-hiy16i">
                  <div className=" css-wng3sm">
                    <input
                      data-bn-type="input"
                      name="email"
                      className="css-1thkju"
                      value={email}
                      disabled
                    />
                  </div>
                </div>
                <div data-bn-type="text" className="help_default css-jiaj3x" />
              </div>
              <div className={`${style.inputGroup}`}>
                <div className={`${style.labelWrapper}`}>
                  <div data-bn-type="text" className={`${style.label}`}>
                    Mật khẩu mới
                  </div>
                </div>
                <div className={`${style.inputContainer}`}>
                  <div className={`${style.passwordWrapper}`}>
                    <div
                      data-popper-reference-hidden="false"
                      data-popper-escaped="false"
                      data-popper-placement="bottom"
                      className={`${style.popupWrapper} ${style.popupWrapper2}`}
                    >
                      <div className={`${style.popupContent}`}>
                        * Tối thiểu là 8 ký tự
                        <br />* Tối thiểu 1 ký tự IN HOA
                        <br />* Tối thiểu 1 chữ số
                      </div>
                      <i className={`${style['gap-fill']}`} />
                    </div>
                    <div
                      className={`${style.inputWrapper} ${
                        errors.newPassword ? style.error : ''
                      }`}
                    >
                      <input
                        ref={register({
                          required: 'Hãy nhập mật khẩu của bạn',
                          pattern: {
                            value: /^((?=.*\d)(?=.*[A-Z]).{8,})$/,
                            message: 'Mật khẩu không đúng định dạng',
                          },
                        })}
                        data-bn-type="input"
                        name="newPassword"
                        type="password"
                        className={`${style.input} `}
                      />
                    </div>
                  </div>
                  <div data-bn-type="text" className={`${style.helper}`}>
                    {errors.newPassword && errors.newPassword.message}
                  </div>
                </div>
              </div>
              <div value className={`${style.inputGroup}`}>
                <div className={`${style.labelWrapper}`}>
                  <div className={`${style.label}`}>
                    Token (lấy từ email khôi phục mật khẩu)
                  </div>
                </div>
                <div className={`${style.inputContainer}`}>
                  <div
                    className={`${style.inputWrapper} ${
                      errors.token ? style.error : ''
                    }`}
                  >
                    <input
                      type="text"
                      name="token"
                      className={`${style.input} `}
                      ref={register({
                        required: 'Hãy nhập token',
                      })}
                    />
                  </div>
                </div>
                <div className={`${style.helper}`}>
                  {errors.token && errors.token.message}
                </div>
              </div>
              <div value className="css-15651n7">
                <div className="css-kc8d2n">
                  <div data-bn-type="text" className="css-itrsu7">
                    Mã 2fa (bỏ trống nếu tài khoản của bạn chưa bật)
                  </div>
                </div>
                <div className=" css-hiy16i">
                  <div className=" css-wng3sm">
                    <input
                      data-bn-type="input"
                      name="tfaCode"
                      type="text"
                      className="css-1thkju"
                      ref={register()}
                    />
                  </div>
                </div>
                <div data-bn-type="text" className="help_default css-jiaj3x" />
              </div>
            </div>
            <p className="styles_error__1RpBK">{errorString}</p>
            <button
              type="submit"
              id="forget-password-email"
              className="css-1l5sce"
            >
              Đặt lại mật khẩu
            </button>
          </form>
        </div>
      )}
      {showSuccess && (
        <div className="css-yqufh">
          <div data-bn-type="text" className="css-9wmh66">
            <div data-bn-type="text" className="css-v2pqf8">
              {' '}
              Đặt lại mật khẩu đăng nhập thành công!
            </div>
          </div>
          <button
            type="button"
            id="forget-password-email"
            className="css-1l5sce"
            onClick={() => history.push('/login')}
          >
            Trở về trang đăng nhập
          </button>
        </div>
      )}
    </main>
  );
};

export default ResetPassword;
