import React from "react";
import { Card } from "../../components/card";
import { targetCards } from "../../services/target-cards";
import { responseCards } from "../../services/response-cards";
import * as S from "./styles";

function WcstWindow() {
  return (
    <S.WcstWindow>
      <div style={{display: "flex", position:"relative", alignItems:"center" }}>
        {targetCards.map((targetCard) => {
          return (
            <Card
              count={targetCard.figureCount}
              color={targetCard.figureColor}
              figure={targetCard.figure}
            />
          );
        })}
      </div>

      <div style={{ position:"relative", alignItems:"center", marginTop: "20rem" }}>
        {responseCards.filter((responseCard, index)=>index < 1).map((responseCard) => {
          return (
            <Card
              count={responseCard.figureCount}
              color={responseCard.figureColor}
              figure={responseCard.figure}
            />
          );
        })}
      </div>
    </S.WcstWindow>
  );
}

export default WcstWindow;
