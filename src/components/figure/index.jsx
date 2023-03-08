import * as S from "./styles";
import React from "react";

export const Figure = ({ figure, color }) => {
  return (
    <>
      {figure === "cross" && <S.Cross style={{backgroundColor: `${color}`}}></S.Cross>}
      {figure === "circle" && <S.Circle style={{backgroundColor: `${color}`}}></S.Circle>}
      {figure === "star" && <S.Star style={{backgroundColor: `${color}`}}></S.Star>}
      {figure === "triangle" && <S.Triangle style={{backgroundColor: `${color}`}}></S.Triangle>}
    </>
  );
};
