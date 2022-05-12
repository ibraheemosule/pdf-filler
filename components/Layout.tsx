import { ContainerStyle } from "../styles/ContainerStyle.styled";
import { LayoutStyle } from "../styles/LayoutStyle.styled";
import { ILayout } from "../ts-types/componentTypes";
import Navbar from "./Navbar";

const Layout: React.FC<ILayout> = ({ children }) => (
  <LayoutStyle>
    <Navbar />
    <ContainerStyle>{children}</ContainerStyle>
  </LayoutStyle>
);

export default Layout;
