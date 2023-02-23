import React from "react";
import { LoginWrapper, Content, BgImage, CTAArea } from "./Login.style";

const LoginPage = () => {
  return (
    <LoginWrapper>
      <Content>
        <CTAArea>
          <img className="ctaLogo" src={"./images/cta-logo-one.svg"} alt="" />
          <a className="loginCta">GET THE DISNEY BUNDLE</a>
          <p className="description">
            Get Premier Access to Raya and the Last Dragon for an additional fee
            with a Disney+ subscription. As of 03/26/2023, the price of Disney+
            and the Disney Bundle will increase by $1.
          </p>
          <img className="ctaLogo" src={"./images/cta-logo-two.png"} alt="" />
        </CTAArea>
        <BgImage className="test" />
      </Content>
    </LoginWrapper>
  );
};

export default LoginPage;
