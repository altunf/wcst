import React from "react";
import Category from "../Category";
import * as S from "./styles";

function WcstTable({ result, counter }) {
  const green = `text-green-500`;

  return (
    <div style={{ marginLeft: "500px" }}>
      <Category counter={counter} />
      <S.Table>
        {result.map((item, index) => (
          <S.Line key={index}>
            <S.Box className={item.color && green}> R </S.Box>
            <S.Box className={item.figure && green}> Ş </S.Box>
            <S.Box className={item.count && green}> M </S.Box>
            <S.Box className={item.other && green}> D </S.Box>
          </S.Line>
        ))}
      </S.Table>
    </div>
  );
}

export default WcstTable;
