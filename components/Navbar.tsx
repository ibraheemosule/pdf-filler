import hamburger from "../public/images/menu-outline.svg";
import closeIcon from "../public/images/close-outline.svg";
import { NavbarStyle } from "../styles/NavbarStyle.styled";
import { Container } from "../styles/Container.styled";
import { useState, useRef, useCallback, useEffect } from "react";
import Image from "next/image";

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  const [toggle, setToggle] = useState<boolean>(true);
  const ul = useRef<HTMLUListElement>(null);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const toggleNav = useCallback(() => {
    setToggle(toggle => !toggle);
    const el = ul.current!;
    let li: HTMLLIElement,
      time = 1;
    if (!el) return;
    if (!toggle) {
      for (li of el.children as HTMLCollectionOf<HTMLLIElement>) {
        li.style.animation = `slide-out  .2s ${0.1 * time}s ease-in 1 forwards`;
        time++;
      }
      el.style.animation = `slide-out .2s ease-in 1 .${time}s forwards`;
    } else {
      el.style.animation = "slide-in .15s ease-in 1 forwards";
      for (li of el.children as HTMLCollectionOf<HTMLLIElement>) {
        li.style.animation = `slide-in 0.2s ${0.08 * time}s ease-in 1 forwards`;
        time++;
      }
    }
  }, [toggle]);

  return (
    <section>
      <NavbarStyle>
        <div className="logo__wrapper">
          <button onClick={toggleNav}>
            <Image
              src={toggle ? hamburger : closeIcon}
              height={30}
              width={30}
              alt="menu"
            />
          </button>
          <button onClick={toggleNav}>
            <Image src={hamburger} height={30} width={30} alt="menu" />
          </button>
        </div>
        <ul className="animate" ref={ul}>
          <li className="nav_item">Pdf to Docx</li>
          <li className="nav_item">Docx to Pdf</li>
          <li className="nav_item">Pdf Filler</li>
          <li className="nav_item">Create Pdf</li>
        </ul>
      </NavbarStyle>
    </section>
  );
};

export default Navbar;
