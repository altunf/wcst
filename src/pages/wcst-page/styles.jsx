import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const RunBox = styled.div`
  display: flex;
  height: 14rem;
  width: 40rem;
  background-color: grey;
  align-items: center;
`;

export const RunLink = styled(NavLink)`
  color: white;
  text-decoration: none;
`;
