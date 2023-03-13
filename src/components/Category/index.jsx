import React from "react";
import * as S from "./style";

function Category({ counter }) {
  const green = `text-green-500`;

  return (
    <S.Category>
      <h2>Categories :</h2>
      <h2 className={counter >= 10 ? green : ``}>R</h2>
      <h2 className={counter >= 20 ? green : ``}>Ş</h2>
      <h2 className={counter >= 30 ? green : ``}>M</h2>
      <h2 className={counter >= 40 ? green : ``}>R</h2>
      <h2 className={counter >= 50 ? green : ``}>Ş</h2>
      <h2 className={counter >= 60 ? green : ``}>M</h2>
    </S.Category>
  );
}

export default Category;
