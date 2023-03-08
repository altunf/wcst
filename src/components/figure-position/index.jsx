import * as S from "./styles";
import {Figure} from "../figure";





export const OneFigureCard = ({figure}) => {
  return (
    <>
      <S.CenterPosition>
        <Figure figure={figure} />
      </S.CenterPosition>
    </>
  );
};

export const TwoFigureCard = ({figure}) => {
  return (
    <>
      <S.TopLeftPosition>
        <div
          style={{
            width: "100px",
            height: "100px",
            background: "white",
            borderRadius: "50%",
          }}
        ></div>
      </S.TopLeftPosition>
      <S.BottomRightPosition>
        <div
          style={{
            width: "100px",
            height: "100px",
            background: "white",
            borderRadius: "50%",
          }}
        ></div>
      </S.BottomRightPosition>
    </>
  );
};

export const ThreeFigureCard = ({figure}) => {
  return (
    <>
      <S.TopLeftPosition>1</S.TopLeftPosition>
      <S.TopRightPosition>1</S.TopRightPosition>
      <S.BottomCenterPosition>1</S.BottomCenterPosition>
    </>
  );
};

export const FourFigureCard = ({figure}) => {
  return (
    <>
      <S.TopLeftPosition>1</S.TopLeftPosition>
      <S.TopRightPosition>1</S.TopRightPosition>
      <S.BottomLeftPosition>1</S.BottomLeftPosition>
      <S.BottomRightPosition>1</S.BottomRightPosition>
    </>
  );
};
