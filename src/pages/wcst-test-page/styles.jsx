import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const WcstWindow = styled.div`
  height: 1000px;
  margin: auto;
  color: white;
  border-radius: var(--border-radius);
  background: var(--test-zone);
`;
export const TargetCards = styled.div`
  display: flex;
  justify-content: center;
`;

export const ResponseCards = styled.div`
  margin-top: 15rem;
`;
export const Warning = styled.div`
  margin: auto;
  margin-left: 7rem;
  font-size: var(--font-xl);
`;

export const NavLinkButton = styled(NavLink)`
  display: flex;
  justify-content: center;
`;

export const Start = styled.div`
  display: flex;
  justify-content: center;
  div {
    max-width: 900px;
    margin: auto;
    font-size: var(--font-l);
    color: var(--text-color);
    margin-top: 5%;
    padding: 5px;
  }
`;

export const Button = styled.button`
  font-size: var(--font-l);
  color: var(--text-color);
  margin-top: 25%;
  padding: 5px;
  border-radius: 10px;
  border: solid 1px;

  &:hover {
    background-color: var(--text-color);
    color: var(--sidebar-color);
  }
`;
