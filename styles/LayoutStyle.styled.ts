import styled from 'styled-components';
import { IStyle } from '../ts-types/styleTypes';

export const LayoutStyle = styled.main<IStyle>`
  width: 100%;
  height: 100vh;

  .children {
    position: relative;
    height: 100%;
    width: 100%;

    & > .bg {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      background-image: url('./images/bg.jpeg');
      opacity: 0.15;
    }
  }
`;
