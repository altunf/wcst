import React, { useState, useEffect } from "react";
import { Card } from "../../components/card";
import { targetCards } from "../../services/target-cards";
import { responseCards } from "../../services/response-cards";
import * as S from "./styles";

function WcstWindow() {
  const [open, setOpen] = useState(false);
  const [warn, setWarn] = useState(false);
  const [result, setResult] = useState([]);
  const [counter, setCounter] = useState(0);
  const [cardIndex, setCardIndex] = useState(0);

  const { resCount, resColor, resFigure } = responseCards[cardIndex];

  const matchingFigureProps = (target) => {
    let match;

    if (counter < 10) {
      match = resColor === target.targColor;
      match ? setCounter(counter + 1) : setCounter(0);
    }

    if (counter >= 10) {
      match = resFigure === target.targFigure;
      match ? setCounter(counter + 1) : setCounter(10);
    }

    if (counter >= 20) {
      match = resCount === target.targCount;
      match ? setCounter(counter + 1) : setCounter(20);
    }

    setWarn(match);
  };

  const clickHandle = ({ target }) => {
    setOpen(true);
    setTimeout(() => {
      setOpen(false);
      setCardIndex(cardIndex + 1);
    }, 1200);

    matchingFigureProps(target);
    setResult([...result, { target, cardDetail: responseCards[cardIndex] }]);
  };

  return (
    <S.WcstWindow>
      <S.TargetCards>
        {targetCards.map((target, index) => (
          <div
            key={index}
            onClick={() => {
              clickHandle({ target });
            }}
          >
            <Card
              count={target.targCount}
              color={target.targColor}
              figure={target.targFigure}
            />
          </div>
        ))}
      </S.TargetCards>

      <S.ResponseCards>
        <div>
          <Card count={resCount} color={resColor} figure={resFigure} />
          <S.Warning>{open && (warn ? "DOĞRU ✅" : "YANLIŞ! ❌")}</S.Warning>
        </div>
      </S.ResponseCards>
    </S.WcstWindow>
  );
}

export default WcstWindow;
