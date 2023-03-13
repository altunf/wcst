import React from "react";
import * as S from "./styles";

function WcstTable({ result }) {
  return (
    <div style={{ marginLeft: "500px" }}>
      <S.Category>Categories : R - Ş - M - R - Ş - M</S.Category>
      <S.Table>
        {result.map((item, index) => (
          <S.Line key={index}>
            <S.Box className={item.color && `text-green-500`}> R </S.Box>
            <S.Box className={item.figure && `text-green-500`}> Ş </S.Box>
            <S.Box className={item.count && `text-green-500`}> M </S.Box>
            <S.Box className={item.other && `text-green-500`}> D </S.Box>
          </S.Line>
        ))}
      </S.Table>
    </div>
  );
}

export default WcstTable;
