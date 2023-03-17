import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const SideBar = styled.div`
  margin: 0;
  padding: 0;
  width: 200px;
  height: 100%;
  background-color: var(--sidebar-color);
  position: fixed;
  overflow: auto;
  box-shadow: var(--box-shadow);
  border-radius: 10px;

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
    height: 11rem;
    width: 95%;
    border-radius: 16px;
    margin: auto;
    opacity: 0.2;
    &:hover {
      opacity: 1;
      transition: ease-in-out 0.5s;
    }

    @media screen and (max-width: 700px) {
      width: 100%;
      height: 15rem;
    }
  }
`;
