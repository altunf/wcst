import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const SideBar = styled.div`
margin: 0;
padding: 0;
width: 250px;
background-color: #ffffff;
position: fixed;
height: 100%;
overflow: auto;
box-shadow: 0 5px 10px -3px rgba(0, 0, 0, 0.50);
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

`;
