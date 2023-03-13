import * as S from "./styles";
import { Figure } from "../figure";

export const FigurePosition = ({ count, color, figure }) => {
  const count1 = count === 1;
  const count2 = count === 2;
  const count3 = count === 3;
  const count4 = count === 4;

  const count2_4 = count2 || count4;
  const count3_4 = count3 || count4;
  const count2_3_4 = count2 || count3_4;

  const figureComp = <Figure figure={figure} color={color} />;
  const f = figureComp;

  return (
    <>
      {count1 && <S.Center>{f}</S.Center>}
      {count4 && <S.BottomLeft>{f}</S.BottomLeft>}
      {count3 && <S.BottomCenter>{f}</S.BottomCenter>}
      {count2_4 && <S.BottomRight>{f}</S.BottomRight>}
      {count3_4 && <S.TopRight>{f}</S.TopRight>}
      {count2_3_4 && <S.TopLeft>{f}</S.TopLeft>}
    </>
  );
};
