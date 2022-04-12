import hamburger from "../public/images/menu-outline.svg";
import { NavbarStyle } from "../styles/NavbarStyle.styled";

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <section>
      <NavbarStyle>
        <div className="logo__wrapper">
          <button>
            <img src={hamburger} alt="hamburger menu" />
          </button>
          <button>
            <img src={hamburger} alt="hamburger menu" />
          </button>
        </div>
        <ul className={s.container}>
          <li>pdf to docx</li>
          <li>docx to pdf</li>
          <li>pdf filler</li>
          <li>create pdf</li>
        </ul>
      </NavbarStyle>
    </section>
  );
};

export default Navbar;
