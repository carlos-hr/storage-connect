import { useState } from "react";
import Button from "../common/Button";
import {
  navLink1,
  navLink2,
  navLink3,
  navLink4,
  storeName,
  textContactUs,
} from "./locales";
import {
  BaseLink,
  LogoContainer,
  NavbarContainer,
  NavbarInnerContainer,
  NavbarLink,
  NavbarLinkContainer,
  NavContainer,
  MenuButton,
} from "./styled";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

interface HeaderProps {
  transparent?: boolean;
}

const Header = ({ transparent = false }: HeaderProps) => {
  const [extendNavbar, setExtendNavbar] = useState(false);

  return (
    <NavbarContainer
      extendNavbar={extendNavbar}
      transparent={extendNavbar ? false : transparent}
    >
      <NavbarInnerContainer>
        <LogoContainer>
          <img src="/logo.svg" alt="logo" />
          <p>{storeName}</p>
        </LogoContainer>
        <NavContainer>
          <NavbarLinkContainer>
            <NavbarLink to="/">{navLink1}</NavbarLink>
            <NavbarLink to="/products">{navLink2}</NavbarLink>
            <NavbarLink to="/contact">{navLink3}</NavbarLink>
            <NavbarLink to="/about">{navLink4}</NavbarLink>
            <Button
              text={textContactUs}
              width="6.875rem"
              height="2.25rem"
              background="secondary"
            />
            <MenuButton
              onClick={() => {
                setExtendNavbar((curr) => !curr);
              }}
            >
              {extendNavbar ? (
                <AiOutlineClose size={32} />
              ) : (
                <AiOutlineMenu size={32} />
              )}
            </MenuButton>
          </NavbarLinkContainer>
        </NavContainer>
      </NavbarInnerContainer>
      {extendNavbar && (
        <NavContainer>
          <BaseLink to="/">{navLink1}</BaseLink>
          <BaseLink to="/aaa">{navLink2}</BaseLink>
          <BaseLink to="/bbb">{navLink3}</BaseLink>
          <BaseLink to="/ccc">{navLink4}</BaseLink>
        </NavContainer>
      )}
    </NavbarContainer>
  );
};

export default Header;
