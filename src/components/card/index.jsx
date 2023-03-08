import React from "react";
import * as S from "./styles";
import { responseCards } from "../../services/response-cards";
import { OneFigureCard, TwoFigureCard, ThreeFigureCard, FourFigureCard } from "../figure-position";



export const Card = () => {
  const numberOfFigures = responseCards[9].figureCount;
  return (
    <S.Card className="relative">
      {numberOfFigures == 1 && <OneFigureCard />}
      {numberOfFigures == 2 && <TwoFigureCard />}
      {numberOfFigures == 3 && <ThreeFigureCard />}
      {numberOfFigures == 4 && <FourFigureCard />}
    </S.Card>
  );
};


