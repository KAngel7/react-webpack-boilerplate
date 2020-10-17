import React, { useEffect, useState, useRef } from 'react';
import Modal from 'react-modal';
import { genTfa, verifyTfa } from '../../../services/apiv1/user';

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

const TFAModal = () => {
  const [tfa, setTfa] = useState({});
  const [copySuccess, setCopySuccess] = useState('');
  const [step, setStep] = useState(1);
  const [tfaCode, setTfaCode] = useState('');
  const getTfa = async () => {
    const { status, data } = await genTfa();
    if (status === 200) {
      setTfa(data);
    }
  };
  useEffect(() => {
    getTfa();
  }, []);
  const textAreaRef = useRef(null);
  const copySecret = e => {
    textAreaRef.current.select();
    document.execCommand('copy');
    // This is just personal preference.
    // I prefer to not show the whole text area selected.
    e.target.focus();
    setCopySuccess('Đã sao chép!');
  };
  const enableTfa = async () => {
    const { status, data } = await verifyTfa(tfaCode, tfa.secret);
    if (status === 200) {
      console.log(data);
    }
  };
  return (
    <Modal isOpen style={customStyles} className="styles_main__1qI1c">
      {step === 1 ? (
        <div>
          <div className="styles_header__207Dh">
            <h2>Let&apos;s Setup 2FA Authentication</h2>
          </div>
          <div className="styles_body__2jyaf">
            <div className="styles_step__2KGV2">
              <div className="styles_stepIndex__1GbH0">
                <h3>1</h3>
                <div className="styles_line__3szx5"></div>
              </div>
              <div className="styles_stepContent__2NgDn">
                <p>Install Google Authenticator</p>
                <p>
                  Follow the instructions below to set up 2FA and unlock a basic
                  account:
                </p>
                <div>
                  <a
                    href="https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg width="132" height="44" viewBox="0 0 132 44">
                      <defs>
                        <linearGradient
                          id="a"
                          x1="91.488%"
                          x2="-38.352%"
                          y1="4.948%"
                          y2="71.907%"
                        >
                          <stop offset="0%" stopColor="#00A0FF"></stop>
                          <stop offset="1%" stopColor="#00A1FF"></stop>
                          <stop offset="26%" stopColor="#00BEFF"></stop>
                          <stop offset="51%" stopColor="#00D2FF"></stop>
                          <stop offset="76%" stopColor="#00DFFF"></stop>
                          <stop offset="100%" stopColor="#00E3FF"></stop>
                        </linearGradient>
                        <linearGradient
                          id="b"
                          x1="107.685%"
                          x2="-130.64%"
                          y1="50%"
                          y2="50%"
                        >
                          <stop offset="0%" stopColor="#FFE000"></stop>
                          <stop offset="41%" stopColor="#FFBD00"></stop>
                          <stop offset="78%" stopColor="#FFA500"></stop>
                          <stop offset="100%" stopColor="#FF9C00"></stop>
                        </linearGradient>
                        <linearGradient
                          id="c"
                          x1="86.219%"
                          x2="-50.15%"
                          y1="17.877%"
                          y2="194.703%"
                        >
                          <stop offset="0%" stopColor="#FF3A44"></stop>
                          <stop offset="100%" stopColor="#C31162"></stop>
                        </linearGradient>
                        <linearGradient
                          id="d"
                          x1="-18.754%"
                          x2="42.121%"
                          y1="-54.052%"
                          y2="24.917%"
                        >
                          <stop offset="0%" stopColor="#32A071"></stop>
                          <stop offset="7%" stopColor="#2DA771"></stop>
                          <stop offset="48%" stopColor="#15CF74"></stop>
                          <stop offset="80%" stopColor="#06E775"></stop>
                          <stop offset="100%" stopColor="#00F076"></stop>
                        </linearGradient>
                      </defs>
                      <g fill="none" fillRule="nonzero">
                        <rect
                          width="var(--background)"
                          height="44"
                          fill="#00145C"
                          opacity="0.5"
                          rx="9"
                        ></rect>
                        <path
                          fill="#344D7C"
                          fillOpacity="0.7"
                          d="M126.479.88c2.256 0 4.086 2.068 4.086 4.62v33c0 2.552-1.83 4.62-4.086 4.62H4.865c-2.257 0-4.087-2.068-4.087-4.62v-33c0-2.552 1.83-4.62 4.087-4.62h121.614zm0-.88H4.865C2.178 0 0 2.462 0 5.5v33C0 41.538 2.178 44 4.865 44h121.614c2.686 0 4.864-2.462 4.864-5.5v-33c0-3.038-2.178-5.5-4.864-5.5z"
                        ></path>
                        <path
                          fill="var(--stroke)"
                          d="M66.294 23.131a4.135 4.135 0 1 0 4.155 4.135 4.077 4.077 0 0 0-4.155-4.135zm0 6.645a2.51 2.51 0 1 1 2.335-2.51 2.393 2.393 0 0 1-2.335 2.51zm-9.058-6.645a4.135 4.135 0 1 0 4.145 4.135 4.077 4.077 0 0 0-4.154-4.135h.01zm0 6.645a2.51 2.51 0 1 1 2.326-2.51 2.393 2.393 0 0 1-2.335 2.51h.01zm-10.79-5.37v1.75h4.204a3.668 3.668 0 0 1-.973 2.21 4.3 4.3 0 0 1-3.24 1.284 4.67 4.67 0 1 1 0-9.34 4.475 4.475 0 0 1 3.182 1.255l1.235-1.236a6.12 6.12 0 0 0-4.407-1.82 6.431 6.431 0 1 0 0 12.853 5.837 5.837 0 0 0 4.485-1.8 5.837 5.837 0 0 0 1.518-4.106 5.711 5.711 0 0 0-.098-1.1l-5.905.05zm44.084 1.362a3.892 3.892 0 0 0-3.542-2.637 3.892 3.892 0 0 0-3.891 4.135 4.047 4.047 0 0 0 4.105 4.135 4.115 4.115 0 0 0 3.444-1.83l-1.41-.972a2.364 2.364 0 0 1-2.034 1.148 2.101 2.101 0 0 1-2.004-1.255l5.536-2.287-.204-.437zm-5.643 1.381a2.267 2.267 0 0 1 2.16-2.413 1.605 1.605 0 0 1 1.537.876l-3.697 1.537zm-4.495 4.009h1.82V18.996h-1.82v12.162zm-2.977-7.103h-.068a2.919 2.919 0 0 0-2.18-.973 4.145 4.145 0 0 0 0 8.28 2.821 2.821 0 0 0 2.18-.973h.058v.593c0 1.586-.846 2.433-2.209 2.433a2.286 2.286 0 0 1-2.082-1.47l-1.585.662a3.94 3.94 0 0 0 3.667 2.442c2.131 0 3.892-1.255 3.892-4.31v-7.365h-1.673v.681zm-2.082 5.721a2.52 2.52 0 0 1 0-5.02 2.335 2.335 0 0 1 2.208 2.51 2.316 2.316 0 0 1-2.218 2.51h.01zm23.72-10.78h-4.35v12.162h1.82v-4.612h2.539a3.785 3.785 0 1 0 0-7.55h-.01zm0 5.838h-2.54v-4.145h2.578a2.087 2.087 0 0 1 0 4.174l-.039-.03zm11.217-1.752a3.405 3.405 0 0 0-3.24 1.859l1.615.67c.326-.599.974-.95 1.654-.894a1.751 1.751 0 0 1 1.946 1.566v.127a4.018 4.018 0 0 0-1.897-.467c-1.742 0-3.503.973-3.503 2.734a2.812 2.812 0 0 0 3.016 2.675 2.559 2.559 0 0 0 2.335-1.167h.059v.973h1.751v-4.68c0-2.13-1.615-3.366-3.687-3.366l-.049-.03zm-.224 6.665c-.593 0-1.42-.302-1.42-1.031 0-.973 1.031-1.294 1.946-1.294a3.23 3.23 0 0 1 1.654.408 2.199 2.199 0 0 1-2.131 1.946l-.049-.03zm10.342-6.373l-2.082 5.273h-.058l-2.16-5.273h-1.946l3.24 7.375-1.849 4.096h1.898l4.98-11.47h-2.023zm-16.354 7.784h1.819V18.996h-1.82v12.162z"
                        ></path>
                        <path
                          fill="var(--stroke)"
                          stroke="var(--stroke)"
                          strokeWidth="0.2"
                          d="M46.136 11.933a2.637 2.637 0 0 1-.73 1.946 2.831 2.831 0 0 1-2.14.865 3.065 3.065 0 0 1-2.15-5.224 2.919 2.919 0 0 1 2.15-.876c.41-.001.818.082 1.196.244.352.142.666.365.915.651l-.516.516a1.946 1.946 0 0 0-1.596-.69A2.257 2.257 0 0 0 41 11.698a2.296 2.296 0 0 0 3.891 1.683c.3-.324.472-.745.487-1.187h-2.112v-.7h2.832c.026.144.039.291.039.438zM50.59 9.5h-2.626v1.849h2.393v.7h-2.393v1.85h2.626v.719h-3.405V8.781h3.405v.72zm3.192 5.118h-.75V9.5H51.4v-.72h4.057v.72h-1.673v5.118zm4.533 0V8.781h.75v5.837h-.75zm4.077 0h-.75V9.5H60.01v-.72h4.009v.72h-1.625v5.118zm9.223-.759a3.035 3.035 0 0 1-4.28 0 3.152 3.152 0 0 1 0-4.33 3.016 3.016 0 0 1 4.28 0 3.143 3.143 0 0 1 0 4.33zm-3.726-.486a2.247 2.247 0 0 0 3.172 0 2.49 2.49 0 0 0 0-3.347 2.247 2.247 0 0 0-3.172 0 2.49 2.49 0 0 0 0 3.347zm5.643 1.245V8.781h.914l2.841 4.543V8.781h.75v5.837h-.779L74.292 9.86v4.758h-.76z"
                        ></path>
                        <path
                          fill="url(#a)"
                          d="M1.401.525c-.317.38-.477.868-.448 1.362v21.521c-.03.495.13.982.448 1.362l.068.068 12.054-12.044v-.282L1.47.457l-.068.068z"
                          transform="translate(8.756 8.78)"
                        ></path>
                        <path
                          fill="url(#b)"
                          d="M17.512 16.812l-3.989-4.018v-.282l3.99-4.028.087.048 4.777 2.715c1.362.768 1.362 2.033 0 2.812l-4.758 2.704-.107.049z"
                          transform="translate(8.756 8.78)"
                        ></path>
                        <path
                          fill="url(#c)"
                          d="M17.63 16.754l-4.107-4.106L1.401 24.77a1.586 1.586 0 0 0 2.024.059l14.214-8.075"
                          transform="translate(8.756 8.78)"
                        ></path>
                        <path
                          fill="url(#d)"
                          d="M17.63 8.542L3.414.467c-.6-.47-1.451-.445-2.024.058l12.132 12.123 4.106-4.106z"
                          transform="translate(8.756 8.78)"
                        ></path>
                        <path
                          fill="#000"
                          d="M26.269 25.447L12.17 33.473a1.625 1.625 0 0 1-1.946 0l-.068.068.068.068c.576.435 1.37.435 1.946 0l14.214-8.075-.116-.087z"
                          opacity="0.2"
                        ></path>
                        <path
                          fill="#000"
                          d="M10.157 33.415a1.946 1.946 0 0 1-.447-1.362v.146c-.03.494.13.981.447 1.362l.068-.068-.068-.078zm20.976-10.722l-4.864 2.754.087.087 4.777-2.705c.552-.259.923-.793.973-1.4a1.81 1.81 0 0 1-.973 1.264z"
                          opacity="0.12"
                        ></path>
                        <path
                          fill="var(--stroke)"
                          d="M12.171 9.384l18.962 10.78c.503.248.862.715.973 1.264a1.703 1.703 0 0 0-.973-1.4L12.171 9.247C10.81 8.478 9.7 9.12 9.7 10.678v.146c.03-1.567 1.119-2.209 2.471-1.44z"
                          opacity="0.25"
                        ></path>
                      </g>
                    </svg>
                  </a>
                  <a
                    href="https://itunes.apple.com/us/app/google-authenticator/id388497605?mt=8"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg width="132" height="44" viewBox="0 0 132 44">
                      <g fill="none" fillRule="nonzero">
                        <g transform="translate(.104)">
                          <rect
                            width="131.343"
                            height="44"
                            fill="var(--background)"
                            opacity="0.5"
                            rx="9"
                          ></rect>
                          <path
                            fill="#344D7C"
                            d="M126.479.88c2.256 0 4.086 2.068 4.086 4.62v33c0 2.552-1.83 4.62-4.086 4.62H4.865c-2.257 0-4.087-2.068-4.087-4.62v-33c0-2.552 1.83-4.62 4.087-4.62h121.614zm0-.88H4.865C2.178 0 0 2.462 0 5.5v33C0 41.538 2.178 44 4.865 44h121.614c2.686 0 4.864-2.462 4.864-5.5v-33c0-3.038-2.178-5.5-4.864-5.5z"
                            opacity="0.7"
                          ></path>
                        </g>
                        <g fill="var(--stroke)">
                          <path d="M46.157 28.533h-5.181l-1.244 3.674h-2.195l4.908-13.592h2.28l4.907 13.592H47.4l-1.243-3.674zm-4.645-1.695h4.107l-2.024-5.963h-.057l-2.026 5.963zm18.718.414c0 3.08-1.649 5.058-4.136 5.058a3.36 3.36 0 0 1-3.118-1.734h-.047v4.909h-2.034V22.297h1.969v1.648h.037a3.515 3.515 0 0 1 3.156-1.752c2.515 0 4.173 1.988 4.173 5.06zm-2.091 0c0-2.006-1.037-3.325-2.619-3.325-1.554 0-2.6 1.347-2.6 3.325 0 1.997 1.046 3.334 2.6 3.334 1.582 0 2.619-1.31 2.619-3.334zm12.997 0c0 3.08-1.648 5.058-4.135 5.058a3.36 3.36 0 0 1-3.118-1.734h-.047v4.909h-2.034V22.297h1.969v1.648h.037a3.515 3.515 0 0 1 3.155-1.752c2.515 0 4.173 1.988 4.173 5.06zm-4.71-3.325c-1.553 0-2.599 1.347-2.599 3.325 0 1.997 1.046 3.334 2.6 3.334 1.582 0 2.619-1.31 2.619-3.334 0-2.006-1.037-3.325-2.62-3.325zm11.919 4.493c.15 1.347 1.46 2.232 3.25 2.232 1.714 0 2.947-.885 2.947-2.1 0-1.055-.744-1.687-2.505-2.12l-1.762-.424c-2.496-.603-3.654-1.77-3.654-3.664 0-2.345 2.043-3.956 4.945-3.956 2.872 0 4.841 1.61 4.908 3.956H84.42c-.123-1.356-1.244-2.175-2.882-2.175-1.64 0-2.76.828-2.76 2.034 0 .96.716 1.526 2.468 1.96l1.497.367c2.789.66 3.948 1.78 3.948 3.768 0 2.542-2.026 4.135-5.248 4.135-3.014 0-5.049-1.555-5.18-4.014h2.082zm12.735-8.468v2.345h1.885v1.61H91.08v5.464c0 .848.378 1.244 1.206 1.244.224-.004.447-.02.67-.047v1.601c-.373.07-.752.101-1.13.094-2.007 0-2.79-.753-2.79-2.675v-5.68h-1.44v-1.611h1.44v-2.345h2.044zm2.976 7.3c0-3.118 1.837-5.077 4.7-5.077 2.873 0 4.701 1.96 4.701 5.077 0 3.127-1.818 5.077-4.7 5.077-2.883 0-4.7-1.95-4.7-5.077zm4.7-3.4c-1.648 0-2.627 1.271-2.627 3.4 0 2.148.979 3.4 2.627 3.4 1.648 0 2.628-1.252 2.628-3.4 0-2.139-.98-3.4-2.628-3.4zm6.378-1.555h1.94v1.687h.047a2.364 2.364 0 0 1 2.384-1.79c.234-.002.468.024.697.075v1.903a2.844 2.844 0 0 0-.914-.123 2.05 2.05 0 0 0-2.12 2.28v5.878h-2.034v-9.91zm14.446 6.999c-.274 1.799-2.026 3.033-4.267 3.033-2.883 0-4.672-1.931-4.672-5.03 0-3.108 1.799-5.124 4.586-5.124 2.742 0 4.466 1.883 4.466 4.888v.697h-6.999v.123a2.58 2.58 0 0 0 2.666 2.807 2.242 2.242 0 0 0 2.288-1.394h1.932zm-1.922-2.958a2.383 2.383 0 0 0-2.43-2.515 2.509 2.509 0 0 0-2.524 2.515h4.954zM41.21 8.202a2.89 2.89 0 0 1 3.073 3.245c0 2.087-1.128 3.286-3.073 3.286h-2.36v-6.53h2.36zm-1.345 5.608h1.231a2.053 2.053 0 0 0 2.154-2.35 2.059 2.059 0 0 0-2.154-2.335h-1.23v4.685zm5.564-1.543a2.335 2.335 0 1 1 4.648 0 2.335 2.335 0 1 1-4.648 0zm2.325-1.693c-.845 0-1.32.624-1.32 1.693 0 1.077.475 1.697 1.32 1.697.843 0 1.323-.625 1.323-1.697 0-1.069-.48-1.693-1.323-1.693zm8.502 4.16h-1.009l-1.018-3.63h-.077l-1.015 3.63h-1l-1.358-4.93h.987l.883 3.761h.073l1.013-3.76h.933l1.013 3.76h.077l.879-3.76h.972l-1.353 4.928zm2.496-4.93h.936v.784h.073c.253-.577.844-.93 1.47-.879a1.603 1.603 0 0 1 1.707 1.834v3.19h-.973v-2.946c0-.792-.344-1.186-1.063-1.186a1.13 1.13 0 0 0-1.177 1.249v2.883h-.973V9.805zm5.736-1.923h.972v6.852h-.972V7.881zm3.418 2.18a2.335 2.335 0 0 1 3.556 2.206 2.336 2.336 0 1 1-4.65 0 2.335 2.335 0 0 1 1.094-2.207zm1.232.513c-.845 0-1.32.624-1.32 1.693 0 1.077.475 1.697 1.32 1.697.843 0 1.323-.625 1.323-1.697 0-1.069-.48-1.693-1.323-1.693zm5.18 1.294l1.336-.077v-.425c0-.52-.344-.815-1.01-.815-.542 0-.919.2-1.027.548h-.941c.1-.847.896-1.39 2.014-1.39 1.235 0 1.932.616 1.932 1.657v3.367h-.936v-.692h-.077a1.658 1.658 0 0 1-1.48.773 1.489 1.489 0 0 1-1.643-1.475c0-.887.66-1.398 1.833-1.471zm1.336 1.05v-.412l-1.204.077c-.679.046-.986.276-.986.71 0 .445.384.703.913.703a1.162 1.162 0 0 0 1.277-1.078zm2.246-.651c0-1.558.801-2.544 2.046-2.544a1.624 1.624 0 0 1 1.512.864h.072V7.881h.973v6.852h-.932v-.779h-.077a1.71 1.71 0 0 1-1.548.86c-1.253 0-2.046-.986-2.046-2.547zm2.322 1.674c.82 0 1.327-.638 1.327-1.67 0-1.027-.512-1.674-1.327-1.674-.819 0-1.317.633-1.317 1.67 0 1.045.493 1.674 1.317 1.674zm7.398-3.88a2.335 2.335 0 0 1 3.556 2.206 2.335 2.335 0 1 1-4.649 0 2.335 2.335 0 0 1 1.093-2.207zm2.555 2.206c0-1.069-.48-1.693-1.322-1.693-.845 0-1.32.624-1.32 1.693 0 1.077.475 1.697 1.32 1.697.842 0 1.322-.625 1.322-1.697zm2.306-2.462h.936v.783h.073c.253-.577.843-.93 1.47-.879a1.603 1.603 0 0 1 1.707 1.834v3.19h-.973v-2.946c0-.792-.344-1.186-1.064-1.186a1.13 1.13 0 0 0-1.176 1.249v2.883h-.973V9.805zm9.682-1.227v1.249h1.068v.82h-1.068v2.534c0 .516.213.742.697.742.124 0 .248-.008.37-.022v.81a3.191 3.191 0 0 1-.528.05c-1.082 0-1.513-.381-1.513-1.331v-2.784h-.782v-.819h.782v-1.25h.974zm2.396-.697h.964v2.716h.077a1.517 1.517 0 0 1 1.503-.883 1.624 1.624 0 0 1 1.698 1.837v3.182h-.974v-2.942c0-.787-.367-1.186-1.054-1.186a1.151 1.151 0 0 0-1.241 1.25v2.878h-.973V7.881zm9.913 5.521a2 2 0 0 1-2.136 1.426 2.239 2.239 0 0 1-2.276-2.544 2.273 2.273 0 0 1 2.272-2.575c1.371 0 2.199.937 2.199 2.485v.34h-3.48v.054A1.303 1.303 0 0 0 112.363 14c.476.057.94-.179 1.173-.598h.936zm-.932-1.588a1.19 1.19 0 0 0-1.213-1.277 1.26 1.26 0 0 0-1.276 1.277h2.489zM29.387 16.668a5.545 5.545 0 0 0-4.368-2.362c-1.838-.193-3.62 1.1-4.557 1.1-.954 0-2.396-1.08-3.95-1.049a5.818 5.818 0 0 0-4.895 2.986c-2.117 3.665-.538 9.051 1.49 12.014 1.015 1.45 2.2 3.07 3.752 3.013 1.518-.063 2.085-.968 3.917-.968 1.816 0 2.348.968 3.93.932 1.63-.027 2.656-1.457 3.635-2.922a11.998 11.998 0 0 0 1.662-3.385 5.234 5.234 0 0 1-3.195-4.815 5.417 5.417 0 0 1 2.58-4.544zm-4.349-8.13a5.426 5.426 0 0 0-3.51 1.816 5.075 5.075 0 0 0-1.253 3.679 4.487 4.487 0 0 0 3.543-1.675 5.333 5.333 0 0 0 1.22-3.82z"></path>
                        </g>
                      </g>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="styles_step__2KGV2">
              <div className="styles_stepIndex__1GbH0">
                <h3>2</h3>
                <div className=""></div>
              </div>
              <div className="styles_stepContent__2NgDn">
                <p>Back up your secret code</p>
                <p>
                  Please write down or print a copy of the 16-digit secret code
                  and put it in a safe place
                </p>
              </div>
            </div>
            <div className="styles_step__2KGV2">
              <div className="styles_stepIndex__1GbH0">
                <h3>3</h3>
                <div className="styles_line__3szx5"></div>
              </div>
              <div className="styles_stepContent__2NgDn">
                <p>Scan QR Code with Google Authenticator</p>
                <p>
                  Scan the QR code or enter the private key with Google
                  Authenticator app.
                </p>
              </div>
            </div>
            {tfa.image && (
              <>
                <div className="styles_code__2CWv5">
                  <div>
                    <img
                      id="tfa-manage--tfaModal--qr"
                      alt="tfa-manage--tfaModal--qr"
                      src={`data:image/jpeg;base64,${tfa.image}`}
                    />
                  </div>
                  <div>
                    Authenticator secret code
                    {copySuccess && <span> ({copySuccess})</span>}
                  </div>
                  <div className="styles_codeTextBox__3H1tw">
                    <input
                      type="text"
                      readOnly=""
                      value={tfa.secret}
                      ref={textAreaRef}
                    />
                    <button className="" type="button" onClick={copySecret}>
                      <svg width="19" height="22">
                        <path
                          d="M14 0H2C.9 0 0 .9 0 2v14h2V2h12V0zm3 4H6c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H6V6h11v14z"
                          fill="currentColor"
                          fillRule="nonzero"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </div>
                <button
                  id="tfa-manage--tfaModal--next"
                  className="styles_main__1rTEz styles_primary__3XxmD styles_large__3mDiO styles_submit__1QtWP"
                  type="button"
                  onClick={() => setStep(2)}
                >
                  Tiếp tục
                </button>
              </>
            )}
          </div>
        </div>
      ) : (
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
          <h1>Enter the 2-step verification code</h1>
          <p>
            Enter the 2-step verification code provided by Google Authenticator.
          </p>
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
                  required=""
                  autoComplete="off"
                  label="2FA Code"
                  onChange={e => setTfaCode(e.currentTarget.value)}
                  value={tfaCode}
                ></input>
              </div>
            </div>
          </div>
          <p className="styles_error__1RpBK"></p>
          <button
            id="tfa-manage--tfaModal--submit"
            className="styles_main__1rTEz styles_primary__3XxmD styles_large__3mDiO styles_main__drfz7 false "
            disabled={!tfaCode}
            type="button"
            onClick={enableTfa}
          >
            <div className="">Bật 2FA</div>
          </button>
        </div>
      )}
    </Modal>
  );
};

export default TFAModal;
