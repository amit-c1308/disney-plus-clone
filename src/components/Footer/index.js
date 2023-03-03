import { FooterWrapper } from "./Footer.style";

const Footer = () => {
  return (
    <FooterWrapper>
      <div className="container">
        <div className="footerLeft">
          <ul className="links">
            <li className="linkItem">
              <a href="https://www.hotstar.com/in/about-us">About Disney+</a>
            </li>
            <li className="linkItem">
              <a href="https://www.hotstar.com/in/terms-of-use">Terms of Use</a>
            </li>
            <li className="linkItem">
              <a href="https://www.hotstar.com/in/privacy-policy">
                Privacy Policy
              </a>
            </li>
            <li className="linkItem">
              <a href="https://help.hotstar.com/in/en/support/home">FAQ</a>
            </li>
            <li className="linkItem">
              <a href="https://help.hotstar.com/in/en/support/tickets/new">
                Feedback
              </a>
            </li>
            <li className="linkItem">
              <a href="https://careers.hotstar.com/">Careers</a>
            </li>
          </ul>
          <p class="copyright">
            © 2023 STAR. All Rights Reserved. HBO, Home Box Office and all
            related channel and programming logos are service marks of, and all
            related programming visuals and elements are the property of, Home
            Box Office, Inc. All rights reserved.
          </p>
        </div>
        <div className="footerRight">
          <div className="social">
            <p className="title">Connect with us</p>
            <a className="fb" href="https://www.facebook.com/DisneyPlusHotstar">
              &nbsp;
            </a>
            <a className="tw" href="https://twitter.com/DisneyPlusHS">
              &nbsp;
            </a>
          </div>
          <div className="app">
            <p className="title">Disney+ Hotstar App</p>
            <a
              class="playstore"
              href="https://play.google.com/store/apps/details?id=in.startv.hotstar"
              target="_blank"
              rel="noopener noreferrer"
            >
              &nbsp;
            </a>
            <a
              class="appstore"
              href="https://itunes.apple.com/in/app/hotstar/id934459219?mt=8"
              target="_blank"
              rel="noopener noreferrer"
            >
              &nbsp;
            </a>
          </div>
        </div>
      </div>
    </FooterWrapper>
  );
};

export default Footer;
