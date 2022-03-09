import React from 'react';
import logoImg1 from '../images/cta-logo-one.svg';
import logoImg2 from '../images/cta-logo-two.png';
import './Login.scss';

const Login = (props) => {
  return (
    <div className="login__container">
      <div className="content">
        <div className="logo__images">
          <img className="logo__img1" src={logoImg1} alt="" />
          <button className=" signup">GET ALL THERE</button>
          <p className="description">
            Get Premier Access to Raya and the Last Dragon for an additional fee
            with a Disney+ subscription. As of 03/26/21, the price of Disney+
            and The Disney Bundle will increase by $1.
          </p>
          <img className="logo__img2" src={logoImg2} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Login;
// <section className="container">
//   <div className="content">
//     <div className="logo__content">
//       <img className="logo__img1" alt="" />
//     </div>
//   </div>
// </section>;
