import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const SideBar = styled.div`
  margin: 0;
  padding: 0;
  width: 200px;
  height: 100%;
  background-color: #14151d;
  position: fixed;
  overflow: auto;

  img {
    height: 11rem;
    width: 95%;
    border-radius: 16px;
    margin: auto;
    opacity: 0.5;
    &:hover {
      opacity: 1;
    }

    @media screen and (max-width: 700px) {
      width: 100%;
      height: 15rem;
    }
  }

  @media screen and (max-width: 700px) {
    width: 100%;
    height: auto;
    position: relative;
  }
`;

export const A = styled(NavLink)`
  margin-top: 20px;
  display: block;
  color: #dddee2;
  padding: 16px;
  text-decoration: none;
  text-align: center;

  &:hover {
    color: #a6a8b3;
  }
  @media screen and (max-width: 400px) {
    text-align: center;
    float: none;
  }
  @media screen and (max-width: 700px) {
    float: left;
  }
`;
