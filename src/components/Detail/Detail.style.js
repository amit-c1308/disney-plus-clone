import styled from "styled-components";

export const DetailContainer = styled.div`
  position: relative;
  min-height: calc(100vh - 70px);
  overflow-x: hidden;
  display: block;
  padding: 0 40px;
  .backgroundContainer {
    position: fixed;
    top: 70px;
    left: 0;
    right: 0;
    width: 100%;
    opacity: 0.8;
    z-index: -1;
    img {
      width: 100vw;
      height: 100vh;
      object-fit: cover;
      @media (max-width: 768px) {
        width: initial;
      }
    }
  }
  .imageTitle {
    display: flex;
    align-item: flex-end;
    justify-content: flex-start;
    margin: 20px auto 0;
    min-height: 30vh;
    min-height: 170px;
    width: 100%;
    img {
      max-width: 600px;
      min-width: 200px;
      width: 35vw;
      // object-fit: contain;
    }
  }
  .contentData {
    max-width: 874px;
    .actions {
      display: flex;
      align-items: center;
      flex-flow: row nowrap;
      margin: 25px 0;
      min-height: 55px;
      .actionBtn {
        font-size: 16px;
        margin: 0 20px 0 0;
        padding: 0 25px;
        height: 56px;
        border-radius: 4px;
        display: flex;
        align-items: center;
        cursor: pointer;
        justify-content: center;
        letter-spacing: 1.8px;
        border: 1px solid rgb(249, 249, 249);
        font-weight: bold;
        &.secondary {
          border-radius: 50%;
          width: 45px;
          padding: 0;
        }
        img {
          width: 32px;
        }
        &:hover {
          background: rgb(198, 198, 198);
          transform: scale(1.1);
          transition: all 0.2s ease-in-out;
        }
        &.darkBtn,
        &.secondary {
          min-width: 56px;
          background: rgba(0, 0, 0, 0.4);
          color: #fff;
          border: 1px solid rgb(249, 249, 249);
          &:hover {
            background: rgba(100, 100, 100, 0.5);
          }
        }
        @media (max-width: 768px) {
          height: 45px;
          padding: 0 15px;
          font-size: 12px;
          margin: 0 10px 0 0;
          img {
            width: 25px;
          }
          &.darkBtn,
          &.secondary {
            min-width: 45px;
          }
          &.groupWatch img {
            width: 32px;
          }
        }
      }
    }

    .subTitle {
      color: rgb(249, 249, 249);
      font-size: 18px;
      line-height: 24px;
      @media (max-width: 768px) {
        font-size: 14px;
      }
    }
    .description {
      font-size: 24px;
      line-height: 32px;
      padding: 15px 0;
      @media (max-width: 768px) {
        font-size: 18px;
      }
    }
  }
`;
