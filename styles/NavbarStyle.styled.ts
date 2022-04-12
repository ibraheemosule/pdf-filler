import styled from "styled-components";
import { INavbarStyle } from "../ts-types/styleTypes";

export const NavbarStyle = styled.nav<INavbarStyle>`
padding: 1rem;
background: yellow;

.logo__wrapper {
  display: flex;
  justify-content: space-between;

  button {
    background: transparent;
    border: none;
    outline: none;
    cursor: pointer;
    padding: 0.2rem;
    line-height: 100%;
    background-color: gray;
    border-radius: 50%;

    img {
      width: 30px;
      height: auto;
    }
  }
}
ul {
  list-style-type: none;
  background: yellow;

  li {
    transform: translate(-100%, -100%);
    @include transition;
  }
}
}

@keyframes slide-in {
from {
  transform: translate(-100%, -100%);
}

to {
  transform: translate(0%, 0%);
}`;
