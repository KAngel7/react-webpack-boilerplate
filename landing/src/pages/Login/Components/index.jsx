/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { EyeIcon, CloseEyeIcon } from './Icons';
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

export const InputTfa = props => {
  const { inputRef, errors } = props;
  return (
    <div value className={`${style.inputGroup}`}>
      <div className={`${style.labelWrapper}`}>
        <div className={`${style.label}`}>Mã 2FA</div>
      </div>
      <div className={`${style.inputContainer}`}>
        <div
          className={`${style.inputWrapper} ${errors.tfa ? style.error : ''}`}
        >
          <input
            autoComplete="2FA"
            type="string"
            name="tfaCode"
            className={`${style.input} `}
            ref={inputRef}
          />
        </div>
      </div>
      <div className={`${style.helper}`}>
        {errors.tfa && errors.tfa.message}
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
  );
};
