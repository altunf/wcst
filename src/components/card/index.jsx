import React from "react";
import * as S from "./styles";
import { responseCards } from "../../services/response-cards";

const topLeftFigureStyle = { position: "absolute", top: "13px", left: "13px" };
const topRightFigureStyle = {
  position: "absolute",
  top: "13px",
  right: "13px",
};

const centerFigureStyle = {
  position: "absolute",
  left: "2.2cm",
  bottom: "2.3cm",
  margin: "auto",
};
const bottomCenterFigureStyle = {
  position: "absolute",
  bottom: "13px",
  right: "50%",
};
const bottomLeftFigureStyle = {
  position: "absolute",
  bottom: "13px",
  left: "13px",
};
const bottomRightFigureStyle = {
  position: "absolute",
  bottom: "13px",
  right: "13px",
};

export const Card = () => {
  const numberOfFigures = responseCards[15].figureCount;
  return (
    <S.Card className="relative">
      {numberOfFigures == 1 && <OneFigureCard />}
      {numberOfFigures == 2 && <TwoFigureCard />}
      {numberOfFigures == 3 && <ThreeFigureCard />}
      {numberOfFigures == 4 && <FourFigureCard />}
    </S.Card>
  );
};

export const OneFigureCard = ({ children }) => {
  return (
    <>
      <div style={centerFigureStyle}>
        <div
          style={{
            width: "100px",
            height: "100px",
            background: "white",
            borderRadius: "1%",
          }}
        ></div>
      </div>
    </>
  );
};

export const TwoFigureCard = () => {
  return (
    <>
      <div style={topLeftFigureStyle}>
        <div
          style={{
            width: "100px",
            height: "100px",
            background: "white",
            borderRadius: "50%",
          }}
        ></div>
      </div>
      <div style={bottomRightFigureStyle}>
        <div
          style={{
            width: "100px",
            height: "100px",
            background: "white",
            borderRadius: "50%",
          }}
        ></div>
      </div>
    </>
  );
};

export const ThreeFigureCard = () => {
  return (
    <>
      <div style={topLeftFigureStyle}>1</div>
      <div style={topRightFigureStyle}>1</div>
      <div style={bottomCenterFigureStyle}>1</div>
    </>
  );
};

export const FourFigureCard = () => {
  return (
    <>
      <div style={topLeftFigureStyle}>1</div>
      <div style={topRightFigureStyle}>1</div>
      <div style={bottomLeftFigureStyle}>1</div>
      <div style={bottomRightFigureStyle}>1</div>
    </>
  );
};
