import styled from "styled-components";

export const FooterWrapper = styled.div`
  position: relative;
  width: 100%;
  .container {
    padding: 20px;
    display: flex;
    flex-direction: column;
    font-size: 14px;
    color: rgba(255, 255, 255, 0.6);
    .footerLeft {
      width: 100%;
      .links {
        list-style: none;
        .linkItem {
          display: inline-block;
          a {
            color: rgba(255, 255, 255, 0.6);
            text-decoration: 0;
            padding-right: 20px;
            margin-bottom: 10px;
            display: inline-block;
          }
        }
      }
      .copyright {
        margin-top: 10px;
        font-size: 14px;
      }
    }
    .footerRight {
      width: 100%;
      margin-top: 20px;
      display: flex;
      justify-content: space-between;
      .title {
        margin-bottom: 10px;
        color: rgba(255, 255, 255, 0.6);
        font-size: 14px;
      }
      a {
        text-decoration: none;
      }
      .app {
        margin-left: 20px;
        width: 100%;
        a {
          height: 40px;
          width: 135px;
          display: inline-block;
          margin-right: 5px;
          cursor: pointer;
          background: url(/images/app-sprite.svg) left top no-repeat;
          &.playstore {
            background-position: 0 0;
            margin-bottom: 5px;
            &:hover {
              background-position: 0 -50px;
            }
          }
          &.appstore {
            background-position: -140px 0;
            margin-bottom: 5px;
            &:hover {
              background-position: -140px -50px;
            }
          }
        }
      }
      .social {
        width: 100%;
        min-width: 100px;
        a {
          height: 40px;
          width: 40px;
          display: inline-block;
          margin-right: 5px;
          cursor: pointer;
          background: url(/images/social-sprite.svg) left top no-repeat;
          &.fb {
            background-position: 0 0;
            margin-bottom: 5px;
            &:hover {
              background-position: 0 -45px;
            }
          }
          &.tw {
            background-position: -45px 0;
            margin-bottom: 5px;
            &:hover {
              background-position: -45px -45px;
            }
          }
        }
      }
    }
    @media (min-width: 768px) {
      flex-direction: row;
      .footerLeft {
        max-width: calc(700% / 12);
      }
      .footerRight {
        max-width: calc(500% / 12);
        margin-left: 40px;
        justify-content: flex-end;
        .app {
          margin-left: 60px;
          width: initial;
        }
        .social {
          width: initial;
        }
      }
    }
  }
`;
