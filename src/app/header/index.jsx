import React from 'react';
// import style from './style.css';

const Header = () => (
  <header className="header ">
    <div className="header__container">
      <div className="header__section">
        <a href="/" className="header__nav-logo">
          <svg
            width="170"
            height="23"
            viewBox="0 0 170 23"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>CardConnect</title>
          </svg>
        </a>
        <span className="header__nav-item ml-14 md-down:hidden">Solutions</span>
        <span className="header__nav-item ml-14 md-down:hidden">Resources</span>
      </div>
      <div className="header__section">
        <span className="header__nav-item has-dropdown mr-10 md:mr-14 sm-down:hidden">
          Log in
          <div className="header__dropdown-wrapper  pin-r ">
            <nav className="header__dropdown-nav">
              <ul className="header__dropdown-list">
                <li className="header__dropdown-item">
                  <a
                    href="https://cardpointe.cardconnect.com"
                    rel="noopener"
                    className="header__dropdown-link"
                  >
                    CardPointe
                  </a>
                </li>{' '}
                <li className="header__dropdown-item">
                  <a
                    href="https://copilot.cardconnect.com"
                    rel="noopener"
                    className="header__dropdown-link"
                  >
                    CoPilot
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </span>{' '}
        <a href="/signup" className="header__nav-signup">
          Sign up
        </a>{' '}
        <button className="header__nav-toggle" type="button">
          <svg
            width="22"
            height="18"
            viewBox="0 0 22 18"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.1 17.0911c-.6072 0-1.1-.4733-1.1-1.0588 0-.5845.4928-1.0588 1.1-1.0588h12.8051c.6072 0 1.1.4743 1.1 1.0588 0 .5855-.4928 1.0588-1.1 1.0588H1.1zm0-14.9735c-.6072 0-1.1-.4743-1.1-1.0588C0 .4733.4928 0 1.1 0h18.8551c.6072 0 1.1.4733 1.1 1.0588 0 .5845-.4928 1.0588-1.1 1.0588H1.1zm18.8552 5.3697c.6072 0 1.1.4733 1.1 1.0588 0 .5845-.4928 1.0588-1.1 1.0588H9.9002c-.6073 0-1.1-.4743-1.1-1.0588 0-.5855.4927-1.0588 1.1-1.0588h10.055zM1.1 9.6049c-.6072 0-1.1-.4743-1.1-1.0588 0-.5855.4928-1.0588 1.1-1.0588h5.104c.6072 0 1.1.4733 1.1 1.0588 0 .5845-.4928 1.0588-1.1 1.0588H1.1zm18.8552 5.3686c.6072 0 1.1.4743 1.1 1.0588 0 .5855-.4928 1.0588-1.1 1.0588h-2.354c-.6072 0-1.1-.4733-1.1-1.0588 0-.5845.4928-1.0588 1.1-1.0588h2.354z"
              fill="#646C72"
              fillRule="evenodd"
            ></path>
          </svg>
        </button>
      </div>
    </div>
    <div>
      <div className="header__mobile">
        <div className="header__mobile-container">
          <nav className="header__mobile-nav">
            <button className="header__nav-close" type="button">
              <svg
                width="17"
                height="17"
                viewBox="0 0 17 17"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.6569 9.4853c.3905.3905.3905 1.0237 0 1.4142L1.707 15.8492c-.3905.3906-1.0237.3906-1.4142 0-.3905-.3905-.3905-1.0236 0-1.4142l4.9497-4.9497c.3906-.3905 1.0237-.3905 1.4143 0zM15.8492.2929c.3906.3905.3906 1.0237 0 1.4142L10.8995 6.657c-.3905.3905-1.0237.3905-1.4142 0-.3905-.3906-.3905-1.0237 0-1.4143L14.435.293c.3906-.3905 1.0237-.3905 1.4142 0zm-14.142 0l14.142 14.1421c.3906.3906.3906 1.0237 0 1.4142-.3905.3906-1.0236.3906-1.4142 0L.293 1.7072c-.3905-.3906-.3905-1.0238 0-1.4143.3905-.3905 1.0237-.3905 1.4142 0z"
                  fill="#646C72"
                  fillRule="evenodd"
                ></path>
              </svg>
            </button>
            <a href="/" className="header__mobile-logo">
              <svg
                width="170"
                height="23"
                viewBox="0 0 170 23"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>CardConnect</title>
              </svg>
            </a>
            <div className="header__mobile-section header__mobile-login-section">
              <h3 className="header__mobile-heading">Login</h3>
              <ul className="header__mobile-list">
                <li className="header__mobile-item">
                  <a
                    href="https://cardpointe.cardconnect.com"
                    rel="noopener"
                    className="header__mobile-link"
                  >
                    CardPointe
                  </a>
                </li>
                <li className="header__mobile-item">
                  <a
                    href="https://copilot.cardconnect.com"
                    rel="noopener"
                    className="header__mobile-link"
                  >
                    CoPilot
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  </header>
);

Header.propTypes = {};

export default Header;
