import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Div = styled.div`
  height: 100%;
  max-width: 1000px;
  margin: auto;
`;

export const RunBox = styled.div`
  border-radius: 16px;
  display: flex;
  height: 14rem;
  max-width: 400px;
  margin: auto;
  align-items: center;

  img {
    height: 4rem;

    &:hover {
      height: 6rem;
    }
  }

  button {
    cursor: pointer;
    border: none;
    border-radius: 15px;
  }
`;

export const RunLink = styled(NavLink)`
  text-decoration: none;
  margin: auto;
`;
