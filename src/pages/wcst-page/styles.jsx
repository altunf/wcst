import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Div = styled.div`
  height: 1200px;
  max-width: 1000px;
  margin: auto;
`;

export const RunBox = styled.div`
  border-radius: 16px;
  display: flex;
  height: 14rem;
  width: auto;
  align-items: center;
  background: #79a0b1;
  img {
    height: 4rem;
    &:hover {
      transform: translateY(-20px);
    }
  }

  button {
    cursor: pointer;
    border: none;
    border-radius: 15px;
    background-color: #171515;
  }
`;

export const RunLink = styled(NavLink)`
  color: white;
  text-decoration: none;
  margin: auto;
`;
