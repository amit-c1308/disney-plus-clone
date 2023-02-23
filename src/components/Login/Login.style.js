import styled from "styled-components";

export const LoginWrapper = styled.section`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  text-align: center;
  height: calc(100vh - 70px);
`;
export const Content = styled.div`
  margin-bottom: 10vw;
  width: 100%;
  position: relative;
  min-height: calc(100vh - 70px);
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 80px 40px;
  height: calc(100% - 70px);
`;
export const BgImage = styled.div`
  background-image: url("./images/login-background.jpg");
  position: absolute;
  width: 100vw;
  height: 100vh;
  z-index: -1;
`;
export const CTAArea = styled.div`
  max-width: 650px;
  width: 100%;
  display: flex;
  flex-direction: column;
  .ctaLogo {
    width: 100%;
    max-width: 600px;
    min-height: 1px;
    display: block;
    margin: 20px 0;
    display: inline-block;
    vertical-align: bottom;
  }
  .loginCta {
    font-weight: bold;
    background: #0063e5;
    padding: 16px;
    border-radius: 4px;
    font-size: 16px;
    letter-spacing: 1.5px;
    &:hover {
      background: #0483ee;
    }
  }
  .description {
    margin-top: 20px;
    letter-spacing: 1px;
  }
`;
