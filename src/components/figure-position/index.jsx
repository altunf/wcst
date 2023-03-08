import * as S from "./styles"

export const OneFigureCard = ({ children }) => {
    return (
      <>
        <S.CenterPosition >
          <div
            style={{
              width: "100px",
              height: "100px",
              background: "white",
              borderRadius: "1%",
            }}
          ></div>
        </S.CenterPosition>
      </>
    );
  };
  
  export const TwoFigureCard = () => {
    return (
      <>
        <S.TopLeftPosition >
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
  
  export const ThreeFigureCard = () => {
    return (
      <>
        <S.TopLeftPosition >1</S.TopLeftPosition>
        <S.TopRightPosition>1</S.TopRightPosition>
        <S.BottomCenterPosition>1</S.BottomCenterPosition>
      </>
    );
  };
  
  export const FourFigureCard = () => {
    return (
      <>
        <S.TopLeftPosition>1</S.TopLeftPosition>
        <S.TopRightPosition>1</S.TopRightPosition>
        <S.BottomLeftPosition>1</S.BottomLeftPosition>
        <S.BottomRightPosition>1</S.BottomRightPosition>
      </>
    );
  };