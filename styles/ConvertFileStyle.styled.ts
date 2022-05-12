import styled from "styled-components";
import { IStyle } from "../ts-types/styleTypes";

export const ConvertFileStyle = styled.section<IStyle>`
  display: flex;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #033843;
  border-radius: 10px;
  width: 80%;
  margin: auto;
  padding: 2rem;

  .file-to-convert {
    position: relative;
    height: 200px;
    width: 200px;
    border-radius: 10px;

    .fileUpload {
      background: #00bcbe;
      border-radius: 10%;
      color: #fff;
      font-size: 1em;
      overflow: hidden;
      padding: 2rem;
      position: relative;
      text-align: center;
      width: 120px;
      height: 120px;
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;

      span {
        margin-top: -20px;
        font-size: 7em;
      }
    }

    .fileUpload:hover,
    .fileUpload:active,
    .fileUpload:focus {
      background: #00a2a4;
      cursor: pointer;
    }
    .fileUpload input.upload {
      position: absolute;
      top: 0;
      right: 0;
      margin: 0;
      padding: 0;
      font-size: 20px;
      cursor: pointer;
      opacity: 0;
      filter: alpha(opacity=0);
      width: 100%;
      height: 100%;
      cursor: pointer;
    }

    input[type="file"] {
      position: fixed;
      right: 100%;
      bottom: 100%;
    }

    button {
      width: 120px;
      padding: 0.8em 0;
      background: #c15a39;
      border-radius: 5px;
      border: 0;
      outline: none;
      margin: 30px auto;
      cursor: pointer;
      font-size: 1rem;
      font-weight: 700;
      color: #f4f7f5;

      &:hover {
      }
    }
  }

  @media (min-width: 768px) {
    width: 70%;
  }

  @media (min-width: 992px) {
    width: 60%;
    max-width: 1140px;
  }
`;
