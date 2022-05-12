import styled from "styled-components";
import { INavbarStyle } from "../ts-types/styleTypes";

export const NavbarStyle = styled.section<INavbarStyle>`
  background: #033843;

  nav {
    position: relative;
    width: 100%;

    .logo__wrapper {
      display: flex;
      justify-content: space-between;
      background: #033843;
      padding: 1rem;
      z-index: 1;

      button {
        position: relative;
        padding: 0.2rem;
        z-index: 1;
        border: 1px inset transparent;
        display: flex;
        justify-content: center;
        align-items: center;
        outline: none;
        cursor: pointer;
        line-height: 100%;
        background: #c15a39;
        border-radius: 50%;
      }
    }

    ul {
      list-style-type: none;
      position: absolute;
      width: calc(100% + 30px);
      top: 100%;
      animation: slide-out 0s 1 forwards;
      background: #033843;
      padding: 1rem;
      margin: 0 -15px;
      padding-top: 0;
      border-radius: 0 0 50px 0px;

      li {
        position: relative;
        padding: 1rem 0.5rem;
        text-align: center;
        color: #f4f7f5;
        cursor: pointer;
        transition: color 0.2s ease-out;
        transform: translate(-100%, -100%);

        &:hover {
          color: gray;
        }
      }
    }

    @media (min-width: 768px) {
      display: flex;

      .logo__wrapper {
        display: inline-block;

        .menu__button {
          display: none;
        }
      }

      ul {
        position: static;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0;
        margin-left: -3rem;
        animation: none;
        border-radius: 0;

        li {
          padding: 0;
          margin-left: 3rem;
          transform: translate(0, 0);
        }
      }
    }
  }
`;
