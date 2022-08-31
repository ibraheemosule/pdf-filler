import styled from 'styled-components';
import { IConvertFileStyle } from '../ts-types/styleTypes';

export const ConvertFileStyle = styled.section<IConvertFileStyle>`
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
    height: auto;
    width: 80%;
    margin: auto;
    border-radius: 10px;

    .fileUpload {
      background: #00bcbe;
      border-radius: 10px;
      border: 1px dashed #c15a39;
      color: #fff;
      font-size: 1em;
      overflow: hidden;
      padding: 2rem;
      position: relative;
      text-align: center;
      width: 100%;
      height: 100%;
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: all 0.1s ease-out;

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

    input[type='file'] {
      position: fixed;
      right: 100%;
      bottom: 100%;
    }

    .file-settings {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      over-flow: hidden;
      margin: 30px 0 0;
      color: white;

      .btn_wrapper {
        display: inline-flex;
        order: 2;

        .dropdown {
          dispay: flex;
          position: relative;

          ul {
            position: absolute;
            top: 110%;
            left: 0%;
            width: 100px;
            list-style-type: none;
            background: blue;
            border-radius: 5px;
            overflow: hidden;
            z-index: -10;
            transform: ${({ showDropdown }) =>
              showDropdown
                ? 'translate(0px, 0%) scale(1)'
                : 'translate(-30px, -100%) scale(0)'};
            transition: all 0.2s ease-out;
            visibility: ${({ showDropdown }) =>
              showDropdown ? 'visible' : 'hidden'};
            li {
              border-bottom: 1px solid white;

              &:hover {
                background: red;
              }

              &:last-child {
                border-bottom: 0;
              }

              button {
                display: block;
                padding: 0.3rem 0.5rem;
                width: 100%;
                outline: none;
                border: none;
                color: inherit;
                background: transparent;
                cursor: pointer;
              }
            }
          }
        }
      }

      .file-name {
        color: white;
        align-self: center;
        font-size: 1.2rem;
        display: inline-block;
        margin-left: 20px;
      }
    }
  }

  @media (min-width: 768px) {
    width: 70%;

    .file-to-convert {
      .file-settings {
        .btn-wrapper {
          order: 1;
        }

        .file-name {
          order: 2;
        }
      }
    }
  }

  @media (min-width: 992px) {
    width: 60%;
    max-width: 1140px;
  }
`;
