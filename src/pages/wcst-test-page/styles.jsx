import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const WcstWindow = styled.div`
  height: 1000px;
  margin: auto;
  color: white;
  border-radius: var(--border-radius);
  background: var(--test-zone);

  @media screen and (max-width: 700px) {
    max-height: 700px;
    font-size: var(--font-s);
  }
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

  @media screen and (max-width: 1000px) {
    margin-left: 0.5rem;
    font-size: var(--font-s);
  }
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
    font-size: var(--font-m);
    color: var(--text-color);
    margin-top: 1%;
    padding: 5px;

    @media screen and (max-width: 700px) {
      width: auto;
      font-size: var(--font-s);
    }
  }
  img {
    width: 600px;
    margin: auto;

    @media screen and (max-width: 700px) {
      width: 235px;
      font-size: var(--font-s);
    }
  }
`;

export const Button = styled.button`
  font-size: var(--font-l);
  color: var(--text-color);
  margin-top: 5%;
  padding: 10px;
  border-radius: var(--border-radius);
  border: solid 1px;

  @media screen and (max-width: 700px) {
    margin-top: 50px;
    width: auto;
    padding: 3px;
    font-size: var(--font-s);
  }

  &:hover {
    background-color: var(--text-color);
    color: var(--sidebar-color);
  }
`;
