import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Div = styled.div`
  height: 100%;
  max-width: 1000px;
  margin: auto;
  margin-bottom: 3rem;

  @media screen and (max-width: 700px) {
    font-size: var(--font-s);
  }
`;

export const RunBox = styled.div`
  display: flex;
  max-width: 200px;
  margin: auto;
  margin-top: 1rem;
  align-items: center;
`;

export const Image = styled.img`
  width: 600px;
  margin: auto;
  opacity: 0.7;
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);

  &:hover {
    opacity: 1;
    transition: var(--transition);
  }
`;

export const RunLink = styled(NavLink)`
  display: flex;
  justify-content: center;
`;

export const Button = styled.button`
  font-size: var(--font-) m;
  color: var(--text-color);
  margin-top: 2%;
  padding: 5px;
  border-radius: var(--border-radius);
  border: solid 1px;

  &:hover {
    background-color: var(--text-color);
    color: var(--sidebar-color);
  }
`;
