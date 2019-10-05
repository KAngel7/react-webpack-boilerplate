import React from 'react';
// import style from './style.css';

const Footer = () => (
  <footer className="footer">
    <div className="footer__container">
      <ul className="footer__social-list">
        <li className="footer__social-item">
          <a href="https://twitter.com/cardconnect" rel="noopener">
            {}
          </a>
        </li>
        <li className="footer__social-item">
          <a href="https://www.linkedin.com/company/cardconnect" rel="noopener">
            {}
          </a>
        </li>
        <li className="footer__social-item"></li>
        <li className="footer__social-item">
          <a href="https://www.facebook.com/CardConnectPayments" rel="noopener">
            {}
          </a>
        </li>
        <li className="footer__social-item">
          <a
            href="https://www.youtube.com/channel/UCNWj5tmGxrN2lnmHqZo7b9A"
            rel="noopener"
          >
            {}
          </a>
        </li>
      </ul>
      <div className="footer__smallprint">
        <p>Langamon</p>
      </div>
    </div>
  </footer>
);

Footer.propTypes = {};

export default Footer;
