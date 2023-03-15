import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const SideBar = styled.div`
  margin: 0;
  padding: 0;
  width: 200px;
  background-color: #ffffff;
  position: fixed;
  height: 100%;
  overflow: auto;

  @media screen and (max-width: 700px) {
    width: 100%;
    height: auto;
    position: relative;
  }
`;

export const A = styled(NavLink)`
  margin-top: 20px;
  display: block;
  color: black;
  padding: 16px;
  text-decoration: none;

  &:hover {
    background-color: #555;
    color: white;
  }
  @media screen and (max-width: 400px) {
    text-align: center;
    float: none;
  }
  @media screen and (max-width: 700px) {
    float: left;
  }
`;
