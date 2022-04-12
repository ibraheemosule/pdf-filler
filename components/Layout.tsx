import { LayoutStyle } from "../styles/LayoutStyle.styled";
import { ILayout } from "../ts-types/componentTypes";

const Layout: React.FC<ILayout> = ({ children }) => {
  return <LayoutStyle>{children}</LayoutStyle>;
};

export default Layout;
