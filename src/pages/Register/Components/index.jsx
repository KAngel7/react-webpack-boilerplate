/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { EyeIcon, CloseEyeIcon, DropdownIcon, UpIcon } from './Icons';
import style from './style.scss';

export const InputEmail = props => {
  const { inputRef, errors } = props;
  return (
    <div value className={`${style.inputGroup}`}>
      <div className={`${style.labelWrapper}`}>
        <div className={`${style.label}`}>Email</div>
      </div>
      <div className={`${style.inputContainer}`}>
        <div
          className={`${style.inputWrapper} ${errors.email ? style.error : ''}`}
        >
          <input
            autoComplete="email"
            type="email"
            name="email"
            className={`${style.input} `}
            ref={inputRef}
          />
        </div>
      </div>
      <div className={`${style.helper}`}>
        {errors.email && errors.email.message}
      </div>
    </div>
  );
};

export const InputPassword = props => {
  const [showPW, setShowPW] = useState(false);
  const { inputRef, errors } = props;
  return (
    <div className={`${style.inputGroup}`}>
      <div className={`${style.labelWrapper}`}>
        <div data-bn-type="text" className={`${style.label}`}>
          Mật khẩu
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
              errors.password ? style.error : ''
            }`}
          >
            <input
              ref={inputRef}
              data-bn-type="input"
              autoComplete="password current-password"
              name="password"
              type={showPW ? 'text' : 'password'}
              className={`${style.input} `}
            />
            <div className={`${style.inputSuffix}`}>
              <button
                type="button"
                className={`${style.iconWrapper}`}
                onClick={() => setShowPW(!showPW)}
              >
                {showPW ? <EyeIcon /> : <CloseEyeIcon />}
              </button>
            </div>
          </div>
        </div>
        <div data-bn-type="text" className={`${style.helper}`}>
          {errors.password && errors.password.message}
        </div>
      </div>
    </div>
  );
};

export const InputIntroducer = props => {
  const [open, setOpen] = useState(false);
  const { inputRef, errors } = props;

  return (
    <div className={`${style.inputGroup}`}>
      <div className={`${style.labelWrapper}`}>
        <button
          type="button"
          className={`${style.noBorderButton}`}
          onClick={() => setOpen(!open)}
        >
          <div data-bn-type="text" className={`${style.label}`}>
            ID giới thiệu (không bắt buộc)
          </div>
          {open ? <UpIcon /> : <DropdownIcon />}
        </button>
      </div>
      <div className={`${style.inputContainer} ${open ? '' : style.hide}`}>
        <div className={`${style.passwordWrapper}`}>
          <div
            className={`${style.inputWrapper} ${
              errors.introducer ? style.error : ''
            }`}
          >
            <input
              ref={inputRef}
              data-bn-type="input"
              autoComplete="password current-password"
              name="introducer"
              type="text"
              className={`${style.input} `}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
