import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const WcstWindow = styled.div`
  height: 1000px;
  margin: auto;
  color: white;
  border-radius: 1rem;
  background: var(--test-zone);
`;
export const TargetCards = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
`;

export const ResponseCards = styled.div`
  margin-top: 15rem;
  position: relative; ;
`;
export const Warning = styled.div`
  margin: auto;
  margin-left: 4.5rem;
  font-size: var(--font-xl);
`;

export const NavButton = styled(NavLink)`
  font-size: var(--font-s);
  text-decoration: none;
  display: flex;
  justify-content: center;
  color: white;
  div {
    margin-top: 300px;
  }
`;
