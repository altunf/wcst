import React from "react";
import * as S from "./styles";
import { FigurePosition } from "../figure-position";

export const Card = ({ count, color, figure }) => {
  return (
    <>
      <S.Card className="relative">
        <FigurePosition count={count} color={color} figure={figure} />
      </S.Card>
    </>
  );
};
