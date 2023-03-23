import styled from "styled-components";

export const Cross = styled.div`
  width: var(--figure-l);
  height: var(--figure-l);
  clip-path: var(--cross);

  @media screen and (max-width: 1000px) {
    height: var(--figure-s);
    width: var(--figure-s);
  }
`;

export const Circle = styled.div`
  width: var(--figure-l);
  height: var(--figure-l);
  clip-path: var(--circle);

  @media screen and (max-width: 1000px) {
    height: var(--figure-s);
    width: var(--figure-s);
  }
`;

export const Star = styled.div`
  width: var(--figure-l);
  height: var(--figure-l);
  clip-path: var(--star);

  @media screen and (max-width: 1000px) {
    height: var(--figure-s);
    width: var(--figure-s);
  }
`;

export const Triangle = styled.div`
  width: var(--figure-l);
  height: var(--figure-l);
  clip-path: var(--triangle);

  @media screen and (max-width: 1000px) {
    height: var(--figure-s);
    width: var(--figure-s);
  }
`;
