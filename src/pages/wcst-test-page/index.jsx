import React, { useState, useEffect } from "react";
import { Card } from "../../components/card";
import { targetCards } from "../../services/target-cards";
import { responseCards } from "../../services/response-cards";
import * as S from "./styles";

function WcstWindow() {
  const [listen, setListen] = useState(null);
  const [cardIndex, setCardIndex] = useState(0);
  const [warning, setWarning] = useState(false);

  const { resFigureCount, resFigureColor, resFigure } =
    responseCards[cardIndex];

  const colorMatch = () => {
    const correct = resFigureColor === listen;
    return correct;
  };

  return (
    <S.WcstWindow>
      <S.TargetCards>
        {targetCards.map((targetCard, index) => (
          <div
            key={index}
            onClick={() => {
              setListen(targetCard.targFigureColor);
              colorMatch();
              setWarning(true);
              setTimeout(() => {
                setWarning(false);
                setCardIndex(cardIndex + 1);
              }, 1200);
            }}
          >
            <Card
              count={targetCard.targFigureCount}
              color={targetCard.targFigureColor}
              figure={targetCard.targFigure}
            />
          </div>
        ))}
      </S.TargetCards>

      <S.ResponseCards>
        <div>
          <Card
            count={resFigureCount}
            color={resFigureColor}
            figure={resFigure}
          />
          <div
            style={{
              marginLeft: "120px",
              marginTop: "10px",
              fontSize: "25px",
            }}
          >
            {warning && (colorMatch() ? "DOĞRU ✅" : "YANLIŞ ❌")}
          </div>
        </div>
      </S.ResponseCards>
    </S.WcstWindow>
  );
}

export default WcstWindow;
