import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const SideBar = styled.div`
  width: 250px;
  height: 100%;
  overflow: auto;
  position: fixed;

  box-shadow: var(--box-shadow);
  border-radius: var(--border-radius);
  background-color: var(--sidebar-color);

  @media screen and (max-width: 700px) {
    width: 100%;
    height: auto;
    position: relative;
  }
`;

export const Logo = styled(NavLink)`
  img {
    opacity: 0.5;
    height: 160px;
    margin: auto;

    &:hover {
      opacity: 1;
      transition: var(--transition);
    }
  }
`;

export const Menu = styled(NavLink)`
  display: block;
  text-align: center;
  text-decoration: none;
  margin-top: 20px;
  padding: 16px;
  color: var(--text-color);

  &:hover {
    color: var(--title-color);
  }

  @media screen and (max-width: 700px) {
    float: left;
  }
`;
export const IconDiv = styled.div`
  display: block;
  margin-left: 2rem;
  text-decoration: none;
  margin-top: 600px;
  padding: 16px;
  color: var(--text-color);

  &:hover {
    color: var(--title-color);
  }

  @media screen and (max-width: 700px) {
    float: right;
    margin-top: 22px;
  }
`;

export const Icon = styled(NavLink)`
  text-align: center;
  text-decoration: none;
  margin-left: 2rem;
  font-size: var(--font-xl);

  color: var(--text-color);

  &:hover {
    color: var(--title-color);
  }

  @media screen and (max-width: 700px) {
    font-size: var(--font-m);
    margin-left: 1rem;
  }
`;
