import React, { useState } from 'react';
import Modal from 'react-modal';
import { disableTfa } from '../../../services/apiv1/user';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

// eslint-disable-next-line react/prop-types
const TfaModal = ({ onClose }) => {
  const [tfaCode, setTfaCode] = useState('');
  const [password, setPassword] = useState('');
  const [errorString, setErrorString] = useState('');

  const turnoffTfa = async () => {
    try {
      const { status } = await disableTfa(tfaCode, password);
      if (status === 200) {
        onClose();
        window.location.replace('/settings/profile');
      }
    } catch (ex) {
      if (ex.response) {
        const { data } = ex.response;
        setErrorString(data.message);
      } else {
        setErrorString("Something's wrong");
      }
    }
  };
  return (
    <Modal isOpen style={customStyles} className="styles_main__1qI1c">
      <button className="styles_close__23uXs" type="button" onClick={onClose}>
        ✖
      </button>
      <div className="styles_main__3WeTe">
        <svg width="52" height="61">
          <g
            stroke="#2A9FF8"
            fill="none"
            fillRule="evenodd"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M31.5 51.5l6 6 14-14M19.5 6.5h4M.5 12.5h42M.5 44.5h28"></path>
            <path d="M29.5 60.5h-25a4 4 0 0 1-4-4v-52a4 4 0 0 1 4-4h34a4 4 0 0 1 4 4v33"></path>
          </g>
        </svg>
        <h1>Tắt 2FA</h1>
        <p>{}</p>
        <div>
          <div className="SettingsInputText_main__4Qwss SettingsInputText_nofocus__3a2Ee">
            <span
              role="button"
              tabIndex="-1"
              className="SettingsInputText_label__cX68F  "
            >
              Mã 2FA:
            </span>
            <div className="styles_main__1kADm ">
              <input
                className=" styles_input__1STjS"
                id="tfa-manage--tfaModal--2facode"
                type="text"
                required
                autoComplete="off"
                label="2FA Code"
                onChange={e => setTfaCode(e.currentTarget.value)}
                value={tfaCode}
              />
            </div>
          </div>
          <div className="SettingsInputText_main__4Qwss SettingsInputText_nofocus__3a2Ee">
            <span
              role="button"
              tabIndex="-1"
              className="SettingsInputText_label__cX68F  "
            >
              Nhập mật khẩu đăng nhập
            </span>
            <div className="styles_main__1kADm ">
              <input
                className=" styles_input__1STjS"
                id="tfa-manage--tfaModal--2facode"
                type="password"
                required
                autoComplete="off"
                label="2FA Code"
                onChange={e => setPassword(e.currentTarget.value)}
                value={password}
              />
            </div>
          </div>
        </div>
        <p className="styles_error__1RpBK">{errorString}</p>
        <button
          id="tfa-manage--tfaModal--submit"
          className="styles_main__1rTEz styles_primary__3XxmD styles_large__3mDiO styles_main__drfz7 false "
          disabled={!tfaCode || !password}
          type="button"
          onClick={turnoffTfa}
        >
          <div className="">Tắt 2FA</div>
        </button>
      </div>
    </Modal>
  );
};

export default TfaModal;
