import styled from "styled-components";

export const Cross = styled.div`
  width: 33px;
  height: 33px;
  background-color: white;
  clip-path: polygon(
    0 33%,
    33% 33%,
    33% 0,
    66% 0,
    66% 33%,
    100% 33%,
    100% 66%,
    66% 66%,
    66% 100%,
    33% 100%,
    33% 66%,
    0 66%
  );
`;

export const Circle = styled.div`
  width: 33px;
  height: 33px;
  background-color: white;
  clip-path: circle(50% at 50% 50%);
`;

export const Star = styled.div`
  width: 33px;
  height: 33px;
  background-color: white;
  clip-path: polygon(
    50% 0%,
    61% 40%,
    100% 40%,
    68% 60%,
    85% 100%,
    49% 75%,
    15% 100%,
    32% 60%,
    0 40%,
    39% 40%
  );
`;

export const Triangle = styled.div`
  width: 33px;
  height: 33px;
  background-color: white;
  clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
`;
