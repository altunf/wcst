import React from "react";
import * as S from "./styles";
import { responseCards } from "../../services/response-cards";
import { FigurePosition } from "../figure-position";

export const Card = () => {
  const numberOfFigures = responseCards[2].figureCount;
  const colorOfFigures = responseCards[1].figureColor;
  const figureOfFigures = responseCards[1].figure;
  return (
    <S.Card className="relative">
      <FigurePosition
        count={numberOfFigures}
        color={colorOfFigures}
        figure={figureOfFigures}
      />
    </S.Card>
  );
};
