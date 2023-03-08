import * as S from "./styles";

import React from "react";

export const Figure = ({ figure }) => {
  return (
    <>
      {figure === "cross" && <S.Cross></S.Cross>}
      {figure === "circle" && <S.Circle></S.Circle>}
      {figure === "star" && <S.Star></S.Star>}
      {figure === "triangle" && <S.Triangle></S.Triangle>}
    </>
  );
};
