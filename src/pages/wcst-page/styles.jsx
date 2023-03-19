import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Div = styled.div`
  height: 100%;
  max-width: 1000px;
  margin: auto;
`;

export const RunBox = styled.div`
  display: flex;
  max-width: 200px;
  margin: auto;
  margin-top: 2rem;
  align-items: center;
`;

export const Image = styled.img`
  max-width: 600px;
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
  color: var(--text-color);
  &:hover {
    color: var(--title-color);
  }
`;
