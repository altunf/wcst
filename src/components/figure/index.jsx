import * as S from "./styles";
import React from "react";

export const Figure = ({ figure, color }) => {
  const cross = figure === "cross";
  const circle = figure === "circle";
  const star = figure === "star";
  const triangle = figure === "triangle";

  const backgroundStyle = { backgroundColor: `${color}` };
  return (
    <>
      {cross && <S.Cross style={backgroundStyle}></S.Cross>}
      {circle && <S.Circle style={backgroundStyle}></S.Circle>}
      {star && <S.Star style={backgroundStyle}></S.Star>}
      {triangle && <S.Triangle style={backgroundStyle}></S.Triangle>}
    </>
  );
};
