import React from "react";
import * as S from "./styles";
import { responseCards } from "../../services/response-cards";
import { OneFigureCard, TwoFigureCard, ThreeFigureCard, FourFigureCard } from "../figure-position";



export const Card = () => {
  const numberOfFigures = responseCards[0].figureCount;
  return (
    <S.Card className="relative">
      {numberOfFigures == 1 && <OneFigureCard figure={"circle"}/>}
      {numberOfFigures == 2 && <TwoFigureCard figure={"cross"} />}
      {numberOfFigures == 3 && <ThreeFigureCard figure={"cross"} />}
      {numberOfFigures == 4 && <FourFigureCard figure={"cross"} />}
    </S.Card>
  );
};


