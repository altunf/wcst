import React, { useState, useEffect } from "react";
import { Card } from "../../components/card";
import { targetCards } from "../../services/target-cards";
import { responseCards } from "../../services/response-cards";
import * as S from "./styles";
import WcstTable from "../../components/table";

function WcstWindow() {
  const [open, setOpen] = useState(false);
  const [warn, setWarn] = useState(false);
  const [result, setResult] = useState([]);
  const [counter, setCounter] = useState(0);
  const [cardIndex, setCardIndex] = useState(0);

  const { resCount, resColor, resFigure } = responseCards[cardIndex];

  const switchCondition = (target) => {
    const colorMatch = resColor === target.targColor;
    const figureMatch = resFigure === target.targFigure;
    const countMatch = resCount === target.targCount;

    const nextCount = counter + 1;
    let match;

    // 1. tour

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

    // 2. tour

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

    // finish

    (counter === 60 || result.length === 129) && alert("TEST IS FINISHED");

    setWarn(match);
    console.log("nextCount :::: ", nextCount, "counter :::: ", counter);
  };

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
    console.log("RESULT ::::", result, "---", "LENGTH ::::", result.length);
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
          <div>
            <Card count={resCount} color={resColor} figure={resFigure} />
            <S.Warning>{open && (warn ? "DOĞRU ✅" : "YANLIŞ! ❌")}</S.Warning>
          </div>
        </S.ResponseCards>
      </S.WcstWindow>
      <>
        <WcstTable
          result={result}
          count={result.count}
          color={result.color}
          figure={result.figure}
          other={result.other}
        />
      </>
    </>
  );
}

export default WcstWindow;
