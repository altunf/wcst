import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Div = styled.div`
  height: 100%;
  max-width: 1000px;
  margin: auto;
`;

export const RunBox = styled.div`
  display: flex;
  height: 16rem;
  max-width: 400px;
  margin: auto;
  align-items: center;

  img {
    height: 16rem;
    opacity: 0.7;
    border-radius: 16px;
  }
`;

export const Button = styled.button`
  display: none;
`;

export const Image = styled.img`
  height: 16rem;
  opacity: 0.7;
  border-radius: 16px;
  opacity: 0.7;
  box-shadow: var(--box-shadow);

  &:hover {
    opacity: 1;
    transition: var(--transition);
  }
`;

export const RunLink = styled(NavLink)`
  text-decoration: none;
  text-align: center;
  margin: auto;
  color: var(--text-color);
  &:hover {
    color: var(--title-color);
  }
`;
