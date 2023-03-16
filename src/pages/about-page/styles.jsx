import styled from "styled-components";

export const AboutPage = styled.div`
  height: 100%;
  max-width: 1000px;
  margin: auto;
`;

export const Div = styled.div`
  img {
    opacity: 0.8;
    border-radius: 1rem;

    margin-left: 600px;
    padding: 1px 16px;
    height: 100%;

    box-shadow: 0px -7px 0px -1px rgba(115, 72, 213, 1);

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
