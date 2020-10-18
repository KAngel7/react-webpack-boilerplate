import React from 'react';

// eslint-disable-next-line react/prop-types
const ConfirmEmail = ({ email }) => {
  return (
    <section className="sign-up-form">
      <div className="sign-up-form__content">
        <h4 className="sign-up-form__header">Xác nhận email của bạn</h4>
        <div className="thank-you">
          <div className="thank-you__text">
            <span>
              Chúng tôi đã gửi email xác nhận tới
              <strong> {email}</strong>. Xin hãy kiểm tra hộp thư đến và kích
              hoạt tài khoản của bạn
            </span>
          </div>
          {/* <div className="thank-you__note">
            Email didn’t arrive?
            <a href="" title="Get help">
              Get help
            </a>
          </div> */}
        </div>
        <div className="sign-up-form__terms">
          <span>
            Khi bạn tạo tài khoản, bạn đã biết đến và đồng ý với các điều khoản
            của chúng tôi
            <a
              href="https://quoine-prod.s3.amazonaws.com/uploads/policy_document/term_document/249/Liquid_Terms_of_Use__Quoine_Pte._Ltd.___2020.07.31_.pdf"
              target="__blank"
            >
              {' '}
              User Agreement
            </a>
            ,
            <a
              href="https://quoine-prod.s3.amazonaws.com/uploads/policy_document/term_document/116/Liquid_Privacy_Policy_and_Cookie_Policy__Global__v2.00__Final_2019.03.06_.pdf"
              target="__blank"
            >
              {' '}
              Privacy Policy
            </a>
            ,
            <a
              href="https://quoine-prod.s3.amazonaws.com/uploads/policy_document/term_document/248/Liquid_Trading_Rules__Quoine_Pte._Ltd.___2020.07.31_.pdf"
              target="__blank"
            >
              Trading Agreement
            </a>{' '}
            và
            <a
              href="https://quoine-prod.s3.amazonaws.com/uploads/policy_document/term_document/118/Liquid_Risk_Disclosure_Statement__Global__v2.00__2019.03.06_Final_.pdf"
              target="__blank"
            >
              {' '}
              Risk Disclosure.
            </a>
          </span>
        </div>
      </div>
    </section>
  );
};

export default ConfirmEmail;
