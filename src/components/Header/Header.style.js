import styled from "styled-components";

export const HeaderWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 40px;
  height: 70px;
  box-shadow: 0 -20px 30px #f9f9f9;
  .logoCta {
    width: 80px;
  }
  .loginBtn {
    appearance: none;
    border: 1px solid #f9f9f9;
    background: transparent;
    color: #f9f9f9;
    padding: 10px 20px;
    border-radius: 4px;
    letter-spacing: 2px;
    transition: all 0.2s ease-in 0s;
    &:hover {
      color: #000;
      background-color: #f9f9f9;
    }
  }
`;
export const NavMenu = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  height: 100%;
  justify-content: flex-end;
  margin: 0px;
  padding: 0px;
  position: relative;
  margin-right: auto;
  margin-left: 25px;
  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    text-decoration: none;
    img {
      height: 20px;
      min-width: 20px;
      width: 20px;
      z-index: auto;
    }
    span {
      color: rgb(249, 249, 249);
      font-size: 13px;
      letter-spacing: 2px;
      padding: 2px 0px;
      white-space: nowrap;
      position: relative;
      &:before {
        content: "";
        width: auto;
        height: 2px;
        background-color: rgb(249, 249, 249);
        border-radius: 0px 0px 4px 4px;
        bottom: -6px;
        left: 0px;
        opacity: 0;
        position: absolute;
        right: 0px;
        transform-origin: left center;
        transform: scaleX(0);
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        visibility: hidden;
      }
    }
    &:hover {
      span:before {
        transform: scaleX(1);
        visibility: visible;
        opacity: 1 !important;
      }
    }
  }
  @media (max-width: 768px) {
    display: none;
  }
`;
export const UserImg = styled.img`
  width: 100%;
  height: auto;
  border-radius: 50%;
`;
export const AccountActionDropdown = styled.div`
  position: absolute;
  top: 50px;
  right: 0;
  background: rgb(19, 19, 19);
  border: 1px solid rgba(151, 151, 151, 0.34);
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 50%) 0px 0px 18px 0px;
  padding: 8px;
  font-size: 12px;
  letter-spacing: 3px;
  width: 100px;
  opacity: 0;
  text-align: center;
`;
export const AccountAction = styled.div`
  position: relative;
  height: 48px;
  weight: 48px;
  cursor: pointer;
  display: flex;
  &:hover {
    ${AccountActionDropdown} {
      opacity: 1;
      transition-duration: 0.5s;
    }
  }
`;
