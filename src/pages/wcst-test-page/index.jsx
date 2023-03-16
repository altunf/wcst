import React, { useContext, useState } from "react";
import { Card } from "../../components/card";
import { targetCards } from "../../services/target-cards";
import { responseCards } from "../../services/response-cards";
import * as S from "./styles";
import { NavLink } from "react-router-dom";
import { WcstContext } from "../../components/context/wcstContext";

function WcstWindow() {
  const { result, setResult, counter, setCounter } = useContext(WcstContext);
  const [open, setOpen] = useState(false);
  const [warn, setWarn] = useState(false);
  const [cardIndex, setCardIndex] = useState(0);
  const { resCount, resColor, resFigure } = responseCards[cardIndex];

  const openWarn = open && (warn ? "DOĞRU ✅" : "YANLIŞ! ❌");

  const switchCondition = (target) => {
    const colorMatch = resColor === target.targColor;
    const figureMatch = resFigure === target.targFigure;
    const countMatch = resCount === target.targCount;

    const nextCount = counter + 1;
    let match;

    if (counter < 10) {
      match = colorMatch;
      match ? setCounter(nextCount) : setCounter(0);
    }

    if (counter >= 10) {
      match = figureMatch;
      match ? setCounter(nextCount) : setCounter(10);
    }

    if (counter >= 20) {
      match = countMatch;
      match ? setCounter(nextCount) : setCounter(20);
    }

    if (counter >= 30) {
      match = colorMatch;
      match ? setCounter(nextCount) : setCounter(30);
    }

    if (counter >= 40) {
      match = figureMatch;
      match ? setCounter(nextCount) : setCounter(40);
    }

    if (counter >= 50) {
      match = countMatch;
      match ? setCounter(nextCount) : setCounter(50);
    }

    (counter === 60 || result.length === 129) && alert("TEST IS FINISHED");

    setWarn(match);
  };
  console.log("length:::::", result);

  const clickHandle = ({ target }) => {
    setOpen(true);
    setTimeout(() => {
      setOpen(false);
      setCardIndex(cardIndex + 1);
    }, 1200);

    switchCondition(target);

    const colorMatch = resColor === target.targColor;
    const figureMatch = resFigure === target.targFigure;
    const countMatch = resCount === target.targCount;
    const unMatch = !colorMatch && !figureMatch && !countMatch;

    setResult([
      ...result,
      {
        response: responseCards[cardIndex],
        color: colorMatch,
        figure: figureMatch,
        count: countMatch,
        other: unMatch,
      },
    ]);
  };

  return (
    <>
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
          <Card count={resCount} color={resColor} figure={resFigure} />
          <S.Warning>{openWarn}</S.Warning>
        </S.ResponseCards>
        <S.NavButton to="/wcst-test-result">RESULTS</S.NavButton>
      </S.WcstWindow>
    </>
  );
}

export default WcstWindow;
