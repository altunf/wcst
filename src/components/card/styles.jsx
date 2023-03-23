import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  position: relative;
  background-color: white;

  margin-top: 3rem;
  margin-left: 3rem;
  height: var(--card-l);
  width: var(--card-l);
  border-radius: var(--border-radius);

  @media screen and (max-width: 1000px) {
    height: var(--card-s);
    width: var(--card-s);
    margin-top: 0.5rem;
    margin-left: 0.5rem;
  }
`;
