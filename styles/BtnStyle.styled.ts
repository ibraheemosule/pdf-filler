import styled from 'styled-components';
import { IBtnStyle } from '../ts-types/styleTypes';

export const BtnStyle = styled.button<IBtnStyle>`
  padding: ${({ padding }) => padding ?? '0.8em 2rem'};
  background: #c15a39;
  border-radius: ${({ borderRadius }) => borderRadius ?? '10px'};
  border: 2px inset #c15a39;
  outline: none;
  cursor: pointer;
  font-size: ${({ fontSize }) => fontSize ?? '1rem'};
  font-weight: ${({ fontSize }) => fontSize ?? 700};
  color: #f4f7f5;
  transition: all 0.1s ease-out;

  &:hover {
    background: hsla(15, 54%, 49%, 0.8);
    transform: scale(0.99);
  }
`;
