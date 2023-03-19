import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const SideBar = styled.div`
  width: 250px;
  height: 100%;
  position: fixed;
  overflow: auto;
  box-shadow: var(--box-shadow);
  border-radius: var(--border-radius);
  background-color: var(--sidebar-color);

  @media screen and (max-width: 700px) {
    width: 100%;
    height: auto;
    position: relative;
  }
`;

export const A = styled(NavLink)`
  margin-top: 20px;
  display: block;
  color: var(--text-color);
  padding: 16px;
  text-decoration: none;
  text-align: center;

  &:hover {
    color: var(--title-color);
  }
  @media screen and (max-width: 400px) {
    text-align: center;
    float: none;
  }
  @media screen and (max-width: 700px) {
    float: left;
  }
`;

export const Logo = styled(NavLink)`
  img {
    height: 12rem;
    margin: auto;
    opacity: 0.3;

    &:hover {
      opacity: 1;
      transition: var(--transition);
    }
  }
`;
