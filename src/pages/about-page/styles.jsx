import styled from "styled-components";

export const AboutPage = styled.div`
  height: 100%;
  max-width: 1000px;
  margin: auto;
`;

export const Div = styled.div`
  img {
    opacity: 0.8;
    border-radius: 2rem;
    margin-left: 600px;
    height: 25rem;

    @media screen and (max-width: 700px) {
      margin-left: 0;
    }

    &:hover {
      opacity: 1;
    }
  }
`;

export const Text = styled.div`
  width: 600px;
  height: 100%;
  position: fixed;
  overflow: auto;
  @media screen and (max-width: 700px) {
    width: 100%;
    height: auto;
    position: relative;
  }
`;
