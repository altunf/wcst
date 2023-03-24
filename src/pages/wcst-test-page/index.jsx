import React, { useContext, useState } from "react";
import { Card } from "../../components/card";
import { targetCards } from "../../services/target-cards";
import { responseCards } from "../../services/response-cards";
import * as S from "./styles";
import { WcstContext } from "../../components/context";

function WcstWindow() {
  const { result, setResult, counter, setCounter } = useContext(WcstContext);
  const [cardIndex, setCardIndex] = useState(0);
  const [open, setOpen] = useState(false);
  const [warn, setWarn] = useState(false);
  const [testInfo, setTestInfo] = useState(false);

  const { resCount, resColor, resFigure } = responseCards[cardIndex];

  const openWarn = open && (warn ? "✅ DOĞRU" : "❌ YANLIŞ!");
  const testCompleted = counter === 48 || result.length === 129;

  const targetCardsList = (
    <>
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
    </>
  );

  const responseCardsList = (
    <>
      <Card count={resCount} color={resColor} figure={resFigure} />
      <S.Warning>{openWarn}</S.Warning>
    </>
  );

  const switchCondition = (target) => {
    const colorMatch = resColor === target.targColor;
    const figureMatch = resFigure === target.targFigure;
    const countMatch = resCount === target.targCount;

    const nextCount = counter + 1;
    let match;

    if (counter < 8) {
      match = colorMatch;
      match ? setCounter(nextCount) : setCounter(0);
    }

    if (counter >= 8) {
      match = figureMatch;
      match ? setCounter(nextCount) : setCounter(8);
    }

    if (counter >= 16) {
      match = countMatch;
      match ? setCounter(nextCount) : setCounter(16);
    }

    if (counter >= 24) {
      match = colorMatch;
      match ? setCounter(nextCount) : setCounter(24);
    }

    if (counter >= 32) {
      match = figureMatch;
      match ? setCounter(nextCount) : setCounter(32);
    }

    if (counter >= 40) {
      match = countMatch;
      match ? setCounter(nextCount) : setCounter(40);
    }

    setWarn(match);
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
  };

  const handleStart = () => {
    setCounter(0);
    setTestInfo(true);
    setResult([]);
  };

  return (
    <S.WcstWindow>
      {testInfo ? (
        testCompleted ? (
          <S.NavLinkButton to="/wcst-test-result">
            <S.Button>Sonuçları Göster</S.Button>
          </S.NavLinkButton>
        ) : (
          <>
            <S.TargetCards> {targetCardsList}</S.TargetCards>
            <S.ResponseCards> {responseCardsList}</S.ResponseCards>
          </>
        )
      ) : (
        <>
          <S.Start>
            <div>
              <p>
                Bu testte sizden istenen, ekranın sol altında bulunan tepki
                kartını yukarıda yer alan 4 adet uyarıcı karttan biriyle
                eşlemenizdir.
              </p>
              <p>
                Yaptığınız eşleme doğru ise ekranda "✅ DOĞRU" uyarısını, yanlış
                ise "❌ YANLIŞ!" uyarını göreceksiniz. Eşleşmeniz yanlış ise
                tepki kartının değişmesini bekleyin ve değişen karta göre doğru
                eşlemeyi yapmaya çalışın.
              </p>
              <img src="../../../images/2.png" alt="" />

              <p>Eşleme yapmak için aşağıdaki adımları izleyiniz.</p>
              <ul>
                <li>
                  1. Tepki kartına bakıp eşleme yapacağınız uyarıcı kartı
                  belirleyin.
                </li>
                <li>2. Belirlediğiniz uyarıcı karta fare ile tıklayın.</li>
                <li>
                  3. Fare ile tıkladıktan sonra tepki kartının değişmesini
                  bekleyin.
                </li>
                <li>
                  4. Tepki kartı değiştikten sonra yukarıdaki adımları
                  tekrarlayın.
                </li>
              </ul>
            </div>
          </S.Start>
          <S.Start>
            <S.Button onClick={handleStart}>Başla</S.Button>
          </S.Start>
        </>
      )}
    </S.WcstWindow>
  );
}

export default WcstWindow;
