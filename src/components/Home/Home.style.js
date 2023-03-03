import styled from "styled-components";

export const HomeContainer = styled.main`
  position: relative;
  min-height: calc(100vh - 70px);
  overflow-x: hidden;
  display: block;
  padding: 10px 10px 0;
  &:after {
    background: url("/images/home-background.png") center center / cover
      no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0px;
    z-index: -1;
  }
  @media (min-width: 768px) {
    padding: 20px 40px 0;
  }
`;
