import styled from "styled-components";
import { INavbarStyle } from "../ts-types/styleTypes";

export const NavbarStyle = styled.nav<INavbarStyle>`
  position: relative;
  .logo__wrapper {
    display: flex;
    justify-content: space-between;
    background: #033843;
    padding: 1rem;
    z-index: 1;

    button {
      position: relative;
      background: transparent;
      padding: 0.2rem;
      z-index: 1;
      border: 1px inset transparent;
      display: flex;
      justify-content: center;
      align-items: center;
      outline: none;
      cursor: pointer;
      line-height: 100%;
      background-color: #c15a39;
      border-radius: 50%;
    }
  }
  ul {
    list-style-type: none;
    position: absolute;
    width: 100%;
    top: 100%;
    animation: slide-out 0s 1 forwards;
    background: #033843;
    padding: 1rem;

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
`;
