import styled from "styled-components";

export const AboutPage = styled.div`
  height: 100%;
  max-width: 1000px;
  margin: auto;
`;

export const Div = styled.div`
  display: flex;
  flex-wrap: wrap;

  @media screen and (max-width: 400px) {
    height: auto;
    display: flex;
    flex-direction: column;
  }
`;

export const Image = styled.div`
  img {
    opacity: 0.5;
    border-radius: var(--border-radius);
    position: relative;

    &:hover {
      opacity: 1;
      transition: var(--transition);
    }
  }
`;

export const Text = styled.div`
  overflow: auto;
  @media screen and (max-width: 700px) {
    height: auto;
  }
`;
