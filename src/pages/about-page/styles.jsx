import styled from "styled-components";

export const AboutPage = styled.div`
  height: 100%;
  max-width: 1000px;
  margin: auto;
`;

export const Div = styled.div`
  display: flex;
  gap: 1rem;

  @media screen and (max-width: 700px) {
    flex-wrap: wrap-reverse;
  }

  img {
    margin: auto;
    height: 400px;
    opacity: 0.7;
    border-radius: var(--border-radius);

    &:hover {
      opacity: 1;
      transition: var(--transition);
    }
  }
`;
