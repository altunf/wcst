import * as S from "./styles";
import { Figure } from "../figure";

export const FigurePosition = ({ count, color, figure,  }) => {
  const center = count === 1;
  const bottomLeft = count === 4;
  const bottomCenter = count === 3;
  const topRight = count === 3 || count === 4;
  const bottomRight = count === 2 || count === 4;
  const topLeft = count === 2 || count === 3 || count === 4;

  return (
    <>
      {center && Center({ figure, color })}
      {topLeft && TopLeft({ figure, color })}
      {topRight && TopRight({ figure, color })}
      {bottomLeft && BottomLeft({ figure, color })}
      {bottomRight && BottomRight({ figure, color })}
      {bottomCenter && BottomCenter({ figure, color })}
    </>
  );
};

const TopLeft = ({ figure, color }) => (
  <S.TopLeft>
    <Figure figure={figure} color={color}/>
  </S.TopLeft>
);
const TopRight = ({ figure, color }) => (
  <S.TopRight>
    <Figure figure={figure} color={color}/>
  </S.TopRight>
);
const Center = ({ figure, color }) => (
  <S.Center>
    <Figure figure={figure} color={color}/>
  </S.Center>
);
const BottomLeft = ({ figure, color }) => (
  <S.BottomLeft>
    <Figure figure={figure} color={color}/>
  </S.BottomLeft>
);
const BottomCenter = ({ figure, color }) => (
  <S.BottomCenter>
    <Figure figure={figure} color={color}/>
  </S.BottomCenter>
);
const BottomRight = ({ figure, color }) => (
  <S.BottomRight>
    <Figure figure={figure} color={color}/>
  </S.BottomRight>
);
