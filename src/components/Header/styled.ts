import styled from "styled-components";
import { NavLink } from "react-router-dom";

interface NavbarContainerProps {
  extendNavbar: boolean;
}

export const NavbarContainer = styled.nav<NavbarContainerProps>`
  height: ${(props) => (props.extendNavbar ? "100vh" : "6rem")};
  background: ${(props) => props.theme.primary};
  display: flex;
  flex-direction: column;
  transition: all 0.3s;

  @media (min-width: 768px) {
    height: 6rem;
  }
`;

export const NavbarInnerContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  align-items: center;
  margin: auto;
  background: ${(props) => props.theme.primary};
  min-height: 6rem;
  height: 6rem;

  @media (max-width: 768px) {
    margin: 0;

    a {
      display: none;
    }
  }

  @media (min-width: 768px) {
    padding: 0 1rem;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-family: "Inter";
  font-weight: 600;
  font-size: 1rem;
  color: ${(props) => props.theme.white};
  margin-right: 1rem;
`;

export const NavContainer = styled.nav`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    gap: 0.5rem;
    flex-direction: column;
  }

  @media (min-width: 768px) {
    gap: 1.5rem;
  }

  @media (min-width: 1024px) {
    gap: 2.5rem;
  }
`;

export const NavbarLinkContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2.5rem;
  overflow: hidden;

  @media (max-width: 768px) {
    gap: 0.5rem;
  }
`;

export const BaseLink = styled(NavLink)`
  color: ${(props) => props.theme.white};
  text-decoration: none;
  font-family: "Poppins";
  font-weight: 400;
  font-size: 1rem;

  &.active {
    color: ${(props) => props.theme.secondary};
  }
`;

export const NavbarLink = styled(BaseLink)`
  @media (max-width: 768px) {
    display: none;
  }
`;

export const MenuButton = styled.button`
  background: none;
  border: none;
  color: ${(props) => props.theme.white};

  @media (min-width: 768px) {
    display: none;
  }
`;
