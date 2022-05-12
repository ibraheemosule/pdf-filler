import styled from "styled-components";
import { IStyle } from "../ts-types/styleTypes";

export const ContainerStyle = styled.div<IStyle>`
  width: 100%;
  padding: 0 15px;
  margin: 0 auto;

  @media (min-width: 768px) {
    max-width: 720px;
  }

  @media (min-width: 992px) {
    max-width: 960px;
  }

  @media (min-width: 1200px) {
    max-width: 1140px;
  }

  @media (min-width: 1400px) {
    max-width: 1340px;
  }
`;
